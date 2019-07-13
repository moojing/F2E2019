import {createContext} from 'react'
 

export const ToggleContext = createContext({
    sayHi:()=>{console.log('Hi!!')}
  })