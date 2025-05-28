import { getAllAutomations } from "@/actions/automations"
import { onUserInfo } from "@/actions/user"
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

    return await prefetch(client, onUserInfo ,'user_client')
} 

export const PreFetchUserAutomation = async (client: QueryClient) =>{
    return await prefetch(client, getAllAutomations, 'user-automations')
}