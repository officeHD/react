import zAJAX from './z-ajax';
import datas from '../reducers/data.json';
import {
    Toast
} from 'antd-mobile';
import {
    compose
} from 'redux';
// 获取价值保费
export const getRate = (state, cb, insureAge) => {
    let varietyCode = state.varietyData.extra ? "110045,120015" : sessionStorage.varietyCode;
    let data = {
        sex: state.insuredsData.insuSex,
        age: insureAge || state.insuredsData.insuAge,
        tbsex: state.appntData.sex,
        tbage: state.appntData.age || 19,
        payendyear: state.varietyData.payMent[0],
        insuYear: state.varietyData.insuYear[0],
        mult: 1,
        baseMoney: 1000,
        varietyCode: varietyCode,
        amnt: state.varietyData.amnt * 10000,
        province: state.insuredsData.insuProvince,
        city: state.insuredsData.insuCity,
        socialSecFlag: ""
    }

    if ((data.age === "") || (data.amnt <= 0) || !data.payendyear) {

        return false;
    }
    zAJAX(`${ctx}/app/common/get_rate`, data, cb)
}
//获取用户信息
export const getStaff = (workNum, cb) => {
    zAJAX(`${ctx}/lifeInsuranceApi/get_staff`, {
        workNum: workNum
    }, cb)
}
//获取用户信息
export const getPersonInfo = (workNum, key, cb) => {
    zAJAX(`${ctx}/mobile/lifeInsurance/anbang/get_customer`, {
        workNum: workNum,
        key: key
    }, cb)
}
//获取地址
export const getAddressData = (cb) => {
    zAJAX(`${ctx}/static/asset/addressDatas`, '', cb)
}
//获取工作json
export const getJobList = (cb) => {
    zAJAX(`${ctx}/static/asset/jobListOther`, '', cb)
}
//上传照片
export const uploadImage = (data, cb) => {
    zAJAX(`${ctx}/app/hengqin/upload`, data, cb)
}
//投保
export const sendData = (state, cb) => {
    //被保人是投保人本人
    let payIntv = state.varietyData.payMent[0] === "趸交" ? "0" : "12", // 缴费类型
        renewInfo = state.varietyData.payMent[0] === "趸交" ? "" : {
            "payMode": "4",
            "bankCode": state.renewInfo.bankCode,
            "account": removeAllSpace(state.renewInfo.account),
            "accountName": state.renewInfo.accountName
        }, // 续期账户信息
        payPeriod = state.varietyData.payMent[0] === "趸交" ? "1000" : state.varietyData.payMent[0], // 缴费年期
        payPeriodFlag = "Y"; // 交费年期标志 Y代表年,A代表岁
    let bnfsData = []
    if (state.bnfsType[0] === "2") {
        bnfsData = state.bnfsData.map((item) => {
            item.idNo = removeAllSpace(item.idNo);
            return item
        })
    }


    let socialSecFlag = state.insuredsData.insuSocialSecFlag.toString() === '1' ? 'Y' : 'N';
    let risks = [{
        "amnt": state.varietyData.amnt * 10000,
        "insuYear": "105",
        "drawAge": '', //领取年龄
        "insuYearFlag": "A",
        "mult": 1,
        "prem": state.varietyData.fee,
        "riskCode": "110045",
        "payIntv": payIntv, // 缴费类型
        "payPeriod": payPeriod, // 缴费年期
        "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
        "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
    }];
    if (state.varietyData.extra) {
        risks = [{
            "amnt": state.varietyData.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": accSub(state.varietyData.fee, state.varietyData.extraFee),
            "riskCode": "110045",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
        }, {
            "amnt": state.varietyData.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": state.varietyData.extraFee,
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
        "sumFirstPrem": state.varietyData.fee, // 总保费
        "valDate": "",
        "appnt": {
            "permanentAddress": state.appntData.permanentAddress,
            "birthDate": state.appntData.birthDate,
            "phone": state.appntData.phone,
            "validDateEnd": state.appntData.validDateEnd,
            "idNum": removeAllSpace(state.appntData.idNum),
            'age': state.holderAge,
            "height": state.appntData.height,
            "weight": state.appntData.weight,
            "idType": state.appntData.idType,
            "idFrontImg": state.appntData.idFrontImg,
            "idBackImg": state.appntData.idBackImg,
            "name": state.appntData.name,
            "sex": getIdCardGender(removeAllSpace(state.appntData.idNum)),
            "email": state.appntData.email,
            "nationality": "CHN",
            "province": state.appntData.province,
            "city": state.appntData.city,
            "county": state.appntData.county,
            "zipCode": state.appntData.zipCode,
            "inCome": state.appntData.inCome * 10000,
            "occupationCode": state.occupation.holderNo,
            "imparts": [],
            "socialSecFlag": "",
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insuredsData.insuPermanentAddress,
            "insuBirthDate": state.insuredsData.insuBirthDate,
            "insuPhone": state.insuredsData.insuPhone,
            "insuValidDateEnd": state.insuredsData.insuValidDateEnd,
            "insuIdNum": removeAllSpace(state.insuredsData.insuIdNum),
            "insuHeight": state.insuredsData.insuHeight,
            "insuWeight": state.insuredsData.insuWeight,
            'insuAge': state.insurantAge,

            "insuIdType": state.insuredsData.insuIdType,
            "insuIdFrontImg": state.insuredsData.insuIdFrontImg,
            "insuIdBackImg": state.insuredsData.insuIdBackImg,
            "insuName": state.insuredsData.insuName,
            "insuSex": getIdCardGender(removeAllSpace(state.insuredsData.insuIdNum)),
            "insuImparts": state.varietyData.insuImparts,
            "isSatutoryBeneficiary": "0",
            "insuOccupationCode": state.occupation.no,
            "insuEmail": state.insuredsData.insuEmail,
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
            "insuNationality": "CHN",
            "insuProvince": state.insuredsData.insuProvince,
            "insuCity": state.insuredsData.insuCity,
            "insuCounty": state.insuredsData.insuCounty,
            "insuZipCode": state.insuredsData.insuZipCode,
            "insuInCome": state.insuredsData.insuInCome * 10000,
            "insuSocialSecFlag": state.insuredsData.insuSocialSecFlag,
            "socialInsuProvince": state.insuredsData.socialInsuProvince,
            "socialInsuCity": state.insuredsData.socialInsuCity,
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
//核保
export const underwriting = (state, cb) => {
    //被保人是投保人本人
    let payIntv = state.varietyData.payMent[0] === "趸交" ? "0" : "12", // 缴费类型
        renewInfo = state.varietyData.payMent[0] === "趸交" ? "" : {
            "payMode": "4",
            "bankCode": state.renewInfo.bankCode,
            "account": removeAllSpace(state.renewInfo.account),
            "accountName": state.renewInfo.accountName
        }, // 续期账户信息
        payPeriod = state.varietyData.payMent[0] === "趸交" ? "1000" : state.varietyData.payMent[0], // 缴费年期
        payPeriodFlag = "Y"; // 交费年期标志 Y代表年,A代表岁
    // bnfsData = state.bnfsType[0] === "2" ? state.bnfsData : [];

    let bnfsData = []
    if (state.bnfsType[0] === "2") {
        bnfsData = state.bnfsData.map((item) => {
            item.idNo = removeAllSpace(item.idNo);
            return item
        })
    }
    let risks = [{
        "amnt": state.varietyData.amnt * 10000,
        "insuYear": "105",
        "drawAge": '', //领取年龄
        "insuYearFlag": "A",
        "mult": 1,
        "prem": state.varietyData.fee,
        "riskCode": "110045",
        "payIntv": payIntv, // 缴费类型
        "payPeriod": payPeriod, // 缴费年期
        "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
        "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
    }];
    if (state.varietyData.extra) {
        risks = [{
            "amnt": state.varietyData.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": accSub(state.varietyData.fee, state.varietyData.extraFee),
            "riskCode": "110045",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
        }, {
            "amnt": state.varietyData.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": state.varietyData.extraFee,
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
        "sumFirstPrem": state.varietyData.fee, // 总保费
        "valDate": "",
        "appnt": {
            "permanentAddress": state.appntData.permanentAddress,
            "birthDate": state.appntData.birthDate,
            "phone": state.appntData.phone,
            "validDateEnd": state.appntData.validDateEnd,
            "idNum": removeAllSpace(state.appntData.idNum),
            'age': state.holderAge,
            "idType": state.appntData.idType,
            "height": state.appntData.height,
            "weight": state.appntData.weight,
            "occupationCode": state.occupation.holderNo,
            "name": state.appntData.name,
            "idFrontImg": state.appntData.idFrontImg,
            "idBackImg": state.appntData.idBackImg,
            "sex": getIdCardGender(removeAllSpace(state.appntData.idNum)),
            "email": state.appntData.email,
            "nationality": "CHN",
            "province": state.appntData.province,
            "city": state.appntData.city,
            "county": state.appntData.county,
            "zipCode": state.appntData.zipCode,
            "inCome": state.appntData.inCome * 10000,
            "imparts": [],
            "socialSecFlag": "",
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insuredsData.insuPermanentAddress,
            "insuBirthDate": state.insuredsData.insuBirthDate,
            "insuPhone": state.insuredsData.insuPhone,
            "insuValidDateEnd": state.insuredsData.insuValidDateEnd,
            "insuIdNum": removeAllSpace(state.insuredsData.insuIdNum),
            'insuAge': state.insurantAge,
            "insuIdType": state.insuredsData.insuIdType,
            "insuIdFrontImg": state.insuredsData.insuIdFrontImg,
            "insuIdBackImg": state.insuredsData.insuIdBackImg,
            "insuName": state.insuredsData.insuName,
            "insuHeight": state.insuredsData.insuHeight,
            "insuWeight": state.insuredsData.insuWeight,
            "insuSex": getIdCardGender(removeAllSpace(state.insuredsData.insuIdNum)),
            "insuImparts": state.varietyData.insuImparts,
            "isSatutoryBeneficiary": "0",
            "insuOccupationCode": state.occupation.no,
            "insuEmail": state.insuredsData.insuEmail,
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
            "insuNationality": "CHN",
            "insuProvince": state.insuredsData.insuProvince,
            "insuCity": state.insuredsData.insuCity,
            "insuCounty": state.insuredsData.insuCounty,
            "insuZipCode": state.insuredsData.insuZipCode,
            "insuInCome": state.insuredsData.insuInCome * 10000,
            "insuSocialSecFlag": state.insuredsData.insuSocialSecFlag,
            "socialInsuProvince": state.insuredsData.socialInsuProvince,
            "socialInsuCity": state.insuredsData.socialInsuCity,
            "smokeFlag": "",
            "healthNoticeFlag":  state.healthy=='0'?"N":"Y",
            "existOtherAmnt": ""
        }],
        "renewInfo": renewInfo,
        "risks": risks,
        "bnfs": bnfsData
    }
    zAJAX(`${ctx}/app/common/underwriting`, {
        data: JSON.stringify(data),
        requestType: 0
    }, cb)
}


export const notice_check = (state, cb) => {
    //被保人是投保人本人
    let payIntv = state.varietyData.payMent[0] === "趸交" ? "0" : "12", // 缴费类型
        renewInfo = state.varietyData.payMent[0] === "趸交" ? "" : {
            "payMode": "4",
            "bankCode": state.renewInfo.bankCode,
            "account": removeAllSpace(state.renewInfo.account),
            "accountName": state.renewInfo.accountName
        }, // 续期账户信息
        payPeriod = state.varietyData.payMent[0] === "趸交" ? "1000" : state.varietyData.payMent[0], // 缴费年期
        payPeriodFlag = "Y"; // 交费年期标志 Y代表年,A代表岁
    // bnfsData = state.bnfsType[0] === "2" ? state.bnfsData : [];

    let bnfsData = []
    if (state.bnfsType[0] === "2") {
        bnfsData = state.bnfsData.map((item) => {
            item.idNo = removeAllSpace(item.idNo);
            return item
        })
    }
    let risks = [{
        "amnt": state.varietyData.amnt * 10000,
        "insuYear": "105",
        "drawAge": '', //领取年龄
        "insuYearFlag": "A",
        "mult": 1,
        "prem": state.varietyData.fee,
        "riskCode": "110045",
        "payIntv": payIntv, // 缴费类型
        "payPeriod": payPeriod, // 缴费年期
        "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
        "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
    }];
    if (state.varietyData.extra) {
        risks = [{
            "amnt": state.varietyData.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": accSub(state.varietyData.fee, state.varietyData.extraFee),
            "riskCode": "110045",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": "N" // 是否参加社保Y参加N不参加获取
        }, {
            "amnt": state.varietyData.amnt * 10000,
            "insuYear": "105",
            "drawAge": '', //领取年龄
            "insuYearFlag": "A",
            "mult": 1,
            "prem": state.varietyData.extraFee,
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
        "sumFirstPrem": state.varietyData.fee, // 总保费
        "valDate": "",
        "appnt": {
            "permanentAddress": state.appntData.permanentAddress,
            "birthDate": state.appntData.birthDate,
            "phone": state.appntData.phone,
            "validDateEnd": state.appntData.validDateEnd,
            "idNum": removeAllSpace(state.appntData.idNum),
            'age': state.holderAge,
            "idType": state.appntData.idType,
            "height": state.appntData.height,
            "weight": state.appntData.weight,
            "occupationCode": state.occupation.holderNo,
            "name": state.appntData.name,
            "idFrontImg": state.appntData.idFrontImg,
            "idBackImg": state.appntData.idBackImg,
            "sex": getIdCardGender(removeAllSpace(state.appntData.idNum)),
            "email": state.appntData.email,
            "nationality": "CHN",
            "province": state.appntData.province,
            "city": state.appntData.city,
            "county": state.appntData.county,
            "zipCode": state.appntData.zipCode,
            "inCome": state.appntData.inCome * 10000,
            "imparts": [],
            "socialSecFlag": "",
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insuredsData.insuPermanentAddress,
            "insuBirthDate": state.insuredsData.insuBirthDate,
            "insuPhone": state.insuredsData.insuPhone,
            "insuValidDateEnd": state.insuredsData.insuValidDateEnd,
            "insuIdNum": removeAllSpace(state.insuredsData.insuIdNum),
            'insuAge': state.insurantAge,
            "insuIdType": state.insuredsData.insuIdType,
            "insuIdFrontImg": state.insuredsData.insuIdFrontImg,
            "insuIdBackImg": state.insuredsData.insuIdBackImg,
            "insuName": state.insuredsData.insuName,
            "insuHeight": state.insuredsData.insuHeight,
            "insuWeight": state.insuredsData.insuWeight,
            "insuSex": getIdCardGender(removeAllSpace(state.insuredsData.insuIdNum)),
            "insuImparts": [],
            "isSatutoryBeneficiary": "0",
            "insuOccupationCode": state.occupation.no,
            "insuEmail": state.insuredsData.insuEmail,
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
            "insuNationality": "CHN",
            "insuProvince": state.insuredsData.insuProvince,
            "insuCity": state.insuredsData.insuCity,
            "insuCounty": state.insuredsData.insuCounty,
            "insuZipCode": state.insuredsData.insuZipCode,
            "insuInCome": state.insuredsData.insuInCome * 10000,
            "insuSocialSecFlag": state.insuredsData.insuSocialSecFlag,
            "socialInsuProvince": state.insuredsData.socialInsuProvince,
            "socialInsuCity": state.insuredsData.socialInsuCity,
            "smokeFlag": "",
            "healthNoticeFlag": state.healthy=='0'?"N":"Y",
            "existOtherAmnt": ""
        }],
        "renewInfo": renewInfo,
        "risks": risks,
        "bnfs": bnfsData
    }
    zAJAX(`${ctx}/app/common/notice_check`, {
        data: JSON.stringify(data),
        requestType: 0
    }, cb)
}


//获取验证码
export const getMesCode = (state, cb) => {
    let data = {
        "orderId": state.orderData.orderId,
        "bizContent": {
            "bankAccType": "01",
            "bankCode": state.payData.bankCode[0],
            "bankNo": state.payData.bankNum,
            "certNo": "",
            "certType": "",
            "mobile": state.payData.payPhone,
            "orderNo": "",
            "proposalNo": "",
            "salesChannel": "",
            "userName": state.payData.cardName
        }
    }
    zAJAX(`${ctx}/app/hengqin/signPay`, {
        data: JSON.stringify(data),
        workNum: state.staffmes.workNum
    }, cb)
}
const accSub = (arg1, arg2) => {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//支付
export const payOrder = (state, cb) => {
    let bankName = ''
    datas.payBank.map((item, index) => {
        if (state.payData.bankCode[0] === item.value) {
            bankName = item.label;
        }
    })
    let data = {
        "id": state.orderData.orderId,
        "accName": state.appntData.name,
        "bankCode": state.payData.bankCode[0],
        "bankAccNo": removeAllSpace(state.payData.bankNum),
        "payMode": "4",
        "sumPrem": state.varietyData.fee,
        "sumAmnt": state.varietyData.amnt * 10000,
        "renewalAccName": state.appntData.name,
        "renewalAccNo": removeAllSpace(state.payData.bankNum),
        "bankName": bankName,
        "renewalBankCode": state.payData.bankCode[0],
        "payType": "1"
    }
    zAJAX(`${ctx}/app/common/payorder`, {
        data: JSON.stringify(data),
        requestType: 0
    }, cb)
}
export const wechatPay = (state, cb) => {
    let data = {
        bizNo: state.orderData.orderId,
        payAmount: state.varietyData.fee
    }
    zAJAX(`${ctx}/app/common/wechatPay`, data, cb)
}

export const checkholder = (state) => {
    var pass = true;
    if (!state.appntData.idType && !checkData('投保人身份证', removeAllSpace(state.appntData.idNum))) {
        pass = false;
        return;
    }
    if (!checkData('投保人姓名', state.appntData.name) ||
        !checkData('投保人电话', state.appntData.phone) ||
        !checkData('投保人证件号', removeAllSpace(state.appntData.idNum)) ||
        !checkData('投保人出生日期', state.appntData.birthDate) ||
        !checkData('投保人证件有效期', state.appntData.validDateEnd) ||
        !checkData('投保人邮箱', state.appntData.email) ||
        !checkData('投保地区', state.appntData.county) ||
        !checkData('投保人详细地址', state.appntData.permanentAddress) ||
        !checkData('投保人职业', state.occupation.holderNo)) {
        pass = false;
        return;
    }
    if (state.appntData.permanentAddress.length <= 8) {
        Toast.info("投保人详细地址不少于8个字符", 2)
        pass = false;
    }

    return pass;
}

export const checkInsurant = (state) => {
    var pass = true;
    let insuName = state.insuredsData.insuName,
        insuPhone = state.insuredsData.insuPhone,
        insuIdNum = removeAllSpace(state.insuredsData.insuIdNum),
        insuValidDateEnd = state.insuredsData.insuValidDateEnd,
        insuEmail = state.insuredsData.insuEmail,
        insuCounty = state.insuredsData.insuCounty,
        insuPermanentAddress = state.insuredsData.insuPermanentAddress,
        insuHeight = state.insuredsData.insuHeight,
        insuWeight = state.insuredsData.insuWeight,
        insurantAge = state.insuredsData.insuAge,
        insuInCome = state.insuredsData.insuInCome,
        insuSex = state.insuredsData.insuSex;

    if (state.insuredsData.relationsWithCustomer == "04") {
        insuName = state.appntData.name;
        insuPhone = state.appntData.phone;
        insuIdNum = removeAllSpace(state.appntData.idNum);
        insuValidDateEnd = state.appntData.validDateEnd;
        insuEmail = state.appntData.email;
        insuCounty = state.appntData.county;
        insuPermanentAddress = state.appntData.permanentAddress;
        insuHeight = state.insuredsData.insuHeight;
        insuWeight = state.insuredsData.insuWeight;
        insuInCome = state.insuredsData.insuInCome;
        // if (!checkData('被保人职业', state.occupation.no)) {
        //     pass = false;
        //     return false;
        // }
    }
    if (!checkData('被保人姓名', insuName) ||
        !checkData('被保人电话', insuPhone) ||
        !checkData('被保人证件号', removeAllSpace(insuIdNum)) ||
        !checkData('被保人证件有效期', insuValidDateEnd) ||

        // !checkData('被保人邮箱', insuEmail) ||
        !checkData('被保地区', insuCounty) ||
        !checkData('被保人详细地址', insuPermanentAddress) ||
        // !checkData('被保人年收入', insuInCome) ||
        !checkData('被保人身高', insuHeight) ||
        !checkData('被保人体重', insuWeight) ||
        !checkData('被保人职业', state.occupation.no)) {
        pass = false;
        return;
    }

    if (insurantAge >= 0 && insurantAge <= 1) {
        if (insuHeight < 45 || insuHeight > 100) {
            Toast.info("0-1周岁，身高范围45cm-100cm");
            pass = false;
            return;
        }
        if (insuWeight < 3 || insuWeight > 15) {
            Toast.info("0-1周岁，体重范围3kg-15kg");
            pass = false;
            return;
        }
    }
    if (insurantAge >= 2 && insurantAge <= 3) {
        if (insuHeight < 85 || insuHeight > 110) {
            Toast.info("2-3周岁，身高范围85cm-110cm");
            pass = false;
            return;
        }
        if (insuWeight < 9 || insuWeight > 20) {
            Toast.info("2-3周岁，体重范围9kg-20kg");
            pass = false;
            return;
        }
    }
    if (insurantAge >= 4 && insurantAge <= 17) {
        if (insuHeight < 95 || insuHeight > 220) {
            Toast.info("4-17周岁，身高范围95cm-220cm");
            pass = false;

        }
        if (insuWeight < 14 || insuWeight > 140) {
            Toast.info("4-17周岁，体重范围14kg-140kg");
            pass = false;

        }
    }
    if (insurantAge >= 18) {
        let bmi = insuWeight / ((insuHeight / 100) * (insuHeight / 100));
        console.log(insuSex);

        if (insuSex == "1") {
            if (insuHeight < 130 || insuHeight > 200) {
                Toast.info("18岁以上女性，身高范围130cm-200cm");
                pass = false;

            }
            if (insuWeight < 35 || insuWeight > 120) {
                Toast.info("18岁以上女性，体重范围35kg-120kg");
                pass = false;

            }
            if (bmi < 16 || bmi > 29) {
                Toast.info("被保人身体质量指数不符合投保要求");
                pass = false;

            }
        } else {
            if (insuHeight < 140 || insuHeight > 220) {
                Toast.info("18岁以上男性，身高范围140cm-220cm");
                pass = false;

            }
            if (insuWeight < 40 || insuWeight > 140) {
                Toast.info("18岁以上男性，体重范围40kg-140kg");
                pass = false;

            }
            if (bmi < 17 || bmi > 29) {
                Toast.info("被保人身体质量指数不符合投保要求");
                pass = false;

            }
        }
    }


    if (insuPermanentAddress.length <= 8) {
        Toast.info("被保人详细地址不少于8个字符", 2)
        pass = false;
    }

    return pass;
}
export const removeAllSpace = (str) => {
    return str.replace(/\s+/g, "");
}
export const checkInsuPlan = (state) => {
    var pass = true;
    if (!state.varietyData.amnt) {
        Toast.info("请输入保险金额");
        pass = false;
        return;
    }

    if (state.varietyData.payMent[0] !== "趸交") {
        if (!state.renewInfo.bankCode) {
            Toast.info("请选择续期扣款银行");
            pass = false;
            return;
        }
        if (!state.renewInfo.account) {
            Toast.info("请输入续期扣款账号");
            pass = false;
            return;
        }
    }

    return pass;
}

export const checkAge = (state) => {
    var tip = "";
    var pass = true;

    let holderAge, insurantAge, relation, payment, minAgeDay;
    holderAge = state.appntData.age;
    insurantAge = state.insuredsData.insuAge;
    relation = state.insuredsData.relationsWithCustomer;
    payment = state.varietyData.payMent[0];
    minAgeDay = state.varietyData.minAgeD;
    //判断投保人年龄

    if (holderAge < 18) {
        tip = "投保人年龄必须大于18周岁";
        pass = false;
    }
    if (payment !== "趸交") {
        if ((holderAge - 0 + (payment - 0)) > 70) {
            tip = "缴费期满时投保人年龄不得超过70周岁";
            pass = false;

        }
    } else {
        if (holderAge > 70) {
            tip = "投保人年龄不得超过70周岁";
            pass = false;

        }
    }

    //判断被保人年龄
    let s1 = state.insuredsData.insuBirthDate;
    s1 = new Date(s1.replace(/-/g, "/"));
    let s2 = new Date();
    var days = s2.getTime() - s1.getTime();
    var time = parseInt(days / (1000 * 60 * 60 * 24));
    if (minAgeDay && (time < minAgeDay)) {
        tip = `被保人不得小于${minAgeDay}天`;
        pass = false;

    }
    if (insurantAge >= 0) {
        if (insurantAge > 50) {
            tip = "被保人年龄0-50周岁";
            pass = false;

        } else {
            if (payment !== "趸交" && ((insurantAge - 0 + (payment - 0)) > 65)) {
                tip = "缴费期满时被保险人年龄不得超过65周岁";
                pass = false;

            }
            if (insurantAge <= 5 && state.varietyData.amnt > 30) {
                tip = "被保险人0-5岁周岁，最高保额30万";
                pass = false;
            } else if (insurantAge <= 40) {
                if (state.varietyData.amnt > 50) {
                    tip = "当5周岁<被保险人年龄<40周岁，最高保额50万";
                    pass = false;
                }
                if (payment == "趸交") {
                    payment == 1;
                    if (insurantAge < 10) {
                        if ((insurantAge + (payment - 0)) <= 18) {
                            if (state.varietyData.fee * payment > 20) {
                                tip = "当被保险人年龄<10周岁，且被保险人年龄+交费年期<=18，保费*交费年期必须<=20万";
                                pass = false;
                            }
                        }
                    } else if (insurantAge < 18 && insurantAge >= 10) {
                        if ((insurantAge + (payment - 0)) <= 18) {
                            if (state.varietyData.fee * payment > 50) {
                                tip = "10周岁=<当被保险人年龄<18周岁，且被保险人年龄+交费年期<=18，保费*交费年期必须<=50万";
                                pass = false;
                            }
                        }
                    }
                }
            } else if (insurantAge <= 45 && insurantAge > 40 && state.varietyData.amnt > 40) {
                tip = "当40周岁<被保险人年龄<=45周岁，最高保额40万";
                pass = false;
            } else if (insurantAge <= 50 && insurantAge > 45 && state.varietyData.amnt > 30) {
                tip = "当45周岁<被保险人年龄<=50周岁，最高保额30万";
                pass = false;
            }
        }

    }

    if (state.appntData.idNum && state.insuredsData.insuIdNum) {
        if (relation == "00") { //配偶
            if (getIdCardGender(removeAllSpace(state.appntData.idNum)) == getIdCardGender(removeAllSpace(state.insuredsData.insuIdNum))) {
                tip = "配偶性别相同 无法投保";
                pass = false;

            }
        } else if (relation == "02") { //子女
            if (holderAge - insurantAge < 18) {
                tip = "子女与投保人年龄相差小于18周岁 无法投保";
                pass = false;
            }
        } else if (relation == "01") { //父母
            if (insurantAge - holderAge < 18) {
                tip = "父母与投保人年龄相差小于18周岁 无法投保";
                pass = false;

            }
        }
    }
    if (!pass) Toast.info(tip);
    return pass;
}
export const checkBnfs = (state, rate) => {
    var tip = "";
    var pass = true;
    let holderAge = state.insuredsData.insuAge;
    let holderSex = state.insuredsData.insuSex;
    if (state.bnfsType[0] == "2") {
        let totalLot = 0;

        state.bnfsData.forEach(function (item, index) {

            if (!checkData(`受益人${index + 1}与被保人关系`, item.relationToInsured) || !checkData(`受益人${index + 1}姓名`, item.name) ||
                !checkData(`受益人${index + 1}手机号`, item.phone) || !checkData(`受益人${index + 1}证件号`, removeAllSpace(item.idNo)) ||
                !checkData(`受益人${index + 1}证件有效期`, item.idEndDate) || !checkData(`受益人${index + 1}受益比例`, item.bnfLot)
            ) {
                pass = false;
                return;
            } else {

                if (item.relationToInsured == "01") { //父母
                    if (calculatedAge(removeAllSpace(item.idNo)) - holderAge < 18) {
                        tip = `受益人${index + 1}年龄与被保人关系不符`;
                        Toast.info(tip, 2);
                        pass = false;
                        return;
                    }
                } else if (item.relationToInsured == "00") { //配偶

                    if (item.sex == holderSex) {
                        tip = `受益人${index + 1}性别与被保人关系不符`;
                        Toast.info(tip, 2);
                        pass = false;
                        return;
                    }
                } else if (item.relationToInsured == "02") { //子女
                    if (holderAge - calculatedAge(removeAllSpace(item.idNo)) < 18) {
                        tip = `受益人${index + 1}年龄与被保人关系不符`;
                        Toast.info(tip, 2);
                        pass = false;
                        return;
                    }
                }
                totalLot += (item.bnfLot - 0);
            }
        })

        if (pass && rate && totalLot != 100) {

            tip = `受益比例总和应为100`;
            Toast.info(tip, 2);
            pass = false;
            return;
        }
    }

    // if (!pass) Toast.info(tip);
    return pass;
}

export const checkAgeReg = (type, holder, insurant) => {
    var tip = "";
    var pass = true;
    var holderage = calculatedAge(holder);
    var insurantage = calculatedAge(insurant);
    if (type === 2) {
        if (holderage <= insurantage) {
            tip = "被保人年龄应小于投保人";
            pass = false;
        }
    } else if (type === 3) {
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


//校验数据有效性
export const checkData = (str, text) => {

    if (text === '' || !text) {
        //非空验证
        Toast.info(`${str} 不得为空！`, 2);
        return false
    } else {
        //格式验证
        let reg;
        switch (true) {
            case str.indexOf('姓名') >= 0:
            case str.indexOf('持卡人') >= 0:
                reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
                break;
            case str.indexOf('证件号') >= 0:
            case str.indexOf('身份证') >= 0:
                reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
                break;
            case str.indexOf('证件有效期') >= 0:
            case str.indexOf('日期') >= 0:
                reg = /^[1-9]\d{3}-[0-1]\d-[0-3]\d$/;
                break;
            case str.indexOf('电话') >= 0:
            case str.indexOf('手机') >= 0:
                reg = /^1\d{10}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[0-9]{6}$/;
                break;
            case str.indexOf('验证码') >= 0:
                reg = /^[0-9]{4,6}$/;
                break;
            default:
                reg = /[\s\S]*/;
                break
        }
        if (!reg.test(text)) {
            Toast.info(`${str} 格式不正确！`, 2);
            return false;
        }
        return true;
    }
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
//获取性别
export const getIdCardGender = (val) => {
    // let sex = (val.substr(16, 1) - 0 + 1) % 2;
    let sex = val.substr(16, 1) % 2 == 1 ? "0" : "1";
    return sex;
}
//获取出生日期
export const getIdCardBirthday = (val) => {
    let year = val.substr(6, 4);
    let month = val.substr(10, 2);
    let day = val.substr(12, 2);
    let birthday = year + '-' + month + '-' + day;
    return birthday;
}
//获取年龄
export const getAge = (val) => {
    let ageVal;
    let birthDate = new Date(val);
    let nowDateTime = new Date();
    ageVal = nowDateTime.getFullYear() - birthDate.getFullYear();
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        ageVal--;
    }

    return ageVal;
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
    zAJAX(`${ctx}/app/common/detail`, {
        id: id,
        requestType: 0
    }, cb)
}