import zAJAX from './z-ajax'
import {
    Toast
} from 'antd-mobile';


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
        cb({ result:1, prem:"33.2" ,totalPrem:"3333",productList:[]})
    }, 500);

}

//投保
export const insert_order = (state, cb) => {
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
    if (state.bnfsType[0] === "2") {
        bnfsData = state.bnfsData.map((item) => {
            item.idNo = removeAllSpace(item.idNo);
            return item
        })
    }
    let socialSecFlag = state.insurant.insuSocialSecFlag.toString() === '1' ? 'Y' : 'N';
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
    if (state.varietyData.extra) {
        risks = [{
            "amnt": state.insurance.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": accSub(state.insurance.prem, state.insurance.extraFee),
            "riskCode": "110045",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
        }, {
            "amnt": state.insurance.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": state.insurance.extraFee,
            "riskCode": "120015",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
        }];
    }
    let data = {
        "orderId": state.orderData.orderId,
        "workNum": state.staffmes.workNum,
        "count": 1, // 份数
        "orderNo": state.orderData.orderNo, // 订单编号
        "proposeDate": "",
        "sumFirstPrem": state.varietyData.prem, // 总保费
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
            "sex": getIdCardGender(removeAllSpace(state.holder.idNum)),
            "email": state.holder.email,
            "nationality": "CHN",
            "province": state.holder.province,
            "city": state.holder.city,
            "county": state.holder.county,
            "zipCode": state.holder.zipCode,
            "inCome": state.holder.inCome * 10000,
            "occupationCode": state.holder.occupationNo,
            "imparts": [],
            "socialSecFlag": "",
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insurant.permanentAddress,
            "insuBirthDate": state.insurant.birthDate,
            "insuPhone": state.insurant.insuPhone,
            "insuValidDateEnd": state.insurant.validDateEnd,
            "insuIdNum": removeAllSpace(state.insurant.idNum),
            "insuHeight": state.insurant.height,
            "insuWeight": state.insurant.weight,
            'insuAge': state.insurant.age,

            "insuIdType": state.insurant.idType,
            "insuIdFrontImg": state.insurant.idFrontImg,
            "insuIdBackImg": state.insurant.idBackImg,
            "insuName": state.insurant.insuName,
            "insuSex": getIdCardGender(removeAllSpace(state.insurant.idNum)),
            "insuImparts": state.varietyData.imparts,
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
    zAJAX(`${ctx}/app/common/insert_order`, {
        data: JSON.stringify(data),
        requestType: 0,
        workNum: state.staffmes.workNum
    }, cb)
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



//数字前补零
const tran_val = (val) => {
    if ((val - 0) < 10) {
        val = "0" + val;
    }
    return val;
}

//日期转字符串
export const dateToString = (time) => {
    const datenew = new Date(time);
    const year = datenew.getFullYear();
    const month = tran_val(datenew.getMonth() + 1);
    const date = tran_val(datenew.getDate());
    return year + '-' + month + '-' + date;
}

//从地址栏里获取数据
export const getDataFromUrl = (name) => {
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r !== null) return unescape(r[2]);
    return null;
}

//如果是编辑页面，初始化编辑数据
export const getEditDate = (state, id, cb) => {
    zAJAX(`${ctx}/appZhongan/personal/detail`, {
        id: id
    }, cb)
}