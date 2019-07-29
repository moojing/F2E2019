
import React ,{useContext}from 'react'
import {IndexContext} from '../hooks/context'
import Poker from '../component/Poker'
import PokerWrapper from '../component/PokerWrapper'

let WrapperGroup = ({groupName})=>{
        let {   tempCell,
                mainCell,
                gameCell} = useContext(IndexContext)
        
        let cellGroup = {
                tempCell,
                mainCell,
                gameCell
            } 

        function getGroup(){
           return cellGroup[groupName]
        } 

        function isArray(item){
            return Array.isArray(item)
        } 

    return (
        <div className="wrapper-group" data-group={groupName}>
        {getGroup().map((cell,index)=>{
                           return (
                               <React.Fragment key={index}>
                               <PokerWrapper 
                                   wrapperIndex={index} >
                                       
                                   {   
                                       (isArray(cell) && cell.length>0)
                                       ||( !isArray(cell) && cell!==null )?
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