import React,{useContext,useState,useEffect}  from "react"
import {PaymentContext} from '../context'
let PayByCredit = () =>{
    let {paymentData,paymentDispatcher} = useContext(PaymentContext) 
    let [creditData,setCreditData] = useState(paymentData.data)
    
    let onFormChange = (e)=>{
        let value = e.target.value
        let name = e.target.name
        setCreditData(prev=>{
             let inputName = name.split('-')[0]
             let inputIndex = name.split('-')[1]

             if( Array.isArray(prev[inputName])   && inputIndex){
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
                       maxLength="4"
                       onChange={onFormChange} />

                <span className="separater"> - </span>

                <input  type="text" 
                        name="creditNumber-1" 
                        maxLength="4" 
                        onChange={onFormChange}/>          

                <span className="separater"> - </span>
                <input  type="text" 
                        name="creditNumber-2" 
                        maxLength="4" 
                        onChange={onFormChange}/>   
                <span className="separater"> - </span>
                <input  type="text" 
                        name="creditNumber-3" 
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