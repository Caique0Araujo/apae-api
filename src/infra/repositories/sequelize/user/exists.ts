import Users from "../../../dataSource/sequelize/user"

export const userExists = async (id: any) => {
    const user = await Users.findOne({
        raw: true,
        where: {id_user: id, is_enabled: true}
      })
    if(!user){
        return false;
    }
    return user;
}