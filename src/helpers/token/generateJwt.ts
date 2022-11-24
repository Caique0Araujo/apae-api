import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

export const generateJwtToken = async (id: number) =>{
    return await jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: '1d'});
}