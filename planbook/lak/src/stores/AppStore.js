 import InsuranceActionCreators from '../actions/InsuranceActionCreators';

 var AppDispatcher = require('../dispatcher/AppDispatcher');
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');
 var CHANGE_EVENT = 'change';

 var isAlertProgress = false; //是否显示进度条
 var isFinished = false; //是否完成请求
 var msg = '';

 var isRadioSelector = false;
 var options;
 var selectedOption;
 var liClickHandle;

 var workNum = ''; //岗位号
 var type = true; //浏览环境
 var product = ''; //产品编号
 var planData = { insuranceInfo: [""] }; //产品数据
 var staffMes = {
     name: '',
     phoneNum: '',
     sex: '',
     workNum:''
 }; //业务员数据



 function initPlanData(obj) {

     planData = obj;

 };

 function initStaff(obj) {

     staffMes = obj;
      

 };




 //显示RadioSelector
 function showRadioSelector(obj) {
     isRadioSelector = true;
     options = obj.options;
     selectedOption = obj.selectedOption;
     liClickHandle = obj.liClickHandle;
 }

 //隐藏RadioSelector
 function hideRadioSelector() {
     isRadioSelector = false;
 }

 //隐藏RadioSelector
 function initAppProduct(no) {
     product = no;
     console.log(no);
 }


 //订单详情数据初始化
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

 //
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
     getIsRadioSelector: function() {
         return isRadioSelector;
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
     // 获取产品编号
     getProduct: function() {
         return product
     },
     getPlanData: function() {
         return planData;
     },
     getStaff: function() {
         return staffMes;
     }
 });

 function handleAction(action) {
     switch (action.type) {
         case 'show_radioSelector':
             showRadioSelector(action.obj);
             emitChange();
             break;
         case 'hide_radioSelector':
             hideRadioSelector();
             emitChange();
             break;
         case 'initAppEditData':
             initAppEditData(action.workNum, action._type);
             emitChange();
             break;
             // 初始化产品编号
         case 'initAppProduct':
             initAppProduct(action.no);
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
         case 'initPlanData':
             initPlanData(action.obj);
             emitChange();
             break;
         case 'initStaff':
             initStaff(action.obj);
             emitChange();
             break;


         default: // ... do nothing
             break;
     }
 }

 AppStore.dispatchToken = AppDispatcher.register(handleAction);
 module.exports = AppStore;