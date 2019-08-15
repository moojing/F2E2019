import React from "react"

let PayByAtm = () =>{
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
                    <label className="form-check-label" htmlFor="shop-family">
                       全家
                    </label>
                </div>
                <div className="form-check">
                   
                    <input className="form-check-input" 
                           type="radio" 
                           name="exampleRadios" 
                           id="shop-7-11" 
                           value="option2"/>
                    <label className="form-check-label" htmlFor="shop-7-11">
                        7-11
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