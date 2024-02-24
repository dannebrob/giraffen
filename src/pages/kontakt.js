import { useState } from 'react'

import Link from 'next/link'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'
import ImageCarousel from '@/components/photos/ImageCarousel'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

  


  export default function Kontakt() {
    const [result, setResult] = useState("");
    const [submitStatus, setSubmitStatus] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Skickar....");
      setSubmitStatus('loading');
      const formData = new FormData();
  
      formData.append("access_key", '25bff722-e319-4951-81b7-f22c753c87d6');
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("message", message);
  
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
  
        if (res.success) {
          console.log("Success", res);
          setResult('Tack för ditt meddelande, vi återkommer så snart vi kan!');
          setSubmitStatus('success');
          // Clear the form fields
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log("Error", error);
        setResult('Ojdå, nu blev nog något fel, försök igen! Eller skicka ett mail till oss på: info@forskolangiraffen.se');
        setSubmitStatus('error');
      }
    };
  
    return (
      <>
        <TopHead />
        <section className='w-full pb-10 bg-sand pt-20'>
          <div className='w-full flex flex-col md:flex-wrap '>
            <h1 className={`text-center p-10 ${caveat.className} text-5xl py-8`}>Välkommen att kontakta oss på Giraffen</h1>
            <div className='px-10'>
              <p className='text-center'>Om du vill ställa ditt barn i kö hos oss eller har några funderingar, skriv gärna till oss här!</p>
              <form onSubmit={onSubmit} className='flex flex-col p-10 md:px-52'>
                <input type="checkbox" name="botcheck" className='hidden' />
                <input type="hidden" name="from_name" value="Giraffen hemsida - Kontakt"></input>
                <label>Namn</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <label>Telefonnummer</label>
                <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                <label>E-post</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <label>Meddelande</label>
                <textarea name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <span className=''>{result}</span>
                {/* <span className=''>{submitStatus}</span> */}
                <input type="submit" className={`p-2 mt-10 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}/>
              </form>
              <p className='text-center p-5'>Psst, vill du jobba hos oss? Kolla gärna våra lediga tjänster <Link href={'/jobb'} className='font-bold' >här</Link></p>
            </div>
          </div>
        </section>
        <ImageCarousel />
        <Footer />
      </>
    )
}
