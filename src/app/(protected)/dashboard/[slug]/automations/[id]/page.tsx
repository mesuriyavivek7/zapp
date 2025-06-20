import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automation-bread-crumb'
import { WarningIcon } from '@/icons/warning'
import React from 'react'

type Props = {
    params: {id:string}
}

const page = ({params}: Props) => {


  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationBreadCrumb id={params.id}></AutomationBreadCrumb>
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
             <div className='flex gap-x-2'>
                <WarningIcon></WarningIcon>
                When..
             </div>
             <Trigger id={params.id}></Trigger>
        </div>
    </div>
  )
}

export default page