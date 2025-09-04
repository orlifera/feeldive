import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, Library } from "lucide-react"
import { TbScubaMask, TbScubaDivingTank, TbScubaDiving } from "react-icons/tb";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function ServiceDropDown() {

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='w-full flex flex-row items-center justify-between'>
                <span className='w-full flex flex-row items-center'>Servizi </span><ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-[10em] bg-gradient-to-b from-white/90 to-white/75'>
                <DropdownMenuItem className='w-full group'>
                    <Link href='/immersioni' className={`cursor-pointer ${isActive('/immersioni') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full group' : ''}`}>
                        <TbScubaMask className={`inline m-2 group-hover:stroke-white ${isActive('/immersioni') ? 'text-white' : ''}`} />Immersioni
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='w-full group'>
                    <Link href='/noleggio' className={`cursor-pointer ${isActive('/noleggio') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full' : ''}`}><TbScubaDivingTank className={`inline m-2 group-hover:stroke-white ${isActive('/noleggio') ? 'text-white' : ''}`} />Noleggio Attrezzatura</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='w-full group'>
                    <Link href='/corsi' className={`cursor-pointer ${isActive('/corsi') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full' : ''}`}><Library className={`inline m-2 group-hover:stroke-white ${isActive('/corsi') ? 'text-white' : ''}`} />Corsi Sub</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='w-full group'>
                    <Link href='/dsd' className={`cursor-pointer  ${isActive('/dsd') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full' : ''}`}><TbScubaDiving className={`inline m-2 group-hover:stroke-white ${isActive('/dsd') ? 'text-white' : ''}`} />Battesimo del Mare</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}