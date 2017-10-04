
export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Recipes, {
      foreignKey: 'userId',
      as: 'recipes',
    });
    Users.hasMany(models.reviews, {
      foreignKey: 'userId',
      as: 'reviews',
    });
    Users.hasMany(models.Favorite, {
      foreignKey: 'userId',
      as: 'favorite',
    });
    Users.hasMany(models.votes, {
      foreignKey: 'userId',
      as: 'votes',
    });
  };
  return Users;
};
