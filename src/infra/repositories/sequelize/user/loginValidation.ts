import user from "../../../dataSource/sequelize/user"

export const loginValidation = async (login: any) => {
    const userFromDb = await user.findOne({
        raw: true,
        where: {login, is_enabled: true}
    });
    if(userFromDb){
        return userFromDb;
    }
    return false;
}