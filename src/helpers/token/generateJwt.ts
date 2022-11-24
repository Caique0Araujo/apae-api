import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { expireDate } from '../../main/config/jwt';


dotenv.config();

export const generateJwtToken = async (id: number) =>{
    return await jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: expireDate._in_days});
}