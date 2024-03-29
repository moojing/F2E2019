import React,{useReducer} from 'react'
import { BrowserRouter , Route } from "react-router-dom";
import PaymentSelect from './pages/PaymentSelect' 
import PaymentFinish from './pages/PaymentFinish' 
import {PaymentFormReducer} from './reducer' 
import {PaymentContext} from './context'
import './scss/index.scss'
import {debounce} from './utils/index'
import {paymentMethods as methods} from './utils/paymentMethods'
 
let paymentFormInit = {
  method: methods[0].name, 
  formData: methods[0].schema
}

function App() {
  let [paymentData, paymentDispatcher] = useReducer(PaymentFormReducer,paymentFormInit) 
  paymentDispatcher = debounce(paymentDispatcher,800)
  console.log('App')
  return (
    <BrowserRouter>
    <PaymentContext.Provider value={{
       paymentDispatcher,
       paymentData
       }}>
      <Route path={`${process.env.REACT_APP_ROUTE_PREFIX}/`} exact component={PaymentSelect}/>
      <Route path={`${process.env.REACT_APP_ROUTE_PREFIX}/finish`}  component={PaymentFinish}/>
      </PaymentContext.Provider>
    </BrowserRouter>
  );
}
 
export default App;