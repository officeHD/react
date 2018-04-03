import AppStore from '../stores/AppStore';
import AppActionCreators from '../actions/AppActionCreators';
import InsuranceStore from '../stores/InsuranceStore';
import InsuranceActionCreators from '../actions/InsuranceActionCreators';
import { Modal, Toast } from 'antd-mobile';
import * as mock from './asset/mock/index';
import zAJAX from 'z-ajax';



//从地址栏获取参数
const getUrlParam = function(name) {
    //构造一个含有目标参数的正则表达式对象  
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    const r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r !== null) return unescape(r[2]);
    return null;
};


//页面一打开即获取url中的参数，并判断下一步去哪里
export function getDataFromUrl() {
    let workNum = getUrlParam('workNum');
    let type = getUrlParam('type');
    AppActionCreators.initAppEditData(workNum);
    if (type == "pc") {
        AppActionCreators.changeTitle();
    }
};

//输入姓名获取用户信息
export function getUserInfoAPI(key, type) {
    let workNum = getUrlParam('workNum');
    let datas = {
        key: key,
        workNum: workNum
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
            if (type === "bbr") {
                InsuranceActionCreators.initBbrInfo(msg.customer, msg.abJobCategory);
            } else {
                InsuranceActionCreators.initUserInfo(msg.customer, msg.abJobCategory);
            }
        }
    }
    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/mobile/lifeInsurance/anbang/get_customer`, datas, cb)
    }
}

// 获取电子保单
export function getFileUrl() {
    Toast.loading('获取电子保单', 0)
    let payResult = InsuranceStore.getPayResult();
    let workNum = getUrlParam('workNum');
    let data = {
        "TradeData": {
            "BaseInfo": {
                "TradeCode": "LCSEPolicyDownload",
                "RequestDate": "2017-10-19 09:05:25",
                "ResponseDate": " "
            },
            "ContInfo": {
                "LCSEPolicyDL": {
                    "ContNo": payResult.contNo,
                    "IDNumber": payResult.idNumber,
                    "IDType": "0",
                    "FormStyle": "0"
                }
            }
        }
    }
    let datas = {
        workNum: workNum,
        data: JSON.stringify(data)
    }
    let cb = msg => {
        Toast.hide('', 0)
        if (msg.result.toString() === '1') {
            InsuranceActionCreators.savePolicyUrl(msg.policyUrl);
            // window.open('','_blank').location.href = msg.policyUrl;
        } else {
            Toast.info(msg.message, 2)
        }
    }
    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/mobile/lifeInsurance/anbang/police_download`, datas, cb)
    }
}

//下单
export function orderOperation() {
    AppActionCreators.startAlertProgress();
    let stakeholder = InsuranceStore.getStakeholder();
    let jsdata = {
        "id": stakeholder.orderId || "", // 订单主键
        "requestInfo": {
            "rationType": "001", // 产品代码,由天安提供
            "riskCode": "1107", // 险种代码,由天安提供
            "startDate": stakeholder.beginDate, // 保险起期
            "endDate": '', // 保险止期
            "holderNum": 1, // 被保人数
            "payStandard": "3", // 人身伤残行业标准
            "unitCount": 1, // 投保份数
            "appDataDto": { // 投保人信息
                "applicantName": stakeholder.tbrName, // 投保人名称
                "sex": stakeholder.tbrSex, // 性别 01男 02女
                "identifyType": "01",       // 证件类型
                "identifyNumber": stakeholder.tbrNo, // 证件号码
                "birthday": stakeholder.tbrBirthday, // 出生日期
                "applicantType": "1", // 投保人类型,1-个人，2-团体
                "mobile": stakeholder.tbrPhone, // 移动电话
                "address": stakeholder.tbrAdd // 地址/住址
            },
            "insuredDataDtoList": [// 被保人信息
                {
                    "insuredName": stakeholder.bbrName, // 被保人名称
                    "identifyType": "01", // 证件类型
                    "identifyNumber": stakeholder.bbrNo, // 证件号码
                    "birthday": stakeholder.bbrBirthday, // 出生日期
                    "sex": stakeholder.bbrSex, // 性别
                    "mobile": stakeholder.bbrPhone, // 移动电话
                    "address": stakeholder.bbrAdd, // 地址/住址
                    "insuredType": "1" // 被保险人类型,1-个人，2-团体
                }
            ],
            "dynamicDto": { // 动态标的信息
                "fieldAF": "3" // 残疾赔付标准
            }
        }
    }
    let data = JSON.stringify(jsdata);
    let workNum = getUrlParam('workNum');
    let datas = {
        workNum: workNum,
        data: data,
        insuranceId : stakeholder.cardNo,
        password : stakeholder.passWord,
        insurePrice : stakeholder.insurePrice,
        email : stakeholder.email
    }
    let cb = msg => {
        if (msg.result.toString() === "1") {
            AppActionCreators.finishAlertProgress();
             InsuranceActionCreators.savePayResult(msg);
            window.location = "#result";
        } else {
            AppActionCreators.messageAlertProgress(msg.message);
        }
    }

    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/apptianan/personal/insert_order`, datas, cb)
    }
};

//支付申请
export function applyPay() {
    var BankCode, BankAccNo, AccName
    AppActionCreators.startAlertProgress();
    let stakeholder = InsuranceStore.getStakeholder();

    let data = {
        "id": stakeholder.orderId,
        "TradeData": {
            "baseInfo": {
                "TradeCode": "FinfeeModify",
                "RequestDate": "2017-10-18 09:25:35",
                "ResponseDate": " "
            },
            "ContInfo": {
                "PrtNo": stakeholder.prtNo,
                "ManageCom": "",
                "Operator": "00000017",
                "NewPayMode": "7",
                "NewBankCode": stakeholder.bankcards.no,
                "NewBankAccNo": stakeholder.cardNo,
                "NewAccName": stakeholder.cardName,
                "PayLocation": "7",
                "BankCode": stakeholder.bankcards.no,
                "BankAccNo": stakeholder.cardNo,
                "AccName": stakeholder.cardName,
                "PayMode": "7",
                "SumPrem": stakeholder.sumPrem
            }
        }
    };
    let workNum = getUrlParam('workNum');
    let datas = {
        workNum: workNum,
        data: JSON.stringify(data)
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
            AppActionCreators.finishAlertProgress();
           

            window.location = "#/result";
        } else {
            AppActionCreators.messageAlertProgress(msg.message);
        }
    }

    zAJAX(`${ctx}/mobile/lifeInsurance/anbang/pay_order`, datas, cb)
};


//获取大类列表
export function getJobList() {
    let datas = '';
    let cb = msg => {

        if (msg.result.toString() === "1") {
            InsuranceActionCreators.updateBigJogList(msg.list)
        }
    }


    zAJAX(`${ctx}/anbang_lifeInsurance/jobCatadate`, datas, cb)
}
//获取工作小类
export function getSmallJobList(middleId, cb) {

    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/anbang_lifeInsurance/jobCatadate`, {
            middleId: middleId,
        }, cb)
    }

};
//获取工作 列表
export function getJob(middleId, smallId, cb) {

    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/anbang_lifeInsurance/jobCatadate`, {
            middleId: middleId,
            smallId: smallId,
        }, cb)
    }

};
//输入银行列表
export function getBankList(unionBankId, provinceId, townId) {
    let datas = {
        unionBankId: unionBankId || '',
        provinceId: provinceId || '',
        townId: townId || ''
    }
    let cb = msg => {
        if (msg.result.toString() === "1") {
            if (!unionBankId) {
                InsuranceActionCreators.initBanklist(msg.list)
            } else {
                InsuranceActionCreators.initBankslist(msg.list);
            }
        }
    }

    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/openingBankInfo/lifeInsurance`, datas, cb)
    }
}
//获取银行城市列表
export function getBankProvince(unionBankId, cb) {

    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/openingBankInfo/lifeInsurance`, {
            unionBankId: unionBankId,
        }, cb)
    }

};
//获取银行城市列表
export function getBankCity(unionBankId, provinceId, cb) {

    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/openingBankInfo/lifeInsurance`, {
            unionBankId: unionBankId,
            provinceId: provinceId
        }, cb)
    }

};
//获取城市列表
export function getCitiesList(no, cb) {

    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/webService/region`, { id: no }, cb)
    }
};
//获取区县列表
export function getCountiesList(no, cb) {
    if (isMock) {
        cb(mock.Mcounty)
    } else {
        zAJAX(`${ctx}/webService/county`, { id: no }, cb)
    }
};

//校验数据有效性
export function checkData(str, text) {
    if (text === '') {
        //非空验证
        Toast.info(`${str} 不得为空！`, 2);
        return false
    } else {

        //格式验证
        let reg;
        switch (true) {

            case str.indexOf('姓名') >= 0:
                reg = /^[\u4e00-\u9fa5]{2,10}$/;
                break;
            case str.indexOf('证件号码') >= 0:
            case str.indexOf('身份证') >= 0:
                reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
                break;

            case str.indexOf('日期') >= 0:
                reg = /^[1-2]\d{3}-[0-1]\d-[0-3]\d$/;
                break;
            case str.indexOf('电话') >= 0:
            case str.indexOf('手机') >= 0:
                reg = /^(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                break;
            case str.indexOf('卡单卡号') >= 0:
                reg = /^[a-zA-Z0-9]{12}$/;
                break;
            case str.indexOf('卡单密码') >= 0:
                reg = /^[a-zA-Z0-9]{6}$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[1-9][0-9]{5}$/;
                break;
            case str.indexOf('住址') >= 0:
                reg = /^\S*([\u4E00-\u9FA5].*[0-9])|([0-9].*[\u4E00-\u9FA5])\S*$/;
                break;
            default:
                reg = /^\w+$/;
                break
        }
        if (!reg.test(text)) {
            if (str.indexOf('住址') >= 0) {
                Toast.info(`地址请精确到门牌号`, 2);
            } else {
                Toast.info(`${str} 格式不正确！`, 2);
            }
            return false;
        }
        return true;
    }
}