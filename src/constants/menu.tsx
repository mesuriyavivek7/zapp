import { AutomationDuoToneWhiteIcon } from '@/icons/automation'
import { HomeDuoToneWhiteIcon } from '@/icons/home'
import { PersonDuoToneWhiteIcon } from '@/icons/person'
import { RocketDuoToneWhiteIcon } from '@/icons/rocket'
import { SettingDuoToneWhiteIcon } from '@/icons/setting'
import {v4 as uuid} from 'uuid'

type FieldProps={
    label:string,
    id:string
}

type SideBarProps = {
    icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU : SideBarProps[] = [
    {
        id:uuid(),
        label:'home',
        icon:<HomeDuoToneWhiteIcon></HomeDuoToneWhiteIcon>
    },
    {
        id:uuid(),
        label:'automations',
        icon:<AutomationDuoToneWhiteIcon></AutomationDuoToneWhiteIcon>
    },
    {
        id:uuid(),
        label:'integrations',
        icon: <RocketDuoToneWhiteIcon></RocketDuoToneWhiteIcon>
    },
    {
        id:uuid(),
        label:'settings',
        icon: <SettingDuoToneWhiteIcon></SettingDuoToneWhiteIcon>
    },
    // {
    //     id:uuid(),
    //     label:'contact',
    //     icon:<PersonDuoToneWhiteIcon></PersonDuoToneWhiteIcon>
    // }
]