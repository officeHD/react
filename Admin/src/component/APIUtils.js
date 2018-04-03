import * as mock from './asset/data/mock.js';
import zAJAX from 'z-ajax';
import InsuranceActionCreators from '../actions/InsuranceActionCreators';
import {message } from 'antd';


var isMock = true;
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

// 获取后援人员
export function getStaffName(no) {
    let cb = msg =>{
        if (msg.result === 1) {
          InsuranceActionCreators.updateStaff(msg.list);
          localStorage.staffSupport=JSON.stringify(msg.list);
        }else{
          message.success(msg.message,2);
        }
      };

    if (isMock) {
        cb(mock.getStaff)
    } else {
        zAJAX(`${ctx}/webService/county`, no,cb)
    }
};
//删除后援人员
export function deleteStaff(no,cb) {
    if (isMock) {
        cb(mock.Msuccess)
    } else {
        zAJAX(`${ctx}/webService/county`, { id: no }, cb)
    }
};
