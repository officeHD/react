import zAJAX from './z-ajax'
import {
    Toast
} from 'antd-mobile';

import { validNum, removeAllSpace } from './util'



export const getprem = (state, cb) => {
    let data = {
        sex: state.insurant.sex,
        age: state.insurant.age,
        tbsex: state.holder.sex,
        tbage: state.holder.age || 19,
        payendyear: state.insurance.payment,
        insuYear: state.insurance.insuYear,
        mult: 1,
        baseMoney: state.insurance.baseMoney,
        varietyCode: state.insurance.planCode,
        amnt: state.insurance.amnt * 10000,
        province: state.insurant.province,
        city: state.insurant.city,
        socialSecFlag: state.insurant.socialSecFlag
    }
    // zAJAX(`${ctx}/app/common/get_rate`, data, cb)
    setTimeout(() => {
        cb({ result: 1, prem: "33.2", totalPrem: "3333", productList: [] })
    }, 500);

}

//投保
export const insert_order = (type, state, cb) => {
    //被保人是投保人本人
    let payIntv = state.insurance.payment === "趸交" ? "0" : "12", // 缴费类型
        renewInfo = state.insurance.payment === "趸交" ? "" : {
            "payMode": "4",
            "bankCode": state.renewInfo.bankCode,
            "account": removeAllSpace(state.renewInfo.account),
            "accountName": state.renewInfo.accountName
        }, // 续期账户信息
        payPeriod = state.insurance.payment === "趸交" ? "1000" : state.insurance.payment, // 缴费年期
        payPeriodFlag = "Y"; // 交费年期标志 Y代表年,A代表岁
    let bnfsData = []
    if (state.benefit.type === "2") {
        bnfsData = state.benefit.lists
    }
    let risks = [{
        "amnt": state.insurance.amnt * 10000,
        "insuYear": "105",
        "drawAge": '', //领取年龄
        "insuYearFlag": "A",
        "mult": 1,
        "prem": state.insurance.prem,
        "riskCode": "110045",
        "payIntv": payIntv, // 缴费类型
        "payPeriod": payPeriod, // 缴费年期
        "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
        "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
    }];

    let data = {
        "orderId": state.order.orderId,
        "workNum": state.staff.workNum,
        "count": 1, // 份数
        "orderNo": state.order.orderNo, // 订单编号
        "proposeDate": "",
        "sumFirstPrem": state.insurance.prem, // 总保费
        "valDate": "",
        "appnt": {
            "permanentAddress": state.holder.permanentAddress,
            "birthDate": state.holder.birthDate,
            "phone": state.holder.phone,
            "validDateEnd": state.holder.validDateEnd,
            "idNum": removeAllSpace(state.holder.idNum),
            'age': state.holder.age,
            "height": state.holder.height,
            "weight": state.holder.weight,
            "idType": state.holder.idType,
            "idFrontImg": state.holder.idFrontImg,
            "idBackImg": state.holder.idBackImg,
            "name": state.holder.name,
            "sex": state.holder.sex,
            "email": state.holder.email,
            "nationality": "CHN",
            "province": state.holder.province,
            "city": state.holder.city,
            "county": state.holder.county,
            "zipCode": state.holder.zipCode,
            "inCome": state.holder.inCome * 10000,
            "occupationCode": state.holder.occupationNo,
            "imparts": [],
            "socialSecFlag": state.insurant.socialSecFlag,
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insurant.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insurant.permanentAddress,
            "insuBirthDate": state.insurant.birthDate,
            "insuPhone": state.insurant.insuPhone,
            "insuValidDateEnd": state.insurant.validDateEnd,
            "insuIdNum": state.insurant.sex,
            "insuHeight": state.insurant.height,
            "insuWeight": state.insurant.weight,
            'insuAge': state.insurant.age,

            "insuIdType": state.insurant.idType,
            "insuIdFrontImg": state.insurant.idFrontImg,
            "insuIdBackImg": state.insurant.idBackImg,
            "insuName": state.insurant.insuName,
            "insuSex": state.insurant.sex,
            "insuImparts": state.insurance.imparts,
            "isSatutoryBeneficiary": "0",
            "insuOccupationCode": state.insurant.occupationNo,
            "insuEmail": state.insurant.email,
            "relationsWithCustomer": state.insurant.relationsWithCustomer,
            "insuNationality": "CHN",
            "insuProvince": state.insurant.province,
            "insuCity": state.insurant.city,
            "insuCounty": state.insurant.county,
            "insuZipCode": state.insurant.zipCode,
            "insuInCome": state.insurant.inCome * 10000,
            "insuSocialSecFlag": state.insurant.socialSecFlag,
            "socialInsuProvince": state.insurant.socialInsuProvince,
            "socialInsuCity": state.insurant.socialInsuCity,
            "smokeFlag": "",
            "healthNoticeFlag": "N",
            "existOtherAmnt": ""
        }],
        "renewInfo": renewInfo,
        "risks": risks,
        "bnfs": bnfsData
    }
    if (type = "insertOrder") {
        // zAJAX(`${ctx}/app/common/insert_order`, {
        //     data: JSON.stringify(data),
        //     requestType: 0,
        //     workNum: state.staffmes.workNum
        // }, cb)
    } else if (type = "underwriting") {

    }

    setTimeout(() => {
        cb({ result: 1, orderId: "12312222", orderNo: "12312222" })
    }, 2000);
}








export const checkAge = (str, val) => {
    var tip = "";
    var pass = true;
    var userAge = calculatedAge(val);
    if (str === "投保人") {
        if (userAge < 18) {
            tip = "投保人年龄大于18周岁";
            pass = false;
        }
    } else {
        if (userAge < 18 || userAge > 65) {
            tip = "被保人年龄在18-65周岁";
            pass = false;
        }
    }
    if (!pass) alert(tip);
    return pass;

}

export const checkAgeReg = (type, holder, insurant) => {
    var tip = "";
    var pass = true;
    var holderage = calculatedAge(holder);
    var insurantage = calculatedAge(insurant);
    if (type === 3) {
        if (holderage <= insurantage) {
            tip = "被保人年龄应小于投保人";
            pass = false;
        }
    } else if (type === 2) {
        if (holderage >= insurantage) {
            tip = "被保人年龄应大于投保人";
            pass = false;
        }
    }
    if (!pass) alert(tip);
    return pass;

}
// 计算年龄
const calculatedAge = (val) => {
    let bbrAge;
    if (val != null && val != "") {
        if (val.length === 18) {
            let bbrBirthday = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2);
            let strBirthday = val.substr(6, 4) + "/" + val.substr(10, 2) + "/" + val.substr(12, 2);

            let birthDate = new Date(strBirthday);
            let nowDateTime = new Date();
            bbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();
            if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
                bbrAge--;
            }
        }
    }
    return bbrAge;
}





//如果是编辑页面，初始化编辑数据
export const getEditDate = (state, id, cb) => {
    zAJAX(`${ctx}/appZhongan/personal/detail`, {
        id: id
    }, cb)
}