import React ,{ useState } from 'react';
import Icon from '../component/Icon'
import {ToggleContext} from '../context/ToggleContext'
import SidebarToggler from '../component/SidebarToggler'


function PanelAside (){
    const icons = ['Add','List','Analysis','Ring']
    const [currentIcon,setCurrentIcon] = useState(icons[1])
   
    let value = {
      sayHi:()=>{console.log('Hi!!')}
    }
    

    const isActive = (icon)=>{
        return  icon === currentIcon
    }
    
    return ( 
      <ToggleContext.Provider  value={value}>
        <div className=" panel-aside-shrink bg-dark "> 
          { icons.map((iconName,index)=>(
             <div 
              className="icon" 
              key={index}
              onClick={()=>{setCurrentIcon(iconName)}}>

             <Icon 
              name={iconName}
              className={`icon-svg ${isActive(iconName)?'active':''}`}/>
           </div>
          ))
          }
          <SidebarToggler/>
        </div>

        <div className=" panel-aside-main bg-dark text-white"> asda</div>
      
      </ToggleContext.Provider>
    )   
}

export  default PanelAside