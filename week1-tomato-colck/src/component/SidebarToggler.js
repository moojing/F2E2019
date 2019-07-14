import React,{useContext} from 'react'
import Icon from '../component/Icon'
import {ToggleContext } from '../context/ToggleContext' 

const SidebarToggler = ()=>{
    let {panelShrink,setPanelShrink} = useContext(ToggleContext)
   
    return (
        <div className={`toggler ${panelShrink?'toggler-shrink':''}`} 
             onClick={()=>{setPanelShrink(prev=>!prev)}}>
            
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