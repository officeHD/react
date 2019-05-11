/*
 * @Author: haungDong 
 * @Date: 2018-07-13 15:29:13 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2019-05-09 11:58:22
 */
import * as api from '../api';
import * as check from './check';
import lrz from 'lrz';
import data from '../reducers/data.json';
import { Toast } from 'antd-mobile';
//重置
export const RESET = 'RESET'
//是否在APP内
export const SET_NOT_INAPP = 'SET_NOT_INAPP'
//缴费年期区间
export const SET_PAY_MENT_ARRY = 'SET_PAY_MENT_ARRY'
//缴费年期
export const CHANGE_PAYMENT = 'CHANGE_PAYMENT'
//初始化数据
export const INIT_EDIT_DATA = 'INIT_EDIT_DATA'
//保存地址json
export const SET_ADDRESS_DATA = 'SET_ADDRESS_DATA'
//地区等级
export const SET_AREA_LEVEL = 'SET_AREA_LEVEL'
export const SET_SOCIAL_LEVEL = 'SET_SOCIAL_LEVEL'

//险种基本信息
export const SET_VARIETY_DATA = 'SET_VARIETY_DATA'
//设置保额区间
export const SET_AMENT_ARRY = 'SET_AMENT_ARRY'
//保险期限区间
export const SET_INSURE_YEAR_ARRY = 'SET_INSURE_YEAR_ARRY'
//保险期限
export const CHANGE_INSURE_YEAR = 'CHANGE_INSURE_YEAR'
export const CHANGE_INSURE_YEAR_FLAGE = 'CHANGE_INSURE_YEAR_FLAGE'
export const CHANGE_INSU_INCOME = 'CHANGE_INSU_INCOME'
export const CHANGE_INCOME = 'CHANGE_INCOME'

//选择保额
export const CHANGE_AMNT = 'CHANGE_AMNT'
//起保日期
export const CHANGE_EFFECTIVE_DATE = 'CHANGE_EFFECTIVE_DATE'
//投保人信息
export const CHANGE_HOLDER_DATA = 'CHANGE_HOLDER_DATA'
//被保人信息
export const CHANGE_INSURANT_DATA = 'CHANGE_INSURANT_DATA'
//投保人姓名
export const CHANGE_HOLDER_NAME = 'CHANGE_HOLDER_NAME'
//投保人证件类型
export const CHANGE_HOLDER_CERTI_TYPE = 'CHANGE_HOLDER_CERTI_TYPE'
// 投保人证件号
export const CHANGE_HOLDER_NO = 'CHANGE_HOLDER_NO'
//投保人证件有效期止
export const CHANGE_HOLDER_VALID_DATEEND = 'CHANGE_HOLDER_VALID_DATEEND'
// 投保人性别
export const CHANGE_HOLDER_GENDER = 'CHANGE_HOLDER_GENDER'
// 投保人生日
export const CHANGE_HOLDER_BIRTHDAY = 'CHANGE_HOLDER_BIRTHDAY'
//投保人年龄
export const CHANGE_HOLDER_AGE = 'CHANGE_HOLDER_AGE'
// 投保人手机号
export const CHANGE_HOLDER_PHONE = 'CHANGE_HOLDER_PHONE'
// 投保人邮箱
export const CHANGE_HOLDER_EMAIL = 'CHANGE_HOLDER_EMAIL'
//投保人地址
export const CHANGE_HOLDER_ADDRESS_VALUE = 'CHANGE_HOLDER_ADDRESS_VALUE'
export const CHANGE_HOLDER_ADDRESS_LABEL = 'CHANGE_HOLDER_ADDRESS_LABEL'
// 投保人详细地址
export const CHANGE_HOLDER_LOCATION = 'CHANGE_HOLDER_LOCATION'
//投保人邮编
export const CHANGE_HOLDER_ZIPCODE = 'CHANGE_HOLDER_ZIPCODE'
//与投保人关系
export const CHANGE_FOR_INSURED = 'CHANGE_FOR_INSURED'
export const SET_SAMEAS_APPENT = 'SET_SAMEAS_APPENT'
export const CHANGE_OCCUPATION_TYPE = 'CHANGE_OCCUPATION_TYPE'

//受益人与投保人关系
export const CHANGE_FOR_BNFS = 'CHANGE_FOR_BNFS'
//被保人姓名
export const CHANGE_INSURANT_NAME = 'CHANGE_INSURANT_NAME'
// 被保人证件类型
export const CHANGE_INSURANT_CERTI_TYPE = 'CHANGE_INSURANT_CERTI_TYPE'
//被保人证件号
export const CHANGE_INSURANT_NO = 'CHANGE_INSURANT_NO'
//被保人证件有效期止
export const CHANGE_INSURANT_VALID_DATEEND = 'CHANGE_INSURANT_VALID_DATEEND'
// 被保人性别
export const CHANGE_INSURANT_GENDER = 'CHANGE_INSURANT_GENDER'
// 被保人生日
export const CHANGE_INSURANT_BIRTHDAY = 'CHANGE_INSURANT_BIRTHDAY'
// 被保人年龄
export const CHANGE_INSURANT_AGE = 'CHANGE_INSURANT_AGE'
// 被保人手机号
export const CHANGE_INSURANT_PHONE = 'CHANGE_INSURANT_PHONE'
// 被保人邮箱
export const CHANGE_INSURANT_EMAIL = 'CHANGE_INSURANT_EMAIL'
//被保人地址
export const CHANGE_INSURANT_ADDRESS_VALUE = 'CHANGE_INSURANT_ADDRESS_VALUE'
export const CHANGE_INSURANT_ADDRESS_LABEL = 'CHANGE_INSURANT_ADDRESS_LABEL'
// 被保人详细地址
export const CHANGE_INSURANT_LOCATION = 'CHANGE_INSURANT_LOCATION'
// 被保人邮编
export const CHANGE_INSURANT_ZIPCODE = 'CHANGE_INSURANT_ZIPCODE'
// 受益人姓名
export const CHANGE_BNFS_NAME = 'CHANGE_BNFS_NAME'
export const CHANGE_BNFS_PHONE = 'CHANGE_BNFS_PHONE'



// 受益人身份证件号
export const CHANGE_BNFS_NO = 'CHANGE_BNFS_NO'
export const CHANGE_BNFS_AGE = 'CHANGE_BNFS_AGE'
export const CHANGE_BNFS_GENDER = 'CHANGE_BNFS_GENDER'
export const CHANGE_BNFS_BIRTHDAY = 'CHANGE_BNFS_BIRTHDAY'
export const CHANGE_BNFS_EFFI = 'CHANGE_BNFS_EFFI'
export const CHANGE_BNFS_FLOT = 'CHANGE_BNFS_FLOT'
export const ADD_BNFS = 'ADD_BNFS'
export const DEL_BNFS = 'DEL_BNFS'
export const CHANGE_BNFS_TYPE = 'CHANGE_BNFS_TYPE'

//持卡人姓名
export const CHANGE_CARD_NAME = 'CHANGE_CARD_NAME'
// 遮罩层的显示
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING'
//员工ID
export const CHANGE_STAFF_ID = 'CHANGE_STAFF_ID'
//工号
export const CHANGE_WORK_NUM = 'CHANGE_WORK_NUM'
//职业选择器显示
export const CHANGE_OCCUPATION_SHOW = 'CHANGE_OCCUPATION_SHOW'
// 返回上一步
export const GO_BACK_STEP = 'GO_BACK_STEP'
// 选择职业大类
export const CHOICE_IND = 'CHOICE_IND'
// 选择职业
export const CLICK_JOB = 'CLICK_JOB'
// 关闭职业选择器
export const CLOSE_OCCUPATION_SHOW = 'CLOSE_OCCUPATION_SHOW'
//保费
export const CHANFE_FEE = 'CHANFE_FEE'
//身份证正面
export const CHANGE_CARD_IMGFONT = 'CHANGE_CARD_IMGFONT'
//身份证背面
export const CHANGE_CARD_IMGBACK = 'CHANGE_CARD_IMGBACK'
export const CHANGE_HOLDER_CARD_IMGFONT = 'CHANGE_HOLDER_CARD_IMGFONT'
export const CHANGE_HOLDER_CARD_IMGBACK = 'CHANGE_HOLDER_CARD_IMGBACK'

  
//倒计时
export const CHANGE_SECOND = 'CHANGE_SECOND'
//验证码
export const CHANGE_SMSCODE = 'CHANGE_SMSCODE'
//支付手机号
export const CHANGE_PAYPHONE = 'CHANGE_PAYPHONE'
//银行卡号
export const CHANGE_BANKNUM = 'CHANGE_BANKNUM'
//银行代码
export const CHANGE_BANK_CODE = 'CHANGE_BANK_CODE'
//订单ID
export const INIT_ORDERID = 'INIT_ORDERID'
export const INIT_ORDERNO = 'INIT_ORDERNO'
//投被保人身高体重
export const CHANGE_H_HEIGHT = 'CHANGE_H_HEIGHT'
export const CHANGE_H_WEIGHT = 'CHANGE_H_WEIGHT'
export const CHANGE_I_HEIGHT = 'CHANGE_I_HEIGHT'
export const CHANGE_I_WEIGHT = 'CHANGE_I_WEIGHT'

export const CHANGE_MAX_AGE = 'CHANGE_MAX_AGE'
//员工信息
export const INIT_STAFF = 'INIT_STAFF'
//健康状况
export const CHECK_HEALTHY = 'CHECK_HEALTHY'
//客服显示
export const CHANGE_SERVICE = 'CHANGE_SERVICE'
//有无社保
export const CHANGE_INSUSOCIALSECFLAG = 'CHANGE_INSUSOCIALSECFLAG'
//选择器显示
export const SHOW_SELECTOR = 'SHOW_SELECTOR'
//选择器关闭
export const CLOSE_SELECTOR = 'CLOSE_SELECTOR'
// 须知A
export const CHANGE_ATTENA = 'CHANGE_ATTENA'
// 须知B
export const CHANGE_ATTENB = 'CHANGE_ATTENB'
// 须知C
export const CHANGE_ATTENC = 'CHANGE_ATTENC'


export const CHANGE_REVEN_CODE = 'CHANGE_REVEN_CODE'
export const CHANGE_ACCOUNT = 'CHANGE_ACCOUNT'
export const CHANGE_PAYTYPE = 'CHANGE_PAYTYPE'
export const CHANGE_EXTRA = 'CHANGE_EXTRA'
export const CLOSE_EXTRA = 'CLOSE_EXTRA'
export const CHANGE_EXTRA_FEE = 'CHANGE_EXTRA_FEE'





//社保所在地
export const CHANGE_SOCIAL_SECURITY_AREA_VALUE = 'CHANGE_SOCIAL_SECURITY_AREA_VALUE'
export const CHANGE_SOCIAL_SECURITY_AREA_LABEL = 'CHANGE_SOCIAL_SECURITY_AREA_LABEL'
//支付成功
export const CHANGE_PAY_SUCESS = 'CHANGE_PAY_SUCESS'
const amt300 = [
    { "value": "10", "label": "10万" }, { "value": "20", "label": "20万" }, { "value": "30", "label": "30万" }, { "value": "40", "label": "40万" }, { "value": "50", "label": "50万" }, { "value": "60", "label": "60万" }, { "value": "70", "label": "70万" }, { "value": "80", "label": "80万" }, { "value": "90", "label": "90万" }, { "value": "100", "label": "100万" }, { "value": "110", "label": "110万" }, { "value": "120", "label": "120万" }, { "value": "130", "label": "130万" }, { "value": "140", "label": "140万" }, { "value": "150", "label": "150万" }, { "value": "160", "label": "160万" }, { "value": "170", "label": "170万" }, { "value": "180", "label": "180万" }, { "value": "190", "label": "190万" }, { "value": "200", "label": "200万" }
];
const amt200 = amt300.filter((item, index) => { return item.value - 0 <= 200 });
const amt150 = amt200.filter((item, index) => { return item.value - 0 <= 150 });
const amt100 = amt150.filter((item, index) => { return item.value - 0 <= 100 });
const amt50 = amt100.filter((item, index) => { return item.value - 0 <= 50 });
const amt30 = amt100.filter((item, index) => { return item.value - 0 <= 30 });
var amtType = 300;
const insuYearArry = [
    { "value": "10", "label": "10年" }, { "value": "20", "label": "20年" }, { "value": "30", "label": "30年" }, { "value": "60", "label": "至60周岁" }, { "value": "70", "label": "至70周岁" }
];
const insuYearArry30 = insuYearArry.filter((item, index) => { return item.value - 0 !== 30 });
const payment10 = [{ "value": "趸交", "label": "趸交" }, { "value": "5", "label": "5年" }, { "value": "10", "label": "10年" }];

const payment20 = [{ "value": "趸交", "label": "趸交" }, { "value": "5", "label": "5年" }, { "value": "10", "label": "10年" }, { "value": "15", "label": "15年" }, { "value": "20", "label": "20年" }];
const payment30 = [{ "value": "趸交", "label": "趸交" }, { "value": "5", "label": "5年" }, { "value": "10", "label": "10年" }, { "value": "15", "label": "15年" }, { "value": "20", "label": "20年" }, { "value": "30", "label": "30年" }];

//清空数据 重置
export const reset = (val) => ({ type: RESET })
//运行环境
export const changeType = (val) => ({ type: SET_NOT_INAPP ,val})
//客服按钮显示
export const changeService = () => ({ type: CHANGE_SERVICE })
// 地址数据
export const setAddressData = (val) => ({ type: SET_ADDRESS_DATA, val })
//缴费年期
export const setPayMent = (val) => ({ type: SET_PAY_MENT_ARRY, val })
//附加险
export const onChangeExtra = () => ({ type: CHANGE_EXTRA })
export const closeExtra = () => ({ type: CLOSE_EXTRA })
export const changeExtraFee = (val) => ({ type: CHANGE_EXTRA_FEE ,val})



export const changeInsuYearFlag = (val) => ({ type: CHANGE_INSURE_YEAR_FLAGE, val })
export const changeRevenCode = (val) => ({ type: CHANGE_REVEN_CODE, val })
export const changeAccount = (val) => ({ type: CHANGE_ACCOUNT, val })

//改变保费
export const changeFee = (val) => ({ type: CHANFE_FEE, val })
//改变年期
export const onChangePayMent = (val) => ({ type: CHANGE_PAYMENT, val })
//保额区间
export const changeamntArry = (val) => ({ type: SET_AMENT_ARRY, val })
//地区等级
export const setAreaLevel = (val) => ({ type: SET_AREA_LEVEL, val })
export const setSocialLevel = (val) => ({ type: SET_SOCIAL_LEVEL, val })


//改变倒计时
export const changeSecond = (val) => ({ type: CHANGE_SECOND, val })
//初始化编辑数据
export const initEditData = (entity) => ({ type: INIT_EDIT_DATA, entity })
//初始化 
export const initStaff = (val) => ({ type: INIT_STAFF, val })
//更改员工id
export const changeStaffId = (id) => ({ type: CHANGE_STAFF_ID, id })
//更改员工workNum
export const changeworkNum = (val) => ({ type: CHANGE_WORK_NUM, val })
//修改起保日期
export const changeEffectiveDate = (val) => ({ type: CHANGE_EFFECTIVE_DATE, val })
//修改InsuYear
export const changeInsuYearVal = (val) => ({ type: CHANGE_INSURE_YEAR, val })
//修改InsuYear
export const changeInsuYearArry = (val) => ({ type: SET_INSURE_YEAR_ARRY, val })
//险种信息
export const setVarietyData = (val) => ({ type: SET_VARIETY_DATA, val })
//保额
export const changeAmntVal = (val) => ({ type: CHANGE_AMNT, val })
//改变健康状况
export const onCheckHealthy = (val) => ({ type: CHECK_HEALTHY, val })
//投保人数据
export const changeHolderData = (val) => ({ type: CHANGE_HOLDER_DATA, val })
//改变投保人姓名
export const changeHolderName = (val) => ({ type: CHANGE_HOLDER_NAME, val })
//修改投保人证件类型
export const changeHolderCertiType = (index) => ({ type: CHANGE_HOLDER_CERTI_TYPE, index })
//修改投保人证件号
export const onchangeHolderNo = (val) => ({ type: CHANGE_HOLDER_NO, val })
//修改投保人年龄
export const changeHolderAge = (val) => ({ type: CHANGE_HOLDER_AGE, val })
//修改投保人出生日期
export const onchangeHolderBirthday = (val) => ({ type: CHANGE_HOLDER_BIRTHDAY, val })
//修改证件有效期
export const onchangeEffictive = (val) => ({ type: CHANGE_HOLDER_VALID_DATEEND, val })
//修改证件有效期
export const onchangeInvalidDate = (val) => ({ type: CHANGE_INSURANT_VALID_DATEEND, val })
//修改投保人性别
export const changeHolderGender = (index) => ({ type: CHANGE_HOLDER_GENDER, index })
//修改投保人电话
export const changeHolderPhone = (val) => ({ type: CHANGE_HOLDER_PHONE, val })
//修改投保人邮箱
export const changeHolderEmail = (val) => ({ type: CHANGE_HOLDER_EMAIL, val })
// 投保人地址
export const changeHolderAddressValue = (val) => ({ type: CHANGE_HOLDER_ADDRESS_VALUE, val })
//投保人地址
export const changeHolderAddressLabel = (val) => ({ type: CHANGE_HOLDER_ADDRESS_LABEL, val })
// 投保人详细地址
export const changeHolderLocation = (val) => ({ type: CHANGE_HOLDER_LOCATION, val })
//投保人邮编
export const changeHolderZipCode = (val) => ({ type: CHANGE_HOLDER_ZIPCODE, val })
//被保人邮编
export const changeInsurantZipCode = (val) => ({ type: CHANGE_INSURANT_ZIPCODE, val })
//被保人邮箱
export const changeInsurantEmail = (val) => ({ type: CHANGE_INSURANT_EMAIL, val })
//被保人身份证正面
export const changeCardImgFont = (val) => ({ type: CHANGE_CARD_IMGFONT, val })
//被保人身份证背面
export const changeCardImgBack = (val) => ({ type: CHANGE_CARD_IMGBACK, val })
//投保人身份证正面
export const changeHolderCardImgFont = (val) => ({ type: CHANGE_HOLDER_CARD_IMGFONT, val })
//投保人身份证背面
export const changeHolderCardImgBack = (val) => ({ type: CHANGE_HOLDER_CARD_IMGBACK, val })
//职业类别所属
export const changeOccupationType = (val) => ({ type: CHANGE_OCCUPATION_TYPE, val })
//显示职业类别选择器
export const changeOccupationShow = () => ({ type: CHANGE_OCCUPATION_SHOW })
//显示职业类别选择器
export const closeOccupationShow = () => ({ type: CLOSE_OCCUPATION_SHOW })
//返回选择行业
export const goBackStep = (val) => ({ type: GO_BACK_STEP, val })
//选择则了一个行业
export const choiceInd = (index) => ({ type: CHOICE_IND, index })
//选择支付方式
export const changePayType = (val) => ({ type: CHANGE_PAYTYPE, val })



export const clickJobNo = (occuName, occuClass, no, same) => ({ type: CLICK_JOB, occuName, occuClass, no, same })

// 被保人是否有社保
export const changeInsuSocialSecFla = (val) => ({ type: CHANGE_INSUSOCIALSECFLAG, val })
export const changeInsuInCome = (val) => ({ type: CHANGE_INSU_INCOME, val })
export const changeInCome = (val) => ({ type: CHANGE_INCOME, val })
export const changeHolderHeight = (val) => ({ type: CHANGE_H_HEIGHT, val })
export const changeHolderWeight = (val) => ({ type: CHANGE_H_WEIGHT, val })
export const changeInsurantHeight = (val) => ({ type: CHANGE_I_HEIGHT, val })
export const changeInsurantWeight = (val) => ({ type: CHANGE_I_WEIGHT, val })

export const setSameAsAppent = (val) => ({ type: SET_SAMEAS_APPENT, val })
export const changeMAxAge = (val) => ({ type: CHANGE_MAX_AGE, val })



//被保人数据
export const changeInsurantData = (val) => ({ type: CHANGE_INSURANT_DATA, val })
//改变被保人姓名
export const changeInsurantName = (val) => ({ type: CHANGE_INSURANT_NAME, val })
//修改被保人证件类型
export const changeInsurantCertiType = (index) => ({ type: CHANGE_INSURANT_CERTI_TYPE, index })
//修改被保人证件号
export const onchangeInsurantNo = (val) => ({ type: CHANGE_INSURANT_NO, val })
//修改被保人出生日期
export const onchangeInsurantBirthday = (val) => ({ type: CHANGE_INSURANT_BIRTHDAY, val })
//修改被保人年龄
export const changeInsurantAgeVal = (val) => ({ type: CHANGE_INSURANT_AGE, val })
//修改被保人性别
export const changeInsurantGender = (index) => ({ type: CHANGE_INSURANT_GENDER, index })
//修改被保人电话
export const changeInsurantPhone = (val) => ({ type: CHANGE_INSURANT_PHONE, val })
//修改被保人住址
export const changeInsurantLocation = (val) => ({ type: CHANGE_INSURANT_LOCATION, val })
//修改被保人地址
export const changeInsurantAddressValue = (val) => ({ type: CHANGE_INSURANT_ADDRESS_VALUE, val })
//修改被保人地址
export const changeInsurantAddressLabel = (val) => ({ type: CHANGE_INSURANT_ADDRESS_LABEL, val })
//修改被保人社保地址
export const changeSocialInsuAddressValue = (val) => ({ type: CHANGE_SOCIAL_SECURITY_AREA_VALUE, val })
//修改被保社保人地址
export const changeSocialInsuAddressLabel = (val) => ({ type: CHANGE_SOCIAL_SECURITY_AREA_LABEL, val })
//修改被保人与投保人关系
export const changeForInsuredPerson = (val) => ({ type: CHANGE_FOR_INSURED, val })
//修改受益人保人与投保人关系
export const changeRelationToBnfs = (val, index) => ({ type: CHANGE_FOR_BNFS, val, index })
//受益人姓名
export const changeBnfsName = (val, index) => ({ type: CHANGE_BNFS_NAME, val, index })
//受益人手机号
export const changeBnfsPhone = (val, index) => ({ type: CHANGE_BNFS_PHONE, val, index })
//受益人证件号
export const onchangeBnfsNo = (val, index) => ({ type: CHANGE_BNFS_NO, val, index })




export const onchangeBnfsBirthday = (val, index) => ({ type: CHANGE_BNFS_BIRTHDAY, val, index })
//受益人年龄
export const changeBnfsAge = (val, index) => ({ type: CHANGE_BNFS_AGE, val, index })
//受益人性别
export const changeBnfsGender = (val, index) => ({ type: CHANGE_BNFS_GENDER, val, index })
export const onchangeBnfsEffictive = (val, index) => ({ type: CHANGE_BNFS_EFFI, val, index })
export const onchangeBnfsbnfLot = (val, index) => ({ type: CHANGE_BNFS_FLOT, val, index })
export const addBnfsList = () => ({ type: ADD_BNFS })
export const delBnfsList = (index) => ({ type: DEL_BNFS, index })
export const changeBnfsType = (val) => ({ type: CHANGE_BNFS_TYPE, val })



// 持卡人
export const changeCardName = (val) => ({ type: CHANGE_CARD_NAME, val })
// 预留手机号
export const changePayPhone = (val) => ({ type: CHANGE_PAYPHONE, val })
// 卡号
export const changeBankNum = (val) => ({ type: CHANGE_BANKNUM, val })
//付款行
export const changeBankCode = (val) => ({ type: CHANGE_BANK_CODE, val })
//验证码
export const changeSmsCode = (val) => ({ type: CHANGE_SMSCODE, val })
// 订单ID
export const initOrderId = (val) => ({ type: INIT_ORDERID, val })
export const initOrderNo = (val) => ({ type: INIT_ORDERNO, val })
//支付成功
export const changeSucessMes = () => ({ type: CHANGE_PAY_SUCESS })
//打开选择器
export const showSelector = (options, index, target) => ({ type: SHOW_SELECTOR, options, index, target })
//关闭选择器
export const closeSelector = () => ({ type: CLOSE_SELECTOR })
//更改遮罩层的显示
export const changeIsLoading = (val) => ({ type: CHANGE_IS_LOADING, val })
//必选A
export const changeAttentionA = () => ({ type: CHANGE_ATTENA })
//必选B
export const changeAttentionB = () => ({ type: CHANGE_ATTENB })
//必选C
export const changeAttentionC = () => ({ type: CHANGE_ATTENC })
//险种信息
export const setVarietyOption = (val) => (dispatch, getState) => {
    data.productList.map((item, index) => {
        if (item.varietyCode === val) {
            dispatch(setVarietyData(item.varietyData))
        }
    })
}
//健康状况
export const checkHealthy = (val) => (dispatch, getState) => {
   
    dispatch(onCheckHealthy(val));
    dispatch(changeIsLoading(false))
    if(val==="0"||val==="1"){
        window.location.hash = "#/step1";
    }
    
    // window.location.replace("#/step1")  
}

export const changeExtra = (val) => (dispatch, getState) => {
    dispatch(onChangeExtra());
     
   dispatch(getRate())
}

//输入投保人证件号
export const changeHolderNo = (val) => (dispatch, getState) => {
    let state = getState();
    val=check.removeAllSpace(val);
    val = val.replace(/x/, "X");
    dispatch(onchangeHolderNo(val));
    if (state.appntData.idType.toString() === "0") {
        dispatch(onchangeHolderBirthday(''))
        if (val.length === 18) {
            if (check.idNumValid(val)) {
                let sex = api.getIdCardGender(check.removeAllSpace(val));
                dispatch(changeHolderGender(sex));
                let birthday = api.getIdCardBirthday(check.removeAllSpace(val));
                if (state.insuredsData.relationsWithCustomer === '04') {//本人
                    dispatch(changeInsurantNo(check.removeAllSpace(val)));
                }
                dispatch(changeHolderBirthday(birthday));
            }
        }
    }
}

export const scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if (anchorElement) { anchorElement.scrollIntoView(); }
    }
}
//投保人出生日期
export const changeHolderBirthday = (val) => (dispatch, getState) => {
    let age = api.getAge(val);
    dispatch(changeHolderAge(age));
    dispatch(onchangeHolderBirthday(val));
    let state = getState();

    api.checkAge(state);
}
//修改投保人地址
export const changeHolderAddress = (val) => (dispatch, getState) => {
    let name = dispatch(getAddressLabel(val));
    dispatch(changeHolderAddressValue(val));
    dispatch(changeHolderAddressLabel(name));
    dispatch(getRate());
}
//投保人身份证有效期
export const changeEffictive = (val) => (dispatch, getState) => {
    let state = getState();
    if (val) {
        dispatch(onchangeEffictive(val));
    } else {
        if (state.appntData.validDateEnd === "9999-12-31") {
            dispatch(onchangeEffictive(''));
        } else {
            dispatch(onchangeEffictive('9999-12-31'));
        }
    }
}
//被保人证件有效期
export const changeInvalidDate = (val) => (dispatch, getState) => {
    let state = getState();
    if (val) {
        dispatch(onchangeInvalidDate(val));
    } else {
        if (state.insuredsData.insuValidDateEnd === "9999-12-31") {
            dispatch(onchangeInvalidDate(''));
        } else {
            dispatch(onchangeInvalidDate('9999-12-31'));
        }
    }
}

//受益人证件号
export const changeBnfsNo = (val, index) => (dispatch, getState) => {
    val=check.removeAllSpace(val);
    val = val.replace(/x/, "X");
    dispatch(onchangeBnfsNo(val, index));
    let state = getState();
    if (val.length === 18) {
        if (check.idNumValid(val)) {
            let sex = api.getIdCardGender(val);
            let birthday = api.getIdCardBirthday(val);
            dispatch(changeBnfsBirthday(birthday, index));
            dispatch(changeBnfsGender(sex, index));
        }
    }
}
//受益人出生日期
export const changeBnfsBirthday = (val, index) => (dispatch, getState) => {
    let age = api.getAge(val);
    dispatch(changeBnfsAge(age, index));
    dispatch(onchangeBnfsBirthday(val, index));
}

//受益人证件有效期
export const changeBnfsEffictive = (val, index) => (dispatch, getState) => {
    let state = getState();
    if (val) {
        dispatch(onchangeBnfsEffictive(val, index));
    } else {
        if (state.bnfsData[index].idValiDateType === "1") {
            dispatch(onchangeBnfsEffictive('', index));
        } else {
            dispatch(onchangeBnfsEffictive('9999-12-31', index));
        }
    }
}
//选择了一个职业
export const clickJob = (occuName, occuClass, no) => (dispatch, getState) => {
    let state = getState();
    let same = false;
    if (state.insuredsData.relationsWithCustomer === '04' || state.occupation.type == "insurant") {
        same = true;
    }
    // console.log(occuName,occuClass, no)
    if (occuClass - 0 > 4 || occuClass - 0 === 0) {
        Toast.info("拒保职业");
        return false;
    }
    dispatch(clickJobNo(occuName, occuClass, no, same));
}

//受益人收益率
export const changeBnfsbnfLot = (val, index) => (dispatch, getState) => {
    let value = val;
    var type = "^[0-9]*[1-9][0-9]*$";
    var re = new RegExp(type);
    if (val.match(re) == null) {
        Toast.info("受益比例总和应为100!", 2);
        value = "";
    }
    dispatch(onchangeBnfsbnfLot(value, index));
    var sum = 0;
    let state = getState();
    state.bnfsData.map((item, index) => { sum += item.bnfLot - 0 });
    if (val > 100 || sum > 100) {
        Toast.info('受益比例总和应为100', 2);
        dispatch(onchangeBnfsbnfLot(1, index));
        return false;
    }
}
export const addBnfs = () => (dispatch, getState) => {
    let state = getState();
    if (state.bnfsData.length == 3) { Toast.info("最多三位受益人", 2); return false; }
    // let flag = true;
    // var sum = 0;
    // state.bnfsData.map((item, index) => {
    //     sum += item.bnfLot - 0;
    // })
    // if (sum != 100) {
    //     Toast.info(`受益比例已满`, 2); return false;
    // }
    if (api.checkBnfs(state)) {
        dispatch(addBnfsList());
    }

}
export const delBnfs = (index) => (dispatch, getState) => {
    let state = getState();
    if (state.bnfsData.length == 1) { Toast.info("最少一位受益人", 2); return false; }
    dispatch(delBnfsList(index));
}


//显示职业类别选择器
export const changeJobCategory = (val) => (dispatch, getState) => {
    dispatch(changeJobCategoryVal(val));
    // console.log(val);
    if (val[0] === '') {
        if (!sessionStorage.jobList) {
            let cb = msg => {
                sessionStorage.jobList = JSON.stringify(msg);
            }
            api.getJobList(cb);
        }
    }
}
//上传身份证图片
export const upLoadImg = (event, typeWay,imgself) => (dispatch, getState) => {
    dispatch(changeIsLoading(true));
    let state = getState();
    if (!event.target || !event.target.files[0]) {
        Toast.info('请选择图片！', 2);
        dispatch(changeIsLoading(false));
        return false;
    }
    lrz(event.target.files[0])
        .then((rst) => {
            // 处理成功会执行
            // console.log('压缩成功')
            // console.log(rst.base64)
            api.uploadImage({ photo: rst.base64.split(',')[1], workNum: state.staffmes.workNum }, function (res) {
                dispatch(changeIsLoading(false));
                // console.log('上传成功')
                // console.log(res);
                if (res.result.toString() === "1") {
                    if(imgself==="insure"){
                        if (typeWay === "font") {
                            dispatch(changeCardImgFont(res.url));
                        } else {
                            dispatch(changeCardImgBack(res.url));
                        }
                        
                    }else{
                        if (typeWay === "font") {
                            dispatch(changeHolderCardImgFont(res.url));
                        } else {
                            dispatch(changeHolderCardImgBack(res.url));
                        } 
                    }
                    
                } else {
                    Toast.info(res.message, 2);
                }
            })
        })
}


//输入被保人证件号
export const changeInsurantNo = (val) => (dispatch, getState) => {
    let state = getState();
    val=check.removeAllSpace(val);
    val = val.replace(/x/, "X");
    dispatch(onchangeInsurantNo(val));
    if (state.insuredsData.insuIdType.toString() === '0') {
        dispatch(onchangeInsurantBirthday(''));
        if (val.length === 18) {
            if (check.idNumValid(val)) {
                let sex = api.getIdCardGender(check.removeAllSpace(val));
                dispatch(changeInsurantGender(sex));
                let birthday = api.getIdCardBirthday(check.removeAllSpace(val));
                dispatch(changeInsurantBirthday(birthday));
            }

        }
    }
}

export const changeInsuYear = (val) => (dispatch, getState) => {
    dispatch(changeInsuYearVal(val));
    dispatch(setInsurantyear());
}


export const changePayMent = (val) => (dispatch, getState) => {
    dispatch(onChangePayMent(val));
    if(val[0]=="趸交"){
        dispatch(closeExtra())
    }
    
    // console.log(val);
    // dispatch(setInsurantyear());
}
 
export const setInsurantyear = () => (dispatch, getState) => {
    let state = getState();
    let insuage = state.insuredsData.insuAge;
    if (insuage > 40) {
        dispatch(setPayMent(payment20));
        if (state.varietyData.payMent[0] == "30") {
            dispatch(changePayMent(['']));
        }
    } else {
        dispatch(setPayMent(payment30));
    }
    // console.log(state.varietyData.amnt);
}
//修改被保人出生日期/年龄
export const changeInsurantBirthday = (val) => (dispatch, getState) => {
    dispatch(onchangeInsurantBirthday(val));
    let insureAge = api.getAge(val);
    dispatch(changeInsurantAge(insureAge));
    let state = getState();
    dispatch(setInsurantyear());
    api.checkAge(state);
    dispatch(getRate(insureAge));

}
//修改被保人社保地址
export const changeSocialInsuAddress = (val) => (dispatch, getState) => {
    let state = getState();
    let name = dispatch(getAddressLabel(val));
    dispatch(changeSocialInsuAddressValue(val));
    dispatch(changeSocialInsuAddressLabel(name));

    if (state.varietyData.level1.includes(val[1])) {
        dispatch(setSocialLevel(1));
    } else if (state.varietyData.level2.includes(val[1])) {
        dispatch(setSocialLevel(2));
    } else {
        dispatch(setSocialLevel(3));
    }
    // dispatch(totalsetAmt());


}
//修改被保人年龄
export const changeInsurantAge = (val) => (dispatch, getState) => {
    let state = getState();
    dispatch(changeInsurantAgeVal(val));
    // dispatch(totalsetAmt());
    if (val > 40) {
        dispatch(changeInsuYearArry(insuYearArry30));
    } else {
        dispatch(changeInsuYearArry(insuYearArry));
    }
    // dispatch(getRate());
}
//修改被保人地址
export const changeInsurantAddress = (val) => (dispatch, getState) => {
    let name = dispatch(getAddressLabel(val));
    let state = getState();


    dispatch(changeInsurantAddressValue(val));
    dispatch(changeInsurantAddressLabel(name));
}
//修改保额
export const changeAmnt = (val) => (dispatch, getState) => {

    dispatch(changeAmntVal(val));
    let state = getState();
    if (!api.checkAge(state)) {
        dispatch(changeAmntVal(1))
    }
}


//获取地址名称
const getAddressLabel = (val) => (dispatch, getState) => {
    let addressLabel = [];
    let addressData = JSON.parse(sessionStorage.addressData);
    addressData.map((item, index) => {
        if (item.value === val[0]) {
            addressLabel[0] = item.label;
            item.children.map((item2, index) => {
                if (item2.value === val[1]) {
                    addressLabel[1] = item2.label;
                    item2.children.map((item3, index) => {
                        if (item3.value === val[2]) {
                            addressLabel[2] = item3.label;
                        }
                    })
                }
            })
        }
    })
    return addressLabel
}
//检验最低保额
export const checkRate = (val) => (dispatch, getState) => {
    let state = getState();

    if (!state.insuredsData.insuAge) {
        Toast.info("请选择被保人身份证号", 2);
        return false;
    }

    api.getRate(state, msg => {
        if (msg.result.toString() === "1") {
            dispatch(changeFee(msg.prem));
            dispatch(changeIsLoading(false));
            if (msg.prem == 0) {
                Toast.info("请重新选择交费年期", 2);
                return false;
            }
            window.location.href = '#/sure';
        } else {
            Toast.info(msg.message, 2);
        }
    })

}
// 获取保费
export const getRate = (insureAge,type) => (dispatch, getState) => {
    api.getRate(getState(), msg => {
        if (msg.result.toString() === "1") {
            dispatch(changeFee(msg.prem));
            let states=getState()
            let extra=states.varietyData.extra;
            console.log(extra);
            if(extra){
                let extraArr=msg.productList.filter((item)=>item.insuranceName.indexOf("附加") != -1);
                dispatch(changeExtraFee(extraArr[0].subPrem));
            }
            
        } else {
            Toast.info(msg.message, 2);
            return false;
        }
    }, insureAge)
}




//获取用户信息
export const getPersonInfo = (str) => (dispatch, getState) => {
    let state = getState(), name;
    if (str === 'holder') {
        name = state.appntData.name;
    } else {
        name = state.insuredsData.insuName;
    }

    api.getPersonInfo(state.staffmes.workNum, name, msg => {
        if (msg.result.toString() === "1") {
            let customer = msg.customer;
            if (str === 'holder') {
                dispatch(changeHolderNo(customer.idNum))
                dispatch(changeHolderData(customer));
            } else {
                dispatch(changeInsurantNo(customer.idNum))
                dispatch(changeInsurantData(customer));
            }
        }
    })
}
//检查数据有效性
export const checkOrder = () => (dispatch, getState) => {
    let state = getState();
    if (state.insuredsData.relationsWithCustomer === '04') {
        dispatch(setSameAsAppent(state.appntData));
        dispatch(changeInsurantNo(state.appntData.idNum));
    }
    if (api.checkholder(state) && api.checkInsurant(state) && api.checkInsuPlan(state) && api.checkBnfs(state,"rate") && api.checkAge(state) && checkAttention(state)) {
        api.getRate(getState(), msg => {
            if (msg.result.toString() === "1") { 
                dispatch(changeFee(msg.prem)); 
                let extra=state.varietyData.extra;
                if(extra){
                    let extraArr=msg.productList.filter((item)=>item.insuranceName.indexOf("附加") != -1);
                    dispatch(changeExtraFee(extraArr[0].subPrem));
                }
                dispatch(insertOrder()); 
            } else {
                Toast.info(msg.message, 2);
                return false;
            }
        })
    }
}
export const insertOrderByImg = () => (dispatch, getState) => {
    let state = getState();
    if(!state.insuredsData.insuIdFrontImg){
        Toast.info(`请上传投保人身份证正面照片`, 2);
        return false;
    }
  
    if(!state.insuredsData.insuIdBackImg){
        Toast.info(`请上传投保人身份证反面照片`, 2);
        return false;
    }
    
    if(state.insuredsData.relationsWithCustomer !== "00"){
        if(!state.appntData.idFrontImg){
            Toast.info(`请上传投保人身份证正面照片`, 2);
            return false;
        }
        if(!state.appntData.idBackImg){
            Toast.info(`请上传投保人身份证反面照片`, 2);
            return false;
        }
    }
    dispatch(insertOrder())
}


//投保
export const insertOrder = () => (dispatch, getState) => {
    dispatch(changeIsLoading(true))
    let state = getState();
    api.sendData(state, msg => {
        dispatch(changeIsLoading(false))
        if (msg.orderId) {
            dispatch(initOrderId(msg.orderId));
            dispatch(initOrderNo(msg.orderNo));
        }
        if (msg.result.toString() === '1') {
            dispatch(changeIsLoading(false));
            window.location.href = "#/step2";
            // window.location.href = `${ctx}/common/paytype?payAmt=${state.varietyData.fee}&orderNo=${msg.orderId}`
        } else {
            Toast.info(msg.message, 4);
        }
    })
}
//核保
export const apply = () => (dispatch, getState) => { 
    let state = getState();
    console.log(state.healthy)
    // return false
    if(state.healthy==="1"){
        dispatch(changeIsLoading(true));
        api.notice_check(state,msg=>{
            if (msg.result.toString() === '1') {
                dispatch(changeIsLoading(false));

                window.location.href =msg.reqUrl;
                // window.location.href = `${ctx}/common/paytype?payAmt=${state.varietyData.fee}&payOrderNo=${msg.payOrderNo}`
            } else {
                Toast.info(msg.message, 4);
            }
        })
    }else{
        dispatch(changeIsLoading(true));
        api.underwriting(state, msg => {
            dispatch(changeIsLoading(false));
            if (msg.orderNo) {
    
                dispatch(initPayOrderNo(msg.payOrderNo));
            }
            if (msg.orderId) {
                dispatch(initOrderId(msg.orderId));
            }
            if (msg.result.toString() === '1') {
                window.location.href = "#/step3";
                dispatch(changeIsLoading(false));
                // window.location.href = `${ctx}/common/paytype?payAmt=${state.varietyData.fee}&payOrderNo=${msg.payOrderNo}`
            } else {
                Toast.info(msg.message, 4);
            }
        })
    }
  
}

// 获取短信验证码
export const getMesCode = (val) => (dispatch, getState) => {
    let state = getState();
    if (check.dataReg("付款银行", state.payData.bankCode[0]) && check.dataReg("银行卡号", state.payData.bankNum) && check.dataReg("手机号", state.payData.payPhone)) {
        let second = state.payData.second;
        if (second == 60) {
            api.getMesCode(state, (msg) => {
                if (msg.result && msg.result.toString() === "1") {
                    dispatch(changeSucessMes());
                }
                Toast.info(msg.errMsg, 2);
            })
        }
        let interval = setInterval(function () {
            second -= 1;
            dispatch(changeSecond(second));
            if (second === 0) {
                clearInterval(interval);
                dispatch(changeSecond(60));
            }
        }, 1000);
    }
}

// 支付订单
export const payOrder = (val) => (dispatch, getState) => {
    if (val === "01") {
        dispatch(wechatPay())
    } else {
        // 银行卡支付
        dispatch(cardPay())
    }
}
//微信支付
export const wechatPay = () => (dispatch, getState) => {
    let state = getState();
    Toast.loading("请求中");
    api.wechatPay(state, msg => {
        Toast.hide();
        if (msg.result.toString() === "1") {
            window.location = msg.url
        } else {
            // console.log(msg);
            Toast.info(msg.message);
        }

    })
}
//银行卡支付
export const cardPay = () => (dispatch, getState) => {
    let state = getState();
    if (check.dataReg("付款行", state.payData.bankCode[0])
    ) {
        // if (!state.attendData.attenC) {
        //     Toast.info("请阅读并同意保险款项自动转账授权与声明", 2);
        //     return false;
        // }
        dispatch(changeIsLoading(true));
        api.payOrder(state, msg => {
            if (msg.result.toString() === "1") {
                // console.log(msg);
                dispatch(changeIsLoading(false));
                window.location = msg.url
                // window.location = `${ctx}/app/common/pay/back?orderId=${state.orderData.orderId}&requestType=0`;
            } else if (msg.result.toString() === "0") {
                dispatch(changeIsLoading(false));
                Toast.info(msg.message, 2);
            }
        })
    }
}


//初始化数据
export const initData = () => (dispatch, getState) => {
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        }
    };
    EventUtil.addHandler(window, "online", function () { Toast.hide() });
    EventUtil.addHandler(window, "offline", function () { Toast.offline("网络已断开", 0) });
    //  如果是首页清除数据
    let comeIN = window.location.hash.split('#')[1];
    if(!comeIN||comeIN==="/"){
        dispatch(reset());
    }
    let prem=api.getDataFromUrl('prem');
    let extra=api.getDataFromUrl('extra');
    let payment=(api.getDataFromUrl('payment'));
    let amnt=api.getDataFromUrl('amnt');
    let insuSex=api.getDataFromUrl('insuSex');

 
    // 获取产品Id
    let varietyCode = sessionStorage.varietyCode;
    dispatch(setVarietyOption(varietyCode));
    // 获取省市县地址
    api.getAddressData(msg => {
        dispatch(setAddressData(msg));
        sessionStorage.addressData = JSON.stringify(msg);
    })
    let type = api.getDataFromUrl('type');
    if (type) {
        dispatch(changeType(type));
    } 
    let staffId = api.getDataFromUrl('staffId');
    let workNum = api.getDataFromUrl('workNum');
    if (workNum) {
        api.getStaff(workNum, msg => {
            if (msg.result.toString() === "1") {
                dispatch(initStaff(msg.staff));
            }
        })
        dispatch(changeStaffId(staffId));
        dispatch(changeworkNum(workNum));
    }
    if(prem){
        
        dispatch(changeFee(prem));
        dispatch(onChangePayMent([payment])); 
        if(extra=="true"){
            dispatch(onChangeExtra()); 
            dispatch(changeForInsuredPerson("01")); 

        }
        dispatch(changeAmntVal(amnt))        
        dispatch(changeInsurantGender(insuSex)) 
    }

    dispatch(getRate());
    let id = api.getDataFromUrl('id');
    //有订单ID说明是编辑页面,并标记为编辑状态，最后step1返回时返回到订单列表页
    let state = getState();
    console.log(state)
    if (state.orderData.orderId) {
        // id = state.orderData.orderId
        dispatch(reset());
        window.location.href = "#/";

    } else {
        if (state.appntData.name) {
            window.location.href = "#/step1";
        }
    }

    if (id) {
        api.getEditDate(getState(), id, msg => {
            let entity = JSON.parse(msg);
            if (Object.keys(entity).length > 0) {
                if (entity.plan.orderStatus === '7' || entity.plan.orderStatus === '3') {
                    dispatch(reset());
                    window.location.href = "#/";
                } else {
                    // console.log(entity);
                    if (entity.planLines.length > 0) {
                        dispatch(initEditData(entity));
                        dispatch(changeHolderNo(entity.appliant.idNum));
                    }
                    if (entity.plan.orderStatus === '1') {
                        dispatch(changeIsLoading(false));
                        window.location.href = "#step3";
                    }
                }
            }
        })
    }
}
const checkAttention = (state) => {
    let flag = true;
    if (!state.attendData.attenA || !state.attendData.attenB) {
        if (!state.attendData.attenA) {
            Toast.info('请确认阅读保险须知', 2);
        } else {
            Toast.info('请确认是中国税收居民', 2);
        }
        window.scrollTo(0, document.body.scrollHeight);
        return false;
    }
    return flag;
}


const maxAmntLive = (level, age) => {
    let maxamnt;

    if (level == 1) {
        if (age >= 18 && age <= 40) {
            maxamnt = 150;
        } else if (age >= 41 && age <= 50) {
            maxamnt = 100;
        }
    } else if (level == 2) {
        if (age >= 18 && age <= 40) {
            maxamnt = 100;
        } else if (age >= 41 && age <= 50) {
            maxamnt = 50;
        }
    } else if (level == 3) {
        if (age >= 18 && age <= 40) {
            maxamnt = 50;
        } else if (age >= 41 && age <= 50) {
            maxamnt = 30;
        }
    }
    return maxamnt;

}
const maxAmntSocial = (level, age) => {
    let maxamnt;
    if (level == 1) {
        if (age >= 18 && age <= 40) {
            maxamnt = 300;
        } else if (age >= 41 && age <= 50) {
            maxamnt = 150;
        }
    } else if (level == 2) {
        if (age >= 18 && age <= 40) {
            maxamnt = 150;
        } else if (age >= 41 && age <= 50) {
            maxamnt = 100;
        }
    } else if (level == 3) {
        if (age >= 18 && age <= 40) {
            maxamnt = 100;
        } else if (age >= 41 && age <= 50) {
            maxamnt = 50;
        }
    }
    return maxamnt;
}