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


//装填保险公司ID
const getCom = function() {
    return 700 + (InsuranceStore.getInsuranceCom() - 0)
}


//输入姓名获取用户信息
export function getUserInfoAPI(key, type) {
    let datas = {
        key: key,
        workNum: getUrlParam('workNum')
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
     Toast.loading('获取电子保单',0)
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
                    "IDType": "0",
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
            
               // window.open('','_blank').location.href = msg.policyUrl
               
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
    let jsdata = {
        id: stakeholder.orderId || "",
        "TradeData": {
            "BaseInfo": {
                "TradeCode": "ContConfirm",
                "RequestDate": "",
                "ResponseDate": ""
            },
            "ContInfo": {
                "LCCont": {
                    "OldAppointMentNo": "",
                    "AppointMentNo": "",
                    "CompanyFlag": "LIS",
                    "PolApplyDate": "",
                    "ManageCom": "",
                    "Operator": "00000017",
                    "GetPolMode": "2",
                    "SellType": "11",
                    "SaleChnl": "7",
                    "BusinessChnl": "02",
                    "ContSource": "4",
                    "BizSource": "04",
                    "PayIntv": "0",
                    "AutoPayFlag": ""

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
                        "IDType": stakeholder.idtype[0],
                        "IDNo": stakeholder.bbrNo,
                        "IDTypeStartDate": stakeholder.bbrNoStart,
                        "IDTypeEndDate": stakeholder.bbrNoEnd,
                        "Marriage": "",
                        "NativePlace": "CHN",
                        "OccupationType": "1",
                        "OccupationCode": stakeholder.bjob[0] ,
                        "SequenceNo": "1",
                        "RelationToMainInsured": "00",
                        "RelationToAppnt": "03",
                        "LCAddress": {
                            "Province": stakeholder.tbrProvince.no,
                            "City": stakeholder.tbrCity.no,
                            "County": stakeholder.tbrCountry.no,
                            "PostalAddress": stakeholder.tbrAdd,
                            "ZipCode": stakeholder.zipCode,
                            "Mobile": stakeholder.tbrPhone,
                            "Email": stakeholder.tbrEmail
                        },
                        "LCInsureImparts": [{
                            "LCInsureImpartCount": "16",
                            "LCInsureImpart": [ 
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "002",
                                    "ImpartContent": "您是否每天吸烟超过20支，且累计吸烟超过10年？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "003",
                                    "ImpartContent": "您是否每天饮白酒超过半斤？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "004",
                                    "ImpartContent": "您是否参与任何危险的运动或赛事（职业潜水、跳伞、滑翔、高峰攀岩、探险、武术比赛、摔跤比赛、特技表演、赛马、赛车、驾驶或乘坐非民航客机的私人飞行活动）?"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "005",
                                    "ImpartContent": "您是否准备前往或曾经居住在具有战乱风险的国家或地区？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "006",
                                    "ImpartContent": "您是否有被保险公司拒绝承保，或加费承保，或延期承保，或附加特别约定承保的经历？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "007",
                                    "ImpartContent": "您是否以被保险人的身份在其他保险公司投保人身保险，且保额超过50万？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "008",
                                    "ImpartContent": "您的父母、兄弟、姐妹是否患有恶性肿瘤、癌症、白血病、、肉瘤、恶性淋巴瘤、冠心病、心肌病、糖尿病、中风（脑出血、脑梗塞）、任何遗传性疾病?"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "009",
                                    "ImpartContent": "您是否有高血压、冠心病、心肌病、中风 (脑出血、脑梗塞)、动脉瘤、糖尿病、胰腺炎、慢性支气管炎、哮喘？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "010",
                                    "ImpartContent": "您是否有甲状腺结节、甲状腺功能亢进或减退、肝炎、肝硬化、肾炎、肾病综合征、肾功能不全、帕金森病、系统性红斑狼疮、艾滋病？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "011",
                                    "ImpartContent": "您是否有任何肿瘤或癌症、原位癌、结肠息肉、白血病、任何身体或智力残疾、精神障碍？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "012",
                                    "ImpartContent": "在过去的5年内，您是否因上述告知情况以外的疾病住院治疗，或被医生建议住院治疗，或因疾病连续服药超过1个月？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "013",
                                    "ImpartContent": "您是否有或曾经患有与乳房或子宫、宫颈、卵巢、输卵管等女性生殖器官有关的疾病？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "014",
                                    "ImpartContent": "您是否已怀孕，且怀孕超过28周？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "015",
                                    "ImpartContent": "被保险人出生时是否有产伤、窒息、缺氧，或其他异常情况？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "016",
                                    "ImpartContent": "被保险人出生时体重是否低于2公斤（4斤）？"
                                },
                                {
                                    "ImpartParammodle": stakeholder.heathflag,
                                    "ImpartVer": "36",
                                    "ImpartCode": "017",
                                    "ImpartContent": "被保险人在我司及其他保险公司投保的人身险保险金额总额是否超过监管规定（不满10周岁20万、10周岁以上50万）？"
                                }
                            ]
                        }]
                    }]
                }],
                "Risks": [{
                    "RiskCount": "2",
                    "Risk": [{
                            "RiskSelNo": "1",
                            "RiskCode": "126007",
                            "MainRiskCode": "126007",
                            "Amnt": stakeholder.innumber[0] * 1000,
                            "Prem": stakeholder.price01 * stakeholder.innumber[0],
                            "Mult": stakeholder.innumber[0],
                            "PayIntv": "0",
                            "InsuYearFlag": "A",
                            "InsuYear": "25",
                            "Payendyearflag": "Y",
                            "Payendyear": "1000",
                            "NeedDuty": "0",
                            "BonusGetMode": "",
                            "Dutys": [{
                                "DutyCount": "1",
                                "Duty": [{
                                    "DutyCode": "600700",
                                    "Prem": stakeholder.price01 * stakeholder.innumber[0],
                                    "Amnt": stakeholder.innumber[0] * 1000,
                                    "PayIntv": "0"
                                }]
                            }]
                        },
                        {
                            "RiskSelNo": "2",
                            "RiskCode": "126008",
                            "MainRiskCode": "126007",
                            "Amnt": stakeholder.innumber[0] * 1000,
                            "Prem": stakeholder.price02 * stakeholder.innumber[0],
                            "Mult": "1",
                            "PayIntv": "0",
                            "InsuYearFlag": "A",
                            "InsuYear": "25",
                            "Payendyearflag": "Y",
                            "Payendyear": "1000",
                            "NeedDuty": "0",
                            "BonusGetMode": "",
                            "Dutys": [{
                                "DutyCount": "1",
                                "Duty": [{
                                    "DutyCode": "600801",
                                    "Prem": stakeholder.price02 * stakeholder.innumber[0],
                                    "Amnt": stakeholder.innumber[0] * 1000,
                                    "PayIntv": "0"
                                }]
                            }]
                        }
                    ]
                }],
                "LCBnfs": [{
                    "LCBnfCount": "0"
                }]
            }
        }

    }
    let data = JSON.stringify(jsdata);
    let datas = {
        workNum: getUrlParam('workNum'),
        data: data,
        type: type || ""

    }

    let cb = msg => {
        if (msg.result.toString() === "1") {
            AppActionCreators.finishAlertProgress();
            InsuranceActionCreators.saveOrderMes(msg);
            if (type === 1) {
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
    let datas = {
        workNum: getUrlParam('workNum'),
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