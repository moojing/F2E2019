import React from 'react'
import Icon from '../component/Icon'
let AddTask= ()=>{

    return (<>
        <div className="row px-5">
            <div className="col-12"> 
                <h1 className="title title-main py-4">ADD TASK</h1>
            </div>
            <div className="col-12 "> 
                <h3 className="title title-sub py-2"> TASK TITLE </h3>
                <input type="text" className="form-control" placeholder="My Second Task"/>
            </div>
            <div className="col-12 my-3 my-4"> 
                <h3 className="title title-sub mb-3"> ESTIMATED TOMOTO </h3>
               
                <div className="d-flex justify-content-between">
                {
                    Array(10).fill(0).map((item,index)=>{
                      return (  <Icon 
                        key={index}
                        name="TomatoSmall"
                        className="icon-svg cursor-pointer"/>)
                    }) 
                  }
                </div>
            </div>
            <div className="col-12 my-3"> 
                <div className="btn btn-primary btn-block font-weight-bold ls-1">ADD TASK</div>
            </div>
        </div>
    </>)
}

export default AddTask