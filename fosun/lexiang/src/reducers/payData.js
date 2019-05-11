import {
    CHANGE_BANK_CODE, CHANGE_CARD_NAME, CHANGE_SMSCODE, CHANGE_BANKNUM,
    CHANGE_PAY_SUCESS, CHANGE_PAYPHONE, CHANGE_SECOND, RESET,CHANGE_PAYTYPE
} from '../actions'

// 支付信息
let payDataDefault = {
    success: false,
    cardName: '',
    smsCode: '',
    bankNum: '',
    bankCode: '',
    payPhone: '',
    second: 60,
    payType:"01",
    url: ''
}
export const payData = (state = payDataDefault, action) => {
    switch (action.type) {
        case RESET:
            return payDataDefault
        case CHANGE_PAYTYPE:
            return{...state,payType:action.val}
        case CHANGE_PAY_SUCESS:
            return { ...state, success: true }
        case CHANGE_CARD_NAME:
            return { ...state, cardName: action.val }
        case CHANGE_SMSCODE:
            return { ...state, smsCode: action.val }
        case CHANGE_SECOND:
            return { ...state, second: action.val }
        case CHANGE_BANKNUM:
            return { ...state, bankNum: action.val }
        case CHANGE_BANK_CODE:
            return { ...state, bankCode: action.val }
        case CHANGE_PAYPHONE:
            return { ...state, payPhone: action.val }
        default:
            return state
    }
}