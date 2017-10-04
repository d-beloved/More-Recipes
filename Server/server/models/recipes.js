
export default (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    procedure: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Recipes.associate = (models) => {
    Recipes.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Recipes.hasMany(models.reviews, {
      foreignKey: 'recipesId',
      as: 'reviews',
    });
    Recipes.hasMany(models.votes, {
      foreignKey: 'recipesId',
      as: 'votes',
    });
    Recipes.hasMany(models.Favorites, {
      foreignKey: 'recipesId',
      as: 'favorites',
    });
  };
  return Recipes;
};
