import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/IMG_11.jpg'
import { Display } from '@/components/display/Display'
import { Photos } from '@/components/photos/Photos'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Lokalerna() {
  return (
    <>
      <TopHead />
      <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
        <div className='mx-10 md:w-1/2'>
          <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Lokalerna</h1>
          <p>Huset är beläget på en höjd vid sjön Lillelången med tillgång till egen strand och skog inpå knutarna. Huset ligger med promenadavstånd till pendel
            och busshållplats. Föräldraföreningen hyr lokaler av BRF Nordgård i Norsesund. Personal och föräldrar har stor möjlighet till påverkan när det gäller lokalernas utformning och underhåll.
          </p>
          <p className='py-5'>
          Lokalerna består av ett fritidsrum i anslutning till éntren där de äldre barnen håller till vid temastunderna samt där de små sover i sina vagnar efter lunch. 

          </p>
          <p className='py-5'>Entre/hallen där barnen har var sitt skåp att hänga sina ytterkläder. På detta plan finns även ett torkrum. En trappa upp kommer vi först in i “pysselrummet” där barnen kan utrycka och öva sin konstnärliga kreativitet, spela spel. Här har vi även informations tavlan med matsedel, bild på nuvarande barngrupp med mera. Lilla 
            vilans namn kommer efter ett tidigare vilorum som nu främst är ett litet lekrum.
          </p>
          <p>
          Stora salen innefattar samlingsrum, matsal, lek och soffgrupp för läsning och fredagsfilm.
          </p>
          <p>
          Tyvärr är förskolan inte rullstolsanpassad.
          </p>

          <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Jag gillar  bäst lådorna med Lego -Signe, 4år</h1>
          <p>
          Giraffens gård finns i direkt anslutning till verksamheten och består av lekplats, standlåda, gräsplan. Vi är ute dagligen i vår härliga omgivning där barnens motoriska utveckling tränas på ett naturligt sätt. Även ute vistas både yngre och äldre barn tillsammans.

          </p>
          </div>	
          <div className='md:w-1/2'>
        <Image
            src={item}
            alt="kids playing" 
            width={100}
            height={100}
            quality={100}
            className="w-full p-10"
        /> 
          </div>
      </main>
      <Display />
      <Photos />
      <Footer />
    </>
  )
}
