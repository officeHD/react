var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    // 设置tab页位置
    setTabPage: function(page) {
        var action = {
            type: 'setTabPage',
            page,
        };
        AppDispatcher.dispatch(action);
    },

    changeTitle: function() {
        var action = {
            type: 'changeTitle',

        };
        AppDispatcher.dispatch(action);
    },


    initAppEditData: function(workNum) {
        var action = {
            type: 'initAppEditData',
            workNum: workNum,

        };
        AppDispatcher.dispatch(action);
    },

    // 开始进度条
    startAlertProgress: function() {
        var action = {
            type: 'startAlertProgress',
        }
        AppDispatcher.dispatch(action);
    },
    // 完成进度条
    finishAlertProgress: function() {
        var action = {
            type: 'finishAlertProgress',
        }
        AppDispatcher.dispatch(action);
    },
    // 弹出进度条信息
    messageAlertProgress: function(msg) {
        var action = {
            type: 'messageAlertProgress',
            msg,
        }
        AppDispatcher.dispatch(action);
    },
    // 关闭进度条
    closeAlertProgress: function() {
        var action = {
            type: 'closeAlertProgress',
        }
        AppDispatcher.dispatch(action);
    },


 

    
    setTipsPage: function(page) {
        var action = {
            type: 'setTipsPage',
            page: page,

        };
        AppDispatcher.dispatch(action);
    },




};