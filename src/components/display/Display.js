import React from 'react'
import { useState, useEffect } from 'react'
import {Item1} from './Item_1'
import { Item2 } from './Item_2'
import { Item3 } from './Item_3'
import { Item4 } from './Item_4'
import { Attention } from '../header/Attention'


export const Display = () => {
 
  return (
    <div>
    <Item2 />
    <Item3 />
    <Item4 />
    <Item1 />
    <Attention />
    </div>
  )
}
