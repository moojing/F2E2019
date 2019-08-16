import React,{useState,useReducer,useEffect,useContext} from 'react'

import {PaymentContext} from '../context'

let PaymentFinish = ()=>{ 
    let { paymentData,paymentDispatcher} = useContext(PaymentContext) 
    useEffect(()=>{
        console.log('paymentData',paymentData)
    })
    return (
       <>
       <h1> 
        PaymentFinish
       </h1>
       </>
    )
} 

export default PaymentFinish