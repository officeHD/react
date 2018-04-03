var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    updateInsurance: function(obj) {
        var action = {
            type: 'update_insurance',
            obj: obj
        };
        AppDispatcher.dispatch(action);
    },
    //被投保人和投保人关系
    toggleSameAs: function(text) {
        var action = {
            type: 'toggleSameAs',
            obj: text
        };
        AppDispatcher.dispatch(action);

    },
    //处理input输入
    handleChange: function(event, name) {
        var action = {
            type: 'handleChange',
            event: event,
            name: name
        };
        AppDispatcher.dispatch(action);
    },
    
    
     saveUserDetail: function(msg) {
        var action = {
            type: 'saveUserDetail',
            msg,
        };
        AppDispatcher.dispatch(action);
    },
    // 修改证件有效期
    changeTbrNoStart: function(val) {
        var action = {
            type: 'changeTbrNoStart',
            val: val,

        };
        AppDispatcher.dispatch(action);
    },
    changeTbrNoEnd: function(val) {
        var action = {
            type: 'changeTbrNoEnd',
            val: val,

        };
        AppDispatcher.dispatch(action);
    },
    onChangeRelation: function(val) {
        var action = {
            type: 'onChangeRelation',
            val: val,

        };
        AppDispatcher.dispatch(action);
    },
    changeCity: function(obj) {
        var action = {
            type: 'changeCity',
            obj,
        };
        AppDispatcher.dispatch(action);
    },
    changeCardCity: function(obj) {
        var action = {
            type: 'changeCardCity',
            obj,
        };
        AppDispatcher.dispatch(action);
    },
    // 切换省份
    changeProvince: function(obj) {
        var action = {
            type: 'changeProvince',
            obj: obj,
        };
        AppDispatcher.dispatch(action);
    },
    // 切换省份
    changeCardProvince: function(obj) {
        var action = {
            type: 'changeCardProvince',
            obj: obj,
        };
        AppDispatcher.dispatch(action);
    },
    changeCardBank: function(obj) {
        var action = {
            type: 'changeCardBank',
            obj: obj,
        };
        AppDispatcher.dispatch(action);
    },
    changeBankCards: function(obj) {
        var action = {
            type: 'changeBankCards',
            obj: obj,
        };
        AppDispatcher.dispatch(action);
    },

    // 更新市数据
    updateProvinceDatas: function(no, obj) {
        var action = {
            type: 'updateProvinceDatas',
            no,
            obj,
        };
        AppDispatcher.dispatch(action);
    },

    // 更新市数据
    updateCityDatas: function(no, obj) {
        var action = {
            type: 'updateCityDatas',
            no,
            obj,
        };
        AppDispatcher.dispatch(action);
    },

    closeCity:function(val){
         var action = {
                type: 'closeCity',
                val,
            };
            AppDispatcher.dispatch(action);
    },
    // 更新银行数据
    initBanklist: function(value) {
        var action = {
            type: 'initBanklist',
            value
        };
        AppDispatcher.dispatch(action);
    },
    // 更新银行数据
    initBankslist: function(value) {
        var action = {
            type: 'initBankslist',
            value
        };
        AppDispatcher.dispatch(action);
    },
    changeCounty: function(obj) {
        var action = {
            type: 'changeCounty',
            obj,
        };
        AppDispatcher.dispatch(action);
    },
    // 更新区县数据
    updateCountyDatas: function(no, obj) {
        var action = {
            type: 'updateCountyDatas',
            no,
            obj,
        };
        AppDispatcher.dispatch(action);
    },
    switchIDTime: function() {
        var action = {
            type: 'switchIDTime',

        };
        AppDispatcher.dispatch(action);
    },
    userHealth: function() {
        var action = {
            type: 'userHealth',

        };
        AppDispatcher.dispatch(action);
    },
    userNotHealth: function() {
        var action = {
            type: 'userNotHealth',

        };
        AppDispatcher.dispatch(action);
    },
    showHealth: function() {
        var action = {
            type: 'showHealth',

        };
        AppDispatcher.dispatch(action);
    },
    changeBirthday: function(val) {
        var action = {
            type: 'changeBirthday',
            val: val

        };
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
    saveOrderMes: function(obj) {
        var action = {
            type: 'saveOrderMes',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    // 保存电子保单路径
    savePolicyUrl: function(text) {
        var action = {
            type: 'savePolicyUrl',
            text: text
        }
        AppDispatcher.dispatch(action);
    },
    savePayResult: function(obj) {
        var action = {
            type: 'savePayResult',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
  saveResult: function(obj) {
        var action = {
            type: 'saveResult',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    
    initUserInfo: function(obj) {
        var action = {
            type: 'initUserInfo',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    }


};