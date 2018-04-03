import AppStore from '../stores/AppStore';
import CarStore from '../stores/CarStore';
 
import CarActionCreators from '../actions/CarActionCreators';
 
import AppActionCreators from '../actions/AppActionCreators';
import { Modal, Toast } from 'antd-mobile';
import * as mock from './asset/mock/index';
import zAJAX from 'z-ajax';


var isMock = false;
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
export function getUrlWorkNum() {
    let cid = getUrlParam('cid');
    let workNum = getUrlParam('workNum');
    localStorage.workNum = workNum;
     let type = getUrlParam('type');
    AppActionCreators.initAppEditData( workNum,type);
}
//获取车险url
export function getCarThreeUrl() {
    let cb = msg => {
        CarActionCreators.updateCarUrl(msg)
    }
    let datas = {
        workNum: AppStore.getWorkNum() || localStorage.workNum,
    };
    if (isMock) {
        cb(mock.MgetOwnerInfo)
    } else {

        zAJAX(`${ctx}/carInfMobile/three_login_bb`, datas, cb)
    }
};

//页面一打开即获取url中的参数，并判断下一步去哪里
export function getDataFromUrl() {
     
    let position = getUrlParam('position');
    if (position) {
        AppActionCreators.initPosition(position);
    }

    let workNum = getUrlParam('workNum');
    let type = getUrlParam('type');
    AppActionCreators.initAppEditData( workNum, type);
    
};

 