import { RESET, CHANGE_BNFS_TYPE, CHANGE_FOR_BNFS, CHANGE_BNFS_NAME, CHANGE_BNFS_NO, CHANGE_BNFS_PHONE, CHANGE_BNFS_GENDER, CHANGE_BNFS_BIRTHDAY, CHANGE_BNFS_EFFI, CHANGE_BNFS_FLOT, ADD_BNFS, DEL_BNFS } from '../actions'


let defaultBnfs = {
    relationToInsured: "",//受益人与被保人关系
    bnfNo: "",//受益顺序 最大三个受益人
    phone: "",
    name: "",//受益人姓名
    bnfType: 1,//受益人类型 0:生存受益人 1:身故受益人
    idType: "0",//证件号类型
    sex: "",//0男1女
    birthday: "",//2018-05-26
    bnfLot: "",//1-100内整数 收益率
    idNo: "",//证件号
    idEndDate: "",//证件有效期
    idValiDateType: "0",//证件有效期标志 0短期1长期
    address: "",//受益人地址
    bnfGrade: "",//受益人级别 数字
    idAddress: ""//证件地址 非必填
}
export const bnfsData = (state = [defaultBnfs], action) => {
    switch (action.type) {
        case CHANGE_BNFS_TYPE:
        case RESET:
            return [defaultBnfs]
        case CHANGE_FOR_BNFS:

            state[action.index].relationToInsured = action.val;
            return [...state]
        case CHANGE_BNFS_NAME:
            state[action.index].name = action.val;
            return [...state]
        case CHANGE_BNFS_PHONE:
            state[action.index].phone = action.val;
            return [...state]
        case CHANGE_BNFS_NO:

            state[action.index].idNo = action.val;
            return [...state]
        case CHANGE_BNFS_GENDER:

            state[action.index].sex = action.val;
            return [...state]
        case CHANGE_BNFS_BIRTHDAY:
            state[action.index].birthday = action.val;
            return [...state]
        case CHANGE_BNFS_EFFI:
            // console.log(action);
            state[action.index].idEndDate = action.val;
            state[action.index].idValiDateType = action.val === "9999-12-31" ? "1" : '0';
            return [...state]

        case CHANGE_BNFS_FLOT:
            state[action.index].bnfLot = action.val;
            return [...state]
        case ADD_BNFS:
            
            state[state.length] = {  relationToInsured: "", 
            bnfNo: "", 
            phone: "",
            name: "", 
            bnfType: 1, 
            idType: "0", 
            sex: "", 
            birthday: "", 
            bnfLot: "", 
            idNo: "", 
            idEndDate: "", 
            idValiDateType: "0", 
            address: "", 
            bnfGrade: "", 
            idAddress: "" 
        };

            return [...state]
        case DEL_BNFS:
            state.splice(action.index, 1)
            return [...state]
        default:
            return state
    }
}
export const bnfsType = (state = ["1"], action) => {
    switch (action.type) {
        case CHANGE_BNFS_TYPE:
            return action.val
        default:
            return state
    }
}