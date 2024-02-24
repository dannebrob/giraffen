import Image from 'next/image'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/IMG_1.jpg'
import ImageCarousel from '@/components/photos/ImageCarousel'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Kooperativ() {
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-start items-center pt-20'>
      <div className='mx-10 md:w-1/2 pb-10'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Föräldrakooperativ</h1>
        <p>
        Förskolan drivs av ett icke vinstdrivande föräldrakooperativ, vilket innebär att det är vi vårdnadshavare som 
        tillsammans är huvudmän och arbetsgivare. Ansvaret för den pedagogiska verksamheten och den dagliga driften är 
        delegerat till förskolans rektor.
        </p>
        <p className='py-4'>
        Föräldraengagemenaget är det som gör vår förskola så speciell. Allt som vi vårdnadshavare bidrar med i föreningen 
        i form av tid och engagemang går direkt tillbaka till barnen. Tillsammans skapar vi förutsättningar för en trygg 
        och utvecklande förskola för våra barn! Just att vi gör det tillsammans skapar också en positiv gemenskap för oss 
        vårdnadshavare.
        </p>
        <p>
        I praktiken innebär det att vi vårdnadshavare i första hand driver styrelsearbetet. Det kan kännas läskigt och 
        låta jobbigt att vara med i en styrelse, särskilt om det är första gången. Men detta är någonting vi gör tillsammans 
        som dessutom ger väldigt god erfarenhet. Styrelsen utgörs av en ordförande, sekreterare, kassör, löneansvarig och 
        personalansvarig. De vårdnadshavare som inte är med i styrelsen bidrar genom mindre insatser under året, såsom att 
        reparera en trasig uteleksak, fixa fika till arbetsdagar och liknande.
        </p>
        <p>
        Den huvudsakliga städningen sköts också av oss med hjälp av vår robotdammsugare! Varje vårdnadshavare tilldelas ett antal 
        pass per termin enligt ett rullande schema. Två gånger per år ses vi allihop för arbetsdag och gör extra fint på vår förskola.
       </p>
        </div>	
        <div className='md:w-1/2'>
      <Image
          src={item}
          alt="kids playing" 
          width={800}
          height={800}
          className="w-full p-10"
      /> 
        </div>
    </main>
    <ImageCarousel />
    <Footer />
  </>
  )
}
