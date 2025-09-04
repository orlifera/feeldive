import Banner from '@/components/Banner'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function page() {
    return (
        <>
            <Banner
                title="Benvenuti al FeelDive"
                subtitle='Non siamo solo un centro immersioni, siamo ragazzi con una passione da trasmettere.'
                source='/1.png'
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
            <section>
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
                        src="/2.png"
                        alt="Immersioni"
                        width={200}
                        height={200}
                        className="w-full h-[20%] items-center justify-center rounded-lg shadow-lg"
                    />
                </div>
            </section>
            <section className='bg-foreground h-screen'>
                <h1 className="text-6xl font-[900] mx-8 mt-16 mb-1 text-wrap lg:text-justify text-outline-chart-5">
                    I nostri valori
                </h1>
                <h2 className="text-4xl font-[900] mx-8 mt-8 mb-2 text-wrap text-chart-5 dark:text-primary lg:text-justify w-[70%]">
                    Il tempo passa, i valori restano.
                </h2>
                <div className="w-[15em] h-1 bg-primary rounded-lg mx-8 mb-4" />
            </section>



        </>
    )
}