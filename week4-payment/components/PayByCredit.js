import React  from "react"

let PayByCredit = () =>{
    
    return (
        <>
        <div className="form-group">
            <label >付款人信箱</label>
            <input type="email"   /> 
        </div>
        <div className="form-credit form-group">
                <label> 信用卡卡號：</label>
                <input type="text" maxLength="4"/>
                <span className="separater"> - </span>
                <input type="text" maxLength="4" />          
                <span className="separater"> - </span>
                <input type="text" maxLength="4" />
                <span className="separater"> - </span>
                <input type="text" maxLength="4" />
                <span className="visa">
                    VISA
                </span>
        </div>
        <div className="form-expire form-group">
            <label> 有效年月：</label> 
            <input type="text" placeholder="MM" maxLength="2"/>
            <span className="separater-expire"> 
                月  
                <span>/  </span>
            </span>
            <input type="text" placeholder="YYYY" maxLength="4"/>
            <span className="separater-expire"> 年 </span>
        </div>
        <div className="form-expire form-group">
            <label> 背後末三碼 </label> 
            <input type="text" placeholder="CVV" maxLength="3"/>
        </div>
        </>
    )
} 

export default PayByCredit