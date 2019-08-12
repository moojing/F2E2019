import {defaultSchema} from '../utils/formSchema'

export function PaymentFormReducer(state, action){
    if(state.method===action.method){
        return {...state,data:action.data}
    } 
    switch (action.method) {
        case 'credit':
          
          return {
            ...state,
            data:defaultSchema.credit};
        case 'shop':
          return{
            ...state,
            data:defaultSchema.shop};
        case 'atm':
          return {
            ...state,
            data:defaultSchema.atm};
        default:
          throw new Error('No action is provided.');
    }
}
