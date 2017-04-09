'use strict'

const {bookshelf} = require('../bookshelf.js');

const Weapon = bookshelf.Model.extend({
  tableName: 'weapons'
});


// require('./battles.js');
// const Weapon = bookshelf.Model.extend({
//   tableName: 'weapons',
//   idAttribute: 'hero_id',
//   battles: function () {
//     return this.hasMany('Battle', 'hero_id')
//   }
// });

module.exports = bookshelf.model('Weapon', Weapon)
