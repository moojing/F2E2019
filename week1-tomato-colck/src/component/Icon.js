import React from 'react'
import { ReactComponent as Add }  from '../assets/icons/add.svg'
import { ReactComponent as List }  from '../assets/icons/list.svg'
import { ReactComponent as Analysis }  from '../assets/icons/analysis_red.svg'
import { ReactComponent as Ring }  from '../assets/icons/ringtone.svg'


let Icon = ({name,className})=>{
    let icons = {
        add:Add,
        list:List,
        analysis:Analysis,
        ring:Ring,
    }

    let getIcon = (iconName)=>{
        let Icon = icons[iconName] 
        return <Icon className={className}/>
    }
    return (
        <>
            {getIcon(name)}
        </>
    )
}

export default Icon; 