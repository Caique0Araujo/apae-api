import user from "../../../dataSource/sequelize/user"

export const loginValidation = async (login: any) => {
    const userFromDb = await user.findOne({
        raw: true,
        where: {login}
    });
    if(userFromDb){
        return true;
    }
    return false;
}