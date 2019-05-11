import {
    CHANGE_MAX_AGE, CHANGE_INSURE_YEAR, SET_INSURE_YEAR_ARRY, SET_PAY_MENT_ARRY,
    CHANGE_EFFECTIVE_DATE, CHANGE_VARIETY_CODE, CHANFE_FEE, SET_AMENT_ARRY,
    CHANGE_AMNT, INIT_EDIT_DATA, CHANGE_PAYMENT, CHANGE_INSURE_YEAR_FLAGE, RESET,
    CHANGE_EXTRA, CHANGE_REVEN_CODE, CHANGE_ACCOUNT, CHANGE_EXTRA_FEE, CLOSE_EXTRA,
    CHANGE_FOR_INSURED,CHANGE_INSURE_COVER
} from '../actions'
import { dateToString } from '../api'
import data from './data.json'
let defaultData = {
    "code": "110029",
    "title": "复星联合乐享一生医疗险",
    "imgp": "利率保底 财富增值",
    "imgs": "弹性支取 灵活方便",
    "tbAge": "30天-49周岁",
    "minAge": '',
    "minAgeD": 30,
    "maxAge": 49,
    "fee": 180,
    "extra": false,
    "extraFee": 0,
    "insuYear": ["105"],
    "insuYearArry": [],
    "insuYearFlag": "A",
    "payMent": ["趸交"],
    "payMentArry": [
        { "value": "趸交", "label": "趸交" },  { "value": "3", "label": "3年" } ,{ "value": "5", "label": "5年" }
    ],
    "insuranceCoverage":[],
    "insuranceCoverageArray":[
         { "value": "10000", "label": "10000元" }, { "value": "15000", "label": "15000元" }, { "value": "20000", "label": "20000元" } 
    ],
    "amnt": 200,
    "amntArry": [],
    "insuImparts": [
       
    ],
    "imparts": [
       
    ]
}
// 产品配置信息
export const varietyData = (state = defaultData, action) => {
    switch (action.type) {
        case RESET:
            return {...state,fee:180}
        case CHANGE_MAX_AGE:
            return { ...state, maxAge: action.val }
        case CHANGE_VARIETY_CODE:
            return { ...state, code: action.val }
        case CHANGE_INSURE_YEAR:
            return { ...state, insuYear: action.val }
        case SET_INSURE_YEAR_ARRY:
            return { ...state, insuYearArry: action.val }
        case CHANGE_INSURE_COVER:
            return{...state,insuranceCoverage:action.val}
        case CHANGE_PAYMENT:
            return { ...state, payMent: action.val }
        case SET_PAY_MENT_ARRY:
            return { ...state, payMentArry: action.val }
        case SET_AMENT_ARRY:
            return { ...state, amntArry: action.val }
        case CHANGE_INSURE_YEAR_FLAGE:
            return { ...state, insuYearFlag: action.val }
        case CHANGE_EXTRA_FEE:
            return { ...state, extraFee: action.val }
        case CHANGE_AMNT:
            return { ...state, amnt: action.val }
        case CHANGE_EXTRA:
            return { ...state, extra: !state.extra }
        case CLOSE_EXTRA:
            return { ...state, extra: false }
        case CHANGE_FOR_INSURED:
            if (action.val == "04") {
                return { ...state, extra: false }
            } else {
                return state
            }
        case INIT_EDIT_DATA:
            return { ...state, amnt: [`${action.entity.planLines[0].amnt / 10000}`], fee: action.entity.planLines[0].prem }

        case CHANFE_FEE:
            return { ...state, fee: action.val }
        default:
            return state
    }
}

//保费
export const fee = (state = 0, action) => {
    switch (action.type) {
        case CHANFE_FEE:
            return action.val
        case INIT_EDIT_DATA:
            return action.entity.plan.planLines[0].prem
        default:
            return state
    }
}

//缴费期间
export const payMent = (state = [10], action) => {
    switch (action.type) {
        case CHANGE_PAYMENT:
            return action.val
        case INIT_EDIT_DATA:
            let payMent = action.entity.plan.insurances[0].insuranceDuration;
            if (action.entity.plan.insurances[0].insuranceDuration === "1000") {
                payMent = "趸交"
            }
            return [payMent]
        default:
            return state
    }
}

//起保日期
let dd = new Date();
dd.setDate(dd.getDate() + 1); //获取AddDayCount天后的日期 
let tomorrow = dateToString(dd);
export const effectiveDate = (state = tomorrow, action) => {
    switch (action.type) {
        case CHANGE_EFFECTIVE_DATE:
            return action.val
        default:
            return state
    }
}
let defaulrenew = {
    "payMode": "4",
    "bankCode": "",
    "account": "",
    "accountName": ""
}
export const renewInfo = (state = defaulrenew, action) => {
    switch (action.type) {
        case RESET:
            return defaulrenew
        case CHANGE_REVEN_CODE:
            let bankS = data.payBank.filter((item) => action.val[0] == item.value);
            console.log(bankS);
            return { ...state, bankCode: bankS[0].value, accountName: bankS[0].label }
        case CHANGE_ACCOUNT:
            return { ...state, account: action.val }
        default:
            return state
    }
}

let defaultRisks = {
    amnt: 2000000,
    insuYear: "105",
    drawAge: "",
    insuYearFlag: "A",
    mult: 1,
    prem: 67,
    riskCode: "120015",
    payIntv: "12",
    payperiod: "10",
    payPeriodFlag: "Y",
    socialSecFlag: "N"
};
//附加险
export const risksData = (state = [defaultRisks], action) => {
    switch (action.type) {
        case RESET:
            return [defaultRisks]

        case CHANGE_PAYMENT:
            return { ...state, payMent: action.val }
        default:
            return state
    }
}




