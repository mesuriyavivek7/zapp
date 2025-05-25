import { AutomationDuoToneWhiteIcon } from "@/icons/automation"
import { HomeDuoToneWhiteIcon } from "@/icons/home"
import { PersonDuoToneWhiteIcon } from "@/icons/person"
import { RocketDuoToneWhiteIcon } from "@/icons/rocket"
import { SettingDuoToneWhiteIcon } from "@/icons/setting"

export const PAGE_BREAD_CRUMBS :string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings'
]

type Props = {
    [page in string]: React.ReactNode
}

export const PAGE_ICON : Props = {
    AUTOMATIONS: <AutomationDuoToneWhiteIcon/>,
    CONTACTS: <PersonDuoToneWhiteIcon/>,
    INTEGRATIONS: <RocketDuoToneWhiteIcon/>,
    SETTINGS:<SettingDuoToneWhiteIcon/>,
    HOME:<HomeDuoToneWhiteIcon/>
}