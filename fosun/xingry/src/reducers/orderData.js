import {
    INIT_ORDERID, INIT_EDIT_DATA, RESET, INIT_PAYORDERNO,INIT_ORDERNO
} from '../actions'
//订单信息
let orderDataDefault = {
    orderId: '',
    orderNo: '',
    insuredId: '',
    policyNo: '',
    holderId: '',
    insuerId: '',
    payOrderNo: ''
}



export const orderData = (state = orderDataDefault, action) => {
    switch (action.type) {
        
        case INIT_ORDERID:
            return { ...state, orderId: action.val }
            case INIT_ORDERNO:
            return { ...state, orderNo: action.val }
            
        case INIT_EDIT_DATA:
            // console.log(action.entity.plan)
            return { ...state, orderId: action.entity.plan.orderNum }
        case INIT_PAYORDERNO:
            return { ...state, payOrderNo: action.val }
        case RESET:
            return orderDataDefault
        default:
            return state
    }
}
