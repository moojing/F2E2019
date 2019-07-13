import React,{useContext} from 'react'
import Icon from '../component/Icon'
import {ToggleContext } from '../context/ToggleContext' 

const SidebarToggler = ()=>{
    let {sayHi} = useContext(ToggleContext)
    let toggleSidebar = ()=>{
      sayHi()
    }
    return (
        <div className="toggler" onClick={()=>{toggleSidebar()}}>
            
            <Icon 
              name="TomatoSmall"
              className="icon-svg"/>

            <Icon 
              name="Arrow"
              className="icon-svg icon-arrow"/>
        </div>
    )
}

export default SidebarToggler