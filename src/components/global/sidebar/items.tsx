import { SIDEBAR_MENU } from '@/constants/menu'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
    page:string,
    slug:string
}

const Items = ({page,slug}: Props) => {
  return SIDEBAR_MENU.map((item)=> <Link
   key={item.id}
   href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`}
   className={cn("capitalize items-center flex gap-x-2 rounded-full p-3",page === item.label && 'bg-[#171717]',page === slug && item.label === 'home' ? 'bg-[#171717]' : 'text-[#9B9CA0]')}
   >
    {item.icon}
    {item.label}
   </Link>)
}

export default Items