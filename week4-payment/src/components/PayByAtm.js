import React ,{useContext} from "react"
import {PaymentContext} from '../context'

let PayByAtm = ({method}) =>{
    let {paymentData,paymentDispatcher} = useContext(PaymentContext) 
    let setAtmData = (atmSetter)=>{
        let latestData = atmSetter(paymentData.formData) 
        paymentDispatcher({method,formData:latestData}) 
    }
    let onFormChange = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        setAtmData(prev=>{ 
             return {...prev,[name]:value}   
        })
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
                            onChange={onFormChange}
                           type="radio" 
                           name="bankName" 
                           id="bank-esun" 
                           value="esun"/>
                    <label className="form-check-label" htmlFor="bank-esun">
                       玉山銀行
                    </label>
                </div>
                <div className="form-check">
                   
                    <input className="form-check-input" 
                            onChange={onFormChange}
                           type="radio" 
                           name="bankName" 
                           id="bank-twbank" 
                           value="twbank"/>
                    <label className="form-check-label" htmlFor="bank-twbank">
                        台灣銀行 
                    </label>
                </div>
                <div className="form-check">
                   
                    <input className="form-check-input" 
                            onChange={onFormChange}
                           type="radio" 
                           name="bankName" 
                           id="bank-twnew" 
                           value="twnew"/>
                    <label className="form-check-label" htmlFor="bank-twnew">
                        台新銀行
                    </label>
                </div>
            </div>
        </div>
        <ul className="info-list">
            <li> 1.如果您持有以上金融機構發行之金融卡，可選擇該金融機構轉帳帳號，可選擇該金融機構轉帳帳號，可享省下銀行轉帳手續費。</li>
            <li> 2.需24小時內完成繳費才算交易成功。</li>
        </ul>
        
    </>
    )
} 

export default PayByAtm