const { db, DataTypes } = require('../config/database');

const Registrations = db.define(
  'registrations',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    entranceTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exitTime: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'working',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Registrations };
