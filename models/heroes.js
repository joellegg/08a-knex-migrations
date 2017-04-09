'use strict'

const {bookshelf} = require('../bookshelf.js');

const Hero = bookshelf.Model.extend({
  tableName: 'heroes'
});


// require('./battles.js');
// const Hero = bookshelf.Model.extend({
//   tableName: 'heroes',
//   idAttribute: 'hero_id',
//   battles: function () {
//     return this.hasMany('Battle', 'hero_id')
//   }
// });

module.exports = bookshelf.model('Hero', Hero)
