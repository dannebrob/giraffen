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
      title: 'Fråga 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Fråga 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Fråga 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

export const Faq = () => {
  return (
    <div className='px-10 pt-10 bg-green'>
      <h1 className={`my-3 text-center text-4xl p-8 text-white ${caveat.className}`}>Vanliga frågor</h1>
      <div>
        {accordionData.map(({ title, content }) => (
          <FaqItem title={title} content={content} key={title} />
        ))}
      </div>
    </div>
  )
}
