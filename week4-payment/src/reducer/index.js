import { paymentMethods } from '../utils/paymentMethods'

export function PaymentFormReducer(state, action){
      return  {
        method:action.method,
        formData: action.formData
      }
}
