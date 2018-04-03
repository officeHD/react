var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    //处理input输入
    handleChange: function(event, name) {
        var action = {
            type: 'handleChange',
            event: event,
            name: name
        };
        AppDispatcher.dispatch(action);
    },
    changeTbrAge: function(val) {
        var action = {
            type: 'changeTbrAge',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeTbrSex: function(val) {
        var action = {
            type: 'changeTbrSex',
            val: val
        };
        AppDispatcher.dispatch(action);
    },


    changeSubyear: function(val) {
        var action = {
            type: 'changeSubyear',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
 changeSubAmnt: function(val) {
        var action = {
            type: 'changeSubAmnt',
            val: val
        };
        AppDispatcher.dispatch(action);
    },

    changeSubnum: function(val) {
        var action = {
            type: 'changeSubnum',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeBbrAge: function(val) {
        var action = {
            type: 'changeBbrAge',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeBbrSex: function(val) {
        var action = {
            type: 'changeBbrSex',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeReSex: function(val) {
        var action = {
            type: 'changeReSex',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeReName: function(val) {
        var action = {
            type: 'changeReName',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changePayendyear: function(val) {
        var action = {
            type: 'changePayendyear',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeAmnt: function(val) {
        var action = {
            type: 'changeAmnt',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeInsuYear: function(val) {
        var action = {
            type: 'changeInsuYear',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    changeVarietyCode: function(val) {
        var action = {
            type: 'changeVarietyCode',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    initInsProduct: function(val) {
        var action = {
            type: 'initInsProduct',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    initInsuranceInfo: function(obj) {
        var action = {
            type: 'initInsuranceInfo',
            obj: obj
        };
        AppDispatcher.dispatch(action);
    },
    initSubInsuranceInfo: function(obj) {
        var action = {
            type: 'initSubInsuranceInfo',
            obj: obj
        };
        AppDispatcher.dispatch(action);
    },


    changeSubinsure: function(text) {
        var action = {
            type: 'changeSubinsure',
            text: text
        };
        AppDispatcher.dispatch(action);
    },
     changeSubinsureA: function(text) {
        var action = {
            type: 'changeSubinsureA',
            text: text
        };
        AppDispatcher.dispatch(action);
    },
     changeSubinsureB: function(text) {
        var action = {
            type: 'changeSubinsureB',
            text: text
        };
        AppDispatcher.dispatch(action);
    },
    reset: function() {
        var action = {
            type: 'reset',

        };
        AppDispatcher.dispatch(action);
    },
     resetsub: function() {
        var action = {
            type: 'resetsub',

        };
        AppDispatcher.dispatch(action);
    },
    






};