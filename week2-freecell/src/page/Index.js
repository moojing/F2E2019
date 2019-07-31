import React,{useState,useRef} from 'react'
import Nav from '../component/Nav'
import WrapperGroup from '../component/WrapperGroup'
import {IndexContext} from '../hooks/context'
import { isArray } from 'util';
let Index = ()=>{
    let [tempCell,setTempCell] = useState(Object.seal([3,null,null,null])) 
    let [mainCell,setMainCell] = useState(Object.seal([null,12,null,null]))
    let [gameCell,setGameCell] = useState(Object.seal([[1,2,3,12],[],[],[],[],[],[],[]]))
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
    
    function arrayIndexReplacer(tempArr,index,value){
        tempArr[index]= value
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
        if (groupName === 'tempCell') {
            setTempCell(setterFunc)
        } else if (groupName === 'mainCell') {
            setMainCell(setterFunc)
        } else if (groupName === 'gameCell') {
            setGameCell(setterFunc)
        }
    }

    const onDrop = (e)=>{
        console.log('e: ', e.target);
        
        
       
        let newWrapperIndex =e.target.getAttribute('data-index') ||e.target.parentElement.getAttribute('data-index')
        let newWrapperGroup = e.target.parentElement.getAttribute('data-group') ||e.target.parentElement.parentElement.getAttribute('data-group')
        console.log('newWrapperGroup: ', newWrapperGroup);
        let {originWrapperIndex} = pokerRef.current
        let {originWrapperGroup} = pokerRef.current
        let {pokerIndex} = pokerRef.current
        let newGroup = getCellGroupByName(newWrapperGroup) 
        // let originGroup = getCellGroupByName(originWrapperGroup) 
        
      if(newWrapperGroup && newWrapperGroup!=='gameCell'  ){
          if(newGroup[newWrapperIndex]) return  
        setCellGroupByName(originWrapperGroup,prev=>{
            let elementToReplace
            if(isArray(prev[originWrapperIndex])){
                let {length} = prev[originWrapperIndex]
                elementToReplace = prev[originWrapperIndex].splice(0,length-1)
            }else{
                elementToReplace = null 
            } 
            return arrayIndexReplacer(prev,originWrapperIndex,elementToReplace)     
        }) 

        setCellGroupByName(newWrapperGroup,prev=>{
            return arrayIndexReplacer(prev,newWrapperIndex,pokerIndex)   
        }) 
      }else if(newWrapperGroup && newWrapperGroup==='gameCell'){
        setCellGroupByName(originWrapperGroup,prev=>{
            let elementToReplace
            if(isArray(prev[originWrapperIndex])){
                let {length} = prev[originWrapperIndex]
                elementToReplace = prev[originWrapperIndex].splice(0,length-1)
            }else{
                elementToReplace = null 
            }
            return arrayIndexReplacer(prev,originWrapperIndex,elementToReplace)
        }) 
        
        setCellGroupByName(newWrapperGroup,prev=>{
            
            let WrapperIndexArray = prev[newWrapperIndex]  
            console.log('prev: ', prev);
            console.log('newWrapperIndex: ', newWrapperIndex);
            console.log('WrapperIndexArray: ', WrapperIndexArray);
            
            WrapperIndexArray.push(pokerIndex) 
            console.log('WrapperIndexArray: ', WrapperIndexArray);
            prev[newWrapperIndex] = WrapperIndexArray
            
        
            return [...prev]
        }) 
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
                    <div className="offset-1 col-5 text-center"  onDrop={onDrop}>
                       <WrapperGroup groupName="tempCell"/>
                    </div>
                    <div className="col-6" onDrop={onDrop}>
                        <WrapperGroup groupName="mainCell"/>
                    </div>
                </div>
                <div className="row my-4"> 
                    <div className="offset-1 col-10 text-center" onDrop={onDrop}> 
                        <WrapperGroup groupName="gameCell" />
                    </div>
                </div>
            </div>
        </IndexContext.Provider>
    )
}

export default Index