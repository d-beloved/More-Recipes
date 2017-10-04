'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorites = sequelize.define('Favorites', {
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Favorites;
};