 import InsuranceActionCreators from '../actions/InsuranceActionCreators';

 var AppDispatcher = require('../dispatcher/AppDispatcher');
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');
 var CHANGE_EVENT = 'change';


 var tabPage = '0'; //默认详情页0=左；1=右；2=中间
 var isAlertProgress = false; //是否显示进度条
 var isFinished = false; //是否完成请求
 var msg = '';
 var formShow = false; //是否显示报价
 var isRadioSelector = false;
 var options;
 var selectedOption;
 var liClickHandle;
 var cid; //第三方神秘参数
 var workNum = ''; //岗位号


 var tempOrderNo = ''; //获取推荐保险起期时，后台的临时订单号
 var csPrice = ''; //临时的转存数据
 var payfor = false; //显示支付方式

 // 获取报价参数
 var getPrice = {
     birthday: '', //出生日期
     yearLength: '', //保障期限
     man: true, //性别
     additional: true, //是否有附加险
 }

 //修改报价参数
 function changeGetPrice() {

 }
 function initAppEditData(_workNum) {
     workNum = _workNum;
     console.log(_workNum)
 }
 // 设置默认详情页
 function setTabPage(page) {
     tabPage = page
 }
 // 显示支付方式
 function turenToPay() {
     payfor = true;
 }
 // 隐藏支付方式
 function hideToPay() {
     payfor = false;
 }
 function changeBirthday(val){
    getPrice.birthday=val;
 }


 function changeYearLength(val){
    getPrice.yearLength=val;
 }
 // 更改性别
 function changeGender() {
     getPrice.man = true;
 }
 // 更改性别
 function changeGenders() {
     getPrice.man = false;
 }
 // 更改附加险

 function unAdditional() {
     getPrice.additional = false;
 }

 function setAdditional() {
     getPrice.additional = true;
 }

 function toggleFormShow() {
     if( formShow){
        formShow=false;
     }else{
        formShow=true;
     }
 }
 //开始AlertProgress
 function startAlertProgress() {
     isAlertProgress = true;
 }

 //完成AlertProgress
 function finishAlertProgress() {
     isFinished = true
 }

 //
 function messageAlertProgress(theMsg) {
     msg = theMsg;
 }

 //
 function closeAlertProgress() {
     isAlertProgress = false;
     isFinished = false;
     msg = '';

 }

 //
 function saveTempOrderNo(no, price) {
     tempOrderNo = no;
     csPrice = price;
 }

 function emitChange() {
     AppStore.emit(CHANGE_EVENT);
 }

 var AppStore = assign({}, EventEmitter.prototype, {

     addChangeListener: function(callback) {
         this.on(CHANGE_EVENT, callback);
     },

     removeChangeListener: function(callback) {
         this.removeListener(CHANGE_EVENT, callback);
     },
     getTabPage: function() {
         return tabPage;
     },
     getIsRadioSelector: function() {
         return isRadioSelector;
     },
     // 获取支付显示状态
     getPayfor: function() {
         return payfor;
     },
     // 获取报价参数
     getPriceInfo: function() {
         return getPrice;
     },
     getFormshow: function() {
         return formShow;
     },
     getIsSubFrame: function() {
         return isSubFrame;
     },

     getOptions: function() {
         return options;
     },

     getSelectedOption: function() {
         return selectedOption;
     },

     getLiClickHandle: function() {
         return liClickHandle;
     },

     getCid: function() {
         return cid;
     },

     getWorkNum: function() {
         return workNum;
     },

     getPosition: function() {
         return position;
     },

     getEdit: function() {
         return edit;
     },

     getFromPage: function() {
         return fromPage;
     },

     getIsAlertProgress: function() {
         return isAlertProgress;
     },

     getIsFinished: function() {
         return isFinished;
     },

     getMsg: function() {
         return msg;
     },

     getTempOrderNo: function() {
         return tempOrderNo
     },

     getCsPrice: function() {
         return csPrice
     }



 });

 function handleAction(action) {
     switch (action.type) {
         case 'setTabPage':
             setTabPage(action.page);
             emitChange();
             break;
         case 'stepGoStakeholder':
             stepGoStakeholder(action.fromPage);
             emitChange();
             break;
         case 'step_go_first':
             stepGoFirst();
             emitChange();
             break;
         case 'show_radioSelector':
             showRadioSelector(action.obj);
             emitChange();
             break;
         case 'hide_radioSelector':
             hideRadioSelector();
             emitChange();
             break;
         case 'initAppEditData':
             initAppEditData(action.workNum);
             emitChange();
             break;
         case 'show_subFrame':
             showSubFrame();
             emitChange();
             break;
         case 'hide_subFrame':
             hideSubFrame();
             emitChange();
             break;
         case 'initPosition':
             initPosition(action.position);
             emitChange();
             break;
         case 'startAlertProgress':
             startAlertProgress();
             emitChange();
             break;
         case 'finishAlertProgress':
             finishAlertProgress();
             emitChange();
             break;
         case 'messageAlertProgress':
             messageAlertProgress(action.msg);
             emitChange();
             break;
         case 'closeAlertProgress':
             closeAlertProgress();
             emitChange();
             break;
         case 'saveTempOrderNo':
             saveTempOrderNo(action.no, action.price);
             emitChange();
             break;
         case 'turenToPay':
             turenToPay();
             emitChange();
             break;
         case 'hideToPay':
             hideToPay();
             emitChange();
             break;
         case 'changeGender':
             changeGender();
             emitChange();
             break;
         case 'changeGenders':
             changeGenders();
             emitChange();
             break;
         case 'unAdditional':
             unAdditional();
             emitChange();
             break;
         case 'setAdditional':
             setAdditional();
             emitChange();
             break;
         case 'toggleFormShow':
             toggleFormShow();
             emitChange();
             break;
             case 'changeBirthday':
             changeBirthday(action.val);
             emitChange();
             break;
 case 'changeYearLength':
             changeYearLength(action.val);
             emitChange();
             break;
             
         default: // ... do nothing
             break;
     }
 }

 AppStore.dispatchToken = AppDispatcher.register(handleAction);
 module.exports = AppStore;