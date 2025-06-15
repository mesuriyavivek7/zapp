import { useQuery } from '@tanstack/react-query';


const getAllAutomations = async ()=>{
   const res = await fetch('/api/automations')

   if(!res.ok){
    throw new Error("Failed to fetch automations")
   }

   const json = await res.json()

   return json
}


export const useQueryAutomations = () => {
  return useQuery({
     queryKey:['get-all-automations'],
     queryFn:getAllAutomations
  })
};
