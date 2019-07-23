import React,{useContext} from 'react'
import {IndexContext} from '../hooks/context'
let Poker = ({cardIndex:pokerIndex})=>{
    let {pokerRef} = useContext(IndexContext)
    function dragStart(e){
        let parent = e.target.parentElement
       pokerRef.current = {
            pokerIndex, 
            originWrapperIndex: parent.getAttribute('data-index'),
            originWrapperGroup: parent.parentElement.getAttribute('data-group')
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