import React from 'react'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'


type Props = {
    label:string,
    current: "PRO" | "FREE"
    landing?:boolean
}

const PaymentCard = ({label, current, landing}: Props) => {
  return (
    <div className={cn(label!==current?
        'bg-in-active'
        :'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
        'p-[2px] rounded-xl overflow-hidden')}>
         <div className={cn(landing && 'radial--gradient--pink',
         'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90')}>
            {
                landing ? (
                    <h2 className='text-2xl'>
                        {label === 'PRO' && 'Premium Plan'}
                        {label === "FREE" && "Standard"}
                    </h2>
                ) : (
                    <h2 className='text-2xl'>
                        {
                            label === current 
                            ? "Your Current plan"
                            : current === 'PRO'
                            ? 'Downgrade'
                            : 'Upgrade'
                        }
                    </h2>
                )
            }
            <p className='text-text-secondary text-sm mb-2'>
                Focus on content creation and let us take care of rest!
            </p>
            {
                label === 'PRO' ? (
                    <span className='bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 font-bold to-pink-500 bg-clip-text text-transparent'>
                         Smart AI
                    </span>
                ) : (
                    <p className='font-bold mt-2 text-text-secondary'>Standard</p>
                )
            }
            {
                label === 'PRO' ? (
                    <p className='mb-2'>
                        <b className='text-xl'>$99</b>/month
                    </p>
                ) : (
                    <p className='text-xl mb-2'>FREE</p>
                )
            }

            {
                [1,2,3,4,5].map((i) => (
                    <p key={i} className='mt-2 text-muted-foreground flex gap-4'>
                      <CircleCheck className='text-indigo-500'></CircleCheck>  Feature {i}
                    </p>
                ))
            }

            {
                landing ? (
                    <Button
                    className={cn('rounded-full mt-5',label==='PRO' ? 'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500':
                    'bg-background-80 text-white hover:text-background-80')}
                    >
                        {
                            label===current
                            ? 'Get Started'
                            : current === "PRO"
                            ? "FREE"
                            : "GET STARTED"
                        }
                    </Button>
                ) : 
                (
                    <Button
                     className='rounded-full mt-5  bg-background-98 text-white hover:text-background-80'
                     disabled={label===current}>
                        {
                            label === current 
                            ? 'Active'
                            : current === 'PRO' 
                            ? 'Downgrade'
                            : 'Upgrade'
                        }
                     </Button>
                )
            }

         </div>
    </div>
  )
}

export default PaymentCard