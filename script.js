// ============================================================
// Top-Down Tower Defense — circles, bosses, drops, big shop
// Icons: Lucide (https://lucide.dev) — ISC license, inlined below
// ============================================================

const ICONS = {"zap": "<svg class=\"lucide lucide-zap\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" /> </svg>", "heart": "<svg class=\"lucide lucide-heart\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" /> </svg>", "swords": "<svg class=\"lucide lucide-swords\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <polyline points=\"14.5 17.5 3 6 3 3 6 3 17.5 14.5\" /> <line x1=\"13\" x2=\"19\" y1=\"19\" y2=\"13\" /> <line x1=\"16\" x2=\"20\" y1=\"16\" y2=\"20\" /> <line x1=\"19\" x2=\"21\" y1=\"21\" y2=\"19\" /> <polyline points=\"14.5 6.5 18 3 21 3 21 6 17.5 9.5\" /> <line x1=\"5\" x2=\"9\" y1=\"14\" y2=\"18\" /> <line x1=\"7\" x2=\"4\" y1=\"17\" y2=\"20\" /> <line x1=\"3\" x2=\"5\" y1=\"19\" y2=\"21\" /> </svg>", "footprints": "<svg class=\"lucide lucide-footprints\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\" /> <path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\" /> <path d=\"M16 17h4\" /> <path d=\"M4 13h4\" /> </svg>", "rocket": "<svg class=\"lucide lucide-rocket\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" /> <path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" /> <path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" /> <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" /> </svg>", "heart_pulse": "<svg class=\"lucide lucide-heart-pulse\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" /> <path d=\"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\" /> </svg>", "chevrons_right": "<svg class=\"lucide lucide-chevrons-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m6 17 5-5-5-5\" /> <path d=\"m13 17 5-5-5-5\" /> </svg>", "crosshair": "<svg class=\"lucide lucide-crosshair\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\" /> <line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\" /> <line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\" /> <line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\" /> </svg>", "coins": "<svg class=\"lucide lucide-coins\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M13.744 17.736a6 6 0 1 1-7.48-7.48\" /> <path d=\"M15 6h1v4\" /> <path d=\"m6.134 14.768.866-.5 2 3.464\" /> <circle cx=\"16\" cy=\"8\" r=\"6\" /> </svg>", "clover": "<svg class=\"lucide lucide-clover\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M16.17 7.83 2 22\" /> <path d=\"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12\" /> <path d=\"m7.83 7.83 8.34 8.34\" /> </svg>", "shield": "<svg class=\"lucide lucide-shield\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> </svg>", "layers": "<svg class=\"lucide lucide-layers\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\" /> <path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\" /> <path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\" /> </svg>", "orbit": "<svg class=\"lucide lucide-orbit\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20.341 6.484A10 10 0 0 1 10.266 21.85\" /> <path d=\"M3.659 17.516A10 10 0 0 1 13.74 2.152\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" /> <circle cx=\"19\" cy=\"5\" r=\"2\" /> <circle cx=\"5\" cy=\"19\" r=\"2\" /> </svg>", "radio": "<svg class=\"lucide lucide-radio\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M16.247 7.761a6 6 0 0 1 0 8.478\" /> <path d=\"M19.075 4.933a10 10 0 0 1 0 14.134\" /> <path d=\"M4.925 19.067a10 10 0 0 1 0-14.134\" /> <path d=\"M7.753 16.239a6 6 0 0 1 0-8.478\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" /> </svg>", "cloud_lightning": "<svg class=\"lucide lucide-cloud-lightning\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973\" /> <path d=\"m13 12-3 5h4l-3 5\" /> </svg>", "target": "<svg class=\"lucide lucide-target\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" /> </svg>", "timer": "<svg class=\"lucide lucide-timer\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\" /> <line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\" /> <circle cx=\"12\" cy=\"14\" r=\"8\" /> </svg>", "droplet": "<svg class=\"lucide lucide-droplet\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\" /> </svg>", "bomb": "<svg class=\"lucide lucide-bomb\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"11\" cy=\"13\" r=\"9\" /> <path d=\"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95\" /> <path d=\"m22 2-1.5 1.5\" /> </svg>", "wind": "<svg class=\"lucide lucide-wind\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\" /> <path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\" /> <path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\" /> </svg>", "aperture": "<svg class=\"lucide lucide-aperture\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m14.31 8 5.74 9.94\" /> <path d=\"M9.69 8h11.48\" /> <path d=\"m7.38 12 5.74-9.94\" /> <path d=\"M9.69 16 3.95 6.06\" /> <path d=\"M14.31 16H2.83\" /> <path d=\"m16.62 12-5.74 9.94\" /> </svg>", "copy": "<svg class=\"lucide lucide-copy\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /> <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" /> </svg>", "shield_check": "<svg class=\"lucide lucide-shield-check\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" /> </svg>", "spray_can": "<svg class=\"lucide lucide-spray-can\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 3h.01\" /> <path d=\"M7 5h.01\" /> <path d=\"M11 7h.01\" /> <path d=\"M3 7h.01\" /> <path d=\"M7 9h.01\" /> <path d=\"M3 11h.01\" /> <rect width=\"4\" height=\"4\" x=\"15\" y=\"5\" /> <path d=\"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2\" /> <path d=\"m13 14 8-2\" /> <path d=\"m13 19 8-2\" /> </svg>", "dollar_sign": "<svg class=\"lucide lucide-dollar-sign\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\" /> <path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\" /> </svg>"};

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const W = canvas.width;
const H = canvas.height;

// Circular playable arena
const ARENA = { x: W / 2, y: H / 2, r: 210 };

// ---------- Game State ----------
const state = {
  paused: false,
  gameOver: false,
  points: 0,
  time: 0,
};

// ---------- Player ----------
const PLAYER_BASE = {
  speed: 200,
  maxHp: 100,
  fireInterval: 0.8,
  beamSpeed: 600,
  beamDamage: 1,
};

const player = {
  x: ARENA.x,
  y: ARENA.y,
  r: 12,
  hp: PLAYER_BASE.maxHp,
  maxHp: PLAYER_BASE.maxHp,
  fireCooldown: 0,
};

// ---------- Derived stats (recomputed from upgrade levels) ----------
function lvl(key) { return STATS[key].level; }

const derived = {
  get fireInterval() { return PLAYER_BASE.fireInterval * Math.pow(0.9, lvl('firerate')); },
  get speed()        { return PLAYER_BASE.speed * (1 + 0.08 * lvl('movespeed')); },
  get beamSpeed()    { return PLAYER_BASE.beamSpeed * (1 + 0.12 * lvl('beamspeed')); },
  get damage()       { return PLAYER_BASE.beamDamage + lvl('damage'); },
  get pierce()       { return lvl('pierce'); },
  get critChance()   { return 0.05 * lvl('crit'); },
  get regen()        { return 0.5 * lvl('regen'); },
  get greedMult()    { return 1 + 0.10 * lvl('greed'); },
  get dropChance()   { return 0.08 + 0.03 * lvl('luck'); },
  get armor()        { return lvl('armor'); },
  get multishot()    { return lvl('multishot'); },
};

// ============================================================
// SHOP CONFIG
// ============================================================

// --- 12 stat upgrades: level to infinity, cost = ceil(base * growth^level) ---
const STATS = {
  firerate:  { name: 'Fire Rate',  icon: 'zap',            desc: '+10% fire speed',        base: 5,  growth: 1.50, level: 0 },
  hp:        { name: 'Max HP',     icon: 'heart',          desc: '+20 max HP, heals 20',   base: 5,  growth: 1.50, level: 0 },
  damage:    { name: 'Damage',     icon: 'swords',         desc: '+1 beam damage',         base: 10, growth: 1.60, level: 0 },
  movespeed: { name: 'Move Speed', icon: 'footprints',     desc: '+8% move speed',         base: 6,  growth: 1.50, level: 0 },
  beamspeed: { name: 'Beam Speed', icon: 'rocket',         desc: '+12% beam velocity',     base: 5,  growth: 1.45, level: 0 },
  regen:     { name: 'Regen',      icon: 'heart_pulse',    desc: '+0.5 HP per second',     base: 8,  growth: 1.55, level: 0 },
  pierce:    { name: 'Pierce',     icon: 'chevrons_right', desc: 'Beams pierce +1 enemy',  base: 15, growth: 1.70, level: 0 },
  crit:      { name: 'Crit',       icon: 'crosshair',      desc: '+5% chance for 2x dmg',  base: 8,  growth: 1.55, level: 0 },
  greed:     { name: 'Greed',      icon: 'coins',          desc: '+10% points per kill',   base: 12, growth: 1.60, level: 0 },
  luck:      { name: 'Luck',       icon: 'clover',         desc: '+3% drop chance',        base: 10, growth: 1.60, level: 0 },
  armor:     { name: 'Armor',      icon: 'shield',         desc: '-1 damage taken (min 1)',base: 10, growth: 1.60, level: 0 },
  multishot: { name: 'Multishot',  icon: 'layers',         desc: '+1 beam per volley',     base: 25, growth: 1.80, level: 0 },
};

function statCost(key) {
  const s = STATS[key];
  return Math.ceil(s.base * Math.pow(s.growth, s.level));
}

// --- 10 wacky abilities: one-time purchases, very expensive ---
const ABILITIES = {
  orbit:     { name: 'Orbit Blades',    icon: 'orbit',           desc: '3 orbs circle you, shredding on contact', cost: 150, owned: false },
  nova:      { name: 'Nova Pulse',      icon: 'radio',           desc: 'Every 5s: shockwave damages + knocks back', cost: 180, owned: false },
  chain:     { name: 'Chain Lightning', icon: 'cloud_lightning', desc: 'Beam hits arc to a nearby enemy',         cost: 200, owned: false },
  sentry:    { name: 'Sentry',          icon: 'target',          desc: 'A stationary turret fights beside you',   cost: 250, owned: false },
  timewarp:  { name: 'Time Warp',       icon: 'timer',           desc: 'All enemies move 25% slower',             cost: 220, owned: false },
  vampire:   { name: 'Vampirism',       icon: 'droplet',         desc: 'Heal 2 HP on every kill',                 cost: 170, owned: false },
  volatile:  { name: 'Volatile',        icon: 'bomb',            desc: 'Killed enemies explode, hurting others',  cost: 200, owned: false },
  dash:      { name: 'Ghost Dash',      icon: 'wind',            desc: '[Space] Dash with brief immunity',        cost: 150, owned: false },
  blackhole: { name: 'Black Hole',      icon: 'aperture',        desc: 'Every 12s: a vortex drags enemies in',    cost: 300, owned: false },
  clone:     { name: 'Doppelganger',    icon: 'copy',            desc: 'A mirrored clone fires alongside you',    cost: 400, owned: false },
};

function owned(key) { return ABILITIES[key].owned; }

// ============================================================
// ENEMIES & BOSSES
// ============================================================

const ENEMY_TYPES = {
  normal: { color: '#e04040', r: 12, speed: 60,  hp: 1, points: 1, damage: 10 },
  quick:  { color: '#e6d840', r: 9,  speed: 130, hp: 1, points: 3, damage: 10 },
  tanky:  { color: '#e08a30', r: 16, speed: 40,  hp: 5, points: 5, damage: 20 },
};

// Bosses: 3x base enemy size (r 12 -> 36), unique gimmicks
const BOSS_TYPES = {
  pulsar:  { color: '#4080e0', r: 36, speed: 35, hp: 30, points: 25, damage: 30, gimmick: 'Fires radial bullet bursts' },
  brood:   { color: '#40c060', r: 36, speed: 30, hp: 30, points: 25, damage: 30, gimmick: 'Spawns minions' },
  blinker: { color: '#a050e0', r: 36, speed: 40, hp: 30, points: 25, damage: 30, gimmick: 'Teleports toward you' },
};
const BOSS_ORDER = ['pulsar', 'brood', 'blinker'];
const BOSS_INTERVAL = 40; // seconds

let enemies = [];      // { type, boss, x, y, r, hp, maxHp, gimmickTimer, hitBy:Set }
let beams = [];        // { x, y, vx, vy, len, dmg, pierce, hit:Set, source }
let enemyBullets = []; // { x, y, vx, vy, r, dmg }
let drops = [];        // { kind, x, y, r, ttl }
let effects = [];      // transient visuals { kind, x, y, t, ... }

let spawnTimer = 0;
let bossTimer = BOSS_INTERVAL;
let bossIndex = 0;

const SPAWN_BASE_INTERVAL = 1.8;
const MAX_ENEMIES = 60;

function spawnInterval() {
  return Math.max(0.5, SPAWN_BASE_INTERVAL - state.time * 0.01);
}

function pickEnemyType() {
  const roll = Math.random();
  if (roll < 0.6) return 'normal';
  if (roll < 0.85) return 'quick';
  return 'tanky';
}

function edgeSpawnPos() {
  const edge = Math.floor(Math.random() * 4);
  const pad = 30;
  if (edge === 0) return { x: Math.random() * W, y: -pad };
  if (edge === 1) return { x: W + pad, y: Math.random() * H };
  if (edge === 2) return { x: Math.random() * W, y: H + pad };
  return { x: -pad, y: Math.random() * H };
}

function spawnEnemy(type, pos) {
  if (enemies.length >= MAX_ENEMIES) return;
  type = type || pickEnemyType();
  const def = ENEMY_TYPES[type];
  const p = pos || edgeSpawnPos();
  enemies.push({ type, boss: false, x: p.x, y: p.y, r: def.r, hp: def.hp, maxHp: def.hp });
}

function spawnBoss() {
  const type = BOSS_ORDER[bossIndex % BOSS_ORDER.length];
  bossIndex++;
  const def = BOSS_TYPES[type];
  const p = edgeSpawnPos();
  enemies.push({ type, boss: true, x: p.x, y: p.y, r: def.r, hp: def.hp, maxHp: def.hp, gimmickTimer: 2 });
}

function enemyDef(e) { return e.boss ? BOSS_TYPES[e.type] : ENEMY_TYPES[e.type]; }

// ============================================================
// DROPS — spawn near the PLAYER, not at the enemy
// ============================================================

const DROP_TYPES = {
  immune: { icon: 'shield_check', duration: 6, ttl: 10 },
  spray:  { icon: 'spray_can',    duration: 5, ttl: 10 },
  money:  { icon: 'dollar_sign',  duration: 8, ttl: 10 },
};

// active effect timers
const active = { immune: 0, spray: 0, money: 0 };

// pre-render drop icons (white-stroked SVG -> Image) for canvas drawing
const dropIconImgs = {};
for (const [kind, def] of Object.entries(DROP_TYPES)) {
  const svg = (ICONS[def.icon] || '').replace(/currentColor/g, '#ffffff');
  if (!svg) continue;
  const img = new Image();
  img.src = 'data:image/svg+xml;base64,' + btoa(svg);
  img.onload = () => { dropIconImgs[kind] = img; };
}

function trySpawnDrop() {
  if (Math.random() >= derived.dropChance) return;
  const kinds = Object.keys(DROP_TYPES);
  const kind = kinds[Math.floor(Math.random() * kinds.length)];

  // random point near the player, clamped inside the arena circle
  const ang = Math.random() * Math.PI * 2;
  const dist = 40 + Math.random() * 60;
  let x = player.x + Math.cos(ang) * dist;
  let y = player.y + Math.sin(ang) * dist;
  const d = Math.hypot(x - ARENA.x, y - ARENA.y);
  const maxD = ARENA.r - 14;
  if (d > maxD) {
    x = ARENA.x + ((x - ARENA.x) / d) * maxD;
    y = ARENA.y + ((y - ARENA.y) / d) * maxD;
  }
  drops.push({ kind, x, y, r: 11, ttl: DROP_TYPES[kind].ttl });
}

function isImmune() {
  return active.immune > 0 || dashState.iframes > 0;
}

// ============================================================
// ABILITY RUNTIME STATE
// ============================================================

const orbitState = { angle: 0, orbs: 3, dist: 52, r: 7, hitCd: new Map() };
const novaState = { timer: 5 };
const sentryState = { x: 0, y: 0, cooldown: 0, placed: false };
const dashState = { cooldown: 0, iframes: 0 };
const bhState = { timer: 12, x: 0, y: 0, life: 0 };
const cloneState = { cooldown: 0 };

function clonePos() {
  // mirrored across the arena center
  return { x: 2 * ARENA.x - player.x, y: 2 * ARENA.y - player.y };
}

function placeSentry() {
  const ang = Math.random() * Math.PI * 2;
  sentryState.x = ARENA.x + Math.cos(ang) * ARENA.r * 0.6;
  sentryState.y = ARENA.y + Math.sin(ang) * ARENA.r * 0.6;
  sentryState.placed = true;
}

// ============================================================
// INPUT
// ============================================================

const keys = {};

window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  keys[k] = true;
  if (k === 'b') toggleShop();
  if (k === ' ') { e.preventDefault(); tryDash(); }
});

window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

function moveDir() {
  let dx = 0, dy = 0;
  if (keys['w'] || keys['arrowup']) dy -= 1;
  if (keys['s'] || keys['arrowdown']) dy += 1;
  if (keys['a'] || keys['arrowleft']) dx -= 1;
  if (keys['d'] || keys['arrowright']) dx += 1;
  const len = Math.hypot(dx, dy);
  return len ? { x: dx / len, y: dy / len } : null;
}

function tryDash() {
  if (!owned('dash') || state.paused || dashState.cooldown > 0) return;
  const dir = moveDir();
  if (!dir) return;
  player.x += dir.x * 90;
  player.y += dir.y * 90;
  clampToArena(player);
  dashState.iframes = 0.35;
  dashState.cooldown = 2;
  effects.push({ kind: 'dash', x: player.x, y: player.y, t: 0.25 });
}

function clampToArena(p) {
  const d = Math.hypot(p.x - ARENA.x, p.y - ARENA.y);
  const maxD = ARENA.r - p.r;
  if (d > maxD) {
    p.x = ARENA.x + ((p.x - ARENA.x) / d) * maxD;
    p.y = ARENA.y + ((p.y - ARENA.y) / d) * maxD;
  }
}

// ============================================================
// SHOP UI (built dynamically)
// ============================================================

const shopEl = document.getElementById('shop');
const gameoverEl = document.getElementById('gameover');
const shopListEl = document.getElementById('shop-list');
let activeTab = 'stats';

function toggleShop() {
  if (state.gameOver) return;
  state.paused = !state.paused;
  shopEl.classList.toggle('hidden', !state.paused);
  if (state.paused) rebuildShop();
}

document.getElementById('shop-btn').addEventListener('click', toggleShop);
document.getElementById('close-shop').addEventListener('click', toggleShop);
document.getElementById('restart-btn').addEventListener('click', restart);

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeTab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.toggle('active', b === btn));
    rebuildShop();
  });
});

function rebuildShop() {
  document.getElementById('shop-points').textContent = state.points;
  shopListEl.innerHTML = '';

  if (activeTab === 'stats') {
    for (const key of Object.keys(STATS)) {
      const s = STATS[key];
      const cost = statCost(key);
      shopListEl.appendChild(makeCard({
        icon: s.icon, name: s.name, desc: s.desc,
        sub: `Lv ${s.level}`,
        btnText: `${cost}`,
        disabled: state.points < cost,
        onBuy: () => {
          if (state.points < cost) return;
          state.points -= cost;
          s.level++;
          if (key === 'hp') {
            player.maxHp = PLAYER_BASE.maxHp + s.level * 20;
            player.hp = Math.min(player.hp + 20, player.maxHp);
          }
          rebuildShop();
          updateHUD();
        },
      }));
    }
  } else {
    for (const key of Object.keys(ABILITIES)) {
      const a = ABILITIES[key];
      shopListEl.appendChild(makeCard({
        icon: a.icon, name: a.name, desc: a.desc,
        sub: a.owned ? '' : null,
        ownedTag: a.owned,
        btnText: `${a.cost}`,
        disabled: state.points < a.cost,
        onBuy: () => {
          if (a.owned || state.points < a.cost) return;
          state.points -= a.cost;
          a.owned = true;
          if (key === 'sentry') placeSentry();
          rebuildShop();
          updateHUD();
        },
      }));
    }
  }
}

function makeCard({ icon, name, desc, sub, btnText, disabled, onBuy, ownedTag }) {
  const card = document.createElement('div');
  card.className = 'card' + (ownedTag ? ' owned' : '');

  const ic = document.createElement('div');
  ic.className = 'card-icon';
  ic.innerHTML = ICONS[icon] || '';
  card.appendChild(ic);

  const body = document.createElement('div');
  body.className = 'card-body';
  body.innerHTML =
    `<span class="card-name">${name}</span>` +
    `<span class="card-desc">${desc}</span>` +
    (sub ? `<span class="card-lvl">${sub}</span>` : '');
  card.appendChild(body);

  if (ownedTag) {
    const tag = document.createElement('span');
    tag.className = 'owned-tag';
    tag.textContent = 'OWNED';
    card.appendChild(tag);
  } else {
    const btn = document.createElement('button');
    btn.className = 'buy-btn';
    btn.textContent = btnText;
    btn.disabled = disabled;
    btn.addEventListener('click', onBuy);
    card.appendChild(btn);
  }
  return card;
}

function updateHUD() {
  document.getElementById('hp-val').textContent = Math.ceil(player.hp);
  document.getElementById('hp-max').textContent = player.maxHp;
  document.getElementById('points-val').textContent = state.points;

  const parts = [];
  if (active.immune > 0) parts.push(`IMMUNE ${active.immune.toFixed(1)}`);
  if (active.spray > 0) parts.push(`SPRAY ${active.spray.toFixed(1)}`);
  if (active.money > 0) parts.push(`5x PTS ${active.money.toFixed(1)}`);
  document.getElementById('hud-effects').textContent = parts.join('  ');
}

// ============================================================
// COMBAT HELPERS
// ============================================================

function addPoints(base) {
  let amt = base * derived.greedMult;
  if (active.money > 0) amt *= 5;
  state.points += Math.round(amt);
}

function fireVolley(fromX, fromY, target, source) {
  const baseAngle = Math.atan2(target.y - fromY, target.x - fromX);
  const shots = 1 + (source === 'player' ? derived.multishot : 0);
  const spread = 0.14; // radians between beams
  for (let i = 0; i < shots; i++) {
    const offset = (i - (shots - 1) / 2) * spread;
    const a = baseAngle + offset;
    let dmg = derived.damage;
    if (Math.random() < derived.critChance) dmg *= 2;
    beams.push({
      x: fromX, y: fromY,
      vx: Math.cos(a) * derived.beamSpeed,
      vy: Math.sin(a) * derived.beamSpeed,
      len: 14,
      dmg,
      pierce: derived.pierce,
      hit: new Set(),
    });
  }
}

function nearestEnemy(x, y, exclude) {
  let best = null;
  let bestD = Infinity;
  for (const e of enemies) {
    if (e === exclude) continue;
    const d = Math.hypot(e.x - x, e.y - y);
    if (d < bestD) { bestD = d; best = e; }
  }
  return { enemy: best, dist: bestD };
}

function damageEnemy(e, dmg, index) {
  e.hp -= dmg;
  if (e.hp <= 0) {
    killEnemy(e, index);
    return true;
  }
  return false;
}

function killEnemy(e, index) {
  const def = enemyDef(e);
  addPoints(def.points);
  if (owned('vampire')) player.hp = Math.min(player.hp + 2, player.maxHp);
  if (owned('volatile')) {
    effects.push({ kind: 'explosion', x: e.x, y: e.y, t: 0.3 });
    for (let j = enemies.length - 1; j >= 0; j--) {
      const other = enemies[j];
      if (other === e) continue;
      if (Math.hypot(other.x - e.x, other.y - e.y) < 60) {
        other.hp -= 1;
        if (other.hp <= 0) killEnemy(other, j);
      }
    }
  }
  // chained kills (volatile) can shift the array, so verify the index
  let idx = (index !== undefined && enemies[index] === e) ? index : enemies.indexOf(e);
  if (idx >= 0) enemies.splice(idx, 1);
  trySpawnDrop();
  updateHUD();
}

function hurtPlayer(dmg) {
  if (isImmune()) return;
  const reduced = Math.max(1, dmg - derived.armor);
  player.hp -= reduced;
  updateHUD();
  if (player.hp <= 0) endGame();
}

// ============================================================
// UPDATE
// ============================================================

function update(dt) {
  state.time += dt;

  // timers
  for (const k of Object.keys(active)) active[k] = Math.max(0, active[k] - dt);
  dashState.cooldown = Math.max(0, dashState.cooldown - dt);
  dashState.iframes = Math.max(0, dashState.iframes - dt);

  // regen
  if (derived.regen > 0 && player.hp < player.maxHp) {
    player.hp = Math.min(player.hp + derived.regen * dt, player.maxHp);
  }

  // --- movement ---
  const dir = moveDir();
  if (dir) {
    player.x += dir.x * derived.speed * dt;
    player.y += dir.y * derived.speed * dt;
    clampToArena(player);
  }

  // --- auto-fire ---
  player.fireCooldown -= dt;
  const interval = active.spray > 0 ? 0.06 : derived.fireInterval;
  if (player.fireCooldown <= 0 && enemies.length > 0) {
    const { enemy } = nearestEnemy(player.x, player.y);
    if (enemy) {
      fireVolley(player.x, player.y, enemy, 'player');
      player.fireCooldown = interval;
    }
  }

  // --- clone fires too ---
  if (owned('clone')) {
    cloneState.cooldown -= dt;
    if (cloneState.cooldown <= 0 && enemies.length > 0) {
      const cp = clonePos();
      const { enemy } = nearestEnemy(cp.x, cp.y);
      if (enemy) {
        fireVolley(cp.x, cp.y, enemy, 'clone');
        cloneState.cooldown = interval * 1.5;
      }
    }
  }

  // --- sentry ---
  if (owned('sentry') && sentryState.placed) {
    sentryState.cooldown -= dt;
    if (sentryState.cooldown <= 0 && enemies.length > 0) {
      const { enemy } = nearestEnemy(sentryState.x, sentryState.y);
      if (enemy) {
        fireVolley(sentryState.x, sentryState.y, enemy, 'sentry');
        sentryState.cooldown = 1.2;
      }
    }
  }

  // --- beams ---
  for (let i = beams.length - 1; i >= 0; i--) {
    const b = beams[i];
    b.x += b.vx * dt;
    b.y += b.vy * dt;

    if (b.x < -50 || b.x > W + 50 || b.y < -50 || b.y > H + 50) {
      beams.splice(i, 1);
      continue;
    }

    for (let j = enemies.length - 1; j >= 0; j--) {
      const e = enemies[j];
      if (b.hit.has(e)) continue;
      if (Math.hypot(e.x - b.x, e.y - b.y) < e.r) {
        b.hit.add(e);
        const killed = damageEnemy(e, b.dmg, j);

        // chain lightning arcs to a nearby second enemy
        if (owned('chain')) {
          const { enemy: arc, dist } = nearestEnemy(b.x, b.y, killed ? null : e);
          if (arc && dist < 150) {
            effects.push({ kind: 'arc', x1: b.x, y1: b.y, x2: arc.x, y2: arc.y, t: 0.12 });
            damageEnemy(arc, 1);
          }
        }

        if (b.pierce > 0) {
          b.pierce--;
        } else {
          beams.splice(i, 1);
        }
        break;
      }
    }
  }

  // --- orbit blades ---
  if (owned('orbit')) {
    orbitState.angle += dt * 2.4;
    for (let o = 0; o < orbitState.orbs; o++) {
      const a = orbitState.angle + (o * Math.PI * 2) / orbitState.orbs;
      const ox = player.x + Math.cos(a) * orbitState.dist;
      const oy = player.y + Math.sin(a) * orbitState.dist;
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        if (Math.hypot(e.x - ox, e.y - oy) < e.r + orbitState.r) {
          const last = orbitState.hitCd.get(e) || 0;
          if (state.time - last > 0.4) {
            orbitState.hitCd.set(e, state.time);
            damageEnemy(e, 1, j);
          }
        }
      }
    }
  }

  // --- nova pulse ---
  if (owned('nova')) {
    novaState.timer -= dt;
    if (novaState.timer <= 0) {
      novaState.timer = 5;
      effects.push({ kind: 'nova', x: player.x, y: player.y, t: 0.4 });
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        const d = Math.hypot(e.x - player.x, e.y - player.y);
        if (d < 130) {
          // knockback
          const nx = (e.x - player.x) / (d || 1);
          const ny = (e.y - player.y) / (d || 1);
          e.x += nx * 80;
          e.y += ny * 80;
          damageEnemy(e, 1, j);
        }
      }
    }
  }

  // --- black hole ---
  if (owned('blackhole')) {
    if (bhState.life > 0) {
      bhState.life -= dt;
      for (const e of enemies) {
        const d = Math.hypot(e.x - bhState.x, e.y - bhState.y);
        if (d < 140 && d > 4) {
          e.x -= ((e.x - bhState.x) / d) * 120 * dt;
          e.y -= ((e.y - bhState.y) / d) * 120 * dt;
        }
      }
    } else {
      bhState.timer -= dt;
      if (bhState.timer <= 0 && enemies.length > 0) {
        const target = enemies[Math.floor(Math.random() * enemies.length)];
        bhState.x = target.x;
        bhState.y = target.y;
        bhState.life = 3;
        bhState.timer = 12;
      }
    }
  }

  // --- spawning ---
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnEnemy();
    spawnTimer = spawnInterval();
  }

  bossTimer -= dt;
  if (bossTimer <= 0) {
    spawnBoss();
    bossTimer = BOSS_INTERVAL;
  }

  // --- enemies ---
  const slowMult = owned('timewarp') ? 0.75 : 1;
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    const def = enemyDef(e);
    const angle = Math.atan2(player.y - e.y, player.x - e.x);
    e.x += Math.cos(angle) * def.speed * slowMult * dt;
    e.y += Math.sin(angle) * def.speed * slowMult * dt;

    // boss gimmicks
    if (e.boss) {
      e.gimmickTimer -= dt;
      if (e.gimmickTimer <= 0) {
        if (e.type === 'pulsar') {
          // radial bullet burst
          for (let k = 0; k < 8; k++) {
            const a = (k / 8) * Math.PI * 2;
            enemyBullets.push({
              x: e.x, y: e.y,
              vx: Math.cos(a) * 160, vy: Math.sin(a) * 160,
              r: 5, dmg: 10,
            });
          }
          e.gimmickTimer = 3;
        } else if (e.type === 'brood') {
          spawnEnemy('normal', { x: e.x + 20, y: e.y });
          spawnEnemy('normal', { x: e.x - 20, y: e.y });
          e.gimmickTimer = 4;
        } else if (e.type === 'blinker') {
          const d = Math.hypot(player.x - e.x, player.y - e.y);
          if (d > 60) {
            effects.push({ kind: 'blink', x: e.x, y: e.y, t: 0.25 });
            const step = Math.min(120, d - 50);
            e.x += ((player.x - e.x) / d) * step;
            e.y += ((player.y - e.y) / d) * step;
            effects.push({ kind: 'blink', x: e.x, y: e.y, t: 0.25 });
          }
          e.gimmickTimer = 3.5;
        }
      }
    }

    // contact with player
    if (Math.hypot(e.x - player.x, e.y - player.y) < e.r + player.r) {
      hurtPlayer(def.damage);
      if (state.gameOver) return;
      if (!e.boss) {
        enemies.splice(i, 1); // small enemies die on contact, no points
      } else {
        // bosses shove you away instead of dying
        const d = Math.hypot(player.x - e.x, player.y - e.y) || 1;
        player.x += ((player.x - e.x) / d) * 40;
        player.y += ((player.y - e.y) / d) * 40;
        clampToArena(player);
        e.gimmickTimer = Math.max(e.gimmickTimer, 0.5);
      }
    }
  }

  // --- enemy bullets ---
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    const bl = enemyBullets[i];
    bl.x += bl.vx * dt;
    bl.y += bl.vy * dt;
    if (bl.x < -30 || bl.x > W + 30 || bl.y < -30 || bl.y > H + 30) {
      enemyBullets.splice(i, 1);
      continue;
    }
    if (Math.hypot(bl.x - player.x, bl.y - player.y) < bl.r + player.r) {
      hurtPlayer(bl.dmg);
      enemyBullets.splice(i, 1);
      if (state.gameOver) return;
    }
  }

  // --- drops ---
  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    d.ttl -= dt;
    if (d.ttl <= 0) {
      drops.splice(i, 1);
      continue;
    }
    if (Math.hypot(d.x - player.x, d.y - player.y) < d.r + player.r) {
      active[d.kind] = DROP_TYPES[d.kind].duration;
      drops.splice(i, 1);
      updateHUD();
    }
  }

  // --- transient effects ---
  for (let i = effects.length - 1; i >= 0; i--) {
    effects[i].t -= dt;
    if (effects[i].t <= 0) effects.splice(i, 1);
  }

  updateHUD();
}

// ============================================================
// RENDER — simple monocolor shapes only
// ============================================================

function render() {
  ctx.clearRect(0, 0, W, H);

  // concentric ring backdrop
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 1;
  for (let r = 40; r < W; r += 40) {
    ctx.beginPath();
    ctx.arc(ARENA.x, ARENA.y, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // circular arena
  ctx.fillStyle = '#242424';
  ctx.beginPath();
  ctx.arc(ARENA.x, ARENA.y, ARENA.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.stroke();

  // black hole
  if (owned('blackhole') && bhState.life > 0) {
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(bhState.x, bhState.y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bhState.x, bhState.y, 22 + Math.sin(state.time * 6) * 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  // sentry
  if (owned('sentry') && sentryState.placed) {
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.arc(sentryState.x, sentryState.y, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sentryState.x, sentryState.y, 14, 0, Math.PI * 2);
    ctx.stroke();
  }

  // drops — white outline circle + tiny glyph
  for (const d of drops) {
    const blink = d.ttl < 3 && Math.floor(d.ttl * 6) % 2 === 0;
    if (blink) continue;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.stroke();
    const img = dropIconImgs[d.kind];
    if (img) {
      ctx.drawImage(img, d.x - 7, d.y - 7, 14, 14);
    } else {
      ctx.fillStyle = '#fff';
      ctx.font = '11px Courier New';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const glyph = d.kind === 'immune' ? 'I' : d.kind === 'spray' ? 'S' : '$';
      ctx.fillText(glyph, d.x, d.y + 1);
    }
  }

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

  // enemy bullets (blue, matching pulsar)
  ctx.fillStyle = BOSS_TYPES.pulsar.color;
  for (const bl of enemyBullets) {
    ctx.beginPath();
    ctx.arc(bl.x, bl.y, bl.r, 0, Math.PI * 2);
    ctx.fill();
  }

  // enemies + bosses
  for (const e of enemies) {
    ctx.fillStyle = enemyDef(e).color;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();

    if (e.maxHp > 1) {
      const barW = e.r * 2;
      const pct = Math.max(0, e.hp / e.maxHp);
      ctx.fillStyle = '#000';
      ctx.fillRect(e.x - e.r, e.y - e.r - 8, barW, 4);
      ctx.fillStyle = '#fff';
      ctx.fillRect(e.x - e.r, e.y - e.r - 8, barW * pct, 4);
    }
  }

  // orbit blades
  if (owned('orbit')) {
    ctx.fillStyle = '#ddd';
    for (let o = 0; o < orbitState.orbs; o++) {
      const a = orbitState.angle + (o * Math.PI * 2) / orbitState.orbs;
      ctx.beginPath();
      ctx.arc(
        player.x + Math.cos(a) * orbitState.dist,
        player.y + Math.sin(a) * orbitState.dist,
        orbitState.r, 0, Math.PI * 2
      );
      ctx.fill();
    }
  }

  // clone (hollow grey player)
  if (owned('clone')) {
    const cp = clonePos();
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cp.x, cp.y, player.r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // player
  ctx.fillStyle = '#ccc';
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.stroke();

  // immunity ring
  if (isImmune()) {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.r + 6 + Math.sin(state.time * 10) * 2, 0, Math.PI * 2);
    ctx.stroke();
  }

  // transient effects
  for (const fx of effects) {
    if (fx.kind === 'nova') {
      const pct = 1 - fx.t / 0.4;
      ctx.strokeStyle = `rgba(255,255,255,${1 - pct})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(fx.x, fx.y, 130 * pct, 0, Math.PI * 2);
      ctx.stroke();
    } else if (fx.kind === 'explosion') {
      const pct = 1 - fx.t / 0.3;
      ctx.strokeStyle = `rgba(255,255,255,${1 - pct})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(fx.x, fx.y, 60 * pct, 0, Math.PI * 2);
      ctx.stroke();
    } else if (fx.kind === 'arc') {
      ctx.strokeStyle = `rgba(255,255,255,${fx.t / 0.12})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(fx.x1, fx.y1);
      ctx.lineTo(fx.x2, fx.y2);
      ctx.stroke();
    } else if (fx.kind === 'blink') {
      ctx.strokeStyle = `rgba(160,80,224,${fx.t / 0.25})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(fx.x, fx.y, 36, 0, Math.PI * 2);
      ctx.stroke();
    } else if (fx.kind === 'dash') {
      ctx.strokeStyle = `rgba(255,255,255,${fx.t / 0.25})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(fx.x, fx.y, player.r + 4, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

// ============================================================
// GAME OVER / RESTART
// ============================================================

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

  for (const key of Object.keys(STATS)) STATS[key].level = 0;
  for (const key of Object.keys(ABILITIES)) ABILITIES[key].owned = false;

  player.x = ARENA.x;
  player.y = ARENA.y;
  player.maxHp = PLAYER_BASE.maxHp;
  player.hp = PLAYER_BASE.maxHp;
  player.fireCooldown = 0;

  enemies = [];
  beams = [];
  enemyBullets = [];
  drops = [];
  effects = [];

  spawnTimer = 0;
  bossTimer = BOSS_INTERVAL;
  bossIndex = 0;

  active.immune = 0;
  active.spray = 0;
  active.money = 0;

  novaState.timer = 5;
  bhState.timer = 12;
  bhState.life = 0;
  dashState.cooldown = 0;
  dashState.iframes = 0;
  sentryState.placed = false;
  orbitState.hitCd = new Map();

  gameoverEl.classList.add('hidden');
  shopEl.classList.add('hidden');
  updateHUD();
}

// ============================================================
// MAIN LOOP
// ============================================================

let lastTime = performance.now();

function loop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;

  if (!state.paused) {
    update(dt);
  }
  render();

  requestAnimationFrame(loop);
}

updateHUD();
requestAnimationFrame(loop);
