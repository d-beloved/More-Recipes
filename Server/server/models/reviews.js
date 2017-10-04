
export default (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipesId: {
      type: DataTypes.INTEGER,
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
