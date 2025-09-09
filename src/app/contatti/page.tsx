import Banner from '@/components/Banner'
import { MailIcon, MapPin, Phone } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
// import { useForm } from "react-hook-form"

export default function Page() {

    // const form = useForm()

    return (
        <>
            <Banner
                title='Contattaci'
                subtitle='contatti'
                source='/25.webp'
                classname=''
            />
            <div className="container m-auto py-16">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">

                    {/* LEFT: Contact Info */}
                    <div className="relative">
                        <div className="sticky top-40">
                            <h1 className="text-4xl font-bold">Contattaci</h1>
                            <div className="bg-chart-5 h-1 mb-6 w-[5em]" />
                            <p className=" mb-6">
                                Se avete dubbi o curiosità o se volete sapere di più su come funziona immergersi con noi, non esitate a contattarci!
                            </p>
                            <ul className="space-y-4">
                                <li><MailIcon className='inline m-2 items-center justify-center' /><Link href='mailto:feeldive@gmail.com'>feeldive@gmail.com</Link></li>
                                <li><Phone className='inline m-2 items-center justify-center' /><Link href='tel:+391234567890'>+39 1234567890 </Link></li>
                                <li><MapPin className='inline m-2 items-center justify-center' />Lungomare Garibaldi, Scarlino, 58020, GR</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: Contact Form */}
                    <div>
                        <form className="space-y-8">
                            <fieldset className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor='name'
                                        className='text-md font-semibold py-2'>
                                        Nome
                                    </Label>
                                    <Input
                                        type="text"
                                        id='nome'
                                        placeholder="Mario"
                                        className="w-full p-4 rounded-md border"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor='cognome'
                                        className='text-md font-semibold py-2'>
                                        Cognome
                                    </Label>
                                    <Input
                                        id='cognome'
                                        type="text"
                                        placeholder="Rossi"
                                        className="w-full p-4 rounded-md border"
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor='email'
                                        className='text-md font-semibold py-2'>
                                        Email
                                    </Label>
                                    <Input
                                        id='email'
                                        type="email"
                                        placeholder="mario.rossi@esempio.com"
                                        className="w-full p-4 rounded-md border"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor='phone' className='text-md font-semibold py-2'>
                                        Telefono
                                    </Label>
                                    <Input
                                        id='phone'
                                        type='numeric'
                                        placeholder='+39 1234567890'
                                        className="w-full p-4 rounded-md border"
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className='text-md font-semibold py-2'>
                                        Che brevetto hai?
                                    </Label>
                                    <RadioGroup defaultValue="comfortable" className='text-lg'>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="owd" id="r1" />
                                            <Label htmlFor="r1">Open Water Diver</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="adv" id="r2" />
                                            <Label htmlFor="r2">Advance</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="deep" id="r3" />
                                            <Label htmlFor="r3">Deep</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="no" id="r4" />
                                            <Label htmlFor="r4">Non ho il brevetto</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div>
                                    <Label className='text-md font-semibold py-2'>
                                        Hai la tua attrezzatura?
                                    </Label>
                                    <RadioGroup defaultValue="comfortable">
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="si" id="r1" />
                                            <Label htmlFor="r1">Si</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="no" id="r2" />
                                            <Label htmlFor="r2">No, devo noleggiarla</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </fieldset>
                            <fieldset>
                                <Label
                                    htmlFor='message'
                                    className='text-md font-semibold py-2'
                                >
                                    Messaggio
                                </Label>
                                <Textarea
                                    placeholder="FeelDive siete i migliori..."
                                    className="w-full h-32 p-4 rounded-md border border-primary resize-none"
                                />
                            </fieldset>

                            <div className="flex items-center space-x-2">
                                <Input id='tos' type="checkbox" className="w-4 h-4" />
                                <Label htmlFor='tos'>Accetto i <Link href='tos' className='underline'>Termini e Condizioni</Link></Label>
                            </div>
                            <Button
                                type="submit"
                                variant={"default"}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                {/* MAP Section */}
                <div className="mt-16">
                    <iframe width='100%' height='400px' className='rounded' src="https://api.mapbox.com/styles/v1/orlifera/cmfcmxjrf000201s3b6m9e7j0.html?title=false&access_token=pk.eyJ1Ijoib3JsaWZlcmEiLCJhIjoiY2x1YmIwNXIzMHN3NTJqcW54M2ZheHF5diJ9.Qr1sq3jmJBh-hN4nAK4x_g&zoomwheel=false#16.22/42.888723/10.787816" title="Feeldive" ></iframe>
                </div>
            </div>
        </>
    );
}
