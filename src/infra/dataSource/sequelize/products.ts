import { DataTypes } from "sequelize";
import { databaseFactory } from "../../../database/databaseFactory";

const sequelize = databaseFactory().getConnection();

const Product = sequelize.define("product", {
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(8, 5)
  },
  image_path: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  is_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
},  {timestamps: false})

export default Product;