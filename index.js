'use strict'

const bookshelf = require('./bookshelf')

const Monster = require('./models/monsters')
const Hero = require('./models/heroes')
const Weapon = require('./models/weapons')
const Battle = require('./models/battles')

// applying constructor function to create a new monster
let monster = new Monster()
monster.set('name', 'Sully')
monster.set('type', 'ogre')
monster.set('weapon', 'laughter')
monster.set('eyes', '1')

monster.save().then(function(m) {
  console.log('Monster saved:', m.get('name'))
});

// constructor function for new hero
let hero = new Hero()
hero.set('name', 'boo')
hero.set('race', 'man')
hero.set('weapon_id', '1')
hero.set('shield', 'false')

hero.save().then(function(h) {
  console.log('Hero saved:', h.get('name'))
})

// constructor function for new battle
let battle = new Battle()
battle.set('name', 'wit')
battle.set('monster_id', '2')
battle.set('hero_id', '3')

battle.save().then(function(b) {
  console.log('Battle saved:', b.get('name'))
})

// constructor function for new weapon
let weapon = new Weapon()
weapon.set('name', 'axe')
weapon.set('damage', '7')

weapon.save().then(function(w) {
  console.log('Weapon saved:', w.get('name'))
})
