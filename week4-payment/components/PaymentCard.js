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
                        return   <PayByCredit/>
                    case 'shop': 
                        return   <PayByShop/>
                    case 'atm': 
                        return   <PayByAtm/>

                }
            })()
        }     
    </>)
}

export default PaymentCard