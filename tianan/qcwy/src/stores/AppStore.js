 import InsuranceActionCreators from '../actions/InsuranceActionCreators';

 var AppDispatcher = require('../dispatcher/AppDispatcher');
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');
 var CHANGE_EVENT = 'change';



 var workNum = ''; //岗位号
 var tabPage = '0'; //默认详情页0=左；1=右；2=中间
 var isAlertProgress = false; //是否显示进度条
 var isFinished = false; //是否完成请求
 var msg = '';
 var formShow = false; //是否显示报价form
 var tipsPage = 1; //投保须知
 var payfor = false; //显示支付方式
 var type = false; //显示支付方式

 // 获取报价参数
 var getPrice = {
     name: '', //姓名
     birthday: '', //出生日期
     man: true, //性别
     additional: true, //是否有附加险
     price: '200' //趸交保费
 }

 //修改报价参数
 function changeGetPrice(event, name) {
     // 获取目标控件的值
     let val = event.target.value.trim();
     getPrice[name] = val;
 }

 function initAppEditData(_workNum) {
     workNum = _workNum;
 
 }

 function setTipsPage(page) {
     tipsPage = page
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
 // 更新生日
 function changeBirthday(val) {
     getPrice.birthday = val;
 }
 // 更新保险时长

 function changeYearLength(val) {
     getPrice.yearLength = val;
 }
 // 更改姓名
 function changeName() {
     getPrice.name = true;
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
 // 更改附加险

 function setAdditional() {
     getPrice.additional = true;
 }
 // 切换form显示
 function toggleFormShow() {
     if (formShow) {
         formShow = false;
     } else {
         formShow = true;
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

 //弹出框消息
 function messageAlertProgress(theMsg) {
     msg = theMsg;
 }

 //关闭弹出
 function closeAlertProgress() {
     isAlertProgress = false;
     isFinished = false;
     msg = '';
 }

 function changeTitle() {
     type = true;

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

     getTipsPage: function() {
         return tipsPage;
     },
     getTabPage: function() {
         return tabPage;
     },
     getType: function() {
         return type;
     },

     // 获取支付显示状态
     getPayfor: function() {
         return payfor;
     },
     // 获取报价参数
     getPriceInfo: function() {
         return getPrice;
     },
     // 获取form状态
     getFormshow: function() {
         return formShow;
     },

     getWorkNum: function() {
         return workNum;
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





 });

 function handleAction(action) {
     switch (action.type) {
         case 'setTabPage':
             setTabPage(action.page);
             emitChange();
             break;
             // 开始进度条
         case 'startAlertProgress':
             startAlertProgress();
             emitChange();
             break;
             // 开始进度条
         case 'finishAlertProgress':
             finishAlertProgress();
             emitChange();
             break;
             // 开始进度条
         case 'messageAlertProgress':
             messageAlertProgress(action.msg);
             emitChange();
             break;
             // 开始进度条
         case 'initAppEditData':
             initAppEditData(action.workNum);
             emitChange();
             break;
         case 'changeTitle':
             changeTitle();
             emitChange();
             break;
         case 'closeAlertProgress':
             closeAlertProgress();
             emitChange();
             break;
             // 支付方式
         case 'turenToPay':
             turenToPay();
             emitChange();
             break;
             // 隐藏支付方式
         case 'hideToPay':
             hideToPay();
             emitChange();
             break;
             // 男
         case 'changeGender':
             changeGender();
             emitChange();
             break;
             // 女

         case 'changeGenders':
             changeGenders();
             emitChange();
             break;
             // 附加险
         case 'unAdditional':
             unAdditional();
             emitChange();
             break;
         case 'setAdditional':
             setAdditional();
             emitChange();
             break;
             // form显示
         case 'toggleFormShow':
             toggleFormShow();
             emitChange();
             break;
             // 更新出生日期
         case 'changeBirthday':
             changeBirthday(action.val);
             emitChange();
             break;
             // 更新保险时长
         case 'changeYearLength':
             changeYearLength(action.val);
             emitChange();
             break;
             // 更新姓名
         case 'changeName':
             changeName(action.text);
             emitChange();
             break;
         case 'changeGetPrice':
             changeGetPrice(action.event, action.name);
             emitChange();
             break;
         case 'setTipsPage':
             setTipsPage(action.page);
             emitChange();
             break;

         default: // ... do nothing
             break;
     }
 }

 AppStore.dispatchToken = AppDispatcher.register(handleAction);
 module.exports = AppStore;