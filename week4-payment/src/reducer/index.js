import { paymentMethods } from '../utils/paymentMethods'

export function PaymentFormReducer(state, action){
  console.log('action: ', action);
      return  {
        method:action.method,
        formData: action.formData
      }
}
