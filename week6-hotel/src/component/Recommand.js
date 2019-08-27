import React,{useEffect} from 'react' 
import API from '../utils/api'

function Recommand() {
    useEffect(()=>{
        API.get('/rooms').then(res=>{
            console.log('res',res.data.items)
        })  
    } )
    return (
        <>
            <div className="text-left text-gray"> 
                <h2> Recommand </h2>
                <p>You may be interested in our popular rooms.</p>
            </div>
            
            
        </>
    );
}

export default Recommand