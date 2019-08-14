import React,{useState,useReducer,useEffect} from 'react'
import { BrowserRouter , Route } from "react-router-dom";
import PaymentSelect from './pages/PaymentSelect' 
import PaymentFinish from './pages/PaymentFinish' 
import './scss/index.scss'

 

function App() {
 
  return (
    <BrowserRouter>
      <Route path="/" exact component={PaymentSelect}/>
      <Route path="/finish" exact component={PaymentFinish}/>
    </BrowserRouter>
  );
}
 
export default App;