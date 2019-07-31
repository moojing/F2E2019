
import React, { useContext } from 'react'
import { IndexContext } from '../hooks/context'
import Poker from '../component/Poker'
import PokerWrapper from '../component/PokerWrapper'

let WrapperGroup = ({ groupName }) => {
    let { tempCell,
        mainCell,
        gameCell } = useContext(IndexContext)

    let cellGroup = {
        tempCell,
        mainCell,
        gameCell
    }

    function getGroup() {
        return cellGroup[groupName]
    }

    function isArray(item) {
        return Array.isArray(item)
    }

    return (
        <div className="wrapper-group" data-group={groupName}>
            {getGroup().map((cell, index) => {
                return (
                    <React.Fragment key={index}>
                        <PokerWrapper
                            wrapperIndex={index} >

                            {
                                (() => {
                                    if ((isArray(cell) && cell.length > 0)) {
                                        return (
                                            cell.map((cellIndex, key) => {
                                                return (<Poker
                                                    
                                                    style={{top:(key*40)+'px'}}
                                                    pointable={key===cell.length-1} 
                                                    draggable={key===cell.length-1}
                                                    cardIndex={cellIndex}
                                                    key={key} />)
                                            })
                                        )
                                    } else if ((!isArray(cell) && cell !== null)) {
                                        return (<Poker 
                                                    cardIndex={cell} 
                                                    draggable={true}
                                                    pointable={true}/>)
                                    } else {
                                        return null
                                    }
                                })()

                            }
                        </PokerWrapper>
                    </React.Fragment>
                )
            })}
        </div>)

}

export default WrapperGroup