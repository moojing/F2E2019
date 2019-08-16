import React,{useState,useReducer,useContext,useEffect} from 'react'

import {PaymentContext} from '../context'
import {paymentMethods as methods} from '../utils/paymentMethods'
import PaymentCard from '../components/PaymentCard'

import { withRouter,Link } from 'react-router-dom';

 
function IndexPage({history}) {
  let [currentMethod,setCurrentMethod] = useState(methods[0])
  let {paymentData,paymentDispatcher} = useContext(PaymentContext)
   
  useEffect(()=>{
    paymentDispatcher({
        method:currentMethod.name,
        formData:currentMethod.schema
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentMethod ])
  
  let onMethodClick = (method)=>{
    let currentMethodEntity  =  methods.filter(target=>target.name===method)[0] 
    setCurrentMethod(currentMethodEntity)    
  }
  

  return (
    
     
      <div className="container"> 
        <div className="row m-5"> 
          <div className="col-8"> 
            <div className="wrapper wrapper-payment "> 
                <div className="wrapper-title"> 
                  請選擇付款方式
                </div>
                <div className="wrapper-body">
                    <ul className="tab tab-method">
                    {
                      methods.map((method,index)=>{
                        return (
                          <li className={`card card-method ${currentMethod.name===method.name ? 'active' : ''}` }
                              onClick={()=>{onMethodClick(method.name)}}
                              key={index}> 
                            <div className="card-img">
                              <img src={`${method.img}`} alt=""/>
                            </div>
                            <div className="card-title"> 
                              {
                                method.texts.map((text,index)=>(<h6 key={index}>{text}</h6>)) 
                              }
                            </div>
                        </li>
                        ) 
                      }) 
                    }
                    </ul>
                    <div className="tab tab-method-page">
                        <PaymentCard payment={currentMethod.name}/>
                    </div>  
                    <Link 
                      to='/finish'
                      // onClick={onPaymentSubmit}
                      className="btn btn-teal btn-block py-3 mt-4"> 
                      確定付款 ($1500)
                    </Link>
                    
                </div>
              
            </div>
            
          </div>
          <div className="col-4">
            <div className="wrapper wrapper-order p-3"> 
                <div className="wrapper-title"> 
                  我的訂單
                </div>
                <ul className="wrapper-body flex-column">
                  <li> 
                     流浪金屬史萊姆鎧甲 x 1 
                    <span className="price price-single">1150</span>
                  </li>
                  <li>
                      抗魔戒指 x 1
                      <span className="price price-single">100</span>
                  </li>
                  <li>
                      萬能藥 x 3  
                      <span className="price price-single">270</span>
                  </li>
                  <li>
                      賢者藥水 x 1 
                      <span className="price price-single">130</span>
                  </li>

                </ul>
                <div className="order-total">
                  <span className="text-teal pl-2"> TWD </span>
                  <span className="pr-2 price price-total ">1500 </span>
                </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}
 
export default withRouter(IndexPage);