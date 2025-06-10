import { onUserInfo } from "@/action/user"
import { getAllAutomations } from "@/action/automations"
import { QueryClient, QueryFunction } from "@tanstack/react-query"

const prefetch = async (
    client:QueryClient,
    action:QueryFunction,
    key:string
) =>{

    return await client.prefetchQuery({
        queryKey: [key],
        queryFn: action,
        staleTime:60000,
    })
}

export const PreFetchUserProfile = async (client:QueryClient) =>{

    return await prefetch(client, onUserInfo ,'user-profile')
} 

export const PreFetchUserAutomation = async (client: QueryClient) =>{
    return await prefetch(client, getAllAutomations, 'user-automations')
}