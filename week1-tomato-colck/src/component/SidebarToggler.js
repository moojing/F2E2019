import React from 'react'
import Icon from '../component/Icon'

const SidebarToggler = ()=>{

    return (
        <div className="toggler">
            
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