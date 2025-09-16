import Banner from '@/components/Banner'
import { Button } from '@/components/ui/button'
import CardComponent from '@/components/CardComponent'
import dives from '@/json/dives.json'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function page() {
    return (
        <>
            <Banner
                video={true}
                title="Immersioni"
                subtitle="Esplora i fondali marini con le nostre immersioni guidate e sicure."
                source="/105.mp4"
                classname="opacity-90"
                button1={true}
                link1="/contatti"
                text1="Prenota Ora"
                button2={true}
                link2="/corsi"
                text2="Scopri i Corsi"
                icon={true}
                social={true}
            />
            <div id='icon-link' className='w-full'>
                <h1 className="text-5xl text-outline-primary font-[900] mx-8 mt-16 mb-1 text-primary lg">
                    Fun Diving
                </h1>
                <h2
                    className="text-4xl font-[900] mx-8 mt-8 mb-1 text-wrap text-primary dark:text-white lg w-[70%]"
                >
                    Immergiti con noi
                </h2>

                <div id='price' className='flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12 text-center px-8 my-4'>
                    <span className='font-semibold text-lg border-r-1 border-chart-5 pr-4'>1 Mattina - 2 Immersioni</span>
                </div>
                <div className='flex flex-col w-full my-8 px-8'>
                    <p id='info' className='text-lg my-4 w-full'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.

                    </p>
                    <p id='info' className='text-lg my-4'>

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.


                    </p>
                    <p id='info' className='text-lg my-4'>

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos ipsa sapiente odit quia laboriosam molestiae commodi ad placeat, voluptatem expedita praesentium architecto tempora magnam repellat atque vero in cumque.

                    </p>

                    <Button className="px-8 my-4 w-full py-8 animate-bounce " asChild>
                        <Link href="/contatti">Prenota Ora</Link>
                    </Button>
                    <div className='w-[50%] flex flex-col items-center justify-center mx-auto my-8'>
                        <Tabs defaultValue="tab1" className="w-full">
                            <TabsList className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-12">
                                <TabsTrigger value="tab1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground  w-full md:w-auto">Incluso</TabsTrigger>
                                <TabsTrigger value="tab2" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground  w-full md:w-auto">Cosa Portare</TabsTrigger>
                                <TabsTrigger value="tab3" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground  w-full md:w-auto">Itinerario</TabsTrigger>
                            </TabsList>
                            <TabsContent value="tab1" className="w-full px-6">
                                <ul className='list-disc text-left mx-auto my-4'>
                                    <li>Guida subacquea certificata</li>
                                    <li>Noleggio attrezzatura subacquea (vedi listino prezzi)</li>
                                    <li>Bombola e pesi</li>
                                    <li>Trasporto in barca al sito di immersione</li>
                                    <li>Cambio bombola in barca</li>
                                    <li>Snack</li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="tab2" className="w-full px-6">
                                <ul className='list-disc text-left mx-auto my-4'>
                                    <li>Brevetto</li>
                                    <li>Attrezzatura se la si possiede</li>

                                </ul>
                            </TabsContent>
                            <TabsContent value="tab3" className="w-full px-6">
                                <ul className='list-disc text-left mx-auto my-4'>
                                    <li>Ritrovo al centro immersioni alle 7:30</li>
                                    <li>Partenza in barca alle 8:00</li>
                                    <li>Prima immersione</li>
                                    <li>Cambio bombola e rinfresco</li>
                                    <li>Seconda immersione</li>
                                    <li>Rientro al centro immersioni alle 13:30</li>
                                </ul>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-3 bg-primary flex flex-col gap-4 p-8 w-full">
                    {dives.map(({ id, src, name, description, difficulty },) => (

                        <CardComponent
                            key={id}
                            title={name}
                            subtitle={Array.isArray(difficulty) ? difficulty.join(', ') : difficulty}
                            description={description}
                            src={src}
                        />
                    ))}
                </div>

                <div className='flex flex-col items-center justify-center w-full mx-auto'>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=186d077jyLXqfo5XosuRLs4tNR-VHYWI&ehbc=2E312F" className='w-[70%] h-[30em]'></iframe>
                </div>

                <div id='faq' className='w-full flex flex-col bg-foreground text-primary-foreground my-8 px-8'>
                    <h1 className="text-5xl text-outline-chart-5 font-[900] mt-16 mb-1 text-primary lg">
                        FAQ
                    </h1>
                    <h2
                        className="text-4xl font-[900] mt-8 mb-1 text-wrap text-chart-5 lg w-[70%]"
                    >
                        Domande Frequenti
                    </h2>
                    <div className="w-[15em] h-1 bg-primary rounded-lg  mb-4" />

                    <div className='w-full flex flex-col my-8 text-lg'>

                        <Accordion type="single" collapsible className="w-full p-4 bg-primary/20 rounded-lg shadow-md">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="w-ful text-lg font-bold">Lorem Ipsum</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum esse molestias, sunt tenetur dicta velit, eaque cumque sapiente cum id reprehenderit quo consequatur, distinctio quibusdam consectetur ipsum quasi. Neque, modi.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="w-ful text-lg font-bold">Lorem Ipsum</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum esse molestias, sunt tenetur dicta velit, eaque cumque sapiente cum id reprehenderit quo consequatur, distinctio quibusdam consectetur ipsum quasi. Neque, modi.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="w-ful text-lg font-bold">Lorem Ipsum</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum est, consequuntur accusamus sapiente, recusandae aspernatur officia iure molestiae, eos deserunt itaque quasi blanditiis minima. Illum dicta quibusdam tempora dolorum?
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
            </div >
        </>
    )
}