var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    setTabPage: function(page) {
        var action = {
            type: 'setTabPage',
            page,
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
    //去支付
    turenToPay:function(){
        var action = {
            type: 'turenToPay',
        }
        AppDispatcher.dispatch(action);
    },
    // 隐藏支付
    hideToPay:function(){
        var action = {
            type: 'hideToPay',
        }
        AppDispatcher.dispatch(action);
    },
    changeBirthday:function(val){
        var action = {
            type: 'changeBirthday',
            val
        }
        AppDispatcher.dispatch(action);
    },
     changeYearLength:function(val){
        var action = {
            type: 'changeYearLength',
            val
        }
        AppDispatcher.dispatch(action);
    },
    changeGender:function(){
        var action = {
            type: 'changeGender',
        }
        AppDispatcher.dispatch(action);
    },
    changeGenders:function(){
        var action = {
            type: 'changeGenders',
        }
        AppDispatcher.dispatch(action);
    },
    unAdditional:function(){
        var action = {
            type: 'unAdditional',
        }
        AppDispatcher.dispatch(action);
    },
    setAdditional:function(){
        var action = {
            type: 'setAdditional',
        }
        AppDispatcher.dispatch(action);
    },
    toggleFormShow:function(){
        var action = {
            type: 'toggleFormShow',
        }
        AppDispatcher.dispatch(action);
    }



  
};