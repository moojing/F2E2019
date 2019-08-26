import React from 'react'
import {ReactComponent as Bed} from '../asset/bed.svg'
import {ReactComponent as Date} from '../asset/date.svg'
import {ReactComponent as ArrorRight} from '../asset/arror-right.svg'
function Header() {
    return (
        <div className="header"> 
            <h1>HexHotel</h1>
            <ul className="list-group ">
                <li className="list-group-item list-group-border">
                    <Date className="icon-svg"/>
                    CHECK-IN
                    <ArrorRight className="icon-arror-down"/>
                </li>
                <li className="list-group-item list-group-border">
                    <Date className="icon-svg"/>
                    CHECK-OUT
                    <ArrorRight className="icon-arror-down"/>
                </li>
                <li className="list-group-item list-group-border">
                    <Bed className="icon-svg"/>
                    ROOM
                    <ArrorRight className="icon-arror-down"/>
                </li>
               
            </ul>
        </div>
    );
}

export default Header 