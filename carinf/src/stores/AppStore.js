 
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var isAlertProgress = false;        //是否显示进度条
var isFinished = false;     //是否完成请求
var msg = '';

var edit = 'no';        //是否是编辑页面，yes是，no否
var fromPage = '';      //如果是编辑，则来自detail或list页面
var isSubFrame = false;      //是否显示iframe，用于展示爱豆的页面

var isRadioSelector = false;
var options; 
var selectedOption;
var liClickHandle;
var cid;        //第三方神秘参数
var workNum='';        //岗位号
var position;       //经纬度

 
var csPrice = '';       //临时的转存数据
var type = true;       //临时的转存数据

//返回到第一步
function stepGoFirst() {
    edit = 'no';
    fromPage = '';
}

//跳转到保单相关人步骤
function stepGoStakeholder(_fromPage) {
    edit = 'yes';
    fromPage = _fromPage;
}

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

//显示子页面
function showSubFrame() {
    isSubFrame = true;
}

//关闭子页面
function hideSubFrame() {
    isSubFrame = false;
}

//订单详情数据初始化
function initAppEditData( _workNum,_type) {

  
    workNum = _workNum || '';
    if(_type==="pc"){
        type =false;
    }
   
}

//初始化经纬度
function initPosition(_position) {
    position = _position;
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

 
function emitChange() {
    AppStore.emit(CHANGE_EVENT);
}

var AppStore = assign({}, EventEmitter.prototype, {
    
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
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

    getCid: function() {
        return cid;
    },
      getType: function() {
        return type;
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

    getMsg: function () {
        return msg;
    },

   

    getCsPrice: function() {
        return csPrice
    }



});

function handleAction(action) {
    switch (action.type) {
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
            initAppEditData(action.workNum,action._type);
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
        

        default: // ... do nothing
            break;
    }
}

AppStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = AppStore;

