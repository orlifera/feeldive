import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, LibraryIcon } from "lucide-react"
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
            <DropdownMenuContent className='min-w-[10em] bg-gradient-to-b from-white/90 to-white/75 text-black dark:text-primary'>
                <DropdownMenuItem className={`cursor-pointer ${isActive('/immersioni') ? 'bg-primary dark:text-white text-white rounded-lg cursor-default w-full group' : ''}`}>
                    <Link href='/immersioni'>
                        <TbScubaMask className={`inline m-2 group-hover:text-white ${isActive('/immersioni') ? 'dark:text-white text-white' : ''}`} />Immersioni
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={`cursor-pointer ${isActive('/noleggio') ? 'bg-primary dark:text-white text-white rounded-lg cursor-default w-full group' : ''}`}>
                    <Link href='/immersioni'>
                        <TbScubaDivingTank className={`inline m-2 group-hover:text-white ${isActive('/noleggio') ? 'dark:text-white text-white' : ''}`} />Noleggio
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={`cursor-pointer ${isActive('/corsi') ? 'bg-primary dark:text-white text-white rounded-lg cursor-default w-full group' : ''}`}>
                    <Link href='/immersioni'>
                        <LibraryIcon className={`inline m-2 group-hover:text-white ${isActive('/corsi') ? 'dark:text-white text-white' : ''}`} />Corsi Sub
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={`cursor-pointer ${isActive('/dsd') ? 'bg-primary dark:text-white text-white rounded-lg cursor-default w-full group' : ''}`}>
                    <Link href='/immersioni'>
                        <TbScubaDiving className={`inline m-2 group-hover:text-white ${isActive('/dsd') ? 'dark:text-white text-white' : ''}`} />Battesimo del Mare
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}