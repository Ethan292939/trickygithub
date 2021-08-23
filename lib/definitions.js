// from Richi: MAXIM IS NOOB AND AM PRO
// from Yeslander: woah this is really cool server :D
// from Richi: Please Connect
// From Tricky: WE CAN FKING CONECT WTF
// From Richi: ok connected
// From Yeslander: hmm? is there chat? i need to press some button?
// From Tricky: dev-chat.md you dont need to press button its under config
// From Richi: WE CAN FKING CONNECT WTF
// Your account WILL get kicked
// From Richi: Make Crasher Ultima
// From Richi: please?
// GUN DEFINITIONS
const combineStats = function(arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10], //STOP KILLING ME
      spray: data[11],
      resist: data[12] //why did you kick me??????
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4, //lol
    shi: 5,
    atk: 6, //dont touch my code
    hlt: 7, //i never leave i keep my server | YOU KEEP DESTROYING | no i was making the tank youn't need to touch!
    rgn: 8,
    mob: 9
  };
  return args => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();

const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
  swarm: [18, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  drone: [50, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [
    1.8,
    0.75,
    0.5,
    0.8,
    0.9,
    0.6,
    1.2,
    1.1,
    1,
    0.8,
    1.3,
    1,
    1.25
  ],
  five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */

  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.85, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    1,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1
  ],
  spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [
    1,
    0.25,
    1.5,
    1.2,
    1.35,
    0.25,
    1.25,
    0.8,
    0.65,
    1,
    1.5,
    1.5,
    1.2
  ],
  machgun: [0.67, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
  bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
  fallenover: [1.25, 1, 1, 0.25, 2.5, 1.1, 3, 0.9, 0.9, 1, 2, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  tiny: [1, 1, 1, 0.3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  guard: [1, 1, 1, 1, 2.5, 1, 1.5, 1, 1, 10, 0.65, 1, 1],
  master: [3, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  reloadnegetive1: [0.01, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  veryslow: [0.8, 1, 1, 1, 1, 1.7, 1.7, 0.5, 0.5, 1.5, 1, 1.2, 1],
  weaker: [1, 1, 1, 1, 1, 0.7, 1, 1, 1, 1, 1, 1, 1],
  weaker1: [1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  norange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.05, 1, 1, 1],
  nospeed: [1, 0, 1, 1, 1, 1, 1, 0.0001, 0.7, 1, 1, 0.00001, 1],
  norecoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
  bigger: [1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  slightlybig: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 0, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
  celestial: [3, 1, 1, 0.75, 2, 1.5, 1.75, 0.5, 0.5, 5, 1.1, 1, 1],
  celestialSkimmer: [1.15, 1, 1, 1, 5, 8.5, 5, 2.5, 1, 1, 1, 1, 1],
  celestialTrap: [1, 1, 1, 1, 4.1, 1.5, 3, 1, 1, 1, 1, 1, 1],
  celestialHive: [1.15, 1, 1, 1, 3, 5, 8.5, 5, 1, 1, 1, 1, 1],
  celestialBee: [0.9, 1, 1, 1, 4, 2.5, 3, 1.5, 1, 1, 1, 1, 1],
  cleaner: [0.5, 1, 1, 10000, 1000, 1000, 1, 1, 1, 1, 1, 1, 1]
};
const dfltskl = 9; //shub will be removed, it will give you a 0/10

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2
  },
  FOOD: {
    LEVEL: -1
  }
};

// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5
  },
  LABEL: "Alpha Pentagon",
  VALUE: 15000,
  SHAPE: -5,
  SIZE: 58,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 40 * basePolygonHealth,
    REGEN: 0.6
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4
  },
  LABEL: "Beta Pentagon",
  VALUE: 2500,
  SHAPE: 5,
  SIZE: 30,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.2
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0
  },
  DRAW_HEALTH: false
};

exports.greenpentagon = {
  PARENT: [exports.food],
  LABEL: "Pentagon",
  VALUE: 30000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 1,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.greentriangle = {
  PARENT: [exports.food],
  LABEL: "Triangle",
  VALUE: 7000,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 1,
  BODY: {
    DAMAGE: 1,
    DENSITY: 6,
    HEALTH: 60,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.greensquare = {
  PARENT: [exports.food],
  LABEL: "Square",
  VALUE: 2000,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: 0.5,
    DENSITY: 4,
    HEALTH: 20,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};

exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  VALUE: 2000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false
};
exports.obstacle2 = {
  TYPE: "wall",
  DAMAGE_CLASS: 0,
  LABEL: "Rock",
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 0,
    RESIST: 100000000,
    STEALTH: 1,
    RANGE: 5
  },
  VALUE: 0,
  COLOR: 16,
  VARIES_IN_SIZE: false,
  GIVE_KILL_MESSAGE: false,
  ACCEPTS_SCORE: false,
  DIE_AT_RANGE: true
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: -7,
  LABEL: "Gravel"
};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm"
};
exports.devrocket = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  SHAPE: [[-1.5, -1], [0.4, -1], [1.7, 0], [0.4, 1], [-1.5, 1]]
};

exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer"
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5
  }
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 1.25,
    RANGE: 120
  }
};

exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};
exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.fk0drone = {
  PARENT: [exports.drone],
  SHAPE:
    "M 0.26 -0.675 A 0.345 0.345 90 1 1 0.26 0.705 L -0.775 0.705 L -0.43 0.36 Q -0.085 0.015 -0.43 -0.33 L -0.775 -0.675 L 0.26 -0.675",
  LABEL: "Armed Drone",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -1.6, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lowpower,
          g.skim,
          g.halfrange,
          g.thruster
        ]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ] //I stop F🤔king up the damn token codes      //idk who it is. //i come in morning and the code is all messed  up  | ok
};
exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};

exports.kronosMissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5]
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5]
    },
    {
      POSITION: [4, 6, 1.5, 14, -2, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6, 1.5, 14, 2, 270, 0],
      PROPERTIES: {
        //AGAIN
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    } //then it shoot
  ]
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true
};
let gun = {};

exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};//Sword Shape (Wait is that 20 X?): M 4 8 L 10 1 L 13 0 L 12 3 L 5 9 C 6 10 6 11 7 10 C 7 11 8 12 7 12 A 1.42 1.42 0 0 1 6 13 A 5 5 0 0 0 4 10 Q 3.5 9.9 3.5 10.5 T 2 11.8 T 1.2 11 T 2.5 9.5 T 3 9 A 5 5 90 0 0 0 7 A 1.42 1.42 0 0 1 1 6 C 1 5 2 6 3 6 C 2 7 3 7 4 8 M 10 1 L 10 3 L 12 3 L 10.2 2.8 L 10 1
exports.shotgun2Turret = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weaker1]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }
  ]
};
exports.preda2Turret = {
  PARENT: [exports.genericTank],
  LABEL: "X-Predator 2",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [31, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [28, 8, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 12, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 16, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 20, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hornTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  CONTROLLERS: ["nearestDifferentMaster"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT   X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1.3, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 1.1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0.9, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0.7, 0, 0, 0, 0.9], //STOP
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0.5, 0, 0, 0, 1.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      //who r u doing
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 6,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true, //wtf r u coding
        STAT_CALCULATOR: gunCalcNames.drone
      }
    } //Oh there is 3 artillery turrets and spinning flank guard turret
    //i made a new client it adds the tanks i have in this private server!
  ] //same token as here hmm ok i have a best coder you see that blue amonymous? (Anonymous*)
}; //OK then I WILL CREATE ELITE SPRAYER OF DOOM
//he is Ethan my best coder
exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0]
    }
  ]
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.visTurret = {
  PARENT: [exports.genericTank],
  LABEL: "VisTurret",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 4, -1.8, 6.5, -5, 0, 0]
    },
    {
      POSITION: [19, 4, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 4, -1.8, 6.5, 5, 0, 0]
    }
  ]
};
exports.bigroundshield = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  SHAPE: "M -0.4 2 Q 1.1 0 -0.4 -2 Q 1.1 0 -0.4 -2 Q 3.6 0 -0.4 2",
  GUNS: [
    {
      POSITION: [1, 2.5, 1.01, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.single,
          g.norange,
          g.nospeed,
          g.norecoil,
          g.doublereload,
          g.doublereload,
          g.bigger
        ]),
        //COLOR: [12],
        TYPE: exports.obstacle2,
        AUTOFIRE: true
      }
    }
  ],
  COLOR: 33
};
exports.decor = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ]
};
exports.rimfireTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Rimfire",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  BODY: {
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5.7, 1, -2.4, -6.2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.arty]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 5.7, 1, -2.4, 6.2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.arty]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 13, 1, 0, 0, 0, 0]
    }
  ]
};

exports.builderTurret = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
      CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
        TYPE: exports.block
      }
    }
  ]
};

exports.nailgunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
    CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};

exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.tritrapgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.block
      }
    }
  ]
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0]
    }
  ]
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel", //Marcusicoi?
    "hangOutNearMaster"
  ], //RICHI WTF HOW DID YOU EVEN KICK IM ALLOWE TO KICK (Tricky)
  //CONTROLLERS: ['nearestDifferentMaster'],
  //MARCUSICOOOOOOOOOOOOOOOOOOOI
  //you dont need to join all of your accounts
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet //Nope
      }
    }
  ]
};
exports.reproducerminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret
    }
  ]
};
exports.vistrap = {
  LABEL: "Vis-Trap",
  PARENT: [exports.trap],
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.visTurret
    }
  ]
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.hypermissile
      }
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0]
    }
  ]
};
exports.skimboss = {
  PARENT: [exports.genericTank],
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200
  },
  SHAPE: 3,
  COLOR: 2,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret
    }
  ]
};
exports.fk0branch = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  SHAPE: "M 0.24 -1.62 Q 1.86 0 0.24 1.62 L -0.84 1.08 Q 0.24 0 -0.84 -1.08 L 0.24 -1.62",
  LABEL: "FK-0 Branch",
//good
  BODY: {
    ACCELERATION: base.ACCEL * 0.7 //Ok we are going to attach these branches to the ends of the fk3 | wait. Create FK3
  },
  SKILL: [0,9,9,9,9,9,9,9,9,9],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [  7.5,     0,      8,     0,     360, 1], 
                TYPE: [exports.nailgunTurret, { COLOR: 40 }],
                    }, {
            POSITION: [  7.5,     7,      0,     0,    360, 1], 
                TYPE: [exports.builderTurret, { COLOR: 16 }],
                    }, {
            POSITION: [  7.5,     0,      -8,     0,    360, 1], 
                TYPE: [exports.nailgunTurret, { COLOR: 40 }],
                    },//sorry mockup
        ],//nice default shape
};
//FK-X

exports.fk0 = {
  PARENT: [exports.genericTank],
  LABEL: "FK-0",
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200
  },
  SHAPE:
    "M -0.9 -0.45 L -0.45 -0.9 Q 0 -2 0.45 -0.9 L 0.9 -0.45 Q 2 0 0.9 0.45 L 0.45 0.9 Q 0 2 -0.45 0.9 L -0.9 0.45 Q -2 0 -0.9 -0.45",
  COLOR: 33,
  SIZE: 22, //Sorry about to put O
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 9.5, 0, 45, 160, 0],
      TYPE: [
        (exports.fk0twin = {
          PARENT: [exports.genericTank],
          LABEL: "",
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 16,
          GUNS: [
            {
              /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [23, 8, 1, 0, 5.5, 0, 0],
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet
              }
            },
            {
              /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [23, 8, 1, 0, -5.5, 0, 0.5],
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet
              }
            }
          ]
        })
      ]
    },
    {
      POSITION: [7.5, 9.5, 0, 135, 160, 0],
      TYPE: [exports.fk0twin, { COLOR: 16 }]
    },
    {
      POSITION: [7.5, 9.5, 0, 225, 160, 0],
      TYPE: [exports.fk0twin, { COLOR: 16 }]
    },
    {
      POSITION: [7.5, 9.5, 0, 315, 160, 0],
      TYPE: [exports.fk0twin, { COLOR: 16 }]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        (exports.fk0turret = {
          PARENT: [exports.genericTank],
          LABEL: "",
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 16,
          GUNS: [
            {
              /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [24, 12, 1, 0, 0, 0, 0],
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                  g.basic,
                  g.sniper,
                  g.hunter,
                  g.hunter2
                ]),
                TYPE: exports.bullet
              }
            },
            {
              POSITION: [21, 16, 1, 0, 0, 0, 0.25],
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: exports.bullet
              }
            },
            {
              POSITION: [8, 16, 1.2, 0, 0, 0, 0.25],
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                  g.drone,
                  g.over,
                  g.meta, //I created Twin-4
                  g.slightlybig
                ]),
                TYPE: [exports.fk0drone],
                AUTOFIRE: true, //Want less?
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true, // i forgot LOL
                MAX_CHLDREN: 2 //10? //More? | ok //Ok time to test
                //Hey what the F*Fgd*   // lol
                //then what the fk
                //daj  jfj sdjcfk k  f fnf  f
                //h fh fh f hf hf h  fh  fh f((((((((((((((((((((((((long boiiiiiiiiiiiiiii xd)))))))))))))))))))))))) | CAN YOU STOP
                //nice make the FK drone FK means f🤔k or what it means there a🤔s a XKX boss | ok? | OK
                //then what the f*fgd*ing means | what the f🤔king means //huh?
              } // then what the f*fgd*
            } //HUH what is fsdh anyway i test boss one sec
          ] //What is ffgd
        }) // end of the turret definiton
      ] // end of export turret for this tank
    }
  ] //end of turrets for this tank
};
exports.fk1 = {
  PARENT: [exports.genericTank],
  LABEL: "FK-1",
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200
  },
  SHAPE:
    "M -0.9 -0.45 L -0.45 -0.9 Q 0 -2 0.45 -0.9 L 0.9 -0.45 Q 2 0 0.9 0.45 L 0.45 0.9 Q 0 2 -0.45 0.9 L -0.9 0.45 Q -2 0 -0.9 -0.45",
  COLOR: 33,
  SIZE: 22,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 11, 0, 0, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 11, 0, 90, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 11, 0, 180, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 11, 0, 270, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [6, 11, 0, 45, 160, 0],
      TYPE: [exports.auto3gun, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 135, 160, 0],
      TYPE: [exports.auto3gun, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 225, 160, 0],
      TYPE: [exports.auto3gun, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 315, 160, 0],
      TYPE: [exports.auto3gun, { COLOR: 16 }]
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: exports.preda2Turret
    }
  ]
};
exports.fk2 = {
  PARENT: [exports.genericTank],
  LABEL: "FK-2",
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200
  },
  SHAPE:
    "M -0.9 -0.45 L -0.45 -0.9 Q 0 -4 0.45 -0.9 L 0.9 -0.45 Q 4 0 0.9 0.45 L 0.45 0.9 Q 0 4 -0.45 0.9 L -0.9 0.45 Q -4 0 -0.9 -0.45",
  COLOR: 33,
  SIZE: 22,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 19, 0, 0, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 19, 0, 90, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 19, 0, 180, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 19, 0, 270, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [6, 12, 0, 0, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [6, 12, 0, 90, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [6, 12, 0, 180, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [6, 12, 0, 270, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [4, 12, 0, 0, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [4, 12, 0, 90, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [4, 12, 0, 180, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [4, 12, 0, 270, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [6, 11, 0, 45, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 135, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 225, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 315, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: exports.preda2Turret
    }
  ]
};
exports.fk3 = { //DONT USE!
  PARENT: [exports.genericTank],
  LABEL: "FK-3",
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200
  },
  SHAPE:
    "M -0.9 -0.45 L -0.45 -0.9 Q 0 -6 0.45 -0.9 L 0.9 -0.45 Q 6 0 0.9 0.45 L 0.45 0.9 Q 0 6 -0.45 0.9 L -0.9 0.45 Q -6 0 -0.9 -0.45",
  COLOR: 33,
  SIZE: 22,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
 /*     POSITION: [5, 19, 0, 0, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 19, 0, 90, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 19, 0, 180, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {
      POSITION: [5, 19, 0, 270, 360, 1],
      TYPE: [exports.shotgun2Turret, { COLOR: 40 }]
    },
    {*/
      POSITION: [6, 12, 0, 0, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [6, 12, 0, 90, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [6, 12, 0, 180, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [6, 12, 0, 270, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [4, 12, 0, 0, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [4, 12, 0, 90, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [4, 12, 0, 180, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [4, 12, 0, 270, 360, 1],
      TYPE: [exports.decor, { COLOR: 18 }]
    },
    {
      POSITION: [6, 11, 0, 45, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 135, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 225, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [6, 11, 0, 315, 160, 0],
      TYPE: [exports.rimfireTurret, { COLOR: 16 }]
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: exports.preda2Turret
    },
    {
      POSITION: [12, 30, 0, 0, 0, 1],
      TYPE:[exports.fk0branch, { COLOR: 33,}]
    },
    {
      POSITION: [12, 30, 0, 90, 0, 1], 
      TYPE: [exports.fk0branch, { COLOR: 33,}]
    },
    {
      POSITION: [12, 30, 0, 180, 0, 1], 
      TYPE: [exports.fk0branch, { COLOR: 33,}]
    },
    {
      POSITION: [12, 30, 0, 270, 0, 1], 
      TYPE: [exports.fk0branch, { COLOR: 33,}]
    }
  ]
};
exports.comet = {
  PARENT: [exports.genericTank],
  LABEL: "Micro Comet", //Jeez
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.visTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1.4, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: (exports.cometbullet = {
          PARENT: [exports.bullet],
          LABEL: "Cyan Bullet",
          TURRETS: [
            {
              POSITION: [20, 0, 0, 0, 0, 1],
              TYPE: [exports.bullet, { COLOR: 0 }]
            }
          ]
        })
      }
    }
  ]
}; //Added VisTurret
exports.comet2 = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Comet",
  BODY: {
    SPEED: base.SPEED * 2
  },
  SIZE: 20,
  TURRETS: [
    {
      POSITION: [7.5, 6, 0, 0, 3600, 1],
      TYPE: exports.visTurret
    },
    {
      POSITION: [7.5, 6, 0, 180, 3600, 1],
      TYPE: exports.visTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1.2, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1.2, 0, 0, 210, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [50, 8, 1.4, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: exports.bullet
      }
    }
  ]
};
exports.comet3 = {
  PARENT: [exports.genericTank],
  LABEL: "Comet",
  BODY: {
    SPEED: base.SPEED * 2
  },
  SIZE: 25,
  COLOR: 0,
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [exports.egg, { COLOR: 0 }]
    },
    {
      POSITION: [6, 7, 0, 0, 3600, 1],
      TYPE: exports.visTurret
    },
    {
      POSITION: [6, 7, 0, 90, 3600, 1],
      TYPE: exports.visTurret
    },
    {
      POSITION: [6, 7, 0, 180, 3600, 1],
      TYPE: exports.visTurret
    },
    {
      POSITION: [6, 7, 0, 270, 3600, 1],
      TYPE: exports.visTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1.2, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: exports.cometbullet
      }
    },
    {
      POSITION: [18, 10, 1.2, 0, 0, 210, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: exports.cometbullet
      }
    },
    {
      POSITION: [42, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.morereload,
          g.morereload //ugh
        ]), //i fixed ac's reload
        TYPE: exports.cometbullet
      } //Long machine gun thing
    }
  ]
};
exports.wooo = {
  PARENT: [exports.genericTank], //why did you set speed to 80? | to be a FAST BOI WOOOOOOOOO XD like | IM FAST AS F🤔K BOI
  LABEL: "WOOOOOOOOOOOOOOOOOO", //Lets test it dont edit pls
  SHAPE: 9,
  SIZE: 40,
  BODY: {
    //wait
    SPEED: base.SPEED * 80 //Noiceeeeeeeeeeeeeeeee
  }
};
exports.HTB = {
  PARENT: [exports.genericTank],
  LABEL: "How to basic be like",
  FOV: 2.3,
  BODY: {},
  SPEED: base.SPEED * 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 2, 0, 0, 0, 0],
      PROPERTIES: {
        //how to basic be like lol
        //How to basic be like l0l
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: [
          exports.egg,
          { CONTROLLERS: ["doNothing"] },
          { SHAPE: 0 },
          { LEVEL: 60 }
        ],
        MAX_CHILDREN: 360
      }
    } //Do not do error pls
  ]
}; //Do not create egg sanctuary ok?,
exports.gemmaker = {
  PARENT: [exports.genericTank],
  LABEL: "Hexagon Maker",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [40, 20, 4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: (exports.gem2 = {
          PARENT: [exports.food],
          SHAPE: 6,
          LABEL: "Hexagon",
          LEVEL: 45,
          HEALTH: 150,
          DRAW_HEALTH: true,
          SIZE: 30,
          COLOR: 1,
          CONTROLLERS: ["doNothing"],
          MAX_CHILDREN: 50 //bruh
        }) //I SAID STOP KILLING ME
      }
    }, //STOP dont touch the server
    {
      POSITION: [40, 20, 4, 0, 0, 180, 0], //WARNING: No lag please
      PROPERTIES: {
        //no kill me please
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.gem2
      }
    }
  ]
}; //Dont touch | it makes eggs at back
exports.foodmaker = {
  PARENT: [exports.genericTank],
  LABEL: "Pentagon Maker",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 10, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: (exports.bulletpentagon = {
          PARENT: [exports.food],
          BODY: {
            RANGE: 500,
            HEALTH: 500,
            DRAW_HEALTH: true //bro thats my tank! | no its mine | fucfjcamhgankfd bmhbswdnjasdf
          }, //food might nev die
          DIE_AT_RANGE: ["doNothing"], //STOP DOING THAT OR DIE
          SHAPE: 5,
          LABEL: "Pentagon",
          CONTROLLERS: ["doNothing"]
        }),
        MAX_CHILDREN: 10 //ENOUGH
      }
    }
  ]
}; //No no no no nononononononono ||||||| JK J sj rsixfi scf,j9iscjif9
exports.theiaMissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  COLOR: 13,
  INDEPENDENT: true,
  FACING_TYPE: "autospin",
  BODY: {
    RANGE: 199,
    HEALTH: 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty,
          g.celestialSkimmer
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty,
          g.celestialSkimmer
        ]), //Wth
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty,
          g.celestialSkimmer
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty,
          g.celestialSkimmer
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.theiaMissileShooter = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "",
  DANGER: 7,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 15, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, -1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.celestialSkimmer
        ]),
        TYPE: exports.theiaMissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
function makeAuto(type, name = -1, options = {}) {
  let turret = { type: exports.autoTurret, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent
      }
    ]
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}
function makeHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}

exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic", //STOP SPAMMING
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.testbedbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed Basic", //Yes i copied basic to Tetsbed Basic
  SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]], //STOP SPAMMING
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    //lol i made that shape on custom shape builder (Ye you made it)
    {
      //lemme test it "" | ok
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
}; //good thats for the sentries then misc may be good
exports.sentry_page = {
  //OK
  PARENT: [exports.genericTank],
  LABEL: "Sentries",
  RESET_UPGRADES: true,
  FACING_TYPE: "autospin",

  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.developera = {
  PARENT: [exports.genericTank],
  LABEL: "Developer A",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.fast, g.fast]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.developerb = {
  PARENT: [exports.genericTank],
  LABEL: "Developer B",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.fast, g.fast]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.developerc = {
  PARENT: [exports.genericTank],
  LABEL: "Developer C",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.betatester1 = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.betatester2 = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester 2",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.betatester3 = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester 3",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "Developer",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  CAN_BE_ON_LEADERBOARD: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.visTurretNotControl = {
  PARENT: [exports.genericTank],
  LABEL: "VisTurret",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 4, -1.8, 6.5, -5, 0, 0]
    },
    {
      POSITION: [19, 4, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 4, -1.8, 6.5, 5, 0, 0]
    }
  ]
};
exports.obeseshieldtank = {
  PARENT: [exports.genericTank],
  HOVER: true,
  LABEL: "Obese Back Shield",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [50, 20, 0, 180, 0, 1],
      TYPE: exports.bigroundshield
    }
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.devrocket
      }
    }
  ]
};

let smshskl = 12; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody
    }
  ]
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: base.DAMAGE * 1.15,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.5
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2
    }
  ]
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner", //He is not a minion
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1
  },
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.autoass = makeAuto(exports.assassin, "");

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true, //WHYY
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.testbeddirector = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 5,
  SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true, //WHYY
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 30
      }
    }
  ]
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.masterGun
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }]
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }]
    }
  ]
};

exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.overtrapXD = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper XD",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 8
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 8
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.banshee2 = {
  PARENT: [exports.genericTank],
  LABEL: "Banshee 2",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.meta,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.meta,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.meta,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.autoover = makeAuto(exports.overseer, "");
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};

function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ]
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.autocruiser = makeAuto(exports.cruiser, "");
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade',
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    }
  ]
};

exports.lilfact = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};

exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

//SHAPE: [[-1,-1],[1,-1],[1,1],[-1,1],[-0.2,-0]],
exports.testbedmachine = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed Machine Gun",
  SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.testbedspray = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed Sprayer",
  SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};

exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.testbedmini = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2
  },
  SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    },
    {
      POSITION: [20, 10, -1.4, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    },
    {
      POSITION: [18, 10, -1.4, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
//Testbed minigun be like: -1.4
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hybridmini = makeHybrid(exports.mini, "");
exports.minitrap = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");
exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }
  ]
};

exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Trapper",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block
      }
    }
  ]
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0]
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0]
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0]
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0]
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    }
  ]
};

exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    }
  ]
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.rimfire = {
  PARENT: [exports.genericTank],
  LABEL: "Rimfire",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5.5, 1, 0, 7.25, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 5.5, 1, 0, -7.25, -30, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5.5, 1, 0, 4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5.5, 1, 0, -4.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]//HAAAAAAAAAAAAAAAAAAAAAAANK
};//im proud of you
exports.crowbar = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Crowbar",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [37, 8.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 38, 0, 0, 360, 1],
      TYPE: [exports.auto3gun, { INDEPENDENT: true }]
    },
    {
      POSITION: [8, 25, 0, 0, 360, 1],
      TYPE: [exports.auto3gun, { INDEPENDENT: true }]
    },
    {
      POSITION: [8, 12, 0, 0, 360, 1],
      TYPE: [exports.auto3gun, { INDEPENDENT: true }]
    }
  ]
};
exports.glock17 = {
  PARENT: [exports.genericTank],
  LABEL: "Gun",
  SHAPE:
    "m -0.5 -1.39 l 0.0008 -0.039 l 0.0109 -0.0109 l 0.0179 -0.0008 l 0.0117 0.0094 l 0.0101 0.0195 l 0.0102 0.0234 l 0.0835 0 l 0.0109 0.018 l 0.2747 0 l 0.0086 -0.0148 l 0.0078 -0.0031 l 0.0125 0 l 0.007 0.0078 l 0.0468 0.0858 l 0.7265 0 l 0.0148 0.0187 l 0.2372 0 l 0.2115 0 l 0.018 -0.018 l 1.034 0 l 0 -0.0733 l 0.0328 0 l 0 0.0187 l 0.0851 0 l 0 -0.018 l 0.0421 0 l 0.0343 0.064 l 0.0749 0.0507 l 0.0023 0.0523 l 0.0164 0 l 0 0.0148 l 0.0187 0 l 0 0.0203 l -0.0203 0 l 0 0.0952 l 0.0144 0.0039 l 0 0.0398 l -0.0207 0 l 0 0.0562 l -0.0203 0.1295 l -0.0219 0.089 l -0.0359 0.0757 l -0.2575 0 l -0.0593 0.0687 l -0.0164 0.0195 l -0.1756 0 l -0.021 -0.021 l -0.4354 0 l -0.0343 0.0289 l -0.0078 0.0335 l -0.007 0.0476 l -0.007 0.0476 l -0.0117 0.0523 l -0.0094 0.0484 l -0.0117 0.0414 l -0.0094 0.0359 l -0.0047 0.0273 l 0.0023 0.0179 l 0.0141 0.0148 l 0.0156 0.018 l 0.0031 0.0211 l -0.0047 0.0226 l -0.0148 0.0133 l -0.0297 0.0148 l -0.078 0.0086 l -0.1264 0.0102 l -0.2146 0.0289 l -0.1311 0.0172 l -0.0772 0.0055 l -0.0703 -0.0062 l -0.0577 -0.0148 l -0.0882 -0.0273 l -0.0538 -0.0101 l -0.0578 0.0016 l -0.0492 0.0257 l -0.0546 0.0554 l -0.0421 0.0515 l -0.0227 0.0531 l -0.0195 0.0577 l -0.0125 0.0562 l 0.0133 0.0234 l 0.0008 0.0195 l -0.0055 0.0156 l -0.0171 0.0086 l -0.0289 0.0086 l -0.0406 0.1366 l -0.0351 0.1085 l 0.0211 0.0226 l 0.0101 0.0172 l -0.0047 0.0242 l -0.0195 0.0109 l -0.0265 0.007 l -0.0328 0.0851 l -0.0141 0.057 l 0 0.0835 l 0.0102 0.0577 l 0.0195 0.0835 l 0.0273 0.0515 l 0.0296 0.0414 l 0.0148 0.018 l 0.0031 0.018 l -0.0086 0.0195 l -0.0328 0.0164 l -0.0765 0.0172 l -0.1077 -0.0031 l -0.0679 -0.007 l -0.0484 -0.0094 l -0.1303 -0.0148 l -0.1537 -0.0148 l -0.0952 -0.0125 l -0.0866 -0.0039 l -0.0523 -0.0047 l -0.0539 -0.0039 l -0.0211 -0.0125 l -0.0117 -0.0265 l -0.0063 -0.025 l 0.0024 -0.0242 l 0.0125 -0.0109 l 0.0289 -0.0117 l 0.0429 0.0008 l 0.0117 -0.0109 l 0.0031 -0.0102 l -0.0086 -0.0101 l -0.064 -0.0008 l -0.0523 -0.0219 l -0.025 -0.032 l -0.0148 -0.0414 l 0.0039 -0.0788 l 0.014 -0.0531 l 0.025 -0.1381 l 0.0312 -0.1381 l 0.057 -0.181 l 0.0843 -0.1935 l 0.1452 -0.2396 l 0.0671 -0.0874 l 0.0234 -0.0492 l 0.0094 -0.0476 l -0.0016 -0.0523 l -0.0148 -0.0593 l -0.0382 -0.0523 l -0.0484 -0.046 l -0.0523 -0.0289 l -0.0577 -0.0148 l -0.0671 -0.0055 l -0.0718 -0.0023 l -0.0328 -0.0101 l -0.0195 -0.0211 l -0.0117 -0.0273 l -0.0031 -0.0398 l 0.0063 -0.0367 l 0.0265 -0.0289 l 0.0562 -0.0187 l 0.0546 -0.039 l 0.0421 -0.0531 l 0.0718 -0.0936 l 0.0398 -0.0406 l 0.0117 -0.0359 l -0.0055 -0.0453 l -0.0195 -0.0281 l -0.0453 -0.0187 l -0.0172 -0.0304 l 0.0008 -0.0343 l 0.0297 -0.0343 l 0.0265 -0.0055 l 0.039 0.0101 l 0.0265 0.0312 l 0.018 0.0219 l 0.0242 0.0047 l 0.0195 -0.0125 l -0.0039 -0.0226 l -0.0242 -0.0016 l -0.0538 -0.0546 z m 1.2163 0.8633 l -0.0453 0.0312 l -0.0453 0.0562 l -0.0328 0.0515 l -0.014 0.0484 l -0.0016 0.064 l 0.0156 0.0609 l 0.0312 0.0546 l 0.0453 0.0359 l 0.0577 0.0297 l 0.0578 0.0078 l 0.0749 -0.0016 l 0.0531 -0.0094 l 0.0999 -0.0125 l 0.0921 -0.0141 l 0.1467 -0.0171 l 0.0468 -0.025 l 0.0359 -0.05 l 0.0187 -0.064 l 0.0094 -0.0562 l 0 -0.0702 l -0.0156 -0.0562 l -0.0375 -0.0437 l -0.0484 -0.0359 l -0.0421 0 l 0 -0.0312 l -0.1358 -0.0016 l -0.1607 0.0125 l -0.0078 0.0172 l 0 0.103 l 0.0156 0.0562 l 0.0265 0.0515 l 0.05 0.0406 l 0.0531 0.0296 l 0.0406 0.0078 l 0.0156 0.0086 l 0.0055 0.0141 l -0.0008 0.0086 l -0.0164 0.0086 l -0.0476 0.0039 l -0.0617 -0.0008 l -0.0819 -0.0257 l -0.0647 -0.0624 l -0.0609 -0.0874 l -0.0062 -0.0421 l 0.0055 -0.0304 l -0.0109 -0.0257 l -0.0289 -0.0257 z",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 6, -8, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.power,
          g.fast,
          g.doublereload
        ]),
        TYPE: exports.devrocket
      }
    }
  ]
};
exports.reproducer = {
  PARENT: [exports.genericTank],
  LABEL: "Reproducer",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, -80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.reproducerminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.reproducerminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.heptatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Hepta-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  },
  "Hexa-Trapper"
);

exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun
    }
  ]
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun
    }
  ]
};
exports.tritrap = {
  LABEL: "",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun
    }
  ]
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun
    }
  ]
};

exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.guntrap = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Snipe Guard",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

// UPGRADE PATHS
/*exports.testbed.UPGRADES_TIER_1 = [
  exports.autocruiser,
  exports.master,
  exports.dual,
  exports.hiveshooter,
  exports.brutalizer,
  exports.shotgun2,
  exports.hybridmini
];
*/
//CAN WE FKING CONECT WTF
exports.testbedbasic.UPGRADES_TIER_3 = [exports.single];
exports.testbedbasic.UPGRADES_TIER_2 = [exports.smash];
exports.testbedbasic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.sniper,
  exports.testbedmachine,
  exports.flank,
  exports.testbeddirector
];
exports.smash.UPGRADES_TIER_3 = [
  exports.megasmash,
  exports.spike,
  exports.autosmash //BRUH
];

exports.twin.UPGRADES_TIER_2 = [
  exports.double,
  exports.bent,
  exports.gunner,
  exports.hexa
];
exports.twin.UPGRADES_TIER_3 = [exports.triple];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.autodouble,
  exports.bentdouble
];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.nailgun,
  exports.auto4,
  exports.machinegunner
];

exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.hunter,
  exports.testbedmini,
  exports.builder
];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.sidewind
];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer
];

exports.testbedmachine.UPGRADES_TIER_2 = [
  exports.destroy,
  exports.artillery,
  exports.testbedmini,
  exports.gunner
];
exports.testbedmachine.UPGRADES_TIER_3 = [exports.testbedspray];
exports.destroy.UPGRADES_TIER_3 = [
  exports.anni,
  exports.hybrid,
  exports.construct,
  exports.shotgun2
];
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.spread,
  exports.skimmer
];
exports.testbedmini.UPGRADES_TIER_3 = [exports.stream, exports.nailgun];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.flanktrap
];
exports.flank.UPGRADES_TIER_3 = [];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.falcon,
  exports.bomber,
  exports.autotri
];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bushwhack,
  exports.guntrap,
  exports.fortress,
  exports.bomber
];

exports.testbeddirector.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer
];
exports.testbeddirector.UPGRADES_TIER_3 = [exports.factory];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.overtrap,
  exports.overgunner
];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.fortress
];

/*exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash];
            
    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
        exports.triple.UPGRADES_TIER_3 = [exports.quint];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
            , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];
        
    exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo];
        exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/

// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 5,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 2,
    SPEED: base.SPEED * 0.5
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.5
  },
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
  type: exports.heavy3gun,
  size: 12
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
  type: exports.trapTurret,
  size: 12
});
exports.crasherDevasta = makeAuto(exports.sentry, "Crasher Devasta", {
  type: exports.bent,
  size: 12
});

exports.droneSwarm = {
  PARENT: [exports.drone],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.droneGun = makeAuto(exports.drone, "Sentry", {
  type: exports.heavy3gun,
  size: 12
});
exports.droneTrap = makeAuto(exports.drone, "Sentry", {
  type: exports.trapTurret,
  size: 12
});

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!"
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true }
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};
exports.elite_battle = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 5.65, 0.6, 7.5, -8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Auto"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, -8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Auto"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, -8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Auto"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5.5, 8, 0, 0, 360, 1],
      TYPE: [
        exports.autoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [5.5, 8, 0, 120, 360, 1],
      TYPE: [
        exports.autoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [5.5, 8, 0, 240, 360, 1],
      TYPE: [
        exports.autoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 5
        }
      ]
    }
  ]
};
exports.elite_destroyerOP = {
  PARENT: [exports.elite],
  LABEL: "Elite Crasher of DOOM",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 9, 0, 0, 360, 1],
      TYPE: exports.artillery
    },
    {
      POSITION: [4, 9, 0, 120, 360, 1],
      TYPE: [exports.artillery]
    },
    {
      POSITION: [4, 9, 0, 240, 360, 1],
      TYPE: [exports.artillery]
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: [exports.flank, { CONTROLLERS: ["fastspin"] }]
    }
  ]
};

exports.elite_battleOP = {
  PARENT: [exports.elite],
  LABEL: "Elite Crasher of DOOM",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 5.65, 0.6, 7.5, -8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Auto"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, -8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Auto"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, -8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Auto"
      }
    },
    {
      POSITION: [3.5, 5.65, 0.6, 7.5, 8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5.5, 8, 0, 0, 360, 1],
      TYPE: [
        exports.artillery,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [5.5, 8, 0, 120, 360, 1],
      TYPE: [
        exports.artillery,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [5.5, 8, 0, 240, 360, 1],
      TYPE: [
        exports.artillery,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: [exports.flank, { CONTROLLERS: ["fastspin"] }]
    }
  ]
};
exports.guardian = {
  PARENT: [exports.elite],
  LABEL: "Guardian",
  MAX_CHILDREN: 30,
  FACING_TYPE: "locksFacing",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, 1.3, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.weak,
          g.weak,
          g.reloadnegetive1,
          g.halfreload,
          g.tiny,
          g.guard
        ]),
        TYPE: [
          (exports.guardianswarm = {
            PARENT: [exports.drone],
            LABEL: "Guardian Drone",
            BODY: {
              HEALTH: base.HEALTH * 2.2,
              PENETRATION: base.PENETRATION * 1.23,
              RANGE: base.RANGE * 5,
              DENSITY: base.DENSITY * 0.45
            },
            HITS_OWN_TYPE: "hard"
          })
        ]
      }
    }
  ]
};
exports.elite_gunner = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }]
      }
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0]
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun]
    }
  ]
};
exports.elite_gunnerOP = {
  PARENT: [exports.elite],
  LABEL: "Elite Crasher of DOOM",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }]
      }
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 180, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0]
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 9, 0, 0, 360, 1],
      TYPE: exports.artillery
    },
    {
      POSITION: [4, 9, 0, 120, 360, 1],
      TYPE: [exports.artillery]
    },
    {
      POSITION: [4, 9, 0, 240, 360, 1],
      TYPE: [exports.artillery]
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.flank, { CONTROLLERS: ["fastspin"] }]
    }
  ]
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [
        exports.spray,
        { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"] }
      ]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [
        exports.spray,
        { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"] }
      ]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [
        exports.spray,
        { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"] }
      ]
    }
  ]
};
exports.elite_sprayerOP = {
  PARENT: [exports.elite], //
  AI: { NO_LEAD: false },
  SIZE: 33, // Nope
  LABEL: "Elite Crasher of DOOM", //Try creating Elite Gunner of DOOM
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [
        exports.spray,
        { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"] }
      ]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [
        exports.spray,
        { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"] }
      ]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [
        exports.spray,
        { COLOR: 5, CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"] }
      ]
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 9, 0, 0, 360, 1],
      TYPE: exports.artillery
    },
    {
      POSITION: [4, 9, 0, 120, 360, 1],
      TYPE: [exports.artillery]
    },
    {
      POSITION: [4, 9, 0, 240, 360, 1],
      TYPE: [exports.artillery] //Elite Sprayer Is Copied and OPed to Eltie Sprayer of DOOM
    }, //lets rickroll him
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.flank, { CONTROLLERS: ["spin"] }]
    }
  ]
}; //DONT TOUCH

exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true
        }
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret
      }
    ]
  };
})();

exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 10,
    skill_set: "9999999999"
  }, //if i do with skill_set : ('9999999999') works (Ten nines)
  COLOR: 17, //follow me in s
  NAME: "  [Tricky]", //ok
  CONTROLLERS: [
    //yea to me it dosent work put after size | see
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "fleeAtLowHealth"
  ],
  AI: { STRAFE: true }
};

//exports.testbed.UPGRADES_TIER_1.push(exports.elite_sprayer);

exports.elite1 = {
  PARENT: [exports.miniboss],
  LABEL: "Elite-1",
  COLOR: 17,
  SHAPE: 0,
  SIZE: 20,
  VALUE: 500000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 10, 0, 120, 180, 0],
      TYPE: exports.twin
    },
    {
      POSITION: [10, 10, 0, 240, 180, 0],
      TYPE: exports.twin
    },
    {
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.twin
    }
  ]
};
exports.elite2 = {
  PARENT: [exports.miniboss],
  LABEL: "Elite-2",
  COLOR: 17,
  SHAPE: 0,
  SIZE: 20,
  VALUE: 500000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 10, 0, 120, 180, 0],
      TYPE: exports.triple
    },
    {
      POSITION: [10, 10, 0, 240, 180, 0],
      TYPE: exports.triple
    },
    {
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.triple
    }
  ]
};
(exports.elite3 = {
  PARENT: [exports.miniboss],
  LABEL: "Elite-3",
  COLOR: 17,
  SHAPE: 0,
  SIZE: 20,
  VALUE: 500000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 10, 0, 120, 180, 0],
      TYPE: exports.quint
    },
    {
      POSITION: [10, 10, 0, 240, 180, 0],
      TYPE: exports.quint
    },
    {
      POSITION: [10, 0, 0, 180, 360, 1],
      TYPE: exports.quint
    },
    {
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.quint
    }
  ]
}),
  (exports.layer1 = {
    PARENT: [exports.miniboss],
    LABEL: "layer1",
    COLOR: 3,
    SHAPE: 5,
    SIZE: 60,
    VALUE: 1000000,
    FOV: 1.9,
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
        POSITION: [8, 10, 0, 342, 180, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [8, 10, 0, 54, 180, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [8, 10, 0, 126, 180, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [8, 10, 0, 198, 180, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [8, 10, 0, 270, 180, 0],
        TYPE: exports.auto4gun
      }
    ]
  });
exports.layer2 = {
  PARENT: [exports.miniboss],
  LABEL: "layer2",
  COLOR: 3,
  SHAPE: 5,
  SIZE: 60,
  VALUE: 1000000,
  FOV: 1.9,
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [8, 10, 0, 72, 0, 0],
      TYPE: exports.director
    },
    {
      POSITION: [8, 10, 0, 144, 0, 0],
      TYPE: exports.director
    },
    {
      POSITION: [8, 10, 0, 216, 0, 0],
      TYPE: exports.director
    },
    {
      POSITION: [8, 10, 0, 288, 0, 0],
      TYPE: exports.director
    },
    {
      POSITION: [8, 10, 0, 0, 0, 0],
      TYPE: exports.director
    }
  ]
};
(exports.elite4 = {
  PARENT: [exports.miniboss],
  LABEL: "Elite-4",
  COLOR: 3,
  SHAPE: 0,
  SIZE: 20,
  VALUE: 500000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 10, 0, 120, 0, 0],
      TYPE: [exports.factory, { COLOR: 6 }]
    },
    {
      POSITION: [10, 10, 0, 240, 0, 0],
      TYPE: [exports.factory, { COLOR: 6 }]
    },
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: [exports.factory, { COLOR: 6 }]
    },
    {
      POSITION: [10, 10, 0, 0, 0, 0],
      TYPE: [exports.factory, { COLOR: 6 }]
    }
  ]
}),
  (exports.elite_gunnerv2 = {
    PARENT: [exports.elite],
    LABEL: "Elite Gunner v2",
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 16, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [2, 16, 1.25, 14, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fake]),
          TYPE: [exports.pillbox, { INDEPENDENT: true }]
        }
      },
      {
        POSITION: [2, 20, 1.25, 16, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: [exports.pillbox, { INDEPENDENT: true }]
        }
      },
      {
        POSITION: [6, 14, -2, 2, 0, 60, 0]
      },
      {
        POSITION: [6, 14, -2, 2, 0, 180, 0]
      },
      {
        POSITION: [6, 14, -2, 2, 0, 300, 0]
      }
    ],
    AI: { NO_LEAD: false },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 8, 0, 60, 180, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [15, 8, 0, 300, 180, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.visTurret
      }
    ]
  });
exports.egunner = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Gunner Ultra",
  SHAPE: 3,
  SIZE: 20,
  VALUE: 500000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 10, 0, 60, 0, 0],
      TYPE: exports.elite_gunner
    },
    {
      POSITION: [15, 10, 0, 180, 0, 0],
      TYPE: exports.elite_gunner
    },
    {
      //Me when im here
      POSITION: [15, 10, 0, 300, 0, 0],
      TYPE: exports.elite_gunner //Stop editing
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.elite_gunnerv2
    }
  ]
};
exports.edestroyer = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Destroyer Ultra",
  SHAPE: 3,
  SIZE: 20,
  VALUE: 500000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 10, 0, 60, 0, 0],
      TYPE: exports.elite_destroyer
    },
    {
      POSITION: [15, 10, 0, 180, 0, 0],
      TYPE: exports.elite_destroyer
    },
    {
      POSITION: [15, 10, 0, 300, 0, 0],
      TYPE: exports.elite_destroyer
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.skimboss
    }
  ]
};
(exports.elite5 = {
  PARENT: [exports.miniboss],
  LABEL: "Elite-5",
  COLOR: 3,
  SHAPE: 0,
  SIZE: 40,
  VALUE: 1000000,
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [5, 10, 0, 120, 0, 0],
      TYPE: [exports.factory]
    },
    {
      POSITION: [5, 10, 0, 240, 0, 0],
      TYPE: [exports.factory]
    },
    {
      POSITION: [5, 4, 0, 120, 180, 1],
      TYPE: [exports.cruiser]
    },
    {
      POSITION: [5, 4, 0, 240, 180, 1],
      TYPE: [exports.cruiser]
    },
    {
      POSITION: [5, 4, 0, 0, 180, 1],
      TYPE: [exports.cruiser]
    },
    {
      POSITION: [5, 10, 0, 0, 0, 0],
      TYPE: [exports.factory]
    }
  ]
}),
  (exports.elite6 = {
    PARENT: [exports.miniboss],
    LABEL: "Elite-6",
    COLOR: 3,
    SHAPE: 0,
    REGEN: 5594,
    SIZE: 50,
    HEALTH: 14000,
    FOV: 2.3,
    VALUE: 4000000,
    BODY: {
      HEALTH: base.HEALTH * 10,
      REGEN: base.REGEN * 1
    },
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
        POSITION: [5, 10, 0, 120, 180, 0],
        TYPE: [exports.auto4gun]
      },
      {
        POSITION: [5, 10, 0, 60, 180, 0],
        TYPE: [exports.auto4gun]
      },
      {
        POSITION: [5, 10, 0, 180, 180, 0],
        TYPE: [exports.auto4gun]
      },
      {
        POSITION: [5, 10, 0, 300, 180, 0],
        TYPE: [exports.auto4gun]
      },
      {
        POSITION: [5, 10, 0, 240, 180, 0],
        TYPE: [exports.auto4gun]
      },
      {
        POSITION: [5, 4, 0, 120, 180, 1],
        TYPE: [exports.carrier]
      },
      {
        POSITION: [5, 4, 0, 240, 180, 1],
        TYPE: [exports.carrier]
      },
      {
        POSITION: [5, 4, 0, 0, 180, 1],
        TYPE: [exports.carrier]
      },
      {
        POSITION: [5, 10, 0, 0, 180, 0],
        TYPE: [exports.auto4gun]
      }
    ]
  }),
  (exports.arenacloser = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closer",
    COLOR: 13,
    SHAPE: 0,
    CAN_GO_OUTSIDE_ROOM: true,
    DRAW_HEALTH: false,
    SIZE: 30,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 5,
      HEALTH: base.HEALTH * 9999999999999999999999999,
      SHIELD: base.SHIELD * 9999999999999999999999999,
      REGEN: base.REGEN * 9999999999999999999999999,
      DAMAGE: base.DAMAGE * 9999999999999999999999999
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14.3, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.op //please do not change this reload i fixed
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  });
exports.trap_two = {
  PARENT: [exports.trap],
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: 4,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.octagon = {
  PARENT: [exports.genericTank],
  LABEL: "octagon",
  SHAPE: 8,
  COLOR: 10,
  SIZE: 50,
  REGEN: 10,
  FOV: 1.5,
  VALUE: 300000,
  HEALTH: 50,
  BODY: {
    HEALTH: base.HEALTH * 5,
    REGEN: base.REGEN * 10
  }
};
exports.pentadecagon = {
  PARENT: [exports.genericTank],
  LABEL: "pentadecagon",
  SHAPE: 15,
  SIZE: 100,
  DAMAGE: 100,
  VALUE: 1000000,
  FOV: 2.3,
  HEALTH: 150,
  BODY: {
    HEALTH: base.HEALTH * 100,
    DAMAGE: base.DAMAGE * 10
  }
};
(exports.elitesentry = {
  PARENT: [exports.sentry],
  LABEL: "Sentry",
  COLOR: 17,
  FACING_TYPE: "autospin",
  SHAPE: 3,
  SIZE: 12,
  VALUE: 500000,
  FOV: 1,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 10, 0, 120, 180, 0],
      TYPE: exports.spray
    },
    {
      POSITION: [10, 10, 0, 240, 180, 0],
      TYPE: exports.spray
    },
    {
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.spray
    }
  ]
}),
  (exports.octosentry = {
    PARENT: [exports.genericTank],
    LABEL: "Sentry",
    COLOR: 17,
    FACING_TYPE: "autospin",
    SHAPE: 3,
    SIZE: 30,
    VALUE: 5.2e308,
    FOV: 1.9,
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 12, 0, 120, 180, 0],
        TYPE: exports.octo
      },
      {
        POSITION: [10, 12, 0, 240, 180, 0],
        TYPE: exports.octo
      },
      {
        POSITION: [10, 12, 0, 0, 180, 0],
        TYPE: exports.octo
      },
      {
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: exports.octo
      }
    ]
  }),
  (exports.page2 = {
    PARENT: [exports.genericTank],
    LABEL: "PAGE 2 (READ IT)",
    COLOR: 13,
    SHAPE: 0
  }),
  (exports.spec = {
    PARENT: [exports.genericTank],
    LABEL: "Spectator",
    COLOR: 13,
    SHAPE: 0,
    BODY: {
      DAMAGE: 0,
      HEALTH: 1000
    }
  }),
  (exports.Beta_Tester = {
    PARENT: [exports.genericTank],
    LABEL: "BT",
    RESET_UPGRADES: true,

    LEVEL: -1,
    BODY: {
      // def
      SHIELD: 1000,
      REGEN: 10,
      HEALTH: 100,
      DAMAGE: 10,
      DENSITY: 20,
      FOV: 2
    },
    SHAPE: 0,
    TURRETS: [],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.op]),
          TYPE: [exports.bullet, { SHAPE: 5 }]
        }
      }
    ]
  });
exports.spectator = {
  PARENT: [exports.genericTank],
  LABEL: "Spectator",
  RESET_UPGRADES: true,

  LEVEL: -1,
  DRAW_HEALTH: false,
  CAN_GO_OUTSIDE_ROOM: true,
  TEAM: -100,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 9999999,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 7,
    SPEED: 100,
    VISIBLE: false,
    SHAPE: 0,
    BODY: {
      HEALTH: base.HEALTH * 99999999999,
      REGEN: base.REGEN * 99999999999
    }
  }
};
exports.pentadecagonchip = {
  PARENT: [exports.sunchip],
  LABEL: "",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SHAPE: 15,
  HEALTH: 10,
  SIZE: 100,
  DAMAGE: 10,
  BODY: {
    DAMAGE: base.DAMAGE * 30,
    DAMAGE: base.DAMAGE * 80
  }
};
exports.pentachip = {
  PARENT: [exports.sunchip],
  LABEL: "",
  SIZE: 15,
  DRAW_HEALTH: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: false },
  SHAPE: 5,
  HEALTH: 10,
  DAMAGE: 10,
  BODY: {
    DAMAGE: base.DAMAGE * 6,
    DAMAGE: base.DAMAGE * 20
  }
};
exports.eggswarm = {
  PARENT: [exports.swarm],
  LABEL: "",
  DRAW_HEALTH: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SHAPE: 0,
  HEALTH: 10,
  DAMAGE: 0.5,
  BODY: {
    DAMAGE: base.DAMAGE * 3,
    DAMAGE: base.DAMAGE * 3
  }
};
exports.eggchip = {
  PARENT: [exports.sunchip],
  LABEL: "",
  DRAW_HEALTH: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SHAPE: 0,
  HEALTH: 10,
  DAMAGE: 0.5,
  BODY: {
    DAMAGE: base.DAMAGE * 3,
    DAMAGE: base.DAMAGE * 3
  }
};
exports.tiky = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  MAX_CHILDREN: 30,
  BODY: {
    FOV: base.FOV * 1.05
    //BARRELES
  },
  LABEL: "Tiky",
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [18, 10, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.pentachip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.pentachip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.pentachip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.pentachip,
        AUTOFIRE: true
      }
    }
  ]
};
exports.Tricky = {
  PARENT: [exports.genericTank],
  LABEL: "Tricky!",
  DANGER: 6,
  SIZE: 100,
  MAX_CHILDREN: 50,
  BODY: {
    FOV: base.FOV * 1.05
    //BARRELES
  },
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [30, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.pentadecagonchip,
        AUTOFIRE: true
      }
    }
  ]
};
/************************************************************************/
//SK-X Minions
/************************************************************************/
exports.sk1minion = {
  PARENT: [exports.minion],
  LABEL: "",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SHAPE: 15,
  HEALTH: 10,
  SIZE: 100,
  DAMAGE: 10,
  BODY: {
    DAMAGE: base.DAMAGE * 1,
    DAMAGE: base.DAMAGE * 80
  },
  LABEL: "Quadral Square Minion",
  SHAPE: 4,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 90, 180, 0],
      TYPE: exports.auto3gun
    }, //gg you broke my game!!
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 270, 180, 0],
      TYPE: exports.auto3gun
    } //WELL I DINT SEE NOTHING!
  ],
  GUNS: []
}; //STOP
exports.sk3minion = {
  PARENT: [exports.minion],
  LABEL: "",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SHAPE: 15,
  HEALTH: 10,
  SIZE: 100,
  DAMAGE: 10,
  BODY: {
    DAMAGE: base.DAMAGE * 2,
    DAMAGE: base.DAMAGE * 80
  },
  LABEL: "SK-3 Minion",
  SHAPE: 4,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: exports.director
    },
    {
      POSITION: [10, 8, 0, 90, 180, 0],
      TYPE: exports.director //well I DIDNT SEE NOTHING
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: exports.director
    },
    {
      POSITION: [10, 8, 0, 270, 180, 0],
      TYPE: exports.director
    }
  ],
  GUNS: []
}; //asdwsdasdwsd
/************************************************************************/
//SK-X Turrets
(exports.sk4builder = {
  PARENT: [exports.genericTank],
  LABEL: "Build",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload]),
        TYPE: exports.trap
      }
    }
  ]
}), //  // / //// // // FUCK THIS SHIT IM OUT
  /************************************************************************/
  (exports.sk1builder = {
    PARENT: [exports.genericTank],
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
      SPEED: base.SPEED * 0.8,
      FOV: base.FOV * 1.15
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
          TYPE: exports.block
        }
      }
    ]
  });
exports.guncolor = {};
/************************************************************************/
//Now Onto The SK-X
/************************************************************************/
exports.sk1 = {
  LABEL: "SK-1", //SK is Square King
  FACING_TYPE: "toTarget",
  SHAPE: 4,
  SIZE: 25,
  COLOR: 13,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 17.5, 0, 0, 0, 0],
      TYPE: exports.auto3gun
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.sk1builder
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.sk1minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.eggmancer = {
  LABEL: "eggmancer",
  SHAPE: 0,
  MAX_CHILDREN: 30,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 2.5, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.morereload]),
        STAT_CALCULATOR: gunCalcNames.drone,
        TYPE: exports.eggchip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 5, 2.5, 0, 0, 90, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.morereload]),
        STAT_CALCULATOR: gunCalcNames.drone,
        TYPE: exports.eggchip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 5, 2.5, 0, 0, 180, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.morereload]),
        STAT_CALCULATOR: gunCalcNames.drone, //from Tricky: ok im testing the celestials strenght
        TYPE: exports.eggchip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 5, 2.5, 0, 0, 270, 0.9], //From Richi: STOP KILLING ME
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.morereload]),
        STAT_CALCULATOR: gunCalcNames.drone,
        TYPE: exports.eggchip,
        AUTOFIRE: true
      }
    }
  ]
};
exports.sk2 = {
  LABEL: "SK-2", //SK is Square King
  FACING_TYPE: "autospin",
  SHAPE: 4,
  SIZE: 25,
  COLOR: 13,
  TURRETS: [
    //U Forgot To Put The Maleficitor Barrel from Tankster.io
    {
      POSITION: [10, 17.5, 0, 0, 0, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 17.5, 0, 180, 0, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 90, 190, 0],
      TYPE: exports.sk1builder
    },
    {
      POSITION: [10, 8, 0, -90, 190, 0],
      TYPE: exports.sk1builder
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.sk1builder
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.sk1minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true, 
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }, 
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.sunchip, 
        STAT_CALCULATOR: gunCalcNames.drone, 
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 180, 0]
    }
  ]
};

exports.sk3 = {
  LABEL: "SK-3", //SK is Square King
  FACING_TYPE: "autospin",
  SHAPE: 4,
  SIZE: 25,
  COLOR: 13,
  TURRETS: [
    //U Forgot To Put The Maleficitor Barrel from Tankster.io
    {
      POSITION: [10, 17.5, 0, 0, 0, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 17.5, 0, 180, 0, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [3.75, 9, 0, 45, 360, 1],
      TYPE: exports.sk1builder
    },
    {
      POSITION: [3.75, 9, 0, 135, 360, 1],
      TYPE: exports.sk1builder
    },
    {
      POSITION: [3.75, 9, 0, 225, 360, 1],
      TYPE: exports.sk1builder
    },
    {
      POSITION: [3.75, 9, 0, 315, 360, 1],
      TYPE: exports.sk1builder
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.hiveshooter, { LABEL: "Swarmer" }]
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.sk3minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true, 
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }, 
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.sk1minion, 
        STAT_CALCULATOR: gunCalcNames.drone, 
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 7
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 7
      }
    }
  ]
};
exports.boostdis = {
  PARENT: [exports.genericTank],
  LABEL: "Boost these pentagons!",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.morereload]),
        TYPE: exports.pentachip,
        MAX_CHILDREN: 20,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.boostthicc = {
  PARENT: [exports.genericTank],
  LABEL: "Boost these pentagons!",
  MAX_CHILDREN: 16,
  SIZE: 6,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 25, 1, 0, 0, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.morereload]),
        TYPE: exports.pentachip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [100, 25, 1, 0, 0, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.morereload]),
        TYPE: exports.necromancer,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [100, 25, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.morereload]),
        TYPE: exports.overlord,
        AUTOFIRE: true
      }
    }
  ]
};
exports.WTF = {
  PARENT: [exports.genericTank],
  LABEL: "nope",
  MAX_CHILDREN: 10,
  SIZE: 20,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.minion,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [20, 10, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.minion,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [20, 10, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.minion,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [20, 10, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.minion,
        AUTOFIRE: true
      }
    }
  ]
};
exports.Wot = {
  PARENT: [exports.genericTank],
  LABEL: "Penta trap",
  SIZE: 20,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [20, 5, 1, 0, 0, 20, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [20, 5, 1, 0, 0, -20, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [23, 5, 1, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [18, 5, 1, 0, 0, 40, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [18, 5, 1, 0, 0, -40, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.trap
      }
    }
  ]
};
exports.trapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.trap3 = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper-3",
  FACING_TYPE: "autospin",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.trapper
    },
    {
      POSITION: [10, 10, 0, 120, 180, 0],
      TYPE: exports.trapper
    },
    {
      POSITION: [10, 10, 0, 240, 180, 0],
      TYPE: exports.trapper
    }
  ]
};
(exports.swarming = {
  PARENT: [exports.genericTank],
  LABEL: "SwArMeR",
  HEALTH: 10,
  SHEALD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 0.6, 0, 6, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [14, 5, 0.6, 0, -6, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [20, 10, 0.6, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.swarm
      }
    }
  ]
}),
  (exports.swarming2 = {
    PARENT: [exports.genericTank],
    LABEL: "Double SwArMeR",
    HEALTH: 10,
    SHIELD: 9, //lol
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    },
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 0.6, 0, 6, 0, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [14, 5, 0.6, 0, -6, 0, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [20, 10, 0.6, 0, 0, 0, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.swarm
        }
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 0.6, 0, 6, 180, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [14, 5, 0.6, 0, -6, 180, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [20, 10, 0.6, 0, 0, 180, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.swarm
        }
      }
    ]
  }),
  (exports.swarming4 = {
    PARENT: [exports.minion],
    LABEL: "SwArMeR",
    HEALTH: 10,
    SHEALD: 9,
    DENSITY: 2,
    CONTROLLERS: ["minion"],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 5, 0.9, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.eggswarm
        }
      }
    ]
  });
exports.WtF = {
  PARENT: [exports.genericTank],
  LABEL: "WHY",
  MAX_CHILDREN: 10,
  BROADCAST_MESSAGE: "why kill me",
  SIZE: 10,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.swarming4,
        AUTOFIRE: true
      }
    }
  ]
};
exports.WtF2 = {
  PARENT: [exports.miniboss],
  LABEL: "Summoner",
  MAX_CHILDREN: 40,
  SIZE: 20,
  SHAPE: 4,
  VALUE: 150000,
  COLOR: 3,
  FOV: 1.4,
  FACING_TYPE: "autospin",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT   X       Y     ANGLE   DELAY */
      POSITION: [10, 5, 1.8, 0, 0, 90, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.sunchip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [10, 5, 1.8, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.sunchip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [10, 5, 1.8, 0, 0, 270, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.sunchip,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [10, 5, 1.8, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.sunchip,
        AUTOFIRE: true
      }
    }
  ]
};
exports.horn = {
  PARENT: [exports.genericTank],
  LABEL: "Horn",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT   X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1.3, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 1.1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0.9, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0.7, 0, 0, 0, 0.9], //STOP
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0.5, 0, 0, 0, 1.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.SeNtRy = {
  PARENT: [exports.sentry],
  LABEL: "Sentry",
  SIZE: 20,
  SHAPE: 3,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [15, 10, 2, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.eggswarm,
        AUTOFIRE: true,
        MAX_CHILDREN: 10
      }
    }
  ]
};
exports.thrster = {
  PARENT: [exports.bullet],
  SPEED: 7.5
};
exports.rotatormiss = {
  PARENT: [exports.missile],
  LABEL: "",
  FACING_TYPE: "autospin",
  SIZE: 5,
  SHAPE: 0,
  COLOR: 13,
  INDEPENDENT: true,
  BODY: {
    HEALTH: 2, //BRUH
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
    RANGE: 199
  },
  DANGER: 7,
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [15, 5, 2, 0, 0, 90, 0.3], //Dont Touch
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.thrster, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true
      }
    }, //
    {
      POSITION: [15, 5, 2, 0, 0, 180, 0.3], //Dont Touch
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.thrster, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 5, 2, 0, 0, 270, 0.3], //Dont Touch
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.thrster, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 5, 2, 0, 0, 0, 0.3], //Dont Touch
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.thrster, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true
      }
    }
  ] //NO! DONT TOUCH
};
exports.rotator = {
  PARENT: [exports.genericTank],
  LABEL: "Rotator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, -1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.rotatormiss,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.page3 = {
  PARENT: [exports.genericTank],
  LABEL: "Developer B PG2",
  FACING_TYPE: "autospin",
  GUNS: [
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    {
      POSITION: [15, 10, 0.8, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.page4 = {
  PARENT: [exports.genericTank],
  LABEL: "PAGE4 (READ YET AGAIN)",
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, -1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.rotatormiss,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.page5 = {
  PARENT: [exports.genericTank],
  LABEL: "PAGE 5 [WTF]",
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, -1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.rotatormiss,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.page5_3 = {
  PARENT: [exports.genericTank],
  LABEL: "Page 5 (WTF)-3",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [11, 8, 0, 0, 180, 0],
      TYPE: exports.page5
    },
    {
      POSITION: [11, 8, 0, 120, 180, 0],
      TYPE: exports.page5
    },
    {
      POSITION: [11, 8, 0, 240, 180, 0],
      TYPE: exports.page5
    }
  ]
};
exports.horn3 = {
  PARENT: [exports.genericTank],
  LABEL: "Horn-3",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [11, 8, 0, 0, 180, 0],
      TYPE: exports.hornTurret
    },
    {
      POSITION: [11, 8, 0, 120, 180, 0],
      TYPE: exports.hornTurret
    },
    {
      POSITION: [11, 8, 0, 240, 180, 0],
      TYPE: exports.hornTurret
    }
  ] //HUH??
};
exports.pentatrap3 = {
  PARENT: [exports.genericTank],
  LABEL: "pentatrap-3",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [11, 8, 0, 0, 180, 0],
      TYPE: exports.Wot
    },
    {
      POSITION: [11, 8, 0, 120, 180, 0],
      TYPE: exports.Wot
    },
    {
      POSITION: [11, 8, 0, 240, 180, 0],
      TYPE: exports.Wot
    } //Wot
  ]
};
exports.rotator3 = {
  PARENT: [exports.genericTank],
  LABEL: "Rotator-3",
  SIZE: 60,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      //Laggy, Time To Restart The Server
      POSITION: [11, 8, 0, 0, 180, 0],
      TYPE: exports.rotator
    },
    {
      POSITION: [11, 8, 0, 120, 180, 0],
      TYPE: exports.rotator
    },
    {
      POSITION: [11, 8, 0, 240, 180, 0],
      TYPE: exports.rotator
    }
  ] //ok
};

//Theia
//Theia Bullets
exports.theiaSunchip = {
  PARENT: [exports.sunchip],
  SHAPE: 4,
  COLOR: 13,
  CONTROLLERS: ["nearestDifferentMaster"],
  BODY: {
    FOV: 0.5,
    HEALTH: 3,
    DAMAGE: 1
  },
  DRAW_HEALTH: false
};
exports.theiaMissile = {
  //Hey yeslander
  PARENT: [exports.bullet],
  LABEL: "Missile",
  COLOR: 13,
  INDEPENDENT: true,
  FACING_TYPE: "autospin",
  BODY: {
    RANGE: 199,
    HEALTH: 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.arty,
          g.arty
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.theiaMissileShooter = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "",
  DANGER: 7,
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 15, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, -1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.celestialSkimmer
        ]),
        TYPE: exports.theiaMissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.celestialTrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.5
  },
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
function bossStats(options = {}) {
  if (!options.health) options.health = 1;
  if (!options.damage) options.damage = 1;
  if (!options.speed) options.speed = 1;
  if (!options.fov) options.fov = 1;
  return {
    HEALTH: base.HEALTH * 15 * options.health,
    DAMAGE: base.DAMAGE * 1.5 * options.damage,
    SPEED: base.SPEED * 0.1 * options.speed,
    DENSITY: 500,
    FOV: base.FOV * 1.125 * options.fov,
    SHIELD: base.SHIELD * 0.75
  };
}
const setBuild = build => {
  let skills = build.split(build.includes("/") ? "/" : "").map(r => +r);
  if (skills.length !== 10)
    throw new RangeError("Build must be made up of 10 numbers");
  return [6, 4, 3, 5, 2, 9, 0, 1, 8, 7].map(r => skills[r]);
};
exports.celestialTrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          [4, 1, 1, 1, 2, 1, 0.25, 1, 1, 1, 10, 1, 1]
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    }
  ]
};
let celestialTrapTurretArray = [];
for (let i = 0; i < 9; i++) {
  celestialTrapTurretArray.push({
    POSITION: [6, 9, 0, i * (360 / 9) + 360 / 9 / 2, 0, 0],
    TYPE: [
      exports.celestialTrapTurret,
      { CONTROLERS: ["nearestDifferentMaster"] }
    ]
  });
}
//Theia Layers
exports.theiaMissileBody = {
  PARENT: [exports.genericTank],
  LABEL: "Theia",
  SHAPE: 5,
  SIZE: 13, //Why are you going
  TURRETS: [
    {
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.theiaMissileShooter
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.theiaMissileShooter
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.theiaMissileShooter
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.theiaMissileShooter
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.theiaMissileShooter
    }
  ]
};
exports.theiaSunchipBody = {
  PARENT: [exports.genericTank],
  LABEL: "Theia",
  SHAPE: 7,
  SIZE: 10,
  MAX_CHILDREN: 45,
  GUNS: [
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 77.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -77.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.theiaSunchip, { INDEPENDENT: false }]
      }
    }
  ]
};
exports.theia2 = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Theia",
  COLOR: 13,
  SHAPE: 9,
  SIZE: 40,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  BODY: bossStats({
    health: 3,
    speed: 0.5
  }),
  SKILL: setBuild("6929987040"),
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: [exports.theiaSunchipBody, { COLOR: 13 }],
      AUTOFIRE: true
    },
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.theiaMissileBody, { COLOR: 13 }]
    }
  ]
};

//Freyja Layers
exports.freyjaCruiserBody = {
  PARENT: [exports.genericTank],
  LABEL: "Freyja",
  SHAPE: 7,
  SIZE: 10,
  INDEPENDENT: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 9, 0, (360 * 3.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 2.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 1.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 0.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 0.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 1.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 2.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    }
  ]
};
exports.freyjaGunnerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Freyja",
  SHAPE: 5,
  SIZE: 10,
  INDEPENDENT: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 108, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 35, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -35, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -108, 120, 0],
      TYPE: exports.auto4gun
    }
  ]
};

//Freyja Bullets
exports.freyjaCruiserTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  COLOR: 1,
  INDEPENDENT: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  STAT_NAMES: statnames.swarm,
  BODY: {
    FOV: base.FOV * 10
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
//Freyja Layers
exports.freyjaCruiserBody = {
  PARENT: [exports.genericTank],
  LABEL: "Freyja",
  SHAPE: 7,
  SIZE: 10,
  INDEPENDENT: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 9, 0, (360 * 3.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 2.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 1.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 0.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 0.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 1.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 2.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    }
  ]
};
exports.freyjaGunnerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Freyja",
  SHAPE: 5,
  SIZE: 10,
  INDEPENDENT: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 108, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 35, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -35, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -108, 120, 0],
      TYPE: exports.auto4gun
    }
  ]
};
exports.freyja2 = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Freyja",
  COLOR: 1,
  SHAPE: 9,
  SIZE: 40,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  BODY: bossStats({
    health: 3,
    speed: 0.5
  }),
  SKILL: setBuild("6929987040"),
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: [exports.freyjaCruiserBody, { COLOR: 1 }]
    },
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.freyjaGunnerBody, { COLOR: 1 }]
    }
  ]
};
//VG-X
exports.vg1 = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  SHAPE: 3,
  COLOR: 6,
  LABEL: "VG-1",
  SIZE: 20,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, -60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.nailgun
    }
  ]
};
exports.vg = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  SHAPE: 3,
  COLOR: 6,
  SIZE: 15,
  LABEL: "VG",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, -60, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};
exports.vghalf = makeAuto(exports.vg, "VG-0.5", {
  size: 10,
  type: exports.mini,
  independent: false
});

exports.vg2 = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  SHAPE: 3,
  COLOR: 6,
  SIZE: 30,
  LABEL: "VG-2",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, -60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8, 0, 180, 360, 1],
      TYPE: exports.nailgun ///i uncolored the turrets
    },
    {
      POSITION: [5, 8, 0, 60, 360, 1],
      TYPE: exports.nailgun
    },
    {
      POSITION: [5, 8, 0, -60, 360, 1],
      TYPE: exports.nailgun //FINE
    }
  ]
};
exports.vg3 = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  SHAPE: 6,
  COLOR: 6,
  SIZE: 40,
  LABEL: "VG-3",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 190, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 60, 190, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -60, 190, 0],
      TYPE: exports.auto4gun
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8, 0, 60, 360, 1],
      TYPE: exports.nailgun
    },
    {
      POSITION: [5, 8, 0, 120, 360, 1],
      TYPE: exports.nailgun
    },
    {
      POSITION: [5, 8, 0, 180, 360, 1],
      TYPE: exports.nailgun
    }, //Cool
    {
      POSITION: [5, 8, 0, 240, 360, 1],
      TYPE: exports.nailgun
    },
    {
      POSITION: [5, 8, 0, 300, 360, 1],
      TYPE: exports.nailgun
    },
    {
      POSITION: [5, 8, 0, 0, 360, 1],
      TYPE: exports.nailgun
    }
  ]
}; //uh
//Zaphkiel Bullets
exports.zaphkielSkimmer = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  COLOR: 2,
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Skimmer",
  DANGER: 7,
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.celestialSkimmer
        ]),
        TYPE: exports.hypermissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
//Zaphkiel Layers
exports.zaphkielSkimmerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Zaphkiel Skimmer",
  SHAPE: 5,
  SIZE: 10,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.zaphkielSkimmer
    }
  ]
};
exports.zaphkielDroneBody = {
  PARENT: [exports.genericTank],
  LABEL: "Zaphkiel Drone",
  SHAPE: 7,
  SIZE: 10,
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  MAX_CHILDREN: 28,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 6.5, 1.2, 7.5, 0, (360 * 3.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, (360 * 2.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, (360 * 1.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, (360 * 0.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, (-360 * 0.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, (-360 * 1.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, (-360 * 2.5) / 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.celestial]),
        TYPE: [exports.drone, { INDEPENDENT: false }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.paladinSwarmer = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  COLOR: 14,
  BODY: {
    FOV: base.FOV * 4
  },
  LABEL: "Swarmer",
  GUNS: [
    {
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.hive,
          g.halfreload,
          g.celestialHive
        ]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.paladinSunchip = {
  PARENT: [exports.sunchip],
  SHAPE: 5,
  COLOR: 14,
  CONTROLLERS: ["nearestDifferentMaster"],
  BODY: {
    FOV: 0.5,
    HEALTH: 5,
    DAMAGE: 1
  },
  DRAW_HEALTH: false
};
//Paladin Layers
exports.paladinSwarmerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin",
  SHAPE: 5,
  SIZE: 10,
  TURRETS: [
    {
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.paladinSwarmer
    }
  ]
};
exports.paladinSunchipBody = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin",
  SHAPE: 7,
  SIZE: 10,
  MAX_CHILDREN: 15,
  GUNS: [
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 77.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -77.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celestial]),
        TYPE: [exports.paladinSunchip, { INDEPENDENT: false }],
        AUTOFIRE: true
      }
    }
  ]
};
exports.paladin2 = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Paladin",
  COLOR: 14,
  SHAPE: 9,
  SIZE: 40,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  BODY: bossStats({
    health: 3,
    speed: 0.5
  }),
  SKILL: setBuild("6929987040"),
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: [exports.paladinSunchipBody, { COLOR: 14 }],
      AUTOFIRE: true
    },
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.paladinSwarmerBody, { COLOR: 14 }]
    }
  ]
};
exports.zaphkiel2 = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Zaphkiel",
  COLOR: 2,
  SHAPE: 9,
  SIZE: 40,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  BODY: bossStats({
    health: 3,
    speed: 0.5
  }),
  SKILL: setBuild("6929987040"),
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: [exports.zaphkielDroneBody, { COLOR: 2 }]
    },
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.zaphkielSkimmerBody, { COLOR: 2 }]
    }
  ]
};
//vg-4 layer
exports.vg4NailBody = {
  PARENT: [exports.miniboss],
  LABEL: "VG-4 Nailgun layer",
  COLOR: 6,
  SHAPE: 4, //HOW SPIN DO THAT
  SIZE: 10, //we dont need controllers i wasent able to control this layer!
  //Control*
  TURRETS: [
    {
      POSITION: [9, 8, 0, 0, 180, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [9, 8, 0, 90, 180, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [9, 8, 0, -90, 180, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.nailgun
    } //Ok fine
  ]
};
exports.vg5HiveBody = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  SHAPE: 5,
  LABEL: "VG-5 Hive layer", //Cool
  CONTORLLERS: ["reversespin"], //Lol
  COLOR: 6,
  //LOL
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.hiveshooter
    },
    {
      POSITION: [9, 8, 0, 36, 180, 0],
      TYPE: exports.hiveshooter
    },
    {
      //Dont Edit Just test It
      POSITION: [9, 8, 0, -36, 180, 0],
      TYPE: exports.hiveshooter
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.hiveshooter
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.hiveshooter //gg we made it now lets make vg5
    } //Re-maked
  ]
};
exports.vg4MiniBody = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  SHAPE: 5, //make vg5? WE NEED like 1 layer to make like a swarm one lets do it
  COLOR: 6, //ok
  SIZE: 40, //Ye
  LABEL: "VG-4 Minigun layer", //Cool
  CONTORLLERS: ["reversespin"], //Lol
  //LOL
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 36, 180, 0],
      TYPE: exports.mini
    },
    {
      POSITION: [9, 8, 0, -36, 180, 0],
      TYPE: exports.mini
    },
    {
      //Dont Edit Just test It
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.mini
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.mini
    },
    {
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.mini
    } //Re-maked
  ]
};
exports.vg4 = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false },
  NAME: "Arras.io Celestial",
  SHAPE: 6,
  VALUE: 1000000,
  COLOR: 6,
  SIZE: 80, //dont edit i go test it! SUCCESS! it woked
  LABEL: "VG-4",
  TURRETS: [
    //Bro
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 60, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 120, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 180, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 240, 0, 0],
      TYPE: exports.celestialTrapTurret //Oops
    },
    {
      POSITION: [10, 8, 0, 300, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 0, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.vg4MiniBody
    },
    {
      POSITION: [10, 0, 0, 0, 0, 1], //let it to 0 at the layers to work like a layer
      TYPE: exports.vg4NailBody
    } //Re-maked
  ] //Like It Changed
}; //make vg5?
(exports.vg5 = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: false }, //Add Ny-X
  SHAPE: 6, // what to make? rogue celestial? nice ok then we make the rogue celestial its not that hard then i make EQ-1 that EQ is ez
  NAME: "Arras.io Eternal", //lemme make eq-1 then Ny-x
  COLOR: 6, //lol 10m is for the eternal we made VG-5
  VALUE: 10000000, //WTF 10M
  SIZE: 80, //SUCCESS!!!!!!!!!!!
  LABEL: "VG-5", //VG-5 Has Animated
  //To Late Lol Lag
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 60, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 120, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 180, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 240, 0, 0],
      TYPE: exports.celestialTrapTurret //Oops
    },
    {
      POSITION: [10, 8, 0, 300, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 0, 0, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.vg5HiveBody
    },
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.vg4MiniBody
    },
    {
      POSITION: [7.5, 0, 0, 0, 0, 1],
      TYPE: exports.vg4NailBody
    } //nice
  ] //to late lol lag
  //WE GOT REVENGE! DONT MAKE ME LAG
}),
  //EQ-1-4
  (exports.EQ1drone = {
    PARENT: [exports.drone],
    SHAPE: 0,
    RANGE: 30,
    LABEL: "Egg Drone"
  }); // /\ See Egg Drone
exports.EQ0 = {
  PARENT: [exports.genericTank],
  LABEL: "EQ-0",
  SHAPE: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1], //lets make Ny-1
      TYPE: exports.celestialTrapTurret //By EQ-1-4
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5, 1.5, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 300, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    }
  ] //WHY
};
exports.EQ1 = {
  PARENT: [exports.miniboss],
  LABEL: "EQ-1",
  SHAPE: 6,
  COLOR: 19,
  SIZE: 20,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17, 0, 0, 0, 360, 1], //lets make Ny-1
      TYPE: exports.egg
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1], //lets make Ny-1
      TYPE: exports.celestialTrapTurret //By EQ-1-4
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5, 1.5, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 300, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    }
  ]
};
exports.EQ2 = {
  PARENT: [exports.miniboss],
  LABEL: "EQ-2",
  SHAPE: 6,
  COLOR: 19,
  SIZE: 40,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: exports.egg
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 120, 180, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [10, 8, 0, 240, 180, 0],
      TYPE: exports.celestialTrapTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5, 1.5, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 300, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    } //im asking woomy arras discord to show how a EQ-3 looks like
  ] //Go Woomy Arras Back
}; //looks like how to make EQ-3
exports.EQ0minion = {
  PARENT: [exports.minion],
  LABEL: "EQ-3 Minion",
  SHAPE: 6,
  CONTROLLERS: ["minion"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1], //lets make Ny-1
      TYPE: exports.celestialTrapTurret //By EQ-1-4
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5, 1.5, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    }, //ok you make the devastor for it
    {
      //Hi Tricky Make NY-3
      //DEVA?
      POSITION: [12, 7.5, 1.5, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5, 1.5, 0, 0, 300, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    } //ok
  ] //WHY
}; //MAKE NY-2
exports.EQ3 = {
  PARENT: [exports.miniboss],
  LABEL: "EQ-3",
  SHAPE: 12,
  COLOR: 19,
  SIZE: 40,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: exports.egg
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 5, 0, 0, 360, 1],
      TYPE: exports.celestialTrapTurret
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 5, 0, 120, 360, 1],
      TYPE: exports.celestialTrapTurret
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 5, 0, 240, 360, 1],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [5, 8, 0, 30, 190, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [5, 8, 0, 90, 190, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [5, 8, 0, 150, 190, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [5, 8, 0, 210, 190, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [5, 8, 0, 270, 190, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [5, 8, 0, 330, 190, 0],
      TYPE: exports.celestialTrapTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 120, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 240, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ1drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ0minion,
        AUTOFIRE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 300, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ0minion,
        AUTOFIRE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7.5 / 2, 1.5, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.EQ0minion,
        AUTOFIRE: true,
        MAX_CHILDREN: 2
      } //gliching from EQ-4 i was choosen to upgrade to railgun wtf | Yes
    } //im asking woomy arras discord to show how a EQ-3 looks like
  ] //Go Woomy Arras Back
};
//EQ-X Minions
//EQ-X Layers
//Ny-X Turrets
//SENTRY SECTION
exports.controlsentry = {
  PARENT: [exports.genericTank],
  LABEL: "Baka",
  SHAPE: 3,
  COLOR: 5,
  SIZE: 10,
  VARIES_IN_SIZE: true,
  AI: { NO_LEAD: true },
  BODY: {
    ACCELERATION: base.ACCEL * 0.45,
    FOV: base.FOV * 0.65,
    SPEED: base.SPEED * 0.6,
    HEALTH: base.HEALTH * 0.85
  }
};
exports.controlsentryGun = makeAuto(exports.controlsentry, "Auto Sentry");
exports.controlsentryGunHeavy = makeAuto(
  exports.controlsentry,
  "Heavy Auto Sentry",
  { type: exports.heavy3gun, size: 12 }
);
exports.controlsentryGunSniper = makeAuto(
  exports.controlsentry,
  "Sniper Sentry",
  { type: exports.sniper3gun, size: 12 }
);
exports.controlsentryQuadtrap = makeAuto(
  exports.controlsentry,
  "Quad Trap Sentry",
  { type: exports.quadtrapper, size: 12 }
);
//end of seciton
exports.ny1railgun = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Railgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  TURRETS: [
    {
      POSITION: [16, 0, 0, 0, 0, 1],
      TYPE: [exports.pentagon, { COLOR: 13 }]
    }
  ],
  GUNS: [
    {
      POSITION: [2.5, 8.5, 1, 30, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 25, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [32.5, 2, 1, 0, -4, 0, 0]
    },
    {
      POSITION: [32.5, 2, 1, 0, 4, 0, 0]
    }
  ] //WHY DID I NOT CONNECT
};
//Let me make DOUBLE RAILGUN
exports.ny2dourailgun = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Double Railgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  TURRETS: [
    {
      POSITION: [16, 0, 0, 0, 0, 1],
      TYPE: [exports.gem, { COLOR: 13 }]
    }
  ],
  GUNS: [
    {
      POSITION: [2.5, 8.5, 1, 30, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 25, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 20, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 15, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 30, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 25, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 20, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [2.5, 8.5, 1, 15, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [32.5, 2, 1, 0, -9, 0, 0]
    },
    {
      POSITION: [32.5, 2, 1, 0, 9, 0, 0]
    },
    {
      POSITION: [32.5, 2, 1, 0, -2.25, 0, 0]
    },
    {
      POSITION: [32.5, 2, 1, 0, 2.25, 0, 0]
    }
  ]
};
//Ny-X Devastators
exports.ny1deva = {
  PARENT: [exports.miniboss],
  DANGER: 6,
  LABEL: "Devastor",
  SHAPE: 4,
  COLOR: 19,
  SKILL: skillSet({
    rld: 0.1,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.sniper3gun //By Ny-1
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.ny2deva = {
  PARENT: [exports.miniboss],
  DANGER: 6,
  LABEL: "Twin Devastor",
  SHAPE: 4,
  COLOR: 19,
  SKILL: skillSet({
    rld: 0.2,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.sniper3gun //By Ny-2
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 7, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
}; //nothing no ss of a EQ-3 i needed to keep a ss of it lets make a custom EQ-3

exports.ny3deva = {
  PARENT: [exports.miniboss],
  DANGER: 6,
  LABEL: "Triple Devastor",
  SHAPE: 4,
  COLOR: 19,
  SKILL: skillSet({
    rld: 0.3,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  TURRETS: [
    //Ok i made triple devastor
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.sniper3gun //By Ny-2
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 7, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
};
//Ny-X Minions
//Nothing
//Ny-X
exports.ny1 = {
  PARENT: [exports.miniboss], //Ok. Woomy Arras Is Dead
  LABEL: "NY-1", //then eq 2 i need to look at a pic of it bc idk how it looks dint find it
  SHAPE: 6, //Ok
  SIZE: 20, //So. stop changing my token
  COLOR: 19,
  TURRETS: [
    //Phew im back to normal colors
    {
      POSITION: [12, 14, 0, 0, 0, 0],
      TYPE: exports.ny1deva
    },
    {
      POSITION: [12, 14, 0, 120, 0, 0],
      TYPE: exports.ny1deva
    },
    {
      POSITION: [12, 14, 0, 240, 0, 0],
      TYPE: exports.ny1deva
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1], //Tricky You Need To make NY-2
      TYPE: exports.ny1railgun
    } //Then NY-2
  ], //then EQ-2
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ] //You Make NY-2
};
exports.ny2 = {
  PARENT: [exports.miniboss], //Ok. Woomy Arras Is Dead
  LABEL: "NY-2", //then eq 2 i need to look at a pic of it bc idk how it looks dint find it
  SHAPE: 6, //Ok
  SIZE: 40,
  COLOR: 19,
  TURRETS: [
    {
      POSITION: [12, 14, 0, 0, 0, 0],
      TYPE: exports.ny2deva
    },
    {
      POSITION: [12, 14, 0, 120, 0, 0],
      TYPE: exports.ny2deva
    }, //ok
    {
      //Look I Found EQ-3
      POSITION: [12, 14, 0, 240, 0, 0],
      TYPE: exports.ny2deva
    }, //thats the EQ-3 Body you see when you look in the mid bc its a smasher
    {
      // i found EQ-3 look! lets make it if not know where the barrel what type of it it is just look at the EQ-3 img
      //ok
      //Also WHERE IS EQ-3 BODY?
      POSITION: [12, 0, 0, 0, 360, 1], //Tricky You Need To make NY-2
      TYPE: exports.ny2dourailgun
    } //Then NY-2
  ], //then EQ-2
  GUNS: [
    {
      //https://cdn.discordapp.com/attachments/508125275675164673/876092576934019122/16289470989043797196572380950325.jpg
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, -0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.mach]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [7, 7.5, -0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.mach]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [7, 7.5, -0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.mach]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    }
  ] //
};
exports.ny3 = {
  PARENT: [exports.miniboss], //Ok. Woomy Arras Is Dead
  LABEL: "NY-3", //then eq 2 i need to look at a pic of it bc idk how it looks dint find it
  SHAPE: 6, //Ok
  SIZE: 40,
  COLOR: 19,
  TURRETS: [
    {
      POSITION: [12, 14, 0, 0, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [12, 14, 0, 120, 0, 0],
      TYPE: exports.ny3deva
    }, //ok
    {
      //Look I Found EQ-3
      POSITION: [12, 14, 0, 240, 0, 0],
      TYPE: exports.ny3deva
    }, //thats the EQ-3 Body you see when you look in the mid bc its a smasher
    {
      // i found EQ-3 look! lets make it if not know where the barrel what type of it it is just look at the EQ-3 img
      //ok
      //Also WHERE IS EQ-3 BODY?
      POSITION: [12, 0, 0, 0, 360, 1], //Tricky You Need To make NY-2
      TYPE: exports.ny2dourailgun
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 14, 0, 0, 360, 1],
      TYPE: [exports.ny1railgun]
    },
    {
      POSITION: [4, 14, 0, 120, 360, 1],
      TYPE: [exports.ny1railgun]
    },
    {
      POSITION: [4, 14, 0, 240, 360, 1],
      TYPE: [exports.ny1railgun]
    } //Then NY-2
  ], //then EQ-2
  GUNS: [
    {
      //https://cdn.discordapp.com/attachments/508125275675164673/876092576934019122/16289470989043797196572380950325.jpg
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, -0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.sunchip,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
        AUTOFIRE: true //Its Swarm WTF
      }
    },
    {
      POSITION: [7, 7.5, -0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.sunchip,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    }, //its sunchip  wtf
    {
      POSITION: [7, 7.5, -0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.sunchip,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      } //ye ik its yellow hm you dont put Turrets put guns and add that deftrap
    } //make defender i make defender trap
  ] // wait  shet sry
}; //why not connect?
exports.deftrap = {
  PARENT: [exports.trap],
  SHAPE: [[0, 0], [0, 0]], //I Finished The Defender
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [exports.trap, { COLOR: 3 }] //Yep Its Yellow
    }
  ]
};
exports.defbullet = {
  PARENT: [exports.bullet],
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [exports.bullet, { COLOR: 3 }]
    }
  ]
};
exports.defautoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Defender Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret
        ]),
        TYPE: exports.defbullet
      }
    }
  ]
};
(exports.defender = {
  PARENT: [exports.miniboss],
  LABEL: "Defender",
  SHAPE: 3,
  COLOR: 2,
  SIZE: 25,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 7, 0, 0, 360, 1],
      TYPE: [exports.defautoTurret]
    },
    {
      POSITION: [4, 7, 0, 120, 360, 1],
      TYPE: [exports.defautoTurret]
    },
    {
      POSITION: [4, 7, 0, 240, 360, 1],
      TYPE: [exports.defautoTurret]
    }
  ],
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.deftrap,
        STAT_CALCULATOR: gunCalcNames.trap
      } //LOL
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.deftrap,
        STAT_CALCULATOR: gunCalcNames.trap
      } //LOL
    },
    {
      POSITION: [14, 8, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.deftrap,
        STAT_CALCULATOR: gunCalcNames.trap
      } //LOL
    }
  ]
}),
  (exports.fallenbooster = {
    PARENT: [exports.genericTank],
    LABEL: "Fallen Booster",
    SKILL: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    SIZE: 24,
    COLOR: 39,
    BODY: {
      HEALTH: base.HEALTH * 35,
      SHIELD: base.SHIELD * 1.6,
      DENSITY: base.DENSITY * 7,
      SPEED: base.SPEED * 0.65,
      DAMAGE: base.DAMAGE * 0.7,
      PENETRATION: base.PENETRATION * 0.86
    },
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.muchmorerecoil,
            g.slow,
            g.weaker
          ]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  });
exports.fallenoverlord = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Overlord",
  DANGER: 7,
  SIZE: 24,
  COLOR: 39,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 20
  },
  MAX_CHILDREN: 40,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.fallenover, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 16
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.fallenover, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 16
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.fallenover, g.doublereload]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 4
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.fallenover, g.doublereload]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 16
      }
    }
  ]
};
exports.minion1 = {
  PARENT: [exports.minion],
  LABEL: "minion",
  HEALTH: 10,
  SHEALD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 20, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.halfreload,
          g.op,
          g.op,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    } //Make Arena Closer Gang
  ] //lemme test my script (ok)
}; //so rip unexpected token < lol <tank></made>
/*R.I.P*/
//error at minion no more lol
exports.arenagangminion = {
  PARENT: [exports.minion],
  LABEL: "Sniper Closer",
  COLOR: 13,
  SHAPE: 0,
  CAN_GO_OUTSIDE_ROOM: true,
  DRAW_HEALTH: false,
  SIZE: 30,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 5,
    HEALTH: base.HEALTH * 9999999999999999999999999,
    SHIELD: base.SHIELD * 9999999999999999999999999,
    REGEN: base.REGEN * 9999999999999999999999999,
    DAMAGE: base.DAMAGE * 9999999999999999999999999
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22.3, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.bullet //So i made Arena Closer Gang Sniper Closer Minion
      }
    }
  ]
};
exports.arenagangminion2 = {
  PARENT: [exports.minion],
  LABEL: "Machine Closer",
  COLOR: 13,
  SHAPE: 0,
  CAN_GO_OUTSIDE_ROOM: true,
  DRAW_HEALTH: false,
  SIZE: 30,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 5,
    HEALTH: base.HEALTH * 9999999999999999999999999,
    SHIELD: base.SHIELD * 9999999999999999999999999,
    REGEN: base.REGEN * 9999999999999999999999999,
    DAMAGE: base.DAMAGE * 9999999999999999999999999
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14.3, 10, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.arenagang = {
  PARENT: [exports.sentry],
  LABEL: "Arena Closer Gang",
  COLOR: 13,
  SHAPE: 0,
  CAN_GO_OUTSIDE_ROOM: true,
  DRAW_HEALTH: false,
  SIZE: 30,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 5,
    HEALTH: base.HEALTH * 9999999999999999999999999,
    SHIELD: base.SHIELD * 9999999999999999999999999,
    REGEN: base.REGEN * 9999999999999999999999999,
    DAMAGE: base.DAMAGE * 9999999999999999999999999
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14.3, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 19, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.arenagangminion,
        MAX_CHILDREN: 1
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 19, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.arenagangminion2,
        MAX_CHILDREN: 1
      }
    }
  ]
};
exports.facto = {
  PARENT: [exports.genericTank],
  LABEL: "factory Factory",
  HEALTH: 10,
  SHIELD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  }, //add sk-3? | ok | lets make it make the SK-3 minion
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        MAX_CHILDREN: 5,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.factomissile = {
  PARENT: [exports.genericTank],
  LABEL: "factory Factory",
  HEALTH: 10,
  SHIELD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  }, //add sk-3? | ok | lets make it make the SK-3 minion
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.missiletripleminion,
        MAX_CHILDREN: 5,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
(exports.factotwin = {
  PARENT: [exports.genericTank],
  LABEL: "factory Factory2",
  HEALTH: 10,
  SHEALD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        MAX_CHILDREN: 5,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.factory
      }
    },
    {
      POSITION: [15, 7, 1, 0, 6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        MAX_CHILDREN: 5,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.factory
      }
    }
  ]
}),
  (exports.factotriple = {
    PARENT: [exports.genericTank],
    LABEL: "factory Factory3 uhh",
    HEALTH: 10,
    SHEALD: 9,
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    }, //uh...
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, -6, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.minion1,
          MAX_CHILDREN: 6,
          AUTOFIRE: true,
          STAT_CALCULATOR: gunCalcNames.factory
        }
      },
      {
        POSITION: [15, 7, 1, 0, 6, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.minion1,
          MAX_CHILDREN: 6,
          AUTOFIRE: true,
          STAT_CALCULATOR: gunCalcNames.factory
        }
      },
      {
        POSITION: [17, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.minion1,
          MAX_CHILDREN: 6,
          AUTOFIRE: true,
          STAT_CALCULATOR: gunCalcNames.factory
        }
      }
    ]
  }),
  (exports.missiletriplemaker = {
    PARENT: [exports.genericTank],
    LABEL: "factory Factory drone",
    HEALTH: 10,
    SHEALD: 9,
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    }, //uh...
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.drone,
          MAX_CHILDREN: 30,
          AUTOFIRE: true,
          STAT_CALCULATOR: gunCalcNames.factory
        }
      }
    ]
  }),
  (exports.missiletriple = {
    PARENT: [exports.genericTank],
    LABEL: "Skimmer liner",
    HEALTH: 10,
    SHEALD: 9,
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    }, //uh...
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 5, 1, 0, 0, 0, 0.0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
          TYPE: exports.missile
        }
      },
      {
        POSITION: [13, 6, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
          TYPE: exports.missile
        }
      },
      {
        POSITION: [10, 7, 1, 0, 0, 0, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
          TYPE: exports.missile
        }
      }
    ]
  }),
  (exports.hunter2 = {
    //Lets make a cleaner
    PARENT: [exports.genericTank],
    LABEL: "Drone Hunter",
    HEALTH: 10,
    SHIELD: 9,
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    }, //uh...
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0.0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
          TYPE: exports.bullet
        }
      }, //lemme reset my internet | ok
      {
        //turning on done no lag
        POSITION: [21, 12, 1, 0, 0, 0, 0.2], //Its actually work
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
          TYPE: exports.bullet //Oh yes a hunter barrel
        } //Wait
      }, //fine
      {
        //But no cleaning | ok lets make a cleaning tank | wait a minute i try adding g.cleaner || (ok) {fromTricky}
        POSITION: [7, 12, 1.2, 8, 0, 180, 0], //Nope that isnt thicc
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]), //nice that may branch from hunter | Ok
          TYPE: exports.drone,
          MAX_CHILDREN: 5,
          AUTOFIRE: true
        }
      }
    ]
  }),
  (exports.testbedhunter2 = {
    //Lets make a cleaner
    PARENT: [exports.genericTank],
    LABEL: "Testbed Drone Hunter",
    HEALTH: 10,
    SHIELD: 9,
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    }, //uh...
    DANGER: 7,
    SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, -1.4, 0, 0, 0, 0.0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.op,
            g.fast,
            g.fast,
            g.doublereload,
            g.doublereload,
            g.doublereload,
            g.halfrecoil
          ]),
          TYPE: exports.devrocket
        }
      }, //lemme reset my internet | ok
      {
        //turning on done no lag
        POSITION: [21, 12, -1.4, 0, 0, 0, 0.2], //Its actually work
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.op,
            g.fast,
            g.fast,
            g.doublereload,
            g.doublereload,
            g.doublereload,
            g.halfrecoil
          ]),
          TYPE: exports.devrocket //Oh yes a hunter barrel
        } //Wait
      }, //fine
      {
        //But no cleaning | ok lets make a cleaning tank | wait a minute i try adding g.cleaner || (ok) {fromTricky}
        POSITION: [7, 12, 1.2, 8, 0, 180, 0], //Nope that isnt thicc
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.drone,
            g.over,
            g.op,
            g.fast,
            g.fast,
            g.doublereload,
            g.doublereload,
            g.doublereload, //Wtf
            g.halfrecoil
          ]), //nice that may branch from hunter | Ok
          TYPE: exports.drone,
          MAX_CHILDREN: 20,
          AUTOFIRE: true
        }
      }
    ]
  });
//Blue anonymous Do not edit my tank and it doesn't work
exports.cleaner = {
  PARENT: [exports.genericTank],
  LABEL: "Cleaner", //test
  BODY: {
    //not working
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
    DAMAGE: base.DAMAGE * 999
    //it isn't defined
  }, //uh...
  DANGER: 7, //fuck lag
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 0, 0, 0.0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.cleaner]),
        TYPE: exports.bullet
      }
    } //pls join my discord server https://discord.gg/PpeNzx33 if you want to be a coder (NO YOU IDIOT SHUT THE FUCK UP)
  ] //go to the rules and role rules to say where to apply for coder(NO SHUT UP YOU ARE DUMB PERSON)
};
(exports.missiletripleminion = {
  PARENT: [exports.minion],
  LABEL: "Skimmer liner",
  HEALTH: 10,
  SHEALD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  }, //uh...
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 6, 1, 0, 0, 0, 0.0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
        TYPE: exports.missile
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
        TYPE: exports.missile
      }
    },
    {
      POSITION: [17, 7, 1, 0, 0, 0, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
        TYPE: exports.missile
      }
    }
  ]
}),
  (exports.swarm3 = {
    PARENT: [exports.genericTank],
    LABEL: "Triple SwArMeR",
    HEALTH: 10,
    SHEALD: 9,
    DENSITY: 2,
    BODY: {
      HEALTH: base.HEALTH * 0.6,
      SHIELD: base.SHIELD * 0.6,
      DENSITY: base.DENSITY * 0.2
    }, //uh...
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 0.6, 0, 6, 0, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [14, 5, 0.6, 0, -6, 0, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [20, 10, 0.6, 0, 0, 0, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.swarm
        }
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 0.6, 0, 6, 120, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [14, 5, 0.6, 0, -6, 120, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [20, 10, 0.6, 0, 0, 120, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.swarm
        }
      },

      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 0.6, 0, 6, 240, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [14, 5, 0.6, 0, -6, 240, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [20, 10, 0.6, 0, 0, 240, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.swarm
        }
      }
    ]
  });
exports.swarm4 = {
  PARENT: [exports.genericTank],
  LABEL: "QUAD SWARMER??? WHAT",
  HEALTH: 10,
  SHEALD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  }, //uh...
  DANGER: 7,
  GUNS: []
};
for (let i = 0; i < 4; i++) {
  exports.swarm4.GUNS.push(
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 0.6, 0, 6, (360 / 4) * i, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [14, 5, 0.6, 0, -6, (360 / 4) * i, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [20, 10, 0.6, 0, 0, (360 / 4) * i, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.swarm
      }
    }
  );
}
exports.kronosmissilelauncher = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Missile launcher",
  HEALTH: 10,
  SHEALD: 9,
  DENSITY: 2,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  }, //uh...
  DANGER: 7,
  GUNS: [
    {
      // *Whistle* I've Got an Idea
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 14, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.celestialSkimmer
        ]),
        TYPE: exports.kronosMissile
      }
    } //WTF IS A MACHINE GUN THING
  ] // 1.5 maybe
}; //Hi Marcusicoi, Maxim is gone | your done? | yes | thats the turret lol we need the real eternal | Oh, i make Kronos Hypermissile
// ^^^^^^ i didnt say that lmfao | what tank? | im testing the tank | the new tank
exports.stream2 = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner2",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
    SKILL_GIVE: 19,
    DANGER: 7
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1.5, 0, 0, 180, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: [exports.drone, { INDEPEDENT: true }],
        MAX_CHILDREN: 100,
        AUTOFIRE: true
      }
    }
  ]
};
exports.preda2 = {
  PARENT: [exports.genericTank],
  LABEL: "X-Predator 2",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [31, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [28, 8, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 12, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 16, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 20, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.streamXD = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner XD",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
    SKILL_GIVE: 19,
    DANGER: 7
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.kronosmissilelauncher3 = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos missile launcher - 3",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 60, 360, 1], //Hi yeslander
      TYPE: exports.kronosmissilelauncher // bye, i go to make new feature
    }, // who are you????
    {
      //WAIT   YOU DONT GO TO MAKE NEW FEATURE
      POSITION: [10, 0, 0, 300, 360, 1],
      TYPE: exports.kronosmissilelauncher
    }
  ]
};
exports.kronosBody3 = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Body Swarm",
  COLOR: 18,
  SHAPE: 5,
  SIZE: 10,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, 108, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, 35, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, -35, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, -108, 120, 0],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.kronosBody2 = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Body Bullet",
  SHAPE: 7,
  COLOR: 18,

  SIZE: 10,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, (360 * 3.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [10, 8, 0, (360 * 2.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [10, 8, 0, (360 * 1.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [10, 8, 0, (360 * 0.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [10, 8, 0, (-360 * 0.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [10, 8, 0, (-360 * 1.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [10, 8, 0, (-360 * 2.5) / 7, 120, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.kronosBody3
    }
  ],
  GUNS: [
    {
      POSITION: [1, 1, 1, 1, 1, 1, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.whydidyouswitchthelayer,
        LABEL: "Maybe i need to switch"
      }
    }
  ]
};

exports.kronosTripleBody = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Body Missile",
  FACING_TYPE: "autospin",
  COLOR: 8,
  SHAPE: 9,
  SIZE: 10,
  TURRETS: [
    {
      POSITION: [8, 9, 0, (-360 * 4.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 3.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 2.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 1.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 0.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * -0.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * -1.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * -2.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * -3.5) / 9, 180, 0],
      TYPE: [exports.kronosmissilelauncher, { COLOR: 18 }]
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.kronosBody2
    }
  ]
};
exports.kronos = {
  PARENT: [exports.miniboss],
  LABEL: "Eternal",
  COLOR: 18,
  NAME: "Kronos",
  SHAPE: 11,
  SIZE: 100,
  VARIES_IN_SIZE: false,
  VALUE: 300000,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    FOV: 1.9,
    SPEED: base.SPEED * 0.05,
    HEALTH: base.HEALTH * 17,
    SHIELD: base.SHIELD * 3,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  SKILL: skillSet("6929987040"),
  TURRETS: [
    {
      POSITION: [6, 9, 0, (360 * 5.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (360 * 4.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (360 * 3.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (360 * 2.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (360 * 1.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (360 * 0.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (-360 * 0.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (-360 * 1.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (-360 * 2.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (-360 * 3.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, (-360 * 4.5) / 11, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.kronosTripleBody
    }
  ]
};
exports.bosses = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses",
  RESET_UPGRADES: true,
  FACING_TYPE: "autospin",

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.bossespg2 = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses PG2",
  FACING_TYPE: "autospin",

  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testermenua = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester A",
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testermenub = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester B",
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  // SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      //WHY DO YOU HAVE ERROR YOU BITCH | Hello!
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testermenuc = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester C",
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.deleted_removed = {
  PARENT: [exports.genericTank],
  LABEL: "Removed Tanks",
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.diepbosses = {
  PARENT: [exports.genericTank],
  LABEL: "Diep Bosses",
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.ray = {
  PARENT: [exports.genericTank],
  LABEL: "Generic ray",
  SHAPE: [[-0.1, -1], [0.1, -1], [0.1, 1], [-0.1, 1]] //stop, i asked to leave
};

//Tower
exports.wall = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Wall",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 4,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false
};
exports.sentrytower = {
  PARENT: [exports.genericTank],
  LABEL: "Sentry Tower",
  COLOR: 5, //I SAID DONT TOUCH MY SENTRY
  SHAPE: 3,
  SIZE: 30,
  FOV: 1.9, //If you dont touch my sentry
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [32, 0, 0, 0, 360, 0],
      TYPE: [exports.wall, { CONTROLLERS: ["dontTurn"], COLOR: 17 }]
    },
    {
      POSITION: [20, 0, 0, 0, 360, 0],
      TYPE: exports.paladinSunchipBody
    },
    {
      POSITION: [7, 12, 0, 120, 180, 0],
      TYPE: exports.ranger
    },
    {
      POSITION: [7, 12, 0, 240, 180, 0],
      TYPE: exports.ranger
    },
    {
      POSITION: [7, 12, 0, 0, 180, 0],
      TYPE: exports.ranger
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.bent
    }
  ]
};
exports.sentrytower2 = {
  PARENT: [exports.genericTank],
  LABEL: "Second Sentry Tower",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 80,
  FACING_TYPE: "autospin",
  FOV: 1.9,
  TURRETS: [
    //maybe stop editing
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 0, 0, 0, 0, 0],
      TYPE: [
        exports.zaphkielDroneBody,
        { FACING_TYPE: "fleeAtLowHealth" - "autospin" }
      ] //What the dong doing
    },
    {
      POSITION: [7, 12, 0, 120, 180, 0],
      TYPE: exports.ranger //You made Second sentry tower??? i test it dont edit please
    },
    {
      POSITION: [7, 12, 0, 240, 180, 0],
      TYPE: exports.ranger
    },
    {
      POSITION: [7, 12, 0, 0, 180, 0],
      TYPE: exports.ranger
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.bent
    }
    //Stop spamming to Testbed Machine Gun ok?
    //⸮ʞo nυӘ ɘniʜɔɒM bɘdɈƨɘT oɈ ϱnimmɒqƨ qoɈƧ
  ]
}; //STOP SPAMMING AGAIN

//EG-Roman Number Turrets
exports.eg1mach = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  DANGER: 6,
  SKILL: [0, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.eg1gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  SKILL: [0, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.eg3gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Gunner",
  DANGER: 6,
  SKILL: [0, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      } // tiky sus
    }, //TIKY WHAT?
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 0; i < 2; i++) {
  exports.eg3gunner.GUNS.push(
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 120 + (360 / 3) * i, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 120 + (360 / 3) * i, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 120 + (360 / 3) * i, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 120 + (360 / 3) * i, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  );
}

exports.eg4gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Gunner",
  DANGER: 6,
  SKILL: [0, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 1.75, 1, 0, 3.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 1.75, 1, 0, -3.75, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      } // tiky sus
    }, //TIKY WHAT?
    {
      POSITION: [16, 1.75, 1, 0, 3.75 / 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 1.75, 1, 0, -3.75 / 2, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 0; i < 5; i++) {
  exports.eg4gunner.GUNS.push(
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 1.75, 1, 0, 3.75, 60 + (360 / 6) * i, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 1.75, 1, 0, -3.75, 60 + (360 / 6) * i, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      } // tiky sus
    }, //TIKY WHAT?
    {
      POSITION: [16, 1.75, 1, 0, 3.75 / 2, 60 + (360 / 6) * i, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 1.75, 1, 0, -3.75 / 2, 60 + (360 / 6) * i, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  );
}
exports.eg6gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    }
  ]
};
exports.eg1 = {
  PARENT: [exports.elite],
  LABEL: "EG-I",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [14, 8, 0, 180, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.eg1mach
    }
  ]
};
exports.eg2 = {
  PARENT: [exports.elite],
  LABEL: "EG-II",
  AI: { NO_LEAD: false },
  SIZE: 30,
  SHAPE: 4,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 90, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 270, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.eg1gunner
    }
  ]
};
exports.eg3 = {
  PARENT: [exports.elite],
  LABEL: "EG-III",
  AI: { NO_LEAD: false },
  SIZE: 40,
  SHAPE: 5,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 36, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 108, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 252, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 324, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.eg3gunner
    }
  ]
};
exports.eg4 = {
  PARENT: [exports.elite],
  LABEL: "EG-IV",
  AI: { NO_LEAD: false },
  SIZE: 50,
  SHAPE: 6,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 60, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 120, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 240, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 300, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.eg4gunner
    }
  ]
};
exports.eg5minion = {
  PARENT: [exports.minion],
  LABEL: "EG-V's Minion",
  AI: { NO_LEAD: false },
  SHAPE: 3,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.eg1mach, { CONTROLLERS: ["fastspin"] }]
    },
    {
      POSITION: [10, 0, 0, 120, 360, 1],
      TYPE: [exports.eg1mach, { CONTROLLERS: ["fastspin"] }]
    },
    {
      POSITION: [10, 0, 0, 240, 360, 1],
      TYPE: [exports.eg1mach, { CONTROLLERS: ["fastspin"] }]
    }
  ],
  GUNS: []
};
exports.eg5 = {
  PARENT: [exports.elite],
  LABEL: "EG-V",
  AI: { NO_LEAD: false },
  SIZE: 60,
  SHAPE: 6,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 60, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 120, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 240, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 8, 0, 300, 180, 0],
      TYPE: exports.eg1gunner
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.eg4gunner, { CONTROLLERS: ["fastspin"] }]
    } //LOL
  ], //nice
  GUNS: [
    {
      POSITION: [10, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.eg5minion,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [10, 10, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.eg5minion,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [10, 10, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.eg5minion,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [10, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.eg5minion,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [10, 10, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.eg5minion,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [10, 10, 1, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.eg5minion,
        MAX_CHILDREN: 1
      }
    }
  ] //Add minions | ok
}; //RESET
//LOL Lag Battle EG-V VS EG-V
//lol
//lets make eg 6 no lag ok?
//ok | lets do it
//make its minion
//lemme make Basic-x
exports.basic1 = {
  PARENT: [exports.miniboss],
  LABEL: "Basic-1",
  AI: { NO_LEAD: false }, //AAAAAAAAAAAAAA STOP IT
  COLOR: 5,
  SHAPE: 3,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 8, 0, 60, 180, 0],
      TYPE: [exports.autoTurret, { COLOR: 36 }]
    },
    {
      POSITION: [15, 8, 0, 180, 180, 0],
      TYPE: [exports.autoTurret, { COLOR: 36 }]
    },
    {
      POSITION: [15, 8, 0, 300, 180, 0], //put 2
      TYPE: [exports.autoTurret, { COLOR: 36 }]
    }
  ] //Sorry forgot to put 8 in the x
}; //lets make basic 2 (ok)

exports.basic2 = {
  PARENT: [exports.miniboss],
  LABEL: "Basic-2",
  AI: { NO_LEAD: false }, //AAAAAAAAAAAAAA STOP IT
  COLOR: 5,
  SHAPE: 4, //lets make basic 3
  TURRETS: [
    //STFU!
    {
      //Lets not edit
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: [exports.spray, { COLOR: 36 }]
    },
    {
      POSITION: [10, 8, 0, 90, 180, 0],
      TYPE: [exports.celestialTrapTurret, { COLOR: 36 }]
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: [exports.spray, { COLOR: 36 }]
    },
    {
      POSITION: [10, 8, 0, 270, 180, 0],
      TYPE: [exports.celestialTrapTurret, { COLOR: 36 }]
    }
  ]
};
exports.basic3 = {
  PARENT: [exports.miniboss],
  LABEL: "Basic-3",
  AI: { NO_LEAD: false },
  COLOR: 5,
  SHAPE: 4,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 180, 0],
      TYPE: [exports.spray, { COLOR: 36 }]
    },
    {
      POSITION: [10, 8, 0, 90, 180, 0],
      TYPE: [exports.spray, { COLOR: 36 }]
    },
    {
      POSITION: [10, 8, 0, 180, 180, 0],
      TYPE: [exports.spray, { COLOR: 36 }]
    },
    {
      POSITION: [10, 8, 0, 270, 180, 0],
      TYPE: [exports.spray, { COLOR: 36 }]
    }
  ] //Sprayer thing
}; //sprayer only i see my vid on showing basic x
exports.basic4 = {
  PARENT: [exports.miniboss],
  LABEL: "Basic-4",
  AI: { NO_LEAD: false },
  COLOR: 5,
  SHAPE: 3,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 180, 0],
      TYPE: [exports.celestialTrapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 180, 0],
      TYPE: [exports.celestialTrapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 180, 0],
      TYPE: [exports.celestialTrapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 0, 0],
      TYPE: [exports.factory, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 180, 0, 0],
      TYPE: [exports.factory, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 0, 0],
      TYPE: [exports.factory, { COLOR: 5 }]
    }
  ] //i tested Basic-4
}; //the next one is complex 3 gunners like defender middle factory the 3 gunners and factory needs arc 1 and 3 trap turrets with angle 0
exports.basic5 = {
  PARENT: [exports.miniboss],
  LABEL: "Basic-5",
  COLOR: 5,
  SHAPE: 3,
  SPEED: 9,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 300000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 5
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */ {
      POSITION: [10, 0, 0, 120, 360, 1],
      TYPE: [exports.factory, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 120, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 240, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 0, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [16, 15, 0, 120, 0, 1],
      TYPE: [exports.celestialTrapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [16, 15, 0, 240, 0, 1],
      TYPE: [exports.celestialTrapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [16, 15, 0, 0, 0, 1],
      TYPE: [exports.celestialTrapTurret, { COLOR: 5 }]
    }
  ] //lemme test the layer
};
//U IDIOT STOP BEING AFK
exports.basic6 = {
  PARENT: [exports.miniboss],
  LABEL: "Basic-6",
  AI: { NO_LEAD: false },
  COLOR: 5,
  SHAPE: 3,
  SPEED: 9,
  SIZE: 60,
  VARIES_IN_SIZE: true,
  VALUE: 500000,
  BODY: {
    FOV: 1.3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */

    {
      POSITION: [10, 0, 0, 360, 180, 1],
      TYPE: [exports.factory, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 180, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 300, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 60, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 120, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 240, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 0, 180, 1],
      TYPE: [exports.auto4gun, { COLOR: 5 }]
    },
    {
      POSITION: [10, 15, 0, 180, 0, 1],
      TYPE: [exports.trapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [10, 15, 0, 300, 0, 1],
      TYPE: [exports.trapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [10, 15, 0, 60, 0, 1],
      TYPE: [exports.trapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 120, 0, 1],
      TYPE: [exports.trapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 240, 0, 1],
      TYPE: [exports.trapTurret, { COLOR: 5 }]
    },
    {
      POSITION: [10, 9, 0, 0, 0, 1],
      TYPE: [exports.trapTurret, { COLOR: 5 }]
    }
  ] //lets make a shield tank | u spelled sheald wrong, its "Shield"
};
exports.shield = {
  PARENT: [exports.genericTank],
  LABEL: "Shield",
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]), //make a shield type of gun
        TYPE: exports.swarm //needs for the bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.trap
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 0.6, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.trap
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 0.6, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.swarm
      }
    }, //Breh
    {
      POSITION: [15, 5, 1, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.trap
      }
    } //its done (ok)
  ]
};
exports.undefined = {
  PARENT: [exports.genericTank],
  LABEL: "undefined",
  COLOR: 13,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload]),
        TYPE: exports.bullet
      }
    }
  ]
};
//Shield turret

exports.shieldTurr = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  CONTROLLERS: ["fastspin", "alwaysFire"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]), //make a shield type of gun
        TYPE: exports.trap //needs for the bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 120, 0.167],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]),
        TYPE: exports.trap
      } //Done
    },
    {
      POSITION: [15, 5, 1, 0, 0, 240, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]), //make a shield type of gun
        TYPE: exports.trap //needs for the bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 300, 0.833],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]),
        TYPE: exports.trap
      }
    } //its done (ok)
  ]
};

exports.protectbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Protected Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 360, 0],
      TYPE: exports.shieldTurr
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0,
        SPREAD: 90, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.tpbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed Protected Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: [[-1, -1], [1, -1], [1, 1], [-1, 1], [-0.2, -0]],
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 360, 0],
      TYPE: exports.shieldTurr
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.fast,
          g.fast,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.halfrecoil
        ]),
        TYPE: exports.devrocket,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
        SPREAD: 90
      }
    }
  ]
};
exports.xkxbosses = {
  PARENT: [exports.genericTank],
  LABEL: "X-K-X Bosses",
  RESET_UPGRADES: true,
  FACING_TYPE: "autospin",

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.devrocket, { SHAPE: 5 }]
      }
    }
  ]
};
exports.machineboss = {
  PARENT: [exports.miniboss],
  LABEL: "undefined(mashinegun)",

  TURRETS: [
    //YOU PIECE OF SHIT ALPHA
    {
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [10, 10, 0, 90, 180, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [10, 10, 0, 180, 180, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [10, 10, 0, 270, 180, 0],
      TYPE: exports.machineAutoTurret
    }
  ] //can you make EK3
};
exports.ek1 = {
  PARENT: [exports.miniboss],
  LABEL: "EK-1",
  SIZE: 20,
  COLOR: 6,
  TURRETS: [
    {
      POSITION: [24, 0, 0, 0, 0, 1],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.egg
    },
    {
      POSITION: [10, 10, 0, 0, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 10, 0, 60, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 10, 0, 120, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 10, 0, 180, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 10, 0, 240, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 10, 0, 300, 180, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.triple
    }
  ] //smasher dosent work
}; //i already said "shut up and chill" //lets make EK-2 now we needs its turret | But

exports.ek2 = {
  PARENT: [exports.miniboss],
  LABEL: "EK-2",
  SIZE: 20,
  COLOR: 6,
  TURRETS: [
    {
      POSITION: [24, 0, 0, 0, 0, 1],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.egg
    },
    {
      POSITION: [13, 10, 0, 0, 180, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [10, 10, 0, 60, 180, 0],
      TYPE: exports.cruiser
    },
    {
      POSITION: [13, 10, 0, 120, 180, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [10, 10, 0, 180, 180, 0],
      TYPE: exports.cruiser //thats cruiser
    },
    {
      POSITION: [13, 10, 0, 240, 180, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [10, 10, 0, 300, 180, 0],
      TYPE: exports.cruiser
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.auto5gun
    } //Can you make EK-3
  ]
}; //Stop being afk ok tricky
//I SAID STOP BEING AFK OK?

exports.hunterek = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.dodecagon = {
  PARENT: [exports.hugePentagon],
  LABEL: "Dodecagon",
  SHAPE: 12,
  SIZE: 30,
  COLOR: 9
};
exports.ek3 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "EK-3",
    COLOR: 6,
    SIZE: 40,
    VALUE: 60000,
    BODY: {
      FOV: 1.3, //Sorry. Richi 2 made EK-3 LOL
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        POSITION: [24, 0, 0, 0, 0, 1],
        TYPE: exports.dodecagon
      },
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.egg
      },
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [3, 12, 2, 0, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, -2, 0, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, 2, 60, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, -2, 60, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, 2, 120, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, -2, 120, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, 2, 180, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, -2, 180, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, 2, 240, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, -2, 240, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, 2, 300, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [3, 12, -2, 300, 190, 0],
        TYPE: exports.oldAutoSmasherTurret
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.hunterek
      },
      {
        POSITION: [5, 7, 0, 180, 190, 1],
        TYPE: exports.director
      },
      {
        POSITION: [5, 7, 0, 60, 190, 1],
        TYPE: exports.director
      },
      {
        POSITION: [5, 7, 0, -60, 190, 1],
        TYPE: exports.director
      }
    ],
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [11, 2.5, 0.6, 7, -1.5, 30, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, 1.5, 30, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, -1.5, -30, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, 1.5, -30, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, -1.5, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, 1.5, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, -1.5, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, 1.5, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, -1.5, 150, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, 1.5, 150, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, -1.5, 210, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 2.5, 0.6, 7, 1.5, 210, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
})();
//Twin X turrets
(exports.twin2turret = {
  PARENT: [exports.genericTank],
  COLOR: 5,
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 1, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
}),
  //Twin X
  (exports.twin1 = {
    PARENT: [exports.miniboss],
    LABEL: "Twin-1",
    COLOR: 6,
    SIZE: 40,
    VALUE: 60000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      //👍🏻
      /*  SIZE     X       Y     ANGLE    ARC */
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.bent
      },
      {
        POSITION: [10, 10, 0, 180, 180, 0],
        TYPE: exports.sniper3gun
      },
      {
        POSITION: [10, 10, 0, 0, 180, 0],
        TYPE: exports.sniper3gun
      }
    ]
  });
exports.twin2 = {
  PARENT: [exports.miniboss],
  LABEL: "Twin-2",
  COLOR: 6,
  SIZE: 40,
  SHAPE: 4,
  VALUE: 60000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.penta
    },
    {
      POSITION: [10, 10, 0, 180, 0, 0],
      TYPE: exports.ny1deva
    },
    {
      POSITION: [10, 10, 0, 0, 0, 0],
      TYPE: exports.ny1deva
    }
  ]
};
exports.twin3 = {
  PARENT: [exports.miniboss],
  LABEL: "Twin-3",
  COLOR: 6,
  SIZE: 40,
  SHAPE: 3,
  VALUE: 60000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: [exports.twin1, { CONTROLLERS: ["reversespin"] }]
    },
    {
      POSITION: [10, 10, 0, 60, 0, 0],
      TYPE: exports.ny2deva
    },
    {
      POSITION: [10, 10, 0, 180, 0, 0],
      TYPE: exports.ny2deva
    },
    {
      POSITION: [10, 10, 0, 300, 0, 0],
      TYPE: exports.ny2deva
    }
  ]
}; //Now. Twin-5
exports.twin4 = {
  PARENT: [exports.miniboss],
  LABEL: "Twin-4",
  COLOR: 6,
  SIZE: 45,
  SHAPE: 4,
  VALUE: 60000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.twin2
    },
    {
      POSITION: [10, 10, 0, 0, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 90, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 180, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 270, 0, 0],
      TYPE: exports.ny3deva
    }
  ]
};

exports.twin5 = {
  PARENT: [exports.miniboss],
  LABEL: "Twin-5",
  COLOR: 6,
  SIZE: 55,
  SHAPE: 5,
  VALUE: 60000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: [exports.octo, { CONTROLLERS: ["fastspin"] }]
    },
    {
      POSITION: [10, 10, 0, 108, 0, 0],
      TYPE: exports.ny3deva
    }, //EZ Lets make Machine Gun-X
    {
      //ok but we need Twin 6 now | ok
      POSITION: [10, 10, 0, 180, 0, 0], //💡 I create new shape | its ez just change shape to any number | ez
      TYPE: exports.ny3deva
    }, //No bruh
    {
      //now working like that lol to celestials only work bc it has 7 and 9 shaped last 2 layers | NO WTF
      POSITION: [10, 10, 0, 252, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 324, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 36, 0, 0],
      TYPE: exports.ny3deva
    }
  ]
};
exports.twin6 = {
  PARENT: [exports.miniboss],
  LABEL: "Twin-6",
  COLOR: 6,
  SIZE: 66,
  SHAPE: 6,
  VALUE: 60000,
  BODY: {
    FOV: 1.3, //thats the design
    SPEED: base.SPEED * 0.1, //Yes but we need more devastors
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.twin4
    },
    {
      POSITION: [10, 10, 0, 0, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 60, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 120, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 180, 0, 0],
      TYPE: exports.ny3deva
    },
    {
      POSITION: [10, 10, 0, 240, 0, 0],
      TYPE: exports.ny3deva //COME ON F🤔KING CONNECT
    },
    {
      POSITION: [10, 10, 0, 300, 0, 0],
      TYPE: exports.ny3deva
    } //Tricky come make Machine Gun-X
  ]
}; //Let's make Machine Gun-X

//Machine Gun-X Turrets

exports.mach1spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.mach2spray = {
  PARENT: [exports.genericTank],
  LABEL: "X-Sprayer",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfreload]),
        TYPE: exports.bullet
      }
    }
  ]
};

//Machine Gun-X
exports.mach1 = {
  PARENT: [exports.miniboss],
  LABEL: "Machine Gun-1",
  COLOR: 6,
  SIZE: 40,
  VALUE: 60000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    //you made machine1spray? | yes i made machine1spray | good lemme help you change the sniper3guns to that | ok
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.mach1spray
    },
    {
      POSITION: [10, 10, 0, 180, 210, 0],
      TYPE: exports.mach1spray //hmmm this is right
    },
    {
      POSITION: [10, 10, 0, 0, 210, 0],
      TYPE: exports.mach1spray
    } //Uhhhhh
  ]
};
exports.mach2 = {
  PARENT: [exports.miniboss],
  LABEL: "Machine Gun-2",
  COLOR: 6,
  SIZE: 45,
  VALUE: 60000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  TURRETS: [
    /*  SIZE     X       Y     ANGLE    ARC */
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.mach2spray
    },
    {
      POSITION: [10, 10, 0, 180, 210, 0],
      TYPE: exports.mach2spray //oh you made machine gun-2
    },
    {
      POSITION: [10, 10, 0, 0, 210, 0],
      TYPE: exports.mach2spray
    }
  ]
};

/
exports.testbed.UPGRADES_TIER_1 = [
  exports.testbedbasic,
  exports.developerb,
  exports.sentry_page,
  exports.spectator,
  exports.bosses,
  exports.betatester1,
  exports.diepbosses,
  exports.xkxbosses, //IM CONFUSED A BOT IS PLAYING OUR GAME AND CHATTING WITH ME(make EK-X) (ok bruhh chill)
  exports.gemmaker,
  exports.comet,
  exports.visTurretNotControl
  //I SAID MAKE EK-X
];
exports.xkxbosses.UPGRADES_TIER_1 = [
  //YOU SUCK TRICKY NOT TO THIS
  exports.EQ0,
  exports.ny1,
  exports.sk1,
  exports.basic1,
  exports.eg1,
  exports.elite1,
  exports.vghalf, //Lets make EK-X (Egg King-X)
  exports.ek1,
  exports.fk1,
  exports.twin1,
  exports.mach1
];
exports.elite1.UPGRADES_TIER_1 = [exports.elite2];
exports.elite2.UPGRADES_TIER_1 = [exports.elite3];
exports.elite3.UPGRADES_TIER_1 = [exports.elite4];
exports.elite4.UPGRADES_TIER_1 = [exports.elite5];
exports.elite5.UPGRADES_TIER_1 = [exports.elite6];
exports.developerb.UPGRADES_TIER_1 = [
  exports.octagon,
  exports.pentadecagon,
  exports.boostthicc,
  exports.WTF,
  exports.Wot,
  exports.arenacloser, //WE CAN FKING CONNECT
  exports.trapper,
  exports.trap3,
  exports.swarming,
  exports.WtF,
  exports.boostdis,
  exports.tiky,
  exports.glock17,
  exports.obeseshieldtank,
  exports.page3 //How to basic be like
]; //last 3 are bosses
exports.sentry_page.UPGRADES_TIER_1 = [
  exports.elitesentry,
  exports.octosentry,
  exports.controlsentryGun,
  exports.controlsentryGunSniper,
  exports.controlsentryGunHeavy,
  exports.controlsentryQuadtrap,
  exports.SeNtRy,
  exports.crasherDevasta,
  exports.sentrytower,
  exports.sentrytower2 //Sorry abot Spin
]; //like this https://cdn.discordapp.com/emojis/800496945230774282.gif?v=1 | look there ( ok ) | thats zaphkiel like that i want to make no edit pls | ok
exports.Beta_Tester.UPGRADES_TIER_1 = [
  exports.octosentry,
  exports.spectator,
  exports.tiky,
  exports.boostdis,
  exports.WTF,
  exports.Wot,
  exports.trapper,
  exports.trap3,
  exports.swarming,
  exports.WtF,
  exports.sentry_page
];
exports.betatester1.UPGRADES_TIER_1 = [
  exports.testermenua,
  exports.testermenub,
  exports.testermenuc,
  exports.spectator,
  exports.basic
];
exports.betatester2.UPGRADES_TIER_1 = [
  exports.testermenua,
  exports.testermenub,
  exports.testermenuc,
  exports.spectator,
  exports.deleted_removed,
  exports.diepbosses,
  exports.basic, //WHAT?
  exports.undefined
];
exports.diepbosses.UPGRADES_TIER_1 = [
  exports.WtF2,
  exports.defender,
  exports.fallenbooster,
  exports.fallenoverlord,
  exports.guardian
];
exports.testermenua.UPGRADES_TIER_1 = [
  exports.rimfire,
  exports.reproducer,
  exports.crowbar,
  exports.foodmaker,
  exports.gemmaker
];
exports.testermenub.UPGRADES_TIER_1 = [
  exports.stream2,
  exports.streamXD,
  exports.banshee2,
  exports.overtrapXD,
  exports.preda2,
  exports.HTB
];
exports.cruiser.UPGRADES_TIER_2 = [exports.swarming];
exports.skimmer.UPGRADES_TIER_3 = [exports.rotator];
exports.tiky.UPGRADES_TIER_1 = [exports.Tricky];
exports.page3.UPGRADES_TIER_1 = [
  exports.horn,
  exports.horn3,
  exports.pentatrap3,
  exports.rotator3,
  exports.rotator,
  exports.page4,
  exports.undefined
];
exports.page4.UPGRADES_TIER_1 = [
  exports.vg4MiniBody,
  exports.vg4NailBody,
  exports.vg5HiveBody,
  exports.eggmancer, //Noob coder // i agree (alpha) | YOU ARE THE NOOB CODER EVER
  exports.page5,
  exports.shield,
  exports.protectbasic,
  exports.tpbasic,
  exports.HTB
];
exports.vghalf.UPGRADES_TIER_1 = [exports.vg1];
exports.vg1.UPGRADES_TIER_1 = [exports.vg2];
exports.vg2.UPGRADES_TIER_1 = [exports.vg3];
exports.vg3.UPGRADES_TIER_1 = [exports.vg4]; //LEL
//LEL
//the boss move in circles fast when i added CONTROLLERS: ['fastspin'] (LOL)
//lol
exports.vg4.UPGRADES_TIER_1 = [exports.vg5]; //
exports.EQ0.UPGRADES_TIER_1 = [
  exports.EQ1 //THEN NY-2
];
exports.EQ1.UPGRADES_TIER_1 = [exports.EQ2];
exports.ny1.UPGRADES_TIER_1 = [exports.ny2]; //Please Let Him Rewind
//lets make a custom EQ-3
//but its broken

exports.ny2.UPGRADES_TIER_1 = [
  exports.ny3 //Make NY-3//wait ik that tank its a diep.io boss lets make it thats ez
]; //unlocked NY-3 (Idk Where is Defender?//ok)
exports.fk1.UPGRADES_TIER_1 = [exports.fk2, exports.fk0, exports.fk0branch];
exports.fk2.UPGRADES_TIER_1 = [exports.fk3];
exports.EQ2.UPGRADES_TIER_1 = [exports.EQ3];
exports.sk1.UPGRADES_TIER_1 = [exports.sk2]; //I rewinded
exports.sk2.UPGRADES_TIER_1 = [exports.sk3];
exports.underseer.UPGRADES_TIER_1 = [exports.eggmancer];
exports.page5.UPGRADES_TIER_1 = [
  exports.stream2,
  exports.facto,
  exports.hunter2,
  exports.testbedhunter2,
  exports.missiletriplemaker,
  exports.page5_3,
  exports.missiletriple,
  exports.kronosmissilelauncher,
  exports.cleaner,
  exports.eg4gunner,
  exports.wooo,
  exports.foodmaker
]; ///STOP REMOVING R
//cleanerr not defined
exports.facto.UPGRADES_TIER_1 = [exports.factotwin];
exports.factotwin.UPGRADES_TIER_1 = [exports.factotriple]; //uh
exports.arenacloser.UPGRADES_TIER_1 = [exports.arenagang];
exports.swarming.UPGRADES_TIER_1 = [exports.swarming2]; //Not Fair
exports.swarming2.UPGRADES_TIER_1 = [exports.swarm3]; //done
exports.swarm3.UPGRADES_TIER_1 = [exports.swarm4]; //I SKIP TO QUAD SwArMeR IF U DONT EDIT MY SERVER
exports.hunter.UPGRADES_TIER_1 = [exports.hunter2];
exports.stream.UPGRADES_TIER_1 = [exports.stream2];
exports.bosses.UPGRADES_TIER_1 = [
  exports.defender,
  exports.WtF2,
  exports.theia2,
  exports.freyja2,
  exports.zaphkiel2,
  exports.paladin2,
  exports.elite_sprayerOP,
  exports.elite_gunnerOP,
  exports.elite_destroyerOP,
  exports.bossespg2
];
exports.bossespg2.UPGRADES_TIER_1 = [
  exports.kronos,
  exports.elite_battle,
  exports.elite_battleOP,
  exports.machineboss,
  exports.elite_gunnerv2,
  exports.egunner, //*groans* STOP KILLING ME!
  exports.edestroyer
];
exports.eg1.UPGRADES_TIER_1 = [exports.eg2];
exports.eg2.UPGRADES_TIER_1 = [exports.eg3];
exports.eg3.UPGRADES_TIER_1 = [exports.eg4]; //You dont need to invite maxim
exports.eg4.UPGRADES_TIER_1 = [exports.eg5];
exports.basic1.UPGRADES_TIER_1 = [exports.basic2];
exports.basic2.UPGRADES_TIER_1 = [exports.basic3];
exports.basic3.UPGRADES_TIER_1 = [exports.basic4];
exports.basic4.UPGRADES_TIER_1 = [exports.basic5]; //elite 4 is a auto factory with auto turrets in same position
exports.basic5.UPGRADES_TIER_1 = [exports.basic6]; //*breath* //noiceeeeeeeeeeeee
/*
  exports.EQ0,
  exports.ny1,
  exports.sk1,*/ exports.ek1.UPGRADES_TIER_1 = [
  exports.ek2
]; //add ek3
exports.ek2.UPGRADES_TIER_1 = [exports.ek3];
exports.twin1.UPGRADES_TIER_1 = [exports.twin2]; //Why
exports.twin2.UPGRADES_TIER_1 = [exports.twin3]; //WE CAN FKING CONECT WTF
exports.twin3.UPGRADES_TIER_1 = [exports.twin4];
exports.twin4.UPGRADES_TIER_1 = [exports.twin5];
exports.twin5.UPGRADES_TIER_1 = [exports.twin6];
exports.mach1.UPGRADES_TIER_1 = [exports.mach2];
exports.comet.UPGRADES_TIER_1 = [exports.comet2];
exports.comet2.UPGRADES_TIER_1 = [exports.comet3];
//im here
