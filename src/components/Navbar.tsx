'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Switch from "./Switch"
import BreadCrumb from "./Breadcrumb"
import { usePathname } from "next/navigation"
import DropNav from "./DropNav"
import { Home, Mail, UserRound } from "lucide-react"
import ServiceDropDown from "./ServiceDropDown"


function Navbar() {

    const pathname: string = usePathname();
    const currentPage: string = pathname.split('/')[1];
    const [width, setWidth] = useState<number>(0);
    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (

        width > 899 ? (
            <div className="w-full fixed top-0 z-50 flex flex-col justify-center items-center">
                <nav className="w-[99%] border border-primary/20 bg-gradient-to-b from-white/10 to-white/5
    backdrop-blur-xl shadow-lg shadow-primary flex flex-row justify-between mx-auto my-4 p-4 rounded-lg text-white">

                    <div id="logo" className="flex items-center justify-start">
                        <Image src="/logo.png" alt="Feeldive Logo" width={450} height={350} />
                    </div>

                    <div id="links" className="text-center text-lg font-medium flex items-center">
                        <ul className="flex flex-row justify-between items-center gap-8">
                            <li>
                                <Link href='/' className={`cursor-pointer ${isActive('/') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full' : ''}`} ><Home className="inline m-2" />Home</Link>
                            </li>
                            <li><Link href='/about' className={`cursor-pointer ${isActive('/about') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full' : ''}`}> <UserRound className="inline m-2" />Chi Siamo</Link></li>
                            <li>
                                <ServiceDropDown />
                            </li>
                            <li>
                                <Link href='/contatti' className={`cursor-pointer ${isActive('/contatti') ? 'bg-primary text-white p-4 rounded-lg cursor-default w-full' : ''}`}><Mail className="inline m-2" /> Contatti</Link>

                            </li>
                            <li>
                                <Switch />
                            </li>
                        </ul>
                    </div>

                </nav >
                <BreadCrumb currentPage={currentPage} />

            </div >
        ) : (
            <>
                <DropNav />
                <BreadCrumb currentPage={currentPage} />
            </>

        )

    )
}

export default Navbar