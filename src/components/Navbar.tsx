'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Switch from "./Switch"

import { usePathname } from "next/navigation"
import DropNav from "./DropNav"
import { Button } from "@/components/ui/button"
// import { Home, Mail, UserRound, ImageIcon } from "lucide-react"
import ServiceDropDown from "./ServiceDropDown"


function Navbar() {

    const pathname: string = usePathname();
    // const currentPage: string = pathname.split('/')[1];
    const [width, setWidth] = useState<number>(0);
    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (

        width > 999 ? (
            <div className="w-full fixed top-0 z-50 flex flex-col justify-center items-center">
                <nav className="w-full mx-auto border border-primary/20 bg-gradient-to-b from-white/10 to-white/5
    backdrop-blur-xl flex flex-row justify-between items-center p-4 text-white">
                    <div id="logo" className="flex items-center justify-start">
                        <Image src="/logo.png" alt="Feeldive Logo" width={150} height={150} />
                    </div>

                    <div id="links" className="text-center text-lg font-medium flex items-center">
                        <ul className="flex flex-row justify-between items-center gap-4 text-md">
                            <li>
                                <Link href='/' className={`cursor-pointer ${isActive('/') ? 'font-extrabold border-b-1 border-primary text-white p-4 cursor-default w-full' : ''}`} >Home</Link>
                            </li>
                            <li><Link href='/about' className={`cursor-pointer ${isActive('/about') ? 'font-extrabold border-b-1 border-primary text-white p-4 cursor-default w-full' : ''}`}>Chi Siamo</Link></li>
                            <li>
                                <ServiceDropDown />
                            </li>
                            <li>
                                <Link href='/gallery' className={`cursor-pointer ${isActive('/gallery') ? 'font-extrabold border-b-1 border-primary text-white p-4 cursor-default w-full' : ''}`}>Gallery</Link>
                            </li>
                            <li>
                                <Link href='/contatti' className={`cursor-pointer ${isActive('/contatti') ? 'font-extrabold border-b-1 border-primary text-white p-4 cursor-default w-full' : ''}`}>Contatti</Link>

                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <Button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors" asChild>
                            <Link href='/contatti'>Prenota Ora</Link>
                        </Button>
                        <Switch />
                    </div>

                </nav >


            </div >
        ) : (
            <div className="w-full fixed top-4 z-50 flex flex-col justify-center items-center px-8">
                <DropNav />
            </div>

        )

    )
}

export default Navbar