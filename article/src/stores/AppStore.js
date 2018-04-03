 var AppDispatcher = require('../dispatcher/AppDispatcher');
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');
 var CHANGE_EVENT = 'change';


 var isAlertProgress = false; //是否显示进度条

 var isFinished = false; //是否完成请求
 var workNum = ''; //岗位号
 var msg = ''; //弹出框消息
 var type = true; //临时的转存数据

 //初始化岗位号
 function initAppEditData(_workNum, _type) {
     workNum = _workNum || '';
     if (_type === "pc") {
         type = false;
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
 //弹出AlertProgress消息
 function messageAlertProgress(theMsg) {
     msg = theMsg;
 }
 //关闭AlertProgress
 function closeAlertProgress() {
     isAlertProgress = false;
     isFinished = false;
     msg = '';
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
         case 'initAppEditData':
             initAppEditData(action.workNum, action._type);
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
         default: // ... do nothing
             break;
     }
 }

 AppStore.dispatchToken = AppDispatcher.register(handleAction);
 module.exports = AppStore;