import React from 'react';
import { ReactComponent as TomatoIcon }  from '../assets/icons/tomato_big_color.svg'

let Cover =  ()=>{
    return (
        <>
            <div className="icon-tomato">
              <TomatoIcon/>
              <h2 className="ls-15 icon-title text-white">PODOMORO</h2>
            </div>
            <h6 className="text-center mt-5 ls-15">You don’t have any task now, <br/> please add task first!</h6>
        </>
    )
}

export default Cover; 