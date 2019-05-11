import {
    RESET,
    CHANGE_INSURANT_NAME, CHANGE_INSURANT_NO, CHANGE_INSURANT_CERTI_TYPE,
    CHANGE_INSURANT_BIRTHDAY, CHANGE_INSURANT_AGE,
    CHANGE_INSURANT_GENDER, CHANGE_INSURANT_PHONE, CHANGE_INSURANT_ADDRESS_VALUE,
    CHANGE_INSURANT_ADDRESS_LABEL, CHANGE_FOR_INSURED,
    CHANGE_INSURANT_LOCATION, CHANGE_INSURANT_VALID_DATEEND, CHANGE_INSURANT_ZIPCODE,
    CHANGE_INSURANT_EMAIL, CHANGE_SOCIAL_SECURITY_AREA_LABEL, CHANGE_SOCIAL_SECURITY_AREA_VALUE,
    CHANGE_INSUSOCIALSECFLAG, INIT_EDIT_DATA, CHANGE_INSURANT_DATA, CHANGE_INSU_INCOME, SET_SAMEAS_APPENT,
    CHANGE_CARD_IMGFONT,CHANGE_CARD_IMGBACK,
    CHANGE_I_HEIGHT,CHANGE_I_WEIGHT
} from '../actions';
import data from './data.json';
import { validNum } from '../actions/check'


let defaultInsureds = {
    relationsWithCustomer: "04",//与投保人关系
    insuName: '', //姓名
    insuSex: 0,//性别
    insuHeight: '',//身高
    insuWeight: '',//体重
    insuBirthDate: '', //出生日期
    insuPhone: '', //手机号
    insuValidDate: '',//证件有效起期
    insuValidDateEnd: '', //证件有效期止期
    insuIdNum: '', //证件号码
    insuAge: '', //年龄
    insuMaritalStatus: '',//婚姻状况
    insuTelephone: '',//固定电话
    insuIdType: '0', //证件类型
    insuIdFrontImg: '',//证件正面
    insuIdBackImg: '',//证件反
    insuEmail: '',//邮箱
    insuProvince: '', //省编号
    insuCity: '', //市编号
    insuCounty: '', //县编号
    insuProvinceName: '',//省
    insuCityName: '',//市
    insuCountyName: '',//县
    insuPermanentAddress: '', //详细地址
    isSatutoryBeneficiary: '',
    insuOccupationCode: '',//职业编号
    insuImparts: [],//被保人告知
    insuNationality: 'CHN',//国家
    insuZipCode: '', //邮编
    insuSocialSecFlag: "N",//是否有社保
    socialInsuProvince: "",//社保省份
    socialInsuCity: "",//社保市
    smokeFlag: "1",//被保人吸烟标志
    insuInCome: "",//被保人年收入
    existOtherAmnt: ""//被保险人在其他公司承保的同类产品保额（现就人身险）

}
export const insuredsData = (state = defaultInsureds, action) => {
    switch (action.type) {
        case RESET:
            return defaultInsureds
        case SET_SAMEAS_APPENT:
            return {
                ...state,
                insuName: action.val.name,
                insuSex: action.val.sex,
                 
                insuBirthDate: action.val.birthDate,
                insuPhone: action.val.phone,
                insuValidDateEnd: action.val.validDateEnd,
                insuIdNum:validNum(action.val.idNum,[6,8,4]," ") ,
                insuAge: action.val.age,
                insuIdType: action.val.idType,
                insuEmail: action.val.email,
                insuProvince: action.val.province,
                insuCity: action.val.city,
                insuCounty: action.val.county,
                insuProvinceName: action.val.provinceName,
                insuCityName: action.val.cityName,
                insuCountyName: action.val.countyName,
                insuPermanentAddress: action.val.permanentAddress,
                insuZipCode: action.val.zipCode,
                
            }
            case CHANGE_I_HEIGHT:
            return { ...state, insuHeight: action.val }
        case CHANGE_I_WEIGHT:
            return { ...state, insuWeight: action.val }
        case CHANGE_INSURANT_AGE:
            return { ...state, insuAge: action.val }
        case CHANGE_INSURANT_NAME:
            return { ...state, insuName: action.val }
        case CHANGE_INSURANT_EMAIL:
            return { ...state, insuEmail: action.val }
        case CHANGE_INSURANT_ZIPCODE:
            return { ...state, insuZipCode: action.val }
        case CHANGE_INSURANT_NO:
            return { ...state, insuIdNum:validNum(action.val,[6,8,4]," ")  }
        case CHANGE_INSURANT_BIRTHDAY:
            return { ...state, insuBirthDate: action.val }
        case CHANGE_INSURANT_VALID_DATEEND:
            return { ...state, insuValidDateEnd: action.val }
        case CHANGE_INSUSOCIALSECFLAG:
        
            return { ...state, insuSocialSecFlag: action.val }
        case CHANGE_INSU_INCOME:
            return { ...state, insuInCome: action.val }

            case CHANGE_CARD_IMGFONT:
            return {...state,insuIdFrontImg:action.val}
            case CHANGE_CARD_IMGBACK:
            return {...state,insuIdBackImg:action.val}
        case CHANGE_INSURANT_GENDER:
            return { ...state, insuSex: action.index }
        case CHANGE_INSURANT_PHONE:
            return { ...state, insuPhone: action.val }
        case CHANGE_INSURANT_LOCATION:
            return { ...state, insuPermanentAddress: action.val }
        case CHANGE_FOR_INSURED:
            if (action.val[0] != "00") {
                return {
                    ...state, relationsWithCustomer: action.val,
                    insuName: "",
                    insuSex: "",
                    
                    insuPhone: "",
                    insuValidDateEnd: "",
                    insuIdNum: "",
                    insuIdType: "0",
                    insuEmail: "",
                    insuPermanentAddress: action.val.permanentAddress,
                    insuZipCode: ""
                    
                }
            }
            return { ...state, relationsWithCustomer: action.val }
        case CHANGE_INSURANT_ADDRESS_VALUE:
            return { ...state, insuProvince: action.val[0], insuCity: action.val[1], insuCounty: action.val[2] }
        case CHANGE_INSURANT_ADDRESS_LABEL:
            return { ...state, insuProvinceName: action.val[0], insuCityName: action.val[1], insuCountyName: action.val[2] }
        case CHANGE_SOCIAL_SECURITY_AREA_VALUE:
            return { ...state, socialInsuProvince: action.val[0], socialInsuCity: action.val[1] }
        case CHANGE_SOCIAL_SECURITY_AREA_LABEL:
            return { ...state, socialInsuProvinceName: action.val[0], socialInsuCityName: action.val[1] }
        case CHANGE_INSURANT_CERTI_TYPE:
          
            return { ...state, insuIdType: action.index }
        case CHANGE_INSURANT_DATA:
            return {
                ...state,
                insuSex: action.val.sex,//性别
                insuBirthDate: action.val.birthDate, //出生日期
                insuPhone: action.val.phone, //手机号
                insuValidDateEnd: action.val.validDateEnd, //证件有效期止期
                insuIdNum: validNum(action.val.idNum,[6,8,4]," "), //证件号码
                insuIdType: action.val.idType, //证件类型
                insuEmail: action.val.email,//邮箱
                insuProvince: action.val.province, //省编号
                insuCity: action.val.city, //市编号
                insuCounty: action.val.county, //县编号
                insuProvinceName: action.val.provinceName,//省
                insuCityName: action.val.cityName,//市
                insuCountyName: action.val.countyName,//县
                insuPermanentAddress: action.val.permanentAddress, //详细地址
                insuZipCode: action.val.zipCode

            }
        case INIT_EDIT_DATA:
            return {
                ...state,
                insuName: action.entity.insured.name,
             
                insuBirthDate: action.entity.insured.birthDate, //出生日期
                insuPhone: action.entity.insured.phone, //手机号
                insuValidDateEnd: action.entity.insured.validDateEnd, //证件有效期止期
                insuIdNum:validNum(action.entity.insured.idNum,[6,8,4]," ")  ,
                insuIdType: action.entity.insured.idType, //证件类型
                insuEmail: action.entity.insured.email,//邮箱
                insuProvince: action.entity.insured.province, //省编号
                insuCity: action.entity.insured.city, //市编号
                insuCounty: action.entity.insured.county, //县编号
                insuProvinceName: action.entity.insured.province_name,//省
                insuCityName: action.entity.insured.city_name,//市
                insuCountyName: action.entity.insured.country_name,//县
                insuPermanentAddress: action.entity.insured.permanentAddress,  
                insuZipCode: action.entity.insured.zipCode,
                insuHeight: action.entity.insured.height,//身高
                insuWeight: action.entity.insured.weight,//体重
                relationsWithCustomer:action.entity.insured.relaToInsured
            }
        default:
            return state
    }
}