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
    <main className='bg-sand flex flex-col md:flex-row md:justify-start items-center'>
      <div className='mx-10 md:w-1/2 py-10'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Föräldrakooperativ</h1>
        <p>
        Förskolan drivs som ett icke vinstdrivande föräldrakooperativ. Det innebär att föräldrarnas
        ideella arbete och engagemang driver föreningen som är huvudman åt förskolan. Ansvaret för
        den pedagogiska verksamheten och den dagliga driften är delegerat till förskolechefen. Den
        insats som föräldrarna bidrar med är framför allt relaterad till lokalvård, inköp, och
        styrelsearbete. Som förälder har du möjlighet att påverka och tycka till. Allt vi föräldrar gör
        bidrar till en fin och trygg miljö för våra barn, vilket är både roligt och givande.
        </p>
        <p className='py-4'>
        Föräldraengagemanget är det som gör vår förskola så speciell. Allt som vi föräldrar bidrar med
        i föreningen i form av tid och engagemang går direkt tillbaka till barnen. Utan föräldrarna
        skulle vi inte kunna ha så bra verksamhet som vi har idag.        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Styrelse</h2>
        <p>
        Föräldraföreningens styrelse är arbetsgivare och har ansvaret för verksamheten. Här ingår en
        ordförande, sekreterare, kassör, löneansvarig och personalansvarig samt två suppleanter som
        hjälper till vid behov. På styrelsens ansvar ligger budgetarbete, kommunikation med kommun,
        arbetsgivaransvar med mera.
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Arbetsgrupper</h2>
        <p>
        När man blir medlem i föreningen blir man också tillfrågad vilken arbetsgrupp man vill tillhöra.
        För att förskolan ska fungera på bästa sätt finns arbetsgrupperna: Innegruppen, Utegruppen,
        Trivselgruppen, Inköp och IT, där varje vårdnadshavare hjälper till med sådant som behöver
        göras under årets gång utöver styrelsens arbete.        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Arbetsdagar</h2>
        <p>
        Två gånger om året utförs arbetsdagar, en gång på våren och en gång på hösten. På
        arbetsdagarna städar vi mer grundligt både inne och ute, lagar och byter ut sådant som gått
        sönder och ser till att miljön är fräsch och fin i allmänhet. Här drar alla föräldrar sitt strå till
        stacken samtidigt som vi spenderar tid tillsammans, äter, fikar och lär känna varandra bättre.
        </p> 

        <h2 className={`${caveat.className} text-2xl py-5`}>Städ</h2>
        <p>
        Den huvudsakliga städningen i Giraffens lokaler sköts av oss vårdnadshavare, tisdagar och torsdagar efter stängning. Varje förälder tilldelas ett antal pass per termin enligt ett rullande schema. Ett visst dagligt städ sköts även av personalen.  
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
