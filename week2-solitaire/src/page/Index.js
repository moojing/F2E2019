import React,{useState,useRef} from 'react'
import Nav from '../component/Nav'
import WrapperGroup from '../component/WrapperGroup'
import {IndexContext} from '../hooks/context'
let Index = ()=>{
    let [tempCell,setTempCell] = useState(Object.seal([3,null,null,null])) 
    let [mainCell,setMainCell] = useState(Object.seal([null,12,null,null]))
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
        let newWrapperIndex =e.target.getAttribute('data-index') 
        let {originWrapperIndex} = pokerRef.current
        let {originWrapperGroup} = pokerRef.current
        let newWrapperGroup =e.target.parentElement.getAttribute('data-group')
        // let newWrapperGroup =e.target.parentElement.getAttribute('data-group')
        let {pokerIndex} = pokerRef.current
        
        console.log('newWrapperGroup: ', newWrapperGroup);
        let newSetter = setCellWithGroupName(newWrapperGroup) 
        let originSetter = setCellWithGroupName(originWrapperGroup) 
        originSetter(prev=>{
            let newArr = pokerRemover(prev,originWrapperIndex) 
            return newArr 
        }) 
        newSetter(prev=>{
            prev[newWrapperIndex] = pokerIndex
            return [...prev]
        })
        
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
                    <div className="offset-1 col-5"  onDrop={drop}>
                       <WrapperGroup groupName="tempCell"/>
                    </div>
                    <div className="col-6" onDrop={drop}>
                        <WrapperGroup groupName="mainCell"/>
                    </div>
                </div>
            </div>
        </IndexContext.Provider>
    )
}

export default Index