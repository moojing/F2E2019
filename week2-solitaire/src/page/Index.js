import React,{useState,useRef,useEffect} from 'react'
import Nav from '../component/Nav'
import WrapperGroup from '../component/WrapperGroup'
import {IndexContext} from '../hooks/context'
let Index = ()=>{
    let [tempCell,setTempCell] = useState(Object.seal([3,null,null,null])) 
    let [mainCell,setMainCell] = useState(Object.seal(new Array(4)) )
    let pokerRef = useRef()
    
    let defaultContext={
        tempCell,
        mainCell,
        setMainCell,
        setTempCell,
        pokerRef
    } 
    
    function pokerRemover(tempArr,index){
        tempArr[index]= null
        return [...tempArr]
    }
    
    function setCellWithGroupName(groupName){
        let setter 
        if(groupName === 'tempCell'){
            setter = setTempCell
        }else if(groupName==='mainCell') {
            setter = setMainCell
        }
        return setter 
    }

    const drop = (e)=>{
        let pokerWrapperIndex =e.target.getAttribute('data-index') 
        let {originWrapperIndex} = pokerRef.current
        let {pokerIndex} = pokerRef.current
        let PokerGroup =e.target.parentElement.getAttribute('data-group')
        let setter = setCellWithGroupName('tempCell') 
        setter(prev=>{
            let newArr = pokerRemover(prev,originWrapperIndex) 
            newArr[pokerWrapperIndex] = pokerIndex
            return newArr
        }) 
        console.log('PokerGroup: ', PokerGroup);
    }
    return (
        <IndexContext.Provider value={defaultContext}>
            <div className="container-fuild">
                <Nav/>
            </div>
            <div className="container-fluid  "> 
                
                <div className="row"> 
                    <div className="col-6"  onDrop={drop}>
                        <h1>FREECELL</h1>
                       <WrapperGroup groupName="tempCell"/>
                        
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </IndexContext.Provider>
    )
}

export default Index