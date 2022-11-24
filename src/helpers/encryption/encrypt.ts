import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config();

export const encrypt = async (password: String)=>{
    return await bcrypt.hash(password, 8);
}