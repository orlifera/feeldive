import { BannerProps } from '@/types';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Banner({ title, subtitle, source, button, link, brightness }: BannerProps) {
    return (
        <div className="relative px-2 w-full h-[35em] md:h-[35em] flex items-center justify-center text-white">
            <div className="absolute inset-0 z-0 w-full" >
                <Image
                    src={source}
                    alt="Banner Background"
                    layout="fill"
                    objectFit="cover"
                    className={brightness}
                />
            </div >

            {/* Text content */}
            <div className="relative z-20 text-center px-6 max-w-4xl">
                <h1 className="text-4xl font-extrabold">{title} </h1>
                <p className="text-lg w-[70%] m-auto font-light leading-relaxed">
                    {subtitle}
                </p>
                {button && link &&
                    <Button variant={"default"} className="mt-4 p-8" asChild>
                        <Link href={link}>Scopri di più</Link>
                    </Button>
                }
            </div>
        </div >
    )
}