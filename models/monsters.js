'use strict'

const {bookshelf} = require('../bookshelf.js');

const Monster = bookshelf.Model.extend({
  tableName: 'monsters'
});


// require('./battles.js');
// const Monster = bookshelf.Model.extend({
//   tableName: 'monsters',
//   idAttribute: 'monster_id',
//   battles: function () {
//     return this.hasMany('Battle', 'monster_id')
//   }
// });

module.exports = bookshelf.model('Monster', Monster)
