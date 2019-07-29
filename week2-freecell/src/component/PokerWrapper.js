import React from 'react'

let PokerWrapper = ({children,wrapperIndex})=>{

    

    return(
        <div className="card card-box"
        data-index={wrapperIndex}
        onDragOver={(e)=>{e.preventDefault()}}> 
            {children}
        </div>
    )
} 

export default PokerWrapper