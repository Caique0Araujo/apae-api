import bcrypt from 'bcrypt';

export const compare = async (inputPassword: string, dataBasePassword: string)=>{
    const checkPassword = await bcrypt.compare(dataBasePassword, inputPassword);
    if(!checkPassword){
        return true;
    }
    return false;
}