var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    showRadioSelector: function(obj) {
        var action = {
            type: 'show_radioSelector',
            obj: obj
        };
        AppDispatcher.dispatch(action);
    },
  setShareUrl: function(val) {
        var action = {
            type: 'setShareUrl',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    hideRadioSelector: function() {
        var action = {
            type: 'hide_radioSelector'
        };
        AppDispatcher.dispatch(action);
    },
    initAppEditData: function(workNum, _type) {
        var action = {
            type: 'initAppEditData',

            workNum,
            _type,
        };
        AppDispatcher.dispatch(action);
    },
    startAlertProgress: function() {
        var action = {
            type: 'startAlertProgress',
        }
        AppDispatcher.dispatch(action);
    },
    finishAlertProgress: function() {
        var action = {
            type: 'finishAlertProgress',
        }
        AppDispatcher.dispatch(action);
    },
    messageAlertProgress: function(msg) {
        var action = {
            type: 'messageAlertProgress',
            msg,
        }
        AppDispatcher.dispatch(action);
    },
    closeAlertProgress: function() {
        var action = {
            type: 'closeAlertProgress',
        }
        AppDispatcher.dispatch(action);
    },
    // 初始化产品种类
    initAppProduct: function(no) {
        var action = {
            type: 'initAppProduct',
            no
        }
        AppDispatcher.dispatch(action);
    },
     initPlanData: function(obj) {
        var action = {
            type: 'initPlanData',
            obj: obj
        };
        AppDispatcher.dispatch(action);
    },
      initStaff: function(obj) {
        var action = {
            type: 'initStaff',
            obj
        }
        AppDispatcher.dispatch(action);
    },
};