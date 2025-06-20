import { onBoardUser } from '@/action/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

    const user = await onBoardUser()

    if(user.status === 200 || user.status === 201){
      return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
    }

    redirect('/sign-in')

  return (
    <div>Page</div>
  )
}

export default Page