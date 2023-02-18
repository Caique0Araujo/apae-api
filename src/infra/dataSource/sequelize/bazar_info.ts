import { DataTypes } from "sequelize";
import { databaseFactory } from "../../../database/databaseFactory";

const sequelize = databaseFactory().getConnection();

const Bazaar_info = sequelize.define("bazaar_info", {
  id_bazaar_info: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  is_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {timestamps: false})

export default Bazaar_info;