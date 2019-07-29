import React,{useState,useRef} from 'react'
import Nav from '../component/Nav'
import WrapperGroup from '../component/WrapperGroup'
import {IndexContext} from '../hooks/context'
let Index = ()=>{
    let [tempCell,setTempCell] = useState(Object.seal([3,null,null,null])) 
    let [mainCell,setMainCell] = useState(Object.seal([null,12,null,null]))
    let [gameCell,setGameCell] = useState(Object.seal([[],[],[],[],[],[],[],[]]))
    let pokerRef = useRef()
    
    let defaultContext={
        gameCell,
        tempCell,
        mainCell,
        setGameCell,
        setMainCell,
        setTempCell,
        pokerRef
    } 
    
    function pokerRemover(tempArr,index){
        tempArr[index]= null
        return [...tempArr]
    }
    function getCellGroupByName(name){
        let cellGroups = {
            gameCell,
            tempCell,
            mainCell,
        }
        return cellGroups[name]
    }
    function setCellGroupByName(groupName,setterFunc){
        let setter 
        if(groupName === 'tempCell'){
            setter = setTempCell
        }else if(groupName==='mainCell') {
            setter = setMainCell
        }else{
            return 
        }
        
        setter(setterFunc)
    }

    const drop = (e)=>{
        
        let newWrapperIndex = e.target.getAttribute('data-index') 
        let newWrapperGroup = e.target.parentElement.getAttribute('data-group')
        let {originWrapperIndex} = pokerRef.current
        let {originWrapperGroup} = pokerRef.current
        let newGroup = getCellGroupByName(newWrapperGroup) 
        
        // let originGroup = getCellGroupByName(originWrapperGroup) 
        let {pokerIndex} = pokerRef.current
        
      if(newWrapperGroup !== 'gameCell' && newWrapperGroup ){
        setCellGroupByName(originWrapperGroup,prev=>{
            let newArr = pokerRemover(prev,originWrapperIndex) 
            return newArr 
        }) 

        setCellGroupByName(newWrapperGroup,prev=>{
            prev[newWrapperIndex] = pokerIndex
            return [...prev]
        }) 
      }else{
          return 
      } 
        
    }
    return (
        <IndexContext.Provider value={defaultContext}>
            <div className="container-fuild">
                <Nav/>
            </div>
            <div className="container-fluid  "> 
                <div className="row">
                    <div className="col-12">
                        <h1>FREECELL</h1>
                    </div>
                </div>
                <div className="row"> 
                    <div className="offset-1 col-5 text-center"  onDrop={drop}>
                       <WrapperGroup groupName="tempCell"/>
                    </div>
                    <div className="col-6" onDrop={drop}>
                        <WrapperGroup groupName="mainCell"/>
                    </div>
                </div>
                <div className="row my-4"> 
                    <div className="offset-1 col-10 text-center"> 
                        <WrapperGroup groupName="gameCell"/>
                    </div>
                </div>
            </div>
        </IndexContext.Provider>
    )
}

export default Index