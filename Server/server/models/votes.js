
export default (sequelize, DataTypes) => {
  const votes = sequelize.define('votes', {
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    downvotes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  votes.associate = (models) => {
    votes.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    votes.belongsTo(models.Recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return votes;
};
