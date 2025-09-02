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
        <div className='z-50 flex justify-between border border-white/20 bg-gradient-to-b from-white/10 to-white/5
    backdrop-blur-xl shadow-lg flex-row mx-auto p-4 gap-8 text-primary'>
            <Image src="/logo.png" alt="Feeldive Logo" width={400} height={250} className='my-4' />
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu className="m-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='min-w-[13em] m-4'>
                    <DropdownMenuItem className='w-full'>
                        <Link href='/ ' className='flex items-center'>
                            <Home className="inline m-2" /> Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        asChild
                        onSelect={(e) => e.preventDefault()}
                        className="w-full"
                    >
                        <Accordion type="single" collapsible className="mx-2 w-full">
                            <AccordionItem value="services" className='flex flex-col w-full justify-center'>
                                <AccordionTrigger className="items-center w-full flex">
                                    <span className='flex items-center justify-center'><List className="inline mr-2" /> Servizi</span>
                                </AccordionTrigger>
                                <AccordionContent className=''>
                                    <ul className="">
                                        <li>
                                            <Link href="/immersioni" className="flex items-center">
                                                <TbScubaMask className="inline m-2" /> Immersioni
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/noleggio" className="flex items-center">
                                                <TbScubaDivingTank className="inline m-2" /> Noleggio Attrezzatura
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/corsi" className="flex items-center">
                                                <Library className="inline m-2" /> Corsi Sub
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/viaggi" className="flex items-center">
                                                <TbScubaDiving className="inline m-2" /> Battesimo del Mare
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='w-full'>
                        <Link href='/prezzi' className='flex items-center'>
                            <UserRound className='inline m-2' /> Chi Siamo
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full'>
                        <Link href='/gallery'>
                            <Images className='inline m-2' /> Gallery
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='w-full'>
                        <Link href='/contatti' className='flex items-center'>
                            <Mail className='inline m-2' /> Contatti
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