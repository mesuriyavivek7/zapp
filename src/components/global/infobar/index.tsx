"use client"

import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePath } from '@/hooks/use-nav'
import React from 'react'
import Sheet from '../sheet'
import { Menu } from 'lucide-react'
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhiteIcon } from '@/icons/help'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import { EnergyLogo } from '@/svgs/energy-logo'
import CreateAutomation from '../create-automation'
import Search from '../search'
import Notifications from '../notifications'
import MainBreadCrumb from '../bread-crumbs/main-bread-crumb'

type Props = {
    slug:string
}

const Infobar = ({slug}: Props) => {
   const {page} = usePath()   

   const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page==slug

  return currentPage && <div className='flex flex-col'>
    <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
        <span className='lg:hidden flex items-center flex-1 gap-x-2'>
            <Sheet side='left' trigger={<Menu></Menu>} className='lg:hidden'>
            <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur_safari backdrop-blur-3xl'>
            <div className='flex  gap-x-2 items-center p-2 justify-center'>
                <EnergyLogo/>
            </div>
            <div className='flex flex-col py-3'>
                <Items page={page} slug={slug}></Items>
            </div>
            <div className='px-16'>
                <Separator
                orientation='horizontal'
                className='bg-[#5c5c5F]'
                ></Separator>
            </div>
            <div className='px-3 flex flex-col gap-y-5'>
                <div className='flex gap-x-2'>
                   <ClerkAuthState></ClerkAuthState>
                   <p className='text-[#9B9CA0]'>Profile</p>
                </div>
                <div className='flex gap-x-3'>
                    <HelpDuoToneWhiteIcon></HelpDuoToneWhiteIcon>
                    <p className='text-[#9B9CA0]'>Help</p>
                </div>
            </div>
            <SubscriptionPlan type='FREE'>
               <div className='flex-1 flex flex-col justify-end'>
                 <UpgradeCard></UpgradeCard>
               </div>
            </SubscriptionPlan>
            </div>
            </Sheet>
        </span>
        <Search></Search>
        <CreateAutomation></CreateAutomation>
        <Notifications></Notifications>
    </div>
    <MainBreadCrumb page={page === slug ? 'Home' : page} slug={slug}></MainBreadCrumb>
  </div>
}

export default Infobar