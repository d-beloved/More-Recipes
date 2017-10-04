
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    content: {
      types: DataTypes.STRING,
      allowNull: false,
    },
  });

  reviews.associate = (models) => {
    reviews.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    reviews.belongsTo(models.Recipes, {
      foreignKey: 'recipesId',
      onDelete: 'CASCADE',
    });
  };
  return reviews;
};
