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
        // 设置tab页位置
    initAppEditData: function(workNum ) {
        var action = {
            type: 'initAppEditData',
            workNum:workNum,
             
        };
        AppDispatcher.dispatch(action);
    },
    
     changeTitle: function() {
        var action = {
            type: 'changeTitle',
         
             
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
    //去支付
    turenToPay: function() {
        var action = {
            type: 'turenToPay',
        }
        AppDispatcher.dispatch(action);
    },
    // 隐藏支付
    hideToPay: function() {
        var action = {
            type: 'hideToPay',
        }
        AppDispatcher.dispatch(action);
    },
    // 更改姓名
    changeName: function(text) {
        var action = {
            type: 'changeName',
            text
        }
        AppDispatcher.dispatch(action);
    },
    // 更改日期
    changeBirthday: function(val) {
        var action = {
            type: 'changeBirthday',
            val
        }
        AppDispatcher.dispatch(action);
    },
    //更改保险时长
    changeYearLength: function(val) {
        var action = {
            type: 'changeYearLength',
            val
        }
        AppDispatcher.dispatch(action);
    },
    // 改变性别男
    changeGender: function() {
        var action = {
            type: 'changeGender',
        }
        AppDispatcher.dispatch(action);
    },
    // 改变性别女
    changeGenders: function() {
        var action = {
            type: 'changeGenders',
        }
        AppDispatcher.dispatch(action);
    },
    // 设置附加险
    unAdditional: function() {
        var action = {
            type: 'unAdditional',
        }
        AppDispatcher.dispatch(action);
    },
    // 取消附加险
    setAdditional: function() {
        var action = {
            type: 'setAdditional',
        }
        AppDispatcher.dispatch(action);
    },
    // 切换form显示
    toggleFormShow: function() {
        var action = {
            type: 'toggleFormShow',
        }
        AppDispatcher.dispatch(action);
    },

    //处理报价参数
    changeGetPrice: function(event, name) {
        var action = {
            type: 'changeGetPrice',
            event: event,
            name: name
        };
        AppDispatcher.dispatch(action);
    },
    // 切换form显示
    setTipsPage: function(page) {
        var action = {
            type: 'setTipsPage',
            page: page,
        }
        AppDispatcher.dispatch(action);
    },
     




};