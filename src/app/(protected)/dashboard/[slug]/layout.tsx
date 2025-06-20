import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import { PreFetchUserAutomation, PreFetchUserProfile } from '@/react-query/prefetch'
import Infobar from '@/components/global/infobar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

const Layout = async ({children, params}: Props) => {
  // Query

  const query = new QueryClient()

  await PreFetchUserProfile(query)

  await PreFetchUserAutomation(query)


  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className='p-3'>
        {/* Sidebar */}
        <Sidebar slug={params.slug}></Sidebar>
        {/* Navbar */}
        <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
          <Infobar slug={params.slug}></Infobar>
          {children}
        </div>
    </div>
    </HydrationBoundary>
  )
}

export default Layout