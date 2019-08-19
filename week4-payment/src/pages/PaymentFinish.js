import React,{useState,useReducer,useEffect,useContext,useRef} from 'react'
import { withRouter } from 'react-router-dom';
import {PaymentContext} from '../context'

let PaymentFinish = ({history})=>{ 
    let { paymentData,paymentDispatcher} = useContext(PaymentContext) 
    let onGoBack = ()=>{
        history.goBack()
    }
    useEffect(()=>{
        let msgFadeOut = setTimeout(()=>{
            msgSuccess.current.style.opacity='0'
            msgSuccess.current.style.display='none'
        },2000)
        return ()=>{
            clearTimeout(msgFadeOut)
        } 
    })
    let msgSuccess = useRef()
    
    return (
       <>
        <div className="my-5 row justify-content-center"> 
            <div className="msg-successful" ref={msgSuccess}>
                SUCCESS!
            </div>
            <div className="col-6"> 
                <div className="wrapper wrapper-finish">
                    <div className="wrapper-title text-teal-light mt-3"> [ 購買成功！] </div>
                     <div className="wrapper-subtitle  text-teal-light"> 感謝您的購買 </div>
                     <div className="wrapper-body">
                      
                        <li> 
                            <span className="price-title"> 訂單編號：</span>
                            <span className="price price-single">1150</span>
                        </li>
                        <li>
                            <span className="price-title"> 訂購人：</span>
                            <span className="price price-single">100</span>
                        </li>
                        <li>
                            <span className="price-title"> 訂購人Email：</span>
                            <span className="price price-single">270</span>
                        </li>
                        <li>
                            <span className="price-title"> 付款狀態：</span>
                            <span className="price price-single">已付清</span>
                        </li>
                        <li>
                            <span className="price-title"> 付款方式：</span>
                            <span className="price price-single">末四碼 1234 Visa信用卡</span>
                        </li>
                        <div className="devider bg-teal"> </div>
                        <li className="d-flex justify-content-between">
                            
                            <span className="price-title">  流浪金屬史萊姆鎧甲 x 1 </span> 
                            <span className="price price-single text-teal-light ">1150</span>
                        </li>
                        <li className="d-flex  justify-content-between">
                            <span className="price-title"> 抗魔戒指 x 1</span>
                            <span className="price price-single text-teal-light">100</span>
                        </li>
                        <li className="d-flex  justify-content-between">
                                
                            <span className="price-title">  萬能藥 x 3 </span> 
                            <span className="price price-single text-right text-teal-light">270</span>
                        </li>
                        <li className="d-flex justify-content-between ">
                            
                            <span className="price-title">   賢者藥水 x 1  </span> 
                            <span className="price price-single text-teal-light">130</span>
                        </li>
                        <div className="devider bg-teal"></div>
                        <li className="d-flex justify-content-between ">
                            <span className="pl-2 price-title text-teal-light">  TWD  </span> 
                            <span className="pr-2 price price-total text-teal-light">130</span>
                        </li>
                    </div>
                    <div className="wrapper-footer"> 
                        <div className="btn-order-group">
                        <div className="btn btn-order" onClick={onGoBack}> 回首頁 </div>
                            <div className="btn btn-order"> 列印此頁面 </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
} 

export default withRouter(PaymentFinish)