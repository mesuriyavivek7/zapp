"use server"

import { client } from "@/lib/prisma"

export const createAutomation = async (clerkId: string) =>{
     console.log("create automation start")
     return await client.user.update({
           where:{
            clerkId,
           },
           data:{
             automations:{
                create:{},
             }
           }
     })
}