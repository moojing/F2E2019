import  React from 'react'
import PayByCredit from './PayByCredit'
import PayByShop from './PayByShop'
import PayByAtm from './PayByAtm'
let PaymentCard = function({payment}){
    
    return (
    <>
        {
            (()=>{
                switch(payment){
                    case 'credit': 
                        return   <PayByCredit method={payment}/>
                    case 'shop': 
                        return   <PayByShop method={payment}/>
                    case 'atm': 
                        return   <PayByAtm method={payment}/>
                    default :
                        return <h1> No Method Has Been Selected.</h1>
                }
            })()
        }     
    </>)
}

export default PaymentCard