
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    content: {
      types: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
    recipesId: {
      types: DataTypes.INTEGER,
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
