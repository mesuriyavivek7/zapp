import { Button } from '@/components/ui/button'
import React from 'react'


type Props = {
    title:string
    description:string
    icon:React.ReactNode,
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({title, description, icon, strategy}: Props) => {
  return (
    <div className='border-2 border-[#3353CC] rounded-2xl gap-x-5 p-5 flex items-center'>
        {icon}
        <div className='flex flex-col flex-1'>
            <h3 className='text-xl'>{title}</h3>
            <p className='text-[#909D9D] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12'>
                {description}
            </p>
        </div>
        <Button 
        //onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className='bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100'
        >
            Connect
        </Button>
    </div>
  )
}

export default IntegrationCard