import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item1 from '@/assets/IMG_8.jpg'
import item2 from '@/assets/IMG_4.jpg'
import { Display } from '@/components/display/Display'
import { Photos } from '@/components/photos/Photos'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Pedagogik() {
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-start py-10'>
      <div className='mx-10 md:w-1/2'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Den pedagogiska verksamheten</h1>
        <p className='font-bold pb-4'>
        Ledorden omsorg, utveckling och lärande genomsyrar Förskolan Giraffen
        </p>
        <p className=' pb-4'>
        Vår vision är att varje barn ska få en lustfylld och lärorik utbildning, där trygghet, lärande och omsorg genomsyrar utbildningen och skapar förutsättningar för ett livslångt lärande. Vi värnar om det ekologiska och naturliga värderingarna som får genomsyra hela vår verksamhet.
        </p>
        <p className='pb-4'>
        Vår pedagogiska undervisning utgår från Skolverkets läroplan för förskolan samt Barnkonventionen. Förskolans pedagoger tar tillvara varje barns nyfikenhet och lust att lära. 
        Hos oss är barnens inflytande en stor och viktig del där barns intresse visar vilken väg vi ska tar i vårt pedagogiska arbete.
        </p>
        <p className='pb-4'>
        Vi jobbar med olika teman och projekt där vi tar tillvara på barnens fantasi och idéer.
        Undervisningar anpassas flytande och aktivt efter det enskilda barnet samt barngruppen.
        </p>

        <h2 className={`${caveat.className} text-2xl py-5`}>Omsorg</h2>
        <p>
        Vi på förskolan Giraffen anser att omsorg har en central del i hela vår verksamhet. 
        Det viktig för oss att alla känner sig trygga, sedda och hörda och att vi bygger upp nära relationer med barn och dess vårdnadshavare. Genom en trygg grund kan lärande byggas vidare. Vi som personal ser det som vårt uppdrag att stötta barnen aktivt genom att vara tillgängliga, att lyssna, att vara inkännande, accepterande och närvarande.
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Utveckling</h2>
        <p className='pb-4'>
        På förskolan Giraffen har vi en helhetssyn på barns lärande och utveckling. Vårt pedagogiska arbete syftar till att uppmuntra och stötta barnen så att de känner en tilltro till sig själva och att de har en positiv uppfattning om sig själva.
        </p>
        <p className='pb-4'>
        Vi vill möta och inspirera barnen i fantasin och därigenom stimulera deras utveckling och nyfikenhet att lära sig. Barns utveckling sker på olika sätt och vårt mål med vår verksamhet är att skapa en miljö där alla får plats och får det stödet som behövs. Vi fokuserar mycket på barnens språkutveckling, känslohantering och utveckling. Att lära sig att uttrycker sina känslor och behov är otroligt viktig för barnens utveckling.       
        </p>
        <p className='pb-4'>
        Vi observerar barn och barngruppen, planerar, reflekterar och håller regelbundet kontakt med er som vårdnadshavare om barnens utveckling och hur vi kan samarbetet för att stödja barnen på bäst sätt.
        </p>  
        <h2 className={`${caveat.className} text-2xl py-5`}>lärande</h2>
        <p className='pb-4'>
        Vi som pedagoger planerar undervisningen efter barnens intressen och nyfikenhet. Läroplanens och Barnkonventionens mål är alltid med i fokus. Viktigt för oss är att det ska vara lärorikt och lekfullt.
        </p>
        <p className='pb-4'>
        Vi använder både innemiljön och utemiljön i vår undervisning.
        </p>
        <p className='pb-4'>
        Innemiljön erbjuder många olika miljöer för att utforska och prova olika form av lek och samspel så som konstruktionsler och rollek. Det finns plats för pussel, spel, djur och massor med böcker.  Det finns en ateljémiljö för kreativitet, målande, skapande och pyssel.
Även vårt kök är en del av vår lärmiljö, med hjälp av vår egen kock utforskar barnen sina sinnen genom mat och matlagning.
        </p>
        <p className='pb-4'>
        I vår skog, som ligger precis utanför dörren ges många möjligheter till att lära och utforska allt från småkryp till kretslopp. Vi följer årstidsskiftningarna och lär oss tillsammans vi flyttar ut så mycket av vår undervisning som vi kan. I början av skogen finns det en rutschkana, lekstuga, en sandlåda och en balansgång. Vi går ofta på utflykt och promenader i skogen och till vår egna grillplats och strand där vi klättrar, kryper hoppar och springer.
        </p>
        <p>
        Exempel på hur en vardag ser ut hos oss: 
        </p>
        <p>Frukost : 7.30-8:00</p>
        <p>Lek : 8:00-9:00</p>
        <p>Aktivitet i grupper/utelek : 9:00-10:45</p>
        <p>Samling : 10:45-11:00</p>
        <p>Lunch : 11.00-11:30</p>
        <p>Vilan och lugn lek : 11:30- 12:30</p>
        <p>Frilek inne eller ute : 12:30-14:00</p>
        <p>Mellanmål : 14:00-14:15</p>
        <p>Lek : 14:15 tills hämtat</p>
        </div>	
        <div className='md:w-1/2'>
      <Image
          src={item1}
          alt="kids playing" 
          width={800}
          height={800}
          className="w-full p-10"
      /> 
        <Image
            src={item2}
            alt="kids playing" 
            width={800}
            height={800}
            className="w-full p-10"
        />
        </div>
    </main>
    <Photos />
    <Footer />
  </>
  )
}
