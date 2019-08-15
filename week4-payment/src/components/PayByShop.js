import React,{useState,useContext,useEffect} from "react"
import {PaymentContext} from '../context'

let PayByShop = () =>{
    let {paymentData,paymentDispatcher} = useContext(PaymentContext) 
    console.log('paymentData: ', paymentData);
    let [shopData,setShopData] = useState(paymentData.formData)
    useEffect(()=>{
        console.log('useEffect',shopData)
    })
    
    let onFormChange = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        setShopData(prev=>{} )
    }

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
                               name="bank" 
                               id="shop-family" 
                            //    checked={shopData.name==='family'? true :''}
                               onChange={onFormChange}
                               value="family"/>

                        <label className="form-check-label" htmlFor="shop-family">
                           全家
                        </label>
                    </div>
                    <div className="form-check">
                       
                        <input className="form-check-input" 
                               type="radio" 
                               name="bank" 
                               id="shop-7-11" 
                               
                               onChange={onFormChange}
                               value="7-11"/>

                        <label className="form-check-label" htmlFor="shop-7-11">
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

export default PayByShop