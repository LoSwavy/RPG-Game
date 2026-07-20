// ============================================================
// Top-Down Tower Defense
// ============================================================

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const W = canvas.width;
const H = canvas.height;

// Playable boundary (arena) inside the canvas
const ARENA = { x: 200, y: 150, w: 400, h: 300 };

// ---------- Game State ----------
const state = {
  running: true,
  paused: false,
  gameOver: false,
  points: 0,
  time: 0,
};

// ---------- Player ----------
const PLAYER_BASE = {
  speed: 200,        // px per second
  maxHp: 100,
  fireInterval: 0.8, // seconds between shots
  beamSpeed: 600,
  beamDamage: 1,
};

const player = {
  x: W / 2,
  y: H / 2,
  r: 12,
  hp: PLAYER_BASE.maxHp,
  maxHp: PLAYER_BASE.maxHp,
  fireInterval: PLAYER_BASE.fireInterval,
  fireCooldown: 0,
};

// ---------- Upgrades ----------
// cost = ceil(baseCost * growth^level) — levels to infinity
const upgrades = {
  firerate: {
    level: 0,
    baseCost: 5,
    growth: 1.5,
    cost() { return Math.ceil(this.baseCost * Math.pow(this.growth, this.level)); },
    apply() {
      // each level = 10% faster firing (multiplicative)
      player.fireInterval = PLAYER_BASE.fireInterval * Math.pow(0.9, this.level);
    },
  },
  hp: {
    level: 0,
    baseCost: 5,
    growth: 1.5,
    cost() { return Math.ceil(this.baseCost * Math.pow(this.growth, this.level)); },
    apply() {
      // each level = +20 max HP, heals the amount gained
      player.maxHp = PLAYER_BASE.maxHp + this.level * 20;
      player.hp = Math.min(player.hp + 20, player.maxHp);
    },
  },
};

// ---------- Enemies ----------
const ENEMY_TYPES = {
  normal: { color: '#e04040', r: 12, speed: 60,  hp: 1, points: 1, damage: 10 },
  quick:  { color: '#e6d840', r: 9,  speed: 130, hp: 1, points: 3, damage: 10 },
  tanky:  { color: '#e08a30', r: 16, speed: 40,  hp: 5, points: 5, damage: 20 },
};

let enemies = [];
let beams = [];

let spawnTimer = 0;
const SPAWN_BASE_INTERVAL = 1.8; // shrinks over time

function spawnInterval() {
  // slowly ramps difficulty; floors at 0.5s
  return Math.max(0.5, SPAWN_BASE_INTERVAL - state.time * 0.01);
}

function pickEnemyType() {
  const roll = Math.random();
  if (roll < 0.6) return 'normal';
  if (roll < 0.85) return 'quick';
  return 'tanky';
}

function spawnEnemy() {
  const type = pickEnemyType();
  const def = ENEMY_TYPES[type];

  // Spawn just outside a random canvas edge
  const edge = Math.floor(Math.random() * 4);
  const pad = 30;
  let x, y;
  if (edge === 0)      { x = Math.random() * W; y = -pad; }          // top
  else if (edge === 1) { x = W + pad; y = Math.random() * H; }       // right
  else if (edge === 2) { x = Math.random() * W; y = H + pad; }       // bottom
  else                 { x = -pad; y = Math.random() * H; }          // left

  enemies.push({ type, x, y, r: def.r, hp: def.hp, maxHp: def.hp });
}

// ---------- Input ----------
const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
  if (e.key.toLowerCase() === 'b') toggleShop();
});

window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

// ---------- Shop ----------
const shopEl = document.getElementById('shop');
const gameoverEl = document.getElementById('gameover');

function toggleShop() {
  if (state.gameOver) return;
  state.paused = !state.paused;
  shopEl.classList.toggle('hidden', !state.paused);
  updateShopUI();
}

function buyUpgrade(key) {
  const upg = upgrades[key];
  const cost = upg.cost();
  if (state.points < cost) return;
  state.points -= cost;
  upg.level++;
  upg.apply();
  updateShopUI();
  updateHUD();
}

document.getElementById('shop-btn').addEventListener('click', toggleShop);
document.getElementById('close-shop').addEventListener('click', toggleShop);
document.getElementById('buy-firerate').addEventListener('click', () => buyUpgrade('firerate'));
document.getElementById('buy-hp').addEventListener('click', () => buyUpgrade('hp'));
document.getElementById('restart-btn').addEventListener('click', restart);

function updateShopUI() {
  document.getElementById('shop-points').textContent = state.points;

  document.getElementById('firerate-lvl').textContent = upgrades.firerate.level;
  document.getElementById('firerate-cost').textContent = upgrades.firerate.cost();
  document.getElementById('buy-firerate').disabled = state.points < upgrades.firerate.cost();

  document.getElementById('hp-lvl').textContent = upgrades.hp.level;
  document.getElementById('hp-cost').textContent = upgrades.hp.cost();
  document.getElementById('buy-hp').disabled = state.points < upgrades.hp.cost();
}

function updateHUD() {
  document.getElementById('hp-val').textContent = Math.ceil(player.hp);
  document.getElementById('hp-max').textContent = player.maxHp;
  document.getElementById('points-val').textContent = state.points;
}

// ---------- Update ----------
function update(dt) {
  state.time += dt;

  // --- Player movement (WASD / arrows), clamped to arena ---
  let dx = 0, dy = 0;
  if (keys['w'] || keys['arrowup']) dy -= 1;
  if (keys['s'] || keys['arrowdown']) dy += 1;
  if (keys['a'] || keys['arrowleft']) dx -= 1;
  if (keys['d'] || keys['arrowright']) dx += 1;

  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy);
    player.x += (dx / len) * PLAYER_BASE.speed * dt;
    player.y += (dy / len) * PLAYER_BASE.speed * dt;
  }

  player.x = Math.max(ARENA.x + player.r, Math.min(ARENA.x + ARENA.w - player.r, player.x));
  player.y = Math.max(ARENA.y + player.r, Math.min(ARENA.y + ARENA.h - player.r, player.y));

  // --- Auto-fire at nearest enemy ---
  player.fireCooldown -= dt;
  if (player.fireCooldown <= 0 && enemies.length > 0) {
    let nearest = null;
    let nearestDist = Infinity;
    for (const e of enemies) {
      const d = Math.hypot(e.x - player.x, e.y - player.y);
      if (d < nearestDist) { nearestDist = d; nearest = e; }
    }
    if (nearest) {
      const angle = Math.atan2(nearest.y - player.y, nearest.x - player.x);
      beams.push({
        x: player.x,
        y: player.y,
        vx: Math.cos(angle) * PLAYER_BASE.beamSpeed,
        vy: Math.sin(angle) * PLAYER_BASE.beamSpeed,
        len: 14,
      });
      player.fireCooldown = player.fireInterval;
    }
  }

  // --- Beams ---
  for (let i = beams.length - 1; i >= 0; i--) {
    const b = beams[i];
    b.x += b.vx * dt;
    b.y += b.vy * dt;

    // off-screen cleanup
    if (b.x < -50 || b.x > W + 50 || b.y < -50 || b.y > H + 50) {
      beams.splice(i, 1);
      continue;
    }

    // hit detection
    for (let j = enemies.length - 1; j >= 0; j--) {
      const e = enemies[j];
      if (Math.hypot(e.x - b.x, e.y - b.y) < e.r) {
        e.hp -= PLAYER_BASE.beamDamage;
        beams.splice(i, 1);
        if (e.hp <= 0) {
          state.points += ENEMY_TYPES[e.type].points;
          enemies.splice(j, 1);
          updateHUD();
        }
        break;
      }
    }
  }

  // --- Enemies ---
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnEnemy();
    spawnTimer = spawnInterval();
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    const def = ENEMY_TYPES[e.type];
    const angle = Math.atan2(player.y - e.y, player.x - e.x);
    e.x += Math.cos(angle) * def.speed * dt;
    e.y += Math.sin(angle) * def.speed * dt;

    // contact with player: deal damage, enemy dies (no points)
    if (Math.hypot(e.x - player.x, e.y - player.y) < e.r + player.r) {
      player.hp -= def.damage;
      enemies.splice(i, 1);
      updateHUD();
      if (player.hp <= 0) {
        endGame();
        return;
      }
    }
  }
}

// ---------- Render ----------
function render() {
  ctx.clearRect(0, 0, W, H);

  // background grid (subtle greyscale)
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y <= H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  // arena boundary
  ctx.fillStyle = '#242424';
  ctx.fillRect(ARENA.x, ARENA.y, ARENA.w, ARENA.h);
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.strokeRect(ARENA.x, ARENA.y, ARENA.w, ARENA.h);

  // beams (white)
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 3;
  for (const b of beams) {
    const mag = Math.hypot(b.vx, b.vy);
    const nx = b.vx / mag;
    const ny = b.vy / mag;
    ctx.beginPath();
    ctx.moveTo(b.x - nx * b.len, b.y - ny * b.len);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }

  // enemies
  for (const e of enemies) {
    ctx.fillStyle = ENEMY_TYPES[e.type].color;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();

    // hp pips for tanky (or anything damaged)
    if (e.maxHp > 1) {
      const barW = e.r * 2;
      const pct = e.hp / e.maxHp;
      ctx.fillStyle = '#000';
      ctx.fillRect(e.x - e.r, e.y - e.r - 8, barW, 4);
      ctx.fillStyle = '#fff';
      ctx.fillRect(e.x - e.r, e.y - e.r - 8, barW * pct, 4);
    }
  }

  // player (greyscale)
  ctx.fillStyle = '#ccc';
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// ---------- Game Over / Restart ----------
function endGame() {
  state.gameOver = true;
  state.paused = true;
  document.getElementById('final-points').textContent = state.points;
  gameoverEl.classList.remove('hidden');
}

function restart() {
  state.gameOver = false;
  state.paused = false;
  state.points = 0;
  state.time = 0;

  upgrades.firerate.level = 0;
  upgrades.hp.level = 0;

  player.x = W / 2;
  player.y = H / 2;
  player.maxHp = PLAYER_BASE.maxHp;
  player.hp = PLAYER_BASE.maxHp;
  player.fireInterval = PLAYER_BASE.fireInterval;
  player.fireCooldown = 0;

  enemies = [];
  beams = [];
  spawnTimer = 0;

  gameoverEl.classList.add('hidden');
  shopEl.classList.add('hidden');
  updateHUD();
}

// ---------- Main Loop ----------
let lastTime = performance.now();

function loop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.05); // clamp big frame gaps
  lastTime = now;

  if (!state.paused) {
    update(dt);
  }
  render();

  requestAnimationFrame(loop);
}

updateHUD();
requestAnimationFrame(loop);
