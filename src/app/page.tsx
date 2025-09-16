"use client"

import Banner from "@/components/Banner";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/CardComponent";
import cards from "@/json/cards.json";
import GoogleReviewsWidget from "google-reviews-widget"
// import { ElfsightWidget } from 'react-elfsight-widget';


const content = [
  {
    title: "Immergiti nei fondali maremmani",
    description:
      "Scopri le meraviglie del mondo sottomarino con le nostre immersioni guidate. Che tu sia un principiante o un sub esperto, abbiamo l'immersione perfetta per te.",
    content: (
      <Image
        src="/2.webp"
        alt="Immersioni"
        width={700}
        height={300}
        className="rounded-lg shadow-lg"
      />
    ),
  },
  {
    title: "Cresci con noi",
    description:
      "Impara a immergerti con i nostri corsi subacquei certificati. Dai corsi per principianti ai corsi avanzati, abbiamo il programma giusto per te.",
    content: (
      <Image
        src="/3.webp"
        alt="Noleggio Attrezzatura"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />
    ),
  },
  {
    title: "Vivi l'avventura",
    description:
      "Relitti, angoli nascosti e scenari mozzafiato del Tirreno ti aspettano per un’esperienza indimenticabile.",
    content: (
      <Image
        src="/4.webp"
        alt="Corsi Sub"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      <Banner
        video={true}
        title="Esplora il mondo sottomarino con Feeldive"
        subtitle="Corsi subaquei, immersioni guidate e tanto altro ti aspetta al centro di immersioni FeelDive."
        source="/138.mp4"
        button1={true}
        button2={true}
        link1="/immersioni"
        link2="/contatti"
        icon={true}
        social={true}
        classname="brightness-80"
      />

      <div className="lg:block hidden">
        <StickyScroll content={content} />
      </div>

      <div id="icon-link" className="w-full">
        <h1 className="text-5xl text-outline-primary font-[900] mx-8 mt-16 mb-1 text-primary lg:text-justify">
          FeelDive
        </h1>
        <h2
          className="text-4xl font-[900] mx-8 mt-8 mb-1 text-wrap text-primary dark:text-white lg:text-justify w-[70%]"
        >
          Nel cuore della maremma, spinti dalla nostra passione nel condividere
          il mare con tutti.
        </h2>

        <div className="w-[15em] h-1 bg-chart-5 rounded-lg mx-8 mt-2 mb-4" />

        <div>
          <p className="text-lg font-medium m-8 text-wrap text-primary dark:text-white lg:text-justify">
            FeelDive è il centro immersioni che funge da rifugio per subacquei di
            tutti i livelli. Sito nel cuore della Maremma, offriamo un ponte tra
            la terra e il mare, alla scoperta di un mondo sommerso tuttaltro che
            ordinario, circondato di gorgonie, relitti e pesce di ogni tipo.
            <br />
            <br />
            Che tu sia un sub esperto in cerca di nuove avventure o un principiante
            desideroso di esplorare il mondo sottomarino, FeelDive è qui per te,
            garantendoti il massimo della sicurezza.
          </p>
          <ul className="flex flex-row flex-wrap justify-start items-center mx-8">
            <li>
              <Image
                src="/utr.webp"
                alt="UTR"
                width={80}
                height={50}
                className="m-4 inline"
              />
            </li>
            <li>
              <Image
                src="/padi.webp"
                alt="PADI"
                width={100}
                height={70}
                className="m-4 inline"
              />
            </li>
          </ul>
          <Button className="m-8" asChild>
            <Link href="/about">Scopri di più</Link>
          </Button>
        </div>
        {/* <div className="w-[70%] mx-auto my-8 z-50">
          <video autoPlay playsInline className='w-full h-full object-cover ' loop muted>
            <source src='/129.mp4' type="video/mp4" />
          </video>
        </div> */}
      </div >
      <div className="w-full  bg-foreground text-primary-foreground ">
        <h1 className="text-5xl font-[900] mx-8 mt-16 mb-1 text-wrap lg:text-justify text-outline-chart-5">
          Immersioni
        </h1>

        <h2 className="text-4xl font-[900] mx-8 mt-8 mb-2 text-wrap text-chart-5 dark:text-primary lg:text-justify w-[70%]">
          Esplora i fondali della Maremma con le nostre immersioni guidate
        </h2>
        <div className="w-[15em] h-1 bg-primary rounded-lg mx-8 mb-4" />
        <p className="text-lg font-medium mx-8 my-8 text-wrap lg:text-justify">
          Unisciti a noi per esplorare le meraviglie del mondo sottomarino. Che tu
          sia un principiante o un sub esperto, abbiamo l&apos;immersione perfetta per
          te. Scopri i nostri corsi subacquei certificati, noleggia attrezzature
          di alta qualità e vivi avventure indimenticabili nei fondali della
          Maremma.
        </p>

        <Button className="mx-8" asChild>
          <Link href="/immersioni">Scopri di più</Link>
        </Button>

        <div className="flex flex-col lg:flex-row gap-4 p-8 w-full">
          {cards.map(({ src, title, description, button, subtitle, link, text }, i) => (
            <CardComponent
              key={i}
              title={title}
              subtitle={subtitle}
              description={description}
              src={src}
              button={button}
              link={link}
              text={text}
            />
          ))}
        </div>

      </div >

      <div className="w-full h-[30em] flex justify-center items-center text-black">
        <GoogleReviewsWidget instanceId='Nf4D0jlyznfSfyExFWnr' />
        {/* <ElfsightWidget widgetId='2884fdd2-ef2d-4d07-b570-073041fad233' lazy /> */}
      </div>

      <Banner
        title="Prenota la tua avventura subacquea oggi stesso!"
        subtitle="Che tu sia un principiante desideroso di esplorare il mondo sottomarino o un sub esperto in cerca di nuove avventure, FeelDive è qui per te. Contattaci ora e inizia il tuo viaggio con noi."
        source="/5.webp"
        button1={true}
        button2={true}
        link1="/dsd"
        link2="/contatti"
        classname="brightness-40"
      />
    </>
  );
}
