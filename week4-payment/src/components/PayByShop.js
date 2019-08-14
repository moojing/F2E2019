import React,{useState,useContext,useEffect} from "react"
import {PaymentContext} from '../context'

let PayByCredit = () =>{
    let {paymentData,paymentDispatcher} = useContext(PaymentContext) 
    let [shopData,setShopData] = useState(paymentData.data)
    useEffect(()=>{
        console.log('useEffect',shopData)
    })

    let onFormChange = ()=>{}
    return (
        <>
            <div className="form-group mb-4">
                <label> 付款人信箱 </label> 
                <input type="text" 
                    name="email"
                    onChange={onFormChange}
                    placeholder="Email"  />
            </div>
            <div className="form-group mb-4">
                <label> 選擇銀行 </label> 
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                    <input className="form-check-input" 
                               type="radio" 
                               name="exampleRadios" 
                               id="shop-family" 
                               value="option1"/>
                        <label className="form-check-label" for="shop-family">
                           全家
                        </label>
                    </div>
                    <div className="form-check">
                       
                        <input className="form-check-input" 
                               type="radio" 
                               name="exampleRadios" 
                               id="shop-7-11" 
                               value="option2"/>
                        <label class="form-check-label" for="shop-7-11">
                            7-11
                        </label>
                    </div>
                </div>
            </div>
            <ul className="info-list">
                <li> 1.請參考繳費流程：全家、7-11。</li>
                <li> 2.需24小時內完成繳費才算交易成功。</li>
                <li> 3.結帳金額已含超商付費的 18 元手續費。</li>
            </ul>
            
        </>
    )
} 

export default PayByCredit