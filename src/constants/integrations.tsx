import { InstagramDuoToneBlueIcon } from "@/icons/instagram"
import { SalesForceDuoToneBlueIcon } from "@/icons/salesforce"

type Props = {
    title:string,
    icon: React.ReactNode,
    description: string,
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
   {
    title:'Connect Instagram',
    description:'Lorem inpif dgdg dgsyw duhj dhdydhs vuveh chddj dgdg gdgtde chdg.',
    icon: <InstagramDuoToneBlueIcon />,
    strategy:"INSTAGRAM"
   },
   {
    title: 'Connect Salesforce',
    description:'Lorem inpif dgdg dgsyw duhj dhdydhs vuveh chddj dgdg gdgtde chdg.',
    icon:<SalesForceDuoToneBlueIcon />,
    strategy:"CRM"
   }
] 