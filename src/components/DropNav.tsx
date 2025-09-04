import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Home, Images, Library, List, Mail, Menu, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import Switch from '@/components/Switch'
import { TbScubaDiving, TbScubaDivingTank, TbScubaMask } from 'react-icons/tb'

export default function DropNav() {
    return (
        <div className='z-50 w-full rounded items-center flex justify-between border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-lg shadow-primary flex-row p-4 gap-8 text-primary'>
            <Image src="/logo.png" alt="Feeldive Logo" width={100} height={250} />
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu className="m-4 stroke-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[90%] mr-20 flex flex-col bg-background/99 p-4 rounded-lg shadow-lg shadow-primary'>
                    <DropdownMenuItem className='w-full group'>
                        <Link href='/ ' className='flex items-center'>
                            <Home className="inline m-2 group-hover:stroke-white" /> Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full group'>
                        <Link href='/about' className='flex items-center'>
                            <UserRound className='inline m-2 group-hover:stroke-white' /> Chi Siamo
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        asChild
                        onSelect={(e) => e.preventDefault()}
                        className="w-full group"
                    >
                        <Accordion type="single" collapsible className="mx-2 w-full">
                            <AccordionItem value="services" className='flex flex-col w-full justify-center'>
                                <AccordionTrigger className="items-center w-full flex">
                                    <span className='flex items-center justify-center'><List className="inline mr-2 group-hover:stroke-white" /> Servizi</span>
                                </AccordionTrigger>
                                <AccordionContent className=''>
                                    <ul>
                                        <li>
                                            <Link href="/immersioni" className="flex items-center">
                                                <TbScubaMask className="inline m-2 group-hover:stroke-white" /> Immersioni
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/noleggio" className="flex items-center">
                                                <TbScubaDivingTank className="inline m-2 group-hover:stroke-white" /> Noleggio Attrezzatura
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/corsi" className="flex items-center">
                                                <Library className="inline m-2 group-hover:stroke-white" /> Corsi Sub
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/viaggi" className="flex items-center">
                                                <TbScubaDiving className="inline m-2 group-hover:stroke-white" /> Battesimo del Mare
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className='w-full group'>
                        <Link href='/gallery'>
                            <Images className='inline m-2 group-hover:stroke-white' /> Gallery
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full group'>
                        <Link href='/contatti' className='flex items-center'>
                            <Mail className='inline m-2 group-hover:stroke-white' /> Contatti
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='w-full flex justify-center'>
                        <Switch />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}