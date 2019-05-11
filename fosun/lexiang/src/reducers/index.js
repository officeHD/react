import { combineReducers } from 'redux'
import { edit, staffmes, addressData, areaLevel, socialLevel } from './appData'
import { appntData } from './appntData'
import { insuredsData } from './insuredsData'
import { orderData } from './orderData'
import { payData } from './payData'
import { bnfsType, bnfsData } from './bnfsData'
import { risksData, varietyData, effectiveDate ,renewInfo} from './risksData'
import { isLoading, selectData, isShowService, attendData } from './uiData'
import * as act from '../actions'
import data from './data.json'
//初始化的职业选择框
let i_occupation = {
    isShow: false,    //默认不显示
    step: 0,    //选择行业，step=0，选择职业，step=1
    indIndex: 0,    //行业的索引值
    occupationCategory: '',   //职业类别，后台所需文字
    occupationCategoryName: '',    //别业内别，前端所需文字
    no: '',
    type: 'holder',
    holderNo: "",
    holderCategoryName: "",
    holderCatrgory: ""
}
//职业类别选择器
const occupation = (state = i_occupation, action) => {
    switch (action.type) {
        case act.RESET:
            return i_occupation
        case act.CHANGE_OCCUPATION_TYPE:
            return { ...state, type: action.val }
        case act.SET_SAMEAS_APPENT:
            return { ...state, no: state.holderNo, occupationCategoryName: state.holderCategoryName, occupationCategory: state.holderCatrgory }
        case act.CHANGE_OCCUPATION_SHOW:
            if (!state.isShow) {
                document.querySelector('body').classList.add("overFlow");
            } else {
                document.querySelector('body').classList.remove("overFlow");
            }
            return { ...state, isShow: !state.isShow }
        case act.CLOSE_OCCUPATION_SHOW:
            return { ...state, isShow: false }
        case act.CHOICE_IND:
            return { ...state, step: 1, indIndex: action.index }
        case act.GO_BACK_STEP:
            return { ...state, step: 0 }
        case act.CLICK_JOB:
            if (action.same == true) {
                return { ...state, occupationCategoryName: action.occuName, occupationCategory: action.occuClass, no: action.no, holderCategoryName: action.occuName, holderCatrgory: action.occuClass, holderNo: action.no }
            } else {
                if (state.type == "insurant") {
                    return { ...state, occupationCategoryName: action.occuName, occupationCategory: action.occuClass, no: action.no }
                } else {
                    return { ...state, holderCategoryName: action.occuName, holderCatrgory: action.occuClass, holderNo: action.no }
                }
            }
        case act.INIT_EDIT_DATA:
            if (action.entity.insured.jobCategory) {
                let jonb = '';
                data.industryCategory.map((item, index) => {
                    item.sub.map((item1) => {
                        if (item1.no == action.entity.insured.jobCategory) {
                            jonb = item1
                        }
                    })
                });
                return { ...state, occupationCategoryName: `${jonb.name}(${jonb.class}类)`, no: action.entity.insured.jobCategory }
            } else {
                return state
            }
        default:
            return state
    }
}
//健康状况
const healthy = (state = '', action) => {
    switch (action.type) {
        case act.CHECK_HEALTHY:
            return action.val
        case act.RESET:
            return ''
        default:
            return state
    }
}
const rootReducer = combineReducers({
    areaLevel,
    socialLevel,
    appntData,
    bnfsType,
    bnfsData,
    orderData,
    payData,
    insuredsData,
    risksData,
    addressData,
    staffmes,
    isShowService,
    varietyData,
    healthy,
    selectData,
    edit,
    effectiveDate,
    isLoading,
    occupation,
    attendData,
    renewInfo
})
export default rootReducer