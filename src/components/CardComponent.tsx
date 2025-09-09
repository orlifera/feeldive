import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardProps } from "@/types";

export default function CardComponent({ title, description, src, button, subtitle, link, classname, text }: CardProps) {
    return (
        <Card className={`relative overflow-hidden rounded-2xl shadow-lg 
             transition-[flex] duration-500 ease-in-out 
             lg:flex-[1] lg:hover:flex-[2] group ${classname ? classname : "w-full  h-[38em]"}`}
        >
            {/* Background Image */}
            <Image
                src={src}
                alt={title}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-70"
            />

            {/* Content Overlay */}
            <CardFooter
                className="absolute inset-0 flex flex-col justify-end p-10
                   bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                   text-white transition-all duration-500 items-start gap-2"
            >
                {/* Title always visible */}
                <p className="text-md font-semibold text-chart-5">{subtitle?.toUpperCase()}</p>
                <CardTitle className="text-3xl mb-2">{title}</CardTitle>

                {/* Extra info fades in on hover */}
                <div
                    className="overflow-hidden 
                 max-h-full opacity-100     
                 lg:max-h-0 lg:opacity-0    
                 lg:group-hover:max-h-40 lg:group-hover:opacity-100 
                 transition-all duration-500"
                >
                    <CardDescription className="text-lg text-gray-200 mb-2">
                        {description}
                    </CardDescription>

                    {button && link && text && (
                        <Button asChild className="mt-2 py-6 px-8 rounded-2xl">
                            <Link href={link} target="_blank" rel="noopener noreferrer">
                                {text}
                            </Link>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
