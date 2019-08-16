import imgCard from  '../static/card-light.png'
import imgShop from '../static/shop-light.png'
import imgATM from '../static/ATM-light.png'

export let paymentMethods = [{
    name: 'credit', 
    texts:['信用卡','刷卡'],
    img:imgCard,
    schema:{
      email:'', 
      creditNumber:['','','',''],
      expireMonth:'',
      expireYear:'',
      cvv:''
    }
  },
  {
    name:'shop',
    texts:['超商代碼','繳費'],
    img:imgShop,
    schema:{
      email:'', 
      shopName:'family' , //family / 7-11
    }
  },
  {
    name:'atm',
    texts:['ATM','轉帳'],
    img:imgATM,
    schema:{
      email:'',
      bankName:'esun' // esun / twbank / twnew  
    } 
  }]