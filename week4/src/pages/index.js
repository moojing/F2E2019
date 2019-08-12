import react,{useState,useReducer,useEffect} from 'react'
 
import {PaymentFormReducer} from '../reducer' 
import {PaymentContext} from '../context'
import {defaultSchema} from '../utils/formSchema'
import {paymentMethods as methods} from '../utils/paymentMethods'
import '../scss/index.scss'
import PaymentCard from '../components/PaymentCard'

let paymentFormInit = {
  method: '', 
  data:defaultSchema[methods[0].name]
}

function IndexPage() {
  let [currentMethod,setCurrentMethod] = useState(methods[0].name)
  let [paymentData, paymentDispatcher] = useReducer(PaymentFormReducer,paymentFormInit) 
  
  useEffect(()=>{
    paymentDispatcher({method:currentMethod})
  },[currentMethod])

  let onMethodClick = (method)=>{
    setCurrentMethod(method)
  }
  return (
    <PaymentContext.Provider value={{
      paymentDispatcher,
      paymentData
      }}>
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
                              onClick={()=>{onMethodClick(method.name)}}
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
      </PaymentContext.Provider>
  );
}
 
export default IndexPage;