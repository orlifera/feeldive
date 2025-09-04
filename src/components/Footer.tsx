import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white/10 to-white/5 w-full lg:grid lg:grid-cols-3 lg:p-4 text-primary dark:text-white justify-evenly">

            <div className="mx-auto w-full  flex flex-col p-8 text-left lg:text-center border-r-1">
                <div>
                    <Image
                        src="/logo.png"
                        alt="FeelDive Logo"
                        width={150}
                        height={50}
                    />
                    <h2 className="font-bold text-lg">FeelDive Diving Center</h2>
                </div>

                <ul className="flex flex-col gap-2">
                    <li>
                        <span className="font-bold">Sede:</span> Lungomare Garibaldi, Scarlino (GR)
                    </li>
                    <li>
                        <span className="font-bold">Telefono:</span> <Link href='tel:+391234567890' className="hover:underline text-blue-500">+39 123 456 7890</Link>
                    </li>
                    <li>
                        <span className="font-bold">Email:</span> <Link href="mailto:feeldive@gmail.com" className="hover:underline text-blue-500">feeldive@gmail.com</Link>
                    </li>
                    <li>
                        <span className="font-bold">Orario di apertura:</span> Lun-Ven 07:00-20:00. Aperti tutto l&apos;anno
                    </li>
                    <li>
                        <span className="font-bold">P.IVA:</span> 12345678901
                    </li>
                </ul>
                <div className="flex flex-row gap-4 mt-4 items-center justify-center">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Link href='https://instagram.com/'><Instagram className="hover:cursor-pointer" /></Link>
                        </li>
                        <li>
                            <Link href='https://facebook.com/'><Facebook className="hover:cursor-pointer" /></Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="mx-auto w-full  flex flex-col p-8 text-left lg:text-center border-r-1">
                <h2 className="font-bold text-lg">Menu</h2>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">Chi Siamo</Link>
                    </li>
                    <li>
                        dropdown here
                    </li>
                    <li>
                        <Link href='/gallery'>Gallery</Link>
                    </li>
                </ul>
            </div>
            <div className="mx-auto w-full  flex flex-col p-8 text-left lg:text-center border-r-1">
                <h2 className="font-bold text-lg">Pagine Legal</h2>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link href='/privacy'>Privacy Policy</Link>
                    </li >
                    <li>
                        <Link href='/copy'>Copyright</Link>
                    </li>
                    <li>
                        <Link href='/tos'>Condizioni d&apos;utilizzo e trattamento dati</Link>
                    </li>
                    <li>
                        <Link href='/cookie'>Cookie</Link>
                    </li>
                </ul >

            </div >
            <div className="w-[95%] h-0.5 bg-chart-5 my-4 mx-auto">
                <p className="text-center">All rights reserved</p>
            </div>

        </footer >
    )
}