import React from 'react'
import Nav from '../component/Nav'
let Index = ()=>{

    return (
        <div>
            <div className="container-fuild">
                <Nav/>
            </div>
            <div className="container-fluid  "> 
                
                <div className="row"> 
                    <div className="col-12">
                        <h1>FREECELL</h1>
                        <div class="card card-poker">
                            <div className="patern patern-left-top">
                                <span>2</span>
                            </div>
                            <div className="patern patern-right-bottom">
                                <span>2</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index