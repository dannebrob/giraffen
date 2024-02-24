import React from 'react'
import { useState } from "react"

import { ReadMoreButton } from './utils/ReadMoreButton'

export const FaqItem =  ({ title, content, tag }) => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className='pb-2'>
        <div className='flex p-6 bg-greenLight hover:cursor-pointer font-bold' onClick={()=> {setIsActive(!isActive)}}>{/*on click func*/}
            <div className='pr-10 text-white'>{isActive ? '-' : '+' }</div>
            <div className=''>{title}</div>
        </div>
        {isActive && 
        <div className='px-10 pb-6 text-white bg-greenLight active '>{content}
          {tag && <ReadMoreButton link={tag}  />}
          </div>}
    </div>
  )
}
