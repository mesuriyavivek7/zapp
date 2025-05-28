"use server"


import { onCurrentUser } from "../user"
import { createAutomation } from "./queries"

export const getAllAutomations = async () =>{
    const user = await onCurrentUser()
    console.log('user---->',user.id)
    try{
      console.log("enter into automation")
      const create = await createAutomation(user.id)
      console.log('create---->',create)
      if (create) return {status: 200 , data: 'Automation created'}
      return {status:404,data:'Oops! something went wrong.'} 
    }catch(err){
      return {status: 500, data:'Internal server error'}
    }
}