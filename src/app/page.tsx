import Banner from "@/components/Banner";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Immergiti nei fondali maremmani",
    description:
      "Scopri le meraviglie del mondo sottomarino con le nostre immersioni guidate. Che tu sia un principiante o un sub esperto, abbiamo l'immersione perfetta per te.",
    content: (
      <Image
        src="/2.png"
        alt="Immersioni"
        width={700}
        height={300}
        className="rounded-lg shadow-lg"
      />
    )
  },
  {
    title: "Cresci con noi",
    description:
      "Impara a immergerti con i nostri corsi subacquei certificati. Dai corsi per principianti ai corsi avanzati, abbiamo il programma giusto per te.",
    content: (
      <Image
        src="/3.png"
        alt="Noleggio Attrezzatura"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />

    )
  },
  {
    title: "Vivi l'avventura",
    description:
      "Relitti, angoli nascosti e scenari mozzafiato del Tirreno ti aspettano per un’esperienza indimenticabile.",
    content: (
      <Image
        src="/4.png"
        alt="Corsi Sub"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />
    )
  }
]


export default function Home() {
  return (
    <>
      <Banner
        title="Esplora il mondo sottomarino con Feeldive"
        subtitle="Corsi subaquei, immersioni guidate e tanto altro ti aspetta al centro di immersioni FeelDive."
        source="/1.png"
        button={true}
        link="/contatti"
        brightness="brightness-60"
      />
      <div className="md:block hidden">
        <StickyScroll content={content} />
      </div>
      <Banner
        title="Prenota la tua avventura subacquea oggi stesso!"
        subtitle="Che tu sia un principiante desideroso di esplorare il mondo sottomarino o un sub esperto in cerca di nuove avventure, FeelDive è qui per te. Contattaci ora e inizia il tuo viaggio con noi."
        source="/5.png"
        button={true}
        link="/contatti"
        brightness="brightness-40"
      />
    </>
  );
}
