import { SET_NOT_INAPP, CHANGE_STAFF_ID, INIT_STAFF, CHANGE_WORK_NUM,INIT_EDIT_DATA,SET_ADDRESS_DATA,SET_AREA_LEVEL,SET_SOCIAL_LEVEL} from '../actions'

 
//运行环境 true-app  false-浏览器
export const edit = (state = false, action) => {
    switch (action.type) {
        case INIT_EDIT_DATA:
            return false
        default:
            return state
    }
}
 


//员工 信息
let staffData = {
    inApp: "ms",
    staffId: '',
    workNum: '',
    name: ''
}

export const staffmes = (state = staffData, action) => {
    switch (action.type) {
        case INIT_STAFF:
            return { ...state, workNum: action.val.workNum, name: action.val.name, phoneNum: action.val.phoneNum }
        case SET_NOT_INAPP:
            return { ...state, inApp: action.val }
        case CHANGE_STAFF_ID:
            return { ...state, staffId: action.id }
        case CHANGE_WORK_NUM:
            return { ...state, workNum: action.val }
        default:
            return state
    }
}

//地区等级
export const areaLevel = (state = '', action) => {
    switch (action.type) {
        case SET_AREA_LEVEL:
            return action.val
        default:
            return state
    }
}
//社保地区等级
export const socialLevel = (state = '', action) => {
    switch (action.type) {
        case SET_SOCIAL_LEVEL:
            return action.val
        default:
            return state
    }
}
//地址信息
export const addressData = (state = [{label: "请选择", value: "",children:[{label: "请选择", value: "",children:[{label: "请选择", value: "",children:[]}]}]}], action) => {
    switch (action.type) {
        case SET_ADDRESS_DATA:
            return action.val
        default:
            return state
    }
}

