import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config();

export const encrypt = async (password: String)=>{
    const salt: number = parseInt(process.env.ENCRYPT_SALT);
    return await bcrypt.hash(password, salt);
}