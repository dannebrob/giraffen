import React from 'react'
import { Caveat } from 'next/font/google'


import { FaqItem } from '@/components/FaqItem'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

const accordionData = [
    {
      title: 'Hur stora är barngrupperna hos er?',
      content: `Vi strävar efter att ha en barngrupp om max 20 barn på förskolan. Vi har även en hög personaltäthet för att kunna ge varje barn den omsorg och trygghet de behöver. Läs mer om våran pedagogik via länken nedan `,
      tag: 'pedagogik'
    },
    {
      title: 'Serverar ni ekologisk mat?',
      content: `Ja, vi serverar ekologisk mat på förskolan i möjligaste mån, beroede på sässong och ursprung. Vi har även ett sambetemed en lokal odlare i Hemsjö som varje vecka under odlings sässong leverear färska grönsker till oss. Vi har även en egen kock som lagar maten från grunden. Läs mer om våran mat via länken nedan`,
      tag: 'mat'
    },
    {
      title: 'Hur ser en vanlig dag ut på förskolan?',
      content: `En vanlig dag på förskolan ser ut så här: Frukost serveras kl 07:30-08:00, därefter leker vi fram till kl 09:00 då vi har en aktivitet i grupper eller utelek. Kl 10:45 har vi samling och därefter serveras lunch kl 11:00-11:30. Efter lunchen har vi en vilan och lugn lek fram till kl 12:30 då vi har frilek inne eller ute. Kl 14:00 serveras mellanmål och därefter leker vi fram till att barnen hämtas.
      `,
    }
  ];

export const Faq = () => {
  return (
    <div className='px-10 py-10 bg-green md:px-32'>
      <h1 className={`my-3 text-center text-4xl p-8 text-white ${caveat.className}`}>Vanliga frågor</h1>
      <div>
        {accordionData.map(({ title, content, tag }) => (
          <FaqItem title={title} content={content} key={title} tag={tag} />
        ))}
      </div>
    </div>
  )
}
