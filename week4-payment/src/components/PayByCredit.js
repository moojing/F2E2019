import React,{useContext,useState,useEffect,useCallback}  from "react"
import {PaymentContext} from '../context'
  
let PayByCredit = ({method}) =>{
    let { paymentData,paymentDispatcher} = useContext(PaymentContext) 
    
    let setCreditData = useCallback(
        (setterWithPrevState)=>{
            let formData = setterWithPrevState(paymentData.formData) 
            paymentDispatcher({method,formData})
        },[method, paymentData, paymentDispatcher])

    let  onFormChange = (e)=>{
        let value = e.target.value
        let name = e.target.name
        setCreditData(prev=>{
             let inputName = name.split('-')[0]
             let inputIndex = name.split('-')[1]
                
             if( Array.isArray(prev[inputName])   && inputIndex){
                 if((parseInt(inputIndex)+1)<=3 &&  value.length===4 ){
                     let nextCreditInput = document.querySelector(`input[name="${inputName+'-'+(parseInt(inputIndex)+1)}"]`)
                     nextCreditInput.focus()
                 }else{

                 }
                let newCredit = prev[inputName]
                newCredit[inputIndex] = value
                return {...prev , creditNumber:newCredit}
             }else{
                return {...prev,[inputName]:value }
             }
             
        })
    }
    
    return (
        <>
        <div className="form-group">
            <label >付款人信箱</label>
            <input type="email" name="email" onChange={onFormChange}  /> 
        </div>
        <div className="form-credit form-group">
                <label> 信用卡卡號：</label>
                <input type="text" 
                       name="creditNumber-0" 
                       autoComplete="off"
                       maxLength="4"
                       onChange={onFormChange} />

                <span className="separater"> - </span>

                <input  type="text" 
                        name="creditNumber-1" 
                        autoComplete="off"
                        maxLength="4" 
                        onChange={onFormChange}/>          

                <span className="separater"> - </span>
                <input  type="text" 
                        name="creditNumber-2" 
                        autoComplete="off"
                        maxLength="4" 
                        onChange={onFormChange}/>   
                <span className="separater"> - </span>
                <input  type="text" 
                        name="creditNumber-3" 
                        autoComplete="off"
                        maxLength="4" 
                        onChange={onFormChange}/>   
                <span className="visa">
                    VISA
                </span>
        </div>
        <div className="form-expire form-group">
            <label> 有效年月：</label> 
            <input type="text" 
                   name="expireMonth"
                   placeholder="MM" 
                   onChange={onFormChange}
                   maxLength="2"/>
            <span className="separater-expire"> 
                月  
                <span>/  </span>
            </span>
            <input type="text" 
                   placeholder="YYYY" 
                   name="expireYear"
                   onChange={onFormChange}
                   maxLength="4"
                   />
            <span className="separater-expire"> 年 </span>
        </div>
        <div className="form-expire form-group form-cvv">
            <label> 背後末三碼 </label> 
            <input type="text" 
                   name="cvv"
                   onChange={onFormChange}
                   placeholder="CVV"  
                   maxLength="3"/>
        </div>
        </>
    )
} 

export default PayByCredit