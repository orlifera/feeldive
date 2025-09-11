"use client"

import Banner from '@/components/Banner'
import { MailIcon, MapPin, Phone } from 'lucide-react';
import { useState } from 'react'
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default function Page() {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget; // ✅ save reference before await

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            let result: { success?: boolean; error?: string } = {};
            try {
                result = await res.json();
                console.log("Response status:", res.status);
                console.log("Response body:", result);
            } catch {
                result = {};
            }

            if (res.ok && result.success) {
                toast.success("Messaggio inviato con successo!");
                form.reset(); // ✅ use saved ref
                return;
            }

            toast.error(result.error || "Errore durante l'invio. Riprova più tardi.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <Banner
                title='Contattaci'
                subtitle='Non esitare a contatarci per qualsiasi dubbio o informazione. Siamo qui per aiutarti a vivere la migliore esperienza subacquea possibile!'
                source='/25.webp'
                classname=''
            />
            <div className="container m-auto py-16 px-8">
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
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <fieldset className="md:grid md:grid-cols-2 flex flex-col gap-4">
                                <div>
                                    <Label htmlFor='nome' className='text-md font-semibold py-2'>Nome</Label>
                                    <Input type="text" id='nome' name="nome" placeholder="Mario" className="w-full p-4 rounded-md border" required />
                                </div>
                                <div>
                                    <Label htmlFor='cognome' className='text-md font-semibold py-2'>Cognome</Label>
                                    <Input id='cognome' name="cognome" type="text" placeholder="Rossi" className="w-full p-4 rounded-md border" required />
                                </div>
                            </fieldset>

                            <fieldset className="md:grid md:grid-cols-2 flex flex-col gap-4">
                                <div>
                                    <Label htmlFor='email' className='text-md font-semibold py-2'>Email</Label>
                                    <Input id='email' name="email" type="email" placeholder="mario.rossi@esempio.com" className="w-full p-4 rounded-md border" required />
                                </div>
                                <div>
                                    <Label htmlFor='phone' className='text-md font-semibold py-2'>Telefono</Label>
                                    <Input id='phone' name="phone" type="text" placeholder='+39 1234567890' className="w-full p-4 rounded-md border" required />
                                </div>
                            </fieldset>

                            <fieldset className="md:grid md:grid-cols-2 flex flex-col gap-4">
                                <div>
                                    <Label className='text-md font-semibold py-2'>Che brevetto hai?</Label>
                                    <RadioGroup name="brevetto" className='text-lg' required>
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
                                    <Label className='text-md font-semibold py-2'>Hai la tua attrezzatura?</Label>
                                    <RadioGroup name="attrezzatura" required>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="si" id="equip1" />
                                            <Label htmlFor="equip1">Si</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="no" id="equip2" />
                                            <Label htmlFor="equip2">No, devo noleggiarla</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </fieldset>

                            <fieldset>
                                <Label htmlFor='message' className='text-md font-semibold py-2'>Messaggio</Label>
                                <Textarea name="message" placeholder="FeelDive siete i migliori..." className="w-full h-32 p-4 rounded-md border border-primary resize-none" required />
                            </fieldset>

                            <div className="flex items-center space-x-2">
                                <Input id='tos' name="tos" type="checkbox" className="w-4 h-4" required />
                                <Label htmlFor='tos'>Accetto i <Link href='tos' className='underline'>Termini e Condizioni</Link></Label>
                            </div>

                            <Button type="submit" variant={"default"} disabled={loading}>
                                {loading ? "Invio..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* MAP Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-4">Dove Siamo</h2>
                    <div className="bg-chart-5 h-1 mb-6 w-[5em]" />

                    <iframe width='100%' height='400px' className='rounded' src="https://api.mapbox.com/styles/v1/orlifera/cmfcmxjrf000201s3b6m9e7j0.html?title=false&access_token=pk.eyJ1Ijoib3JsaWZlcmEiLCJhIjoiY2x1YmIwNXIzMHN3NTJqcW54M2ZheHF5diJ9.Qr1sq3jmJBh-hN4nAK4x_g&zoomwheel=false#16.22/42.888723/10.787816" title="Feeldive" ></iframe>
                </div>
            </div>
        </>
    );
}
