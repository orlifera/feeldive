/**
 * @name AboutPage
 * @description Provides information about the dive center, including its history, values, and team members.
 * Features sections with images and text to engage visitors and convey the center's mission and culture.
 * 
 * @author Orlifera
 */

import Banner from '@/components/Banner'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ShieldPlusIcon, UsersRound } from 'lucide-react'
import { GiCoral } from "react-icons/gi";
import Icon from '@mdi/react';
import { mdiDivingScubaFlag } from '@mdi/js';
import CardComponent from '@/components/CardComponent'
import team from '@/json/team.json'



export default function page() {
    return (
        <>
            <Banner
                title="Benvenuti al FeelDive"
                subtitle='Non siamo solo un centro immersioni, siamo ragazzi con una passione da trasmettere.'
                source='/1.webp'
                button1={true}
                link1='#story'
                text1='La Nostra Storia'
                button2={true}
                link2='#team'
                text2='Il Team'
                icon={true}
                social={true}
                classname='brightness-75'
            />
            <section id='icon-link'>
                <h1 className="text-6xl font-[900] mx-8 mt-16 mb-1 text-wrap lg:text-justify text-outline-primary">
                    La nostra storia
                </h1>
                <div id='story' className='md:grid md:grid-cols-2 flex flex-col gap-4'>
                    <div>
                        <h2 className='text-4xl font-extrabold mx-8 mt-16 text-left'>Feeldive nasce nel 2013 nel cuore della storica Maremma.</h2>
                        <div className="bg-chart-5 h-1 mx-8 mt-2 w-[5em]" />
                        <Button asChild className='mx-8 mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors'>
                            <Link href='/immersioni'>Immergiti con noi</Link>
                        </Button>
                    </div>
                    <div>
                        <p className='text-xl text-left mt-16 px-8'>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus amet iure eaque, doloribus architecto asperiores quo non assumenda! Eaque repellendus minima illo. At libero quas sint esse explicabo veniam.</p>
                    </div>
                </div>
                <div className='p-8'>
                    <Image
                        src="/6.webp"
                        alt="Immersioni"
                        width={900}
                        height={300}
                        className="flex mx-auto items-center justify-center rounded-lg shadow-lg"
                    />
                </div>
            </section>
            <section className='bg-foreground lg:grid lg:grid-cols-2 w-full flex flex-col gap-4'>
                <div className='flex flex-col w-full'>
                    <h1 className="text-6xl font-[900] mx-8 mt-16 mb-1 text-wrap lg:text-justify text-outline-chart-5">
                        I nostri valori
                    </h1>
                    <h2 className="text-4xl font-[900] mx-8 mt-8 mb-2 text-wrap text-chart-5 dark:text-primary lg:text-justify w-[70%]">
                        Il tempo passa, i valori restano.
                    </h2>

                    <div className="w-[15em] h-1 bg-primary rounded-lg mx-8 mb-4" />
                    <p className='text-lg font-medium m-8 text-wrap text-white dark:text-primary lg:text-justify'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eius quae iste magni dolore, est qui id molestias dolor tenetur a, unde cumque atque, eaque iure hic porro laudantium non?
                    </p>
                    <Button asChild className='mx-8 mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors w-[12em]'>
                        <Link href='/contatti'>Contattaci</Link>
                    </Button>
                </div>
                <div className='flex flex-col w-full p-8'>
                    <div className='grid grid-cols-2 gap-8 justify-between items-center text-white dark:text-primary text-lg mt-16'>
                        <div>
                            <UsersRound />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi modi at iure minima odit, quidem excepturi ullam aliquam maxime in laboriosam et quam architecto illo reprehenderit laborum doloremque nobis.
                        </div>
                        <div>
                            <ShieldPlusIcon />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, fugiat deserunt magni vel quam incidunt ea adipisci numquam error possimus cumque voluptas consectetur veritatis id necessitatibus.
                        </div>
                        <div>
                            <GiCoral />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit neque maxime corporis laudantium recusandae, delectus accusantium magnam ipsa ea minus quae a repellat id eligendi voluptates voluptas error quasi asperiores?
                        </div>
                        <div>
                            <Icon path={mdiDivingScubaFlag} size={1} />

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sapiente nulla, libero illum voluptatum repudiandae ullam voluptates iste qui. Voluptatem quam necessitatibus dolore repudiandae unde dicta a eveniet quaerat doloremque!
                        </div>
                    </div>
                </div>

            </section >
            <section >
                <h1 className="text-6xl font-[900] mx-8 mt-16 mb-1 text-wrap lg:text-justify text-outline-primary flex flex-col">
                    Il Team
                </h1>
                <ul className='md:grid md:grid-cols-3 flex flex-col gap-8 p-8 w-full' id='team'>
                    {team.map((team, index) => (

                        <li key={index}>
                            <CardComponent
                                title={team.title}
                                subtitle={team.subtitle}
                                description={team.description}
                                src={team.src}
                                classname='h-[30em] w-full'
                            />
                        </li>
                    ))}
                </ul>
                <div className="bg-chart-5 h-1 mx-8 mt-2 w-[5em]" />
                <h3 className='text-4xl font-extrabold mx-8 mt-16 text-left'>Unisciti a noi!</h3>
                <p className='text-lg font-medium m-8 text-wrap lg:text-justify'>
                    Vuoi entrare a far parte del nostro team? Siamo sempre alla ricerca di nuovi talenti e appassionati di immersioni per unirsi a noi in questa avventura subacquea. Se condividi la nostra passione per il mare e desideri lavorare in un ambiente dinamico e stimolante, non esitare a contattarci!
                </p>
                <Button asChild className='mx-8 mt-4 mb-16 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors w-[12em]'>
                    <Link href='/contatti'>Lavora con noi</Link>
                </Button>
            </section>
        </>
    )
}