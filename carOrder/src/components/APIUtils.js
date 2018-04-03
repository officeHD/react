import AppStore from '../stores/AppStore';
import CarStore from '../stores/CarStore';
import InsuranceStore from '../stores/InsuranceStore';
import CarActionCreators from '../actions/CarActionCreators';
import InsuranceActionCreators from '../actions/InsuranceActionCreators';
import AppActionCreators from '../actions/AppActionCreators';
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



export function getUrlWorkNum() {
    let cid = getUrlParam('cid');
    let workNum = getUrlParam('workNum')||'';
    localStorage.workNum = workNum;
    AppActionCreators.initAppEditData(cid, workNum);
}
//获取车险url
//获取车主姓名和证件号
export function getCarThreeUrl() {
    let cb = msg => {
        CarActionCreators.updateCarUrl(msg)
    }
    let datas = {
        workNum: AppStore.getWorkNum() || localStorage.workNum||'',
    };
    if (isMock) {
        cb(mock.MgetOwnerInfo)
    } else {

        zAJAX(`${ctx}/carInfMobile/three_login`, datas, cb)
    }
};



//页面一打开即获取url中的参数，并判断下一步去哪里



export function getDataFromUrl(page, status, gysName) {
    let workNum = getUrlParam('workNum')||'';
    let idNumber = getUrlParam('idNumber')||'';
    
    let type = getUrlParam('type')||'';

    AppActionCreators.initAppEditData(workNum);
    if (type == "pc") {
        AppActionCreators.changeTitle();
    }
    let lsdata = {
        workNum: workNum,
        page: page,
        status: status,
        gysName: gysName,
        idNumber: idNumber

    }
    let datas = {
        data: JSON.stringify(lsdata)
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
            AppActionCreators.saveUserInfo(msg)

        }
    }
    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/carInfMobile/ordeList`, datas, cb)
    }

};

export function getOrderDetail(id,type) {
    let datas = {
        serialNum: id,
    }
    let cb = msg => {
        // let meg = JSON.parse(msg);
        console.log(msg)
        // AppActionCreators.saveUserDetail(msg);
        InsuranceActionCreators.saveResult(msg);
       
       if(type==="detail"){

         window.location = "#/orderdetail"
       }else{
        window.location="#pay"
       }
    }
    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/carInfMobile/orderDetail `, datas, cb)
    }
};

export function getCompanyList() {
    let datas = {
        workNum : getUrlParam('workNum')||'',
        idNumber : getUrlParam('idNumber')||''
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
            AppActionCreators.saveCompanyList(msg.productMaps);
        }
    }
    if (isMock) {
        cb(mock.Mregion)
    } else {
        zAJAX(`${ctx}/carInfMobile/getProductList `, datas, cb)
    }

};


//支付申请
export function applyPay() {
    AppActionCreators.startAlertProgress();
    let stakeholder = InsuranceStore.getStakeholder();
    console.log(stakeholder);
    let data = {
        "id": stakeholder.orderNum,
        "TradeData": {
            "baseInfo": {
                "TradeCode": "FinfeeModify",
                "RequestDate": "2017-10-18 09:25:35",
                "ResponseDate": " "
            },
            "ContInfo": {
                "PrtNo": stakeholder.orderNum,
                "ManageCom": "",
                "Operator": "00000017",
                "NewPayMode": "7",
                "NewBankCode": stakeholder.bankcards.no,
                "NewBankAccNo": stakeholder.cardNo,
                "NewAccName": stakeholder.cardName,
                "PayLocation": "7",
                "BankCode":stakeholder.bankcards.no,
                "BankAccNo": stakeholder.cardNo,
                "AccName": stakeholder.cardName,
                "PayMode": "7",
                "SumPrem":""
            }
        }
    };
    let datas = {
        workNum: getUrlParam('workNum'),
        data: JSON.stringify(data)
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
            AppActionCreators.finishAlertProgress();
            InsuranceActionCreators.savePayResult(msg.entity)
            window.location = "#/result";
        } else {
            AppActionCreators.messageAlertProgress(msg.message);
        }
    }
    zAJAX(`${ctx}/mobile/lifeInsurance/anbang/pay_order`, datas, cb)
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

// 获取电子保单
export function getFileUrl() {
    Toast.loading('保单生成中',0)
    let payResult = InsuranceStore.getPayResult();
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
                    "IDType": "00",
                    "FormStyle": "0"
                }
            }
        }
    }
    let datas = {
        workNum: getUrlParam('workNum'),
        data: JSON.stringify(data)
    }
    let cb = msg => {
        Toast.hide('',0)
        if (msg.result.toString() === '1') {
            InsuranceActionCreators.savePolicyUrl(msg.policyUrl);
       
        }else{
            Toast.info(msg.message,2)
        }
    }
    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/mobile/lifeInsurance/anbang/police_download`, datas, cb)
    }
}

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
                reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                break;
            case str.indexOf('卡单卡号') >= 0:
                reg = /^[a-zA-Z0-9]{12}$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[1-9][0-9]{5}$/;
                break;
            case str.indexOf('卡单密码') >= 0:
                reg = /^[a-zA-Z0-9]{6}$/;
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