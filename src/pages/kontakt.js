import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

  


export default function Kontakt() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Skickar....");
    const formData = new FormData(event.target);

    formData.append("access_key", '69c5f846-9c97-44a5-9ff7-b41d726d697b');

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult('Tack för ditt meddelande, vi återkommer så snart vi kan!');
    } else {
      console.log("Error", res);
      setResult('Ojdå, nu blev nog något fel, försök igen!');
    }
  };

  return (
    <>
      <TopHead />
      <section className="className='w-full pb-10 bg-sand">
      <div className='w-full flex flex-col md:flex-wrap '>
      <h1 className={`text-center p-10 ${caveat.className} text-5xl py-8`}>Välkommen att kontakta oss på Giraffen</h1>
      <div className='px-10'>
      <p className='text-center'>Om du vill ställa ditt barn i kö hos oss eller har några funderingar, skriv gärna till oss här!</p>
      </div>
      <form onSubmit={onSubmit} className='flex flex-col p-10 md:px-52'>
      <input type="checkbox" name="botcheck" className='hidden' />
      <input type="hidden" name="from_name" value="Giraffen hemsida - Kontakt"></input>
        <label>Mitt namn</label>
        <input type="text" name="name"/>
        <label>Mitt telefonnummer</label>
        <input type="text" name="phone"/>
        
        <label>Min epost</label>
        <input type="email" name="email"/>
        <label>Mitt meddelande</label>
        <textarea name="message"></textarea>
      <span className='text-green-800'>{result}</span>
        
        <input type="submit" className={`p-2 mt-10 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}/>
      </form>
      </div>
    </section>
      {/* <section className='w-full pb-10'>
        <div className='w-full flex flex-col md:flex-wrap md:flex-row '>
          <h1 className='text-center'>Kontakta oss här:</h1>
        <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col p-10 md:p-32'>
        <input type="hidden" name="access_key" value={`${process.env.API_KEY}`} />
        <input type="hidden" name="redirect" value={'https://www.google.se/'}></input>

        <label>My Name</label>
        <input type="text" name="name" required />
        <label>My Email</label>
        <input type="email" name="email" required />
        <label>My Message</label>
        <textarea name="message" required></textarea>
        <input type="checkbox" name="botcheck" className='hidden'></input>
        <button type="submit" className={`p-2 mt-10 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}>Submit Form</button>

    </form>
      </div>
      </section>

<script src="https://web3forms.com/client/script.js" async defer></script> */}
      <Footer />
    </>
  )
}
