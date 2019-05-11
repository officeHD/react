import {
    RESET,
    CHANGE_HOLDER_NAME, CHANGE_HOLDER_ADDRESS_VALUE, CHANGE_HOLDER_ADDRESS_LABEL, CHANGE_HOLDER_LOCATION,
    CHANGE_HOLDER_ZIPCODE, CHANGE_HOLDER_AGE,CHANGE_HOLDER_EMAIL, CHANGE_HOLDER_GENDER,
    CHANGE_HOLDER_PHONE, CHANGE_HOLDER_CERTI_TYPE,CHANGE_HOLDER_NO, CHANGE_HOLDER_BIRTHDAY, 
    CHANGE_HOLDER_VALID_DATEEND,CHANGE_HOLDER_DATA, INIT_EDIT_DATA, CHANGE_INCOME, CHANGE_H_HEIGHT, CHANGE_H_WEIGHT,
    CHANGE_HOLDER_CARD_IMGFONT,CHANGE_HOLDER_CARD_IMGBACK
} from '../actions'
import data from './data.json'
import { validNum } from '../actions/check'



let defaultHolder = {
    name: "",//姓名
    sex: 1,//性别
    height: '',//身高
    weight: '',//体重
    idType: "0",//证件类型
    idNum: "",//证件号码
    nationality: "CHN",//国家
    maritalStatus: '',//婚姻状况
    birthDate: "",//生日
    validDate: '',//证件有效起期
    permanentAddress: "",//详细地址
    zipCode: "",//邮编
    telephone: '',//固话
    phone: "",//手机号
    email: "",//邮箱
    relationsWithCustomer: '',//与投保人关系
    idFrontImg: '',//证件照正面
    idBackImg: '',// 证件照反面
    validDateEnd: "",//证件有效止期
    province: "",//省编号
    city: "",//所在城市
    county: "",//县编号
    provinceName: "",//省
    cityName: "",//市
    countyName: "",//县
    occupationCode: '',//投保人职业
    age: "19",//年龄
    inCome: '',//年收入
    socialSecFlag: '',//投保人是否有社保标志 0：非社保1：参加社保
    socialAppProvince: '',//投保人社保所在省编码
    socialAppCity: '',//投保人社保所在市编码
    smokeFlag: '',//投保人吸烟标记0：不吸烟1：吸烟
    imparts: []//健康告知
}
export const appntData = (state = defaultHolder, action) => {
    switch (action.type) {
        case RESET:
            return defaultHolder
        case CHANGE_HOLDER_NAME:
            return { ...state, name: action.val }
        case CHANGE_H_HEIGHT:
            return { ...state, height: action.val }
        case CHANGE_HOLDER_CARD_IMGFONT:
            return {...state,idFrontImg:action.val}
        case CHANGE_HOLDER_CARD_IMGBACK:
            return {...state,idBackImg:action.val}
        case CHANGE_H_WEIGHT:
            return { ...state, weight: action.val }
        case CHANGE_HOLDER_ADDRESS_VALUE:
            return { ...state, province: action.val[0], city: action.val[1], county: action.val[2] }
        case CHANGE_HOLDER_ADDRESS_LABEL:
            return { ...state, provinceName: action.val[0], cityName: action.val[1], countyName: action.val[2] }
        case CHANGE_HOLDER_LOCATION:
            return { ...state, permanentAddress: action.val }
        case CHANGE_HOLDER_ZIPCODE:
            return { ...state, zipCode: action.val }
        case CHANGE_HOLDER_AGE:
            return { ...state, age: action.val }
        case CHANGE_HOLDER_EMAIL:
            return { ...state, email: action.val }
        case CHANGE_HOLDER_GENDER:
            return { ...state, sex: action.index }
        case CHANGE_HOLDER_PHONE:
            return { ...state, phone: action.val }
        case CHANGE_INCOME:
            return { ...state, inCome: action.val }
        case CHANGE_HOLDER_CERTI_TYPE:
            
            return { ...state, idType: action.index }
        case CHANGE_HOLDER_NO:
            return { ...state, idNum: validNum(action.val,[6,8,4]," ") }
        case CHANGE_HOLDER_BIRTHDAY:
            return { ...state, birthDate: action.val }
        case CHANGE_HOLDER_VALID_DATEEND:
            return { ...state, validDateEnd: action.val }
        case CHANGE_HOLDER_DATA:
            
            return {
                ...state,
                zipCode: action.val.zipCode,
                province: action.val.province,
                city: action.val.city,
                county: action.val.county,
                provinceName: action.val.provinceName,
                cityName: action.val.cityName,
                countyName: action.val.countyName,
                permanentAddress: action.val.permanentAddress,
                email: action.val.email,
                sex: action.val.sex,
                phone: action.val.phone,
                idNum: validNum(action.val.idNum,[6,8,4]," ") ,
                validDateEnd: action.val.validDateEnd,
                idType: action.val.idType,
                birthDate: action.val.birthDate
            }
        case INIT_EDIT_DATA:
            let sexVal = 0;
            data.HolderGender.map((el, index2) => {
                if (el === action.entity.appliant.sex) {
                    sexVal = index2;
                }
            });
            return {
                ...state,
                zipCode: action.entity.appliant.zipCode,
                province: action.entity.appliant.province,
                city: action.entity.appliant.city,
                county: action.entity.appliant.county,
                provinceName: action.entity.appliant.province_name,
                cityName: action.entity.appliant.city_name,
                countyName: action.entity.appliant.country_name,
                permanentAddress: action.entity.appliant.permanentAddress,
                email: action.entity.appliant.email,
                phone: action.entity.appliant.phone,
                name: action.entity.appliant.name,
                idNum: validNum(action.entity.appliant.idNum,[6,8,4]," "),
                validDateEnd: action.entity.appliant.validDateEnd,
                idType: action.entity.appliant.idType,
                birthDate: action.entity.appliant.birthDate
            }
        default:
            return state
    }
}