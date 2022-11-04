import { DataTypes } from "sequelize";
import { databaseFactory } from "../../../database/databaseFactory";

const sequelize = databaseFactory().getConnection();

export const News = sequelize.define("News", {
  id_news: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image_path: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  created_at_utc: {
    type: DataTypes.DATE,
  },
  is_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
},  {timestamps: false})
