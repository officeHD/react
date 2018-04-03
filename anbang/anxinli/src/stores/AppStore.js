 import InsuranceActionCreators from '../actions/InsuranceActionCreators';

 var AppDispatcher = require('../dispatcher/AppDispatcher');
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');
 var CHANGE_EVENT = 'change';


 var workNum = ''; //岗位号
 var tabPage = '0'; //默认详情页0=左；1=右；2=中间
 var tipsPage = 0; //默认详情页0=左；1=右；2=中间
 var isAlertProgress = false; //是否显示进度条
 var isFinished = false; //是否完成请求
 var msg = '';


 var type = false; //显示支付方式



 // 获取报价参数
 var getPrice = {
     name: '', //姓名
     birthday: '', //出生日期
     innumber: 1, //保险份数
     man: true, //性别
     additional: true, //是否有附加险
     yearLength: '', //是否有附加险
 }

 function initAppEditData(_workNum) {
     workNum = _workNum;
 }
 // 设置默认详情页
 function setTabPage(page) {
     tabPage = page
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

 function setTipsPage(page) {
     tipsPage = page
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
     getTipsPage: function() {
         return tipsPage;
     },


     getType: function() {
         return type;
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
         case 'setTipsPage':
             setTipsPage(action.page);
             emitChange();
             break;
             // 开始进度条
         case 'messageAlertProgress':
             messageAlertProgress(action.msg);
             emitChange();
             break;
             // 开始进度条
         case 'closeAlertProgress':
             closeAlertProgress();
             emitChange();
             break;

         case 'initAppEditData':
             initAppEditData(action.workNum);
             emitChange();
             break;
         case 'changeTitle':
             changeTitle();
             emitChange();
             break;


         default: // ... do nothing
             break;
     }
 }

 AppStore.dispatchToken = AppDispatcher.register(handleAction);
 module.exports = AppStore;