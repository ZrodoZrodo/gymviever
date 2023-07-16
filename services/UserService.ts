import prisma from "../prisma/prisma";

export abstract class UserService {
    public static async addUser({email,name,password,nick}:{email:string,name:string,password:string,nick:string|null})
    {

        return prisma.user.create({
            data: {
                email,
                name,
                password,
                nick
            }
        })
    }

    public static async getUser(email:string)
    {
        return prisma.user.findFirst({
            where:{
                email
            },
            select:{
                email:true,
                name: true,
                nick: true
            }
        })
    }

}