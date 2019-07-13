import React ,{ useState } from 'react';
import Icon from '../component/Icon'
import SidebarToggler from '../component/SidebarToggler'

function PanelAside (){
    const icons = ['Add','List','Analysis','Ring']
    const [currentIcon,setCurrentIcon] = useState(icons[1])
    console.log('currentIcon: ', currentIcon);
    
    const isActive = (icon)=>{
        return  icon === currentIcon
    }
    
    return ( 
      <>
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
      
      </>
    )   
}

export  default PanelAside