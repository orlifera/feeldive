import { BannerProps } from '@/types';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Facebook, Instagram } from 'lucide-react';

export default function Banner({ title, subtitle, source, button1, link1, text1, button2, link2, text2, icon = false, social = false, classname }: BannerProps) {
    return (
        <div className="relative px-2 w-full h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 z-0 w-full" >
                <Image
                    src={source}
                    alt="Banner Background"
                    layout="fill"
                    objectFit="cover"
                    className={classname}
                />
            </div >

            {/* Text content */}
            <div className="relative z-20 text-center px-6 max-w-4xl">
                <h1 className="text-4xl font-extrabold">{title} </h1>
                <p className="text-lg w-[70%] m-auto font-light leading-relaxed">
                    {subtitle}
                </p>
                <div className='flex flex-row items-center justify-center gap-4'>
                    {button1 && link1 &&
                        <Button variant={"default"} className="mt-4 p-6 rounded-lg" asChild>
                            <Link href={link1}>
                                {text1 ? text1 : "Scopri di più"}
                            </Link>
                        </Button>
                    }
                    {
                        button2 && link2 &&
                        <Button variant={"outline"} className="mt-4 p-6 rounded-lg" asChild>
                            <Link href={link2}>
                                {text2 ? text2 : "Contattaci"}
                            </Link>
                        </Button>
                    }
                </div>
            </div>
            <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 z-10' />
            {social &&
                <ul className='absolute bottom-0 m-8 gap-4 z-50 flex flex-row right-10'>
                    <li>
                        <Link href='https://instagram.com'><Instagram className=" hover:cursor-pointer text-white" /></Link>
                    </li>
                    <li><Link href='https://facebook.com'><Facebook className="hover:cursor-pointer text-white" /></Link></li>
                </ul>}

            {
                icon &&
                <div className='absolute bottom-10 z-20 animate-bounce '>
                    <Link href='#icon-link'><ArrowDown /></Link>
                </div>
            }
        </div >
    )
}