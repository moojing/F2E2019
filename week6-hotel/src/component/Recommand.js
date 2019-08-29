import React,{useState,useEffect} from 'react' 
import API from '../utils/api'

function Recommand() {
    let [recommandations,setRecommandations ] = useState([])
    useEffect(()=>{
        API.get('/rooms').then(res=>{
            setRecommandations([...res.data.items])
            console.log('res',res.data.items)
        })  
    } ,[])
    return (
        <>
            <div className="row ">
              <div className="col-12">
                <div className="text-left text-gray"> 
                    <h2> Recommand </h2>
                    <p>You may be interested in our popular rooms.</p>
                </div>
              </div>
            </div>
            <div className="row"> 
                {
                   recommandations.map(room=>{
                        return (
                        <div className="col-4" key={room.id}>
                            <h1>{room.name}</h1>
                        </div>)
                   } ) 
                }
            </div>
            
            
        </>
    );
}

export default Recommand