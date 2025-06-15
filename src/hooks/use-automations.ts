import { useMutationData } from "./use-mutation-data"

const createAutomations = async () =>{
    const req = await fetch('/api/automations',{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        }
    })
}

export const useCreateAutomation = () => {
    const {isPending, mutate} = useMutationData(
        ['create-automation'],
        ()=>createAutomations(),
        'user-automations'
    )

    return {isPending, mutate}
}