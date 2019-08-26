import React from 'react'
import {ReactComponent as Bed} from '../asset/bed.svg'
function Header() {
    return (
        <div className="header"> 
            <h1>HexHotel</h1>
            <ul className="list-group ">
                <li className="list-group-item list-group-border">
                    <Bed className="icon-svg"/>
                    CHECK-IN
                </li>
                <li className="list-group-item list-group-border">
                    <Bed className="icon-svg"/>
                    CHECK-IN
                </li>
                <li className="list-group-item list-group-border">
                    <Bed className="icon-svg"/>
                    CHECK-IN
                </li>
               
            </ul>
        </div>
    );
}

export default Header 