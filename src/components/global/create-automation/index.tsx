'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhiteIcon } from '@/icons/automation'
import { useCreateAutomation } from '@/hooks/use-automations'

type Props = {}

const CreateAutomation = (props: Props) => {

  const {isPending, mutate} = useCreateAutomation()

  return (
    <Button onClick={()=>mutate({name:'TESTING'})} className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
         <Loader state={isPending}>
            <AutomationDuoToneWhiteIcon></AutomationDuoToneWhiteIcon>
            <p className='lg:inline hidden'>Create an Automation</p>
         </Loader>
    </Button>
  )
}

export default CreateAutomation