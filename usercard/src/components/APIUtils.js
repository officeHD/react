import AppStore from '../stores/AppStore';
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

 
 
//页面一打开即获取url中的参数
export function getDataFromUrl() {
    let workNum = getUrlParam('workNum');
    let type = getUrlParam('type');
    AppActionCreators.initAppEditData(workNum, type);
    let inituser = msg => {
        if (msg.result.toString() === '1') {
              AppActionCreators.initStaff(msg.staff);
        }
    }
    // 获取用户信息
    if (workNum) {
         
        zAJAX(`${ctx}/lifeInsuranceApi/get_staff`, {workNum:workNum}, inituser)
    }
};
 
