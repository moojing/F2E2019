import React from 'react'
import { ReactComponent as Add }  from '../assets/icons/add.svg'
import { ReactComponent as List }  from '../assets/icons/list.svg'
import { ReactComponent as Analysis }  from '../assets/icons/analysis_red.svg'
import { ReactComponent as Ring }  from '../assets/icons/ringtone.svg'
import { ReactComponent as TomatoSmall }  from '../assets/icons/tomato_small_color.svg'
import { ReactComponent as Arrow }  from '../assets/icons/arrow.svg'


let Icon = ({name,className})=>{
    let icons = {
        Add,
        List,
        Analysis,
        Ring,
        TomatoSmall,
        Arrow
    }

    return (
        <>
            {
                ( (name)=>{
                    let Icon = icons[name] 
                    return <Icon className={className}/>
                })(name)
            }
        </>
    )
}

export default Icon; 