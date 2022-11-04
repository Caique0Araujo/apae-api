import { DataTypes } from "sequelize";
import { databaseFactory } from "../../../database/databaseFactory";

const sequelize = databaseFactory().getConnection();

const Donations = sequelize.define("Donation", {
  id_donation: {
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
    type: DataTypes.STRING(45),
    allowNull: false
  },
  is_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
},  {timestamps: false})

export default Donations;