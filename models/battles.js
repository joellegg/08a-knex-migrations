'use strict'

const {bookshelf} = require('../bookshelf.js');

const Battle = bookshelf.Model.extend({
  tableName: 'battles'
});


// require('./battles.js');
// const Battle = bookshelf.Model.extend({
//   tableName: 'battles',
//   idAttribute: 'hero_id',
//   battles: function () {
//     return this.hasMany('Battle', 'hero_id')
//   }
// });

module.exports = bookshelf.model('Battle', Battle)
