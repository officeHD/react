import AppStore from '../stores/AppStore';
import InsuranceStore from '../stores/InsuranceStore';
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

//将保额转换成适当汉字
export function transformChoice(choice) {
    let label = '';
    switch (true) {
        case choice - 0 === 0:
            label = "投保";
            break;
        case choice - 0 === -1:
            label = "不投保";
            break;
        case choice - 0 >= 10000:
            label = (choice / 10000) + '万'
            break;
        default:
            label = choice;
            break;
    }
    return label;
}

//页面一打开即获取url中的参数，并判断下一步去哪里
export function getDataFromUrl() {
    let workNum = getUrlParam('workNum');
    let type = getUrlParam('type');
    let productId = getUrlParam('productId');
    let pid = getUrlParam('pid');
    AppActionCreators.initAppEditData(workNum, type);
    AppActionCreators.initAppProduct("LXTX00O1");
    InsuranceActionCreators.initInsProduct("LXTX00O1");

    let inituser = msg => {
        if (msg.result.toString() === '1') {
              AppActionCreators.initStaff(msg.staff);
        }
    }

    // 获取用户信息
    if (workNum) {
        zAJAX(`${ctx}/lifeInsuranceApi/get_staff`, {workNum:workNum}, inituser)
    }



    let datas = {
        id: pid,
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
          AppActionCreators.initPlanData(msg.entity.plan_data);
        }
    }

    if (pid) {
        zAJAX(`${ctx}/mobile/lifeInsurance/taikang/get_plan`, datas, cb)
    }

    


};


//获取主险信息
export function getInsuranceInfo() {

    let stakeholder = InsuranceStore.getStakeholder();

    let datas = {
        sex: stakeholder.bbrSex,
        tbsex: stakeholder.tbrSex,
        age: stakeholder.bbrAge,
        tbage: stakeholder.tbrAge,
        payendyear: stakeholder.payendyear,
        varietyCode: stakeholder.varietyCode,
        amnt: stakeholder.amnt,
        insuYear: stakeholder.insuYear
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {

            InsuranceActionCreators.initInsuranceInfo(msg);

        }else{
            Toast.info(msg.message,2)
        }
    }

    zAJAX(`${ctx}/mobile/lifeInsurance/taikang/get_rate`, datas, cb)

}
// 
export function saveInsuranceInfo() {
    let workNum = getUrlParam('workNum');
    let type = getUrlParam('type') || '';
    

    let stakeholder = InsuranceStore.getStakeholder();
    console.log(stakeholder)
    let insureInfo = JSON.stringify(stakeholder.insuranceInfo.productList);
    let jsdata = {

        sex: stakeholder.bbrSex,
        age: stakeholder.bbrAget,
        amt: stakeholder.amnt,
        insuYear: stakeholder.insuYeartext,
        payendyear: stakeholder.payendyeartext,
        insuranceInfo: stakeholder.insuranceInfo.productList,
        prem: stakeholder.insuranceInfo.prem,
        reciveName:stakeholder.ReciveName,
        reciveSex:stakeholder.ReciveSex

    }

    let data = JSON.stringify(jsdata);
    console.log(data);
    let datas = {
        workNum: getUrlParam('workNum'),
        data: data
    }
    let cb = msg => {
        if (msg.result.toString() === '1') {
         
            window.location = "?type=" + type + "&workNum=" + workNum + "&productId=LXTX00O1&pid=" + msg.id + "#/share";
            // window.location = `${ctx}/sharepage?type=${type}&workNum=${workNum}&productId=LAX00O1&pid=${pid}`
        }
    }

    zAJAX(`${ctx}/mobile/lifeInsurance/taikang/insert_plan`, datas, cb)

}