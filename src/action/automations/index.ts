'use server'
import { onCurrentUser } from "../user"
import { createAutomation, getAutomations } from "./queries"


export const createAutomations = async () =>{
    const user = await onCurrentUser()
    try{
      const create = await createAutomation(user.id)
      if (create) return ({status: 200 , data: 'Automation created'})
      return {status:404,data:'Oops! something went wrong.'} 
    }catch(err){
      return {status: 500, data:'Internal server error'}
    }
}

export const getAllAutomations = async () => {
  try {
    const user = await onCurrentUser();

    const automations = await getAutomations(user.id);

    console.log('automations ----->',automations)

    if (automations) return automations.automations;

  } catch (error) {
    console.error("Error in getAllAutomations:", error);
    throw error; // 🚨 important: throw, so React Query handles isError correctly
  }
};