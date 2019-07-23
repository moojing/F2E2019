
import React ,{useContext}from 'react'
import {IndexContext} from '../hooks/context'
import Poker from '../component/Poker'
import PokerWrapper from '../component/PokerWrapper'

let WrapperGroup = ({groupName})=>{
        let {   tempCell,
                mainCell} = useContext(IndexContext)
        
        let cellGroup = {tempCell,mainCell} 

        function getGroup(){
           return cellGroup[groupName]
        } 
    return (
        <div className="wrapper-group" data-group={groupName}>
        {getGroup().map((cell,index)=>{
                           return (
                               <React.Fragment key={index}>
                               <PokerWrapper 
                                   wrapperIndex={index} 
                                   >
                                   {   
                                       cell?
                                       <Poker cardIndex={cell}/>:
                                       null
                                   }
                               </PokerWrapper>
                               </React.Fragment>
                           ) 
                       })}
       </div>)
    
} 

export default WrapperGroup