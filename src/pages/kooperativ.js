import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/IMG_1.jpg'
import { Display } from '@/components/display/Display'

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
      <div className='mx-10 md:w-1/2'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Föräldrakooperativ</h1>
        <p>
        Förskolan drivs av ett icke vinstdrivet föräldrakooperativ. Där föräldrarna förväntas delta aktivt vilket innebär att föräldrarnas ideella arbete och engagemang driver föreningen. Ansvaret för den pedagogiska verksamheten och den dagliga driften är delegerat till förskolechefen. Den insats som föräldrarna bidrar med är framför allt relaterad till lokalvård, inköp, och styrelsearbete. Som förälder har du möjlighet att påverka och tycka till. Allt vi föräldrar gör skapar en finare och tryggare miljö för våra barn, vilket är både roligt och givande.

        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Styrelse</h2>
        <p>Föräldraföreningens styrelse är arbetsgivare och har ansvaret för verksamheten. Här ingår en ordförande, sekreterare, kassör, löneansvarig och personalansvarig samt två supleanter som hjälper till vid behov. På styrelsens ansvar ligger budgetarbete, kommunikation med kommun, arbetsgivaransvar med mera. Vi går efter kommunens maxtaxa.
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Arbetsgrupper</h2>
        <p>
        När man blir medlem i föreningen blir man också tillfrågad vilken arbetsgrupp man vill tillhöra. För att förskolan ska fungera på bästa sätt finns arbetsgrupperna; Innegruppen, Utegruppen, Trivselgruppen, Inköp och IT, där varje föräldrer hjälper till med sådant som behöver göras under årets gång (styrelsemedlemmar ingår inte här)
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Arbetsdagar</h2>
        <p>
        Två gånger om året utförs arbetsdagar, en gång på våren ochn en på hösten. Här utförs ett grovstäd både inne och ute samt lagar eller fixar saker vid behov. Här drar alla föräldrar sitt står till stacken samtidigt som vi spenderar lite trevlig tid tillsammans. I pauserna är det lite lunch och fika där vi kan lära känna varandra lite mer.
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Städ</h2>
        <p>
        Giraffens lokaler följer ett städschema på tisdagar och torsdagar, där föräldrar ligger på rullande schema (styrelsefamiljer ingår vanligtvis inte här).

        </p>
        </div>	
        <div className='md:w-1/2'>
      <Image
          src={item}
          alt="kids playing" 
          width={100}
          height={100}
          className="w-full p-10"
      /> 
        </div>
    </main>
    <Display />
    <Footer />
  </>
  )
}
