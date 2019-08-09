import {useState,useReducer} from 'react'
// import Head from 'next/head';
// import Router from 'next/router';
import {PaymentFormReducer} from '../reducer' 
import '../scss/index.scss'
import PaymentCard from '../components/PaymentCard'

let methods = [{
  name: 'credit', 
  texts:['信用卡','刷卡'],
  img:'card-light.png'
},
{
  name:'shop',
  texts:['超商代碼','繳費'],
  img:'shop-light.png'
},
{
  name:'atm',
  texts:['ATM','轉帳'],
  img:'ATM-light.png'

}]
let paymentFormInit = {
  method: '', 
  data:{} 
}
function IndexPage() {
  let [currentMethod,setCurrentMethod] = useState(methods[0].name)
  let [paymentData, paymentDispatcher] = useReducer(PaymentFormReducer,paymentFormInit) 
  let onMethodClick = (method)=>{
    setCurrentMethod(method)
    console.log('paymentData',paymentData)
  }
  return (
    <div>
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
                          <li className={`card card-method ${currentMethod===method.name ? 'active' : ''}` }
                              onClick={()=>{onMethodClick(method)}}
                              key={index}> 
                            <div className="card-img">
                              <img src={`/static/${method.img}`} alt=""/>
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
                        <PaymentCard payment={currentMethod}/>
                    </div>  
                    <div className="btn btn-teal btn-block py-3 mt-4"> 
                      確定付款 ($1500)
                    </div>
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
                  </li>
                  <li>
                      抗魔戒指 x 1
                  </li>
                  <li>
                      萬能藥 x 3 
                  </li>
                  <li>
                      賢者藥水 x 1 
                  </li>

                </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
 
export default IndexPage;