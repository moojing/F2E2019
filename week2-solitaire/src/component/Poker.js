import React,{useContext} from 'react'
import {IndexContext} from '../hooks/context'
let Poker = ({cardIndex:pokerIndex})=>{
    let {pokerRef} = useContext(IndexContext)
    function dragStart(e){

       pokerRef.current = {
        pokerIndex, 
           originWrapperIndex:e.target.parentElement.getAttribute('data-index') 
       }
    } 
    return(
            <div className="card card-poker"
                draggable="true"
                ref={pokerRef}
                onDragStart={dragStart}>

            <div className="patern patern-left-top">
                <span>
                    {pokerIndex?pokerIndex:null}
                </span>
            </div>
            <div className="patern patern-right-bottom">
                <span>
                    {pokerIndex?pokerIndex:null}
                </span>
            </div>
  </div>
    )
} 

export default Poker