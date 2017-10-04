
module.exports = (sequelize, DataTypes) => {
  const votes = sequelize.define('votes', {
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

    votes.associate = (models) => {
      votes.belongsTo
      }
    }
  });
  return votes;
};