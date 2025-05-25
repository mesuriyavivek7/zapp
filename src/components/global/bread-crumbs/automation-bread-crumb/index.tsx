import { ChevronRight, Pencil } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'

type Props = {
    id:string
}

const AutomationBreadCrumb = ({id}: Props) => {
  return (
    <div className='rounded-full w-full p-5 bg-[#18181B1A] flex  items-center'>
        <div className='flex items-center gap-x-3 min-w-0'>
            <p className='text-[#9B9CA0] truncate'>Automations</p>
            <ChevronRight className='flex-shrink-0' color='#9B9CA0'></ChevronRight>
            <span className='flex gap-x-3 items-center min-w-0'>
                <p className='text-[#9B9CA0] truncate'>This is automation title</p>
                <span className='cursor-pointer hover:opacity-75 duration-100 transition'>
                    <Pencil size={14} className='text-[#9B9CA0]'></Pencil>
                </span>
            </span>
        </div>
        <div className='flex items-center ml-auto gap-x-5'>
            <p className='hidden md:block text-text-secondary/60 text-sm truncate min-w-0'>
                All pasted are automatically saved
            </p>
            <div className='flex gap-x-5'>
                <p className='text-text-secondary truncate text-sm'>Changes Saved</p>
            </div>
        </div>
        <ActivateAutomationButton></ActivateAutomationButton>
    </div>
  )
}

export default AutomationBreadCrumb