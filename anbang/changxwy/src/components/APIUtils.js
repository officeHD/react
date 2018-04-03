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


//获取保单价格
export function changeInsurePrice() {
    let stakeholder = InsuranceStore.getStakeholder();

    let datas = {
        payendyear: stakeholder.payendyear || 0,
        brithDay: stakeholder.bbrBirthday || "",
        sex: stakeholder.bbrSex,
        insuYear: stakeholder.yearLong || 10,
        idNum: stakeholder.bbrNo,
        type: 2,
        amnt: stakeholder.amnts[0] || 100000
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
            InsuranceActionCreators.setInsurancePrice(msg);
        }else{
            Toast.info(msg.message,2)
        }
    }
    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/mobile/lifeInsurance/anbang/get_rate`, datas, cb)
    }
}


// 获取电子保单
export function getFileUrl() {
     Toast.loading('获取电子保单',0)
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
         Toast.hide('',0)
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
export function orderOperation(type) {
    AppActionCreators.startAlertProgress();
    let stakeholder = InsuranceStore.getStakeholder();
    if (stakeholder.sameAs) {
        stakeholder.bbrName = stakeholder.tbrName;
        stakeholder.bbrPhone = stakeholder.tbrPhone;
        stakeholder.bbrEmail = stakeholder.tbrEmail;
        stakeholder.bbrNo = stakeholder.tbrNo;
        stakeholder.bbrSex = stakeholder.tbrSex;
        stakeholder.bbrBirthday = stakeholder.tbrBirthday;
        stakeholder.bbrNoStart = stakeholder.tbrNoStart;
        stakeholder.bbrNoEnd = stakeholder.tbrNoEnd;
        stakeholder.bbrProvince.name = stakeholder.tbrProvince.name;
        stakeholder.bbrProvince.no = stakeholder.tbrProvince.no;
        stakeholder.bbrCity.name = stakeholder.tbrCity.name;
        stakeholder.bbrCity.no = stakeholder.tbrCity.no;
        stakeholder.bbrCountry.name = stakeholder.tbrCountry.name;
        stakeholder.bbrCountry.no = stakeholder.tbrCountry.no;
        stakeholder.bbrAdd = stakeholder.tbrAdd;
        stakeholder.bzipCode = stakeholder.zipCode;
        stakeholder.bbigjob = stakeholder.bigjob;
        stakeholder.bsmalljob = stakeholder.smalljob;
        stakeholder.bjob = stakeholder.job;
    }
    let PayIntv="12";
    if(stakeholder.payendyears===1000){
        PayIntv="0"
    } 

    let jsdata = {
        id: stakeholder.orderId || "",
        "TradeData": {
            "BaseInfo": {
                "TradeCode": "ContConfirm",
                "RequestDate": "2017-10-10",
                "ResponseDate": ""
            },
            "ContInfo": {
                "LCCont": {
                    "OldAppointMentNo": "",
                    "AppointMentNo": "",
                    "CompanyFlag": "LIS",
                    "ManageCom": "",
                    "PolApplyDate": "",
                    "Operator": "00000017",
                    "GetPolMode": "2",
                    "SellType": "11",
                    "SaleChnl": "7",
                    "BusinessChnl": "02",
                    "ContSource": "4",
                    "BizSource": "04",
                    "PayIntv": "0",
                    "AutoPayFlag":"1"
                },
                "Agents": [{
                    "AgentCount": "1",
                    "Agent": [{
                        "AgentCode": "122010210",
                        "AgentName": "朱建兵",
                        "AgentCom": "134008",
                        "AgentGroup": "",
                        "Busirate": ""
                    }]
                }],
                "LCAppnt": {
                    "AppntName": stakeholder.tbrName,
                    "AppntSex": stakeholder.tbrSex,
                    "AppntBirthday": stakeholder.tbrBirthday,
                    "AppntIDType": "0",
                    "AppntIDNo": stakeholder.tbrNo,
                    "IDTypeStartDate": stakeholder.tbrNoStart,
                    "IDTypeEndDate": stakeholder.tbrNoEnd,
                    "Marriage": "",
                    "NativePlace": "CHN",
                    "OccupationType": stakeholder.job.job_type,
                    "OccupationCode": stakeholder.job.job_code,
                    "LCAddress": {
                        "Province": stakeholder.tbrProvince.no,
                        "City": stakeholder.tbrCity.no,
                        "County": stakeholder.tbrCountry.no,
                        "PostalAddress": stakeholder.tbrAdd,
                        "ZipCode": stakeholder.zipCode,
                        "Mobile": stakeholder.tbrPhone,
                        "AppntReturnCall": "3",
                        "Email": stakeholder.tbrEmail
                    },
                    "LCAppntImparts": [{
                        "LCAppntImpartCount": "0"
                    }]
                },
                "LCInsureds": [{
                    "LCInsuredCount": "1",
                    "LCInsured": [{
                        "Name": stakeholder.bbrName,
                        "Sex": stakeholder.bbrSex,
                        "Birthday": stakeholder.bbrBirthday,
                        "IDType": "0",
                        "IDNo": stakeholder.bbrNo,
                        "IDTypeStartDate": stakeholder.bbrNoStart,
                        "IDTypeEndDate": stakeholder.bbrNoEnd,
                        "Marriage": "",
                        "NativePlace": "CHN",
                        "OccupationType": stakeholder.bjob.job_type,
                        "OccupationCode": stakeholder.bjob.job_code,
                        "SequenceNo": "1",
                        "RelationToMainInsured": "00",
                        "RelationToAppnt": stakeholder.relation[0],
                        "LCAddress": {
                            "Province": stakeholder.tbrProvince.no,
                            "City": stakeholder.tbrCity.no,
                            "County": stakeholder.tbrCountry.no,
                            "PostalAddress": stakeholder.tbrAdd,
                            "ZipCode": stakeholder.zipCode,
                            "Mobile": stakeholder.bbrPhone,
                            "Email": stakeholder.bbrEmail
                        },
                        "LCInsureImparts": [{
                            "LCInsureImpartCount": "6",
                            "LCInsureImpart": [{
                                    "ImpartVer": "38",
                                    "ImpartCode": "02",
                                    "ImpartContent": "您是否参与任何危险的运动或赛事（职业潜水、跳伞、滑翔、高峰攀岩、探险、武术比赛、摔跤比赛、特技表演、赛马、赛车、驾驶或乘坐非民航客机的私人飞行活动）？",
                                    "ImpartParammodle": stakeholder.heathflag
                                },
                                {
                                    "ImpartVer": "38",
                                    "ImpartCode": "03",
                                    "ImpartContent": "你是否准备前往或曾经居住在具有战乱风险的国家或地区？",
                                    "ImpartParammodle": stakeholder.heathflag
                                },
                                {
                                    "ImpartVer": "38",
                                    "ImpartCode": "04",
                                    "ImpartContent": "您是否有被保险公司拒绝承保，或加费承保，或延期承保，或附加特别约定承保的经历？",
                                    "ImpartParammodle": stakeholder.heathflag
                                },
                                {
                                    "ImpartVer": "38",
                                    "ImpartCode": "05",
                                    "ImpartContent": "您是否以被保险人的身份在其他保险公司投保人身保险，且保额超过50万？",
                                    "ImpartParammodle": stakeholder.heathflag
                                },
                                {
                                    "ImpartVer": "38",
                                    "ImpartCode": "06",
                                    "ImpartContent": "\"您是否患有或曾经患有:?恶性肿瘤、白血病?中风（脑出血、脑梗塞）、心功能不全、严重高血压 (血压高于180/110 mmHg)、心肌梗塞、心肌病?肝硬化、肾功能不全、再生障碍性贫血、系统性红斑狼疮?癫痫、肢体残疾或瘫痪、精神或智力障碍、阿尔兹海默氏病（老年痴呆）、帕金森氏病、重症肌无力、多发性硬化症、失明、瘫痪?先天性疾病、遗传性疾病、艾滋病、服用或吸食成瘾性药物\"",
                                    "ImpartParammodle": stakeholder.heathflag
                                },
                                {
                                    "ImpartVer": "38",
                                    "ImpartCode": "07",
                                    "ImpartContent": "被保险人在我司及其他保险公司投保的人身险保险金额总额是否超过监管规定（不满10周岁20万、10周岁以上50万）？",
                                    "ImpartParammodle": stakeholder.heathflag
                                }
                            ]
                        }]
                    }]
                }],
                "Risks": [{
                    "RiskCount": "1",
                    "Risk": [{
                        "RiskSelNo": "1",
                        "RiskCode": "L11177",
                        "MainRiskCode": "L11177",
                        "Amnt": stakeholder.amnt,
                        "Prem": stakeholder.insurancePrice,
                        "Mult": "1",
                        "PayIntv": PayIntv,
                        "InsuYearFlag": "Y",
                        "InsuYear": stakeholder.yearLong,
                        "Payendyearflag": "Y",
                        "Payendyear": stakeholder.payendyears,
                        "NeedDuty": "0",
                        "BonusGetMode": "",
                        "Dutys": [{
                            "DutyCount": "1",
                            "Duty": [{
                                "DutyCode": "117700",
                                "Prem": stakeholder.insurancePrice,
                                "Amnt": stakeholder.amnt,
                                "PayIntv": PayIntv
                            }]
                        }]
                    }]
                }],
                "LCBnfs": [{
                    "LCBnfCount": "0"
                }]
            }
        }

    }
    let data = JSON.stringify(jsdata);
    let workNum = getUrlParam('workNum');
    let datas = {
        workNum: workNum,
        data: data,
        type: type || ''
    }
    let cb = msg => {
        if (msg.result.toString() === "1") {
            AppActionCreators.finishAlertProgress();
            InsuranceActionCreators.saveOrderMes(msg);

            if (type) {
                window.location = "#pay";
            } else {
                window.location = "#order";
            }
        } else {
            AppActionCreators.messageAlertProgress(msg.message);
        }
    }

    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/mobile/lifeInsurance/anbang/insert_order`, datas, cb)
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
            InsuranceActionCreators.savePayResult(msg)
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