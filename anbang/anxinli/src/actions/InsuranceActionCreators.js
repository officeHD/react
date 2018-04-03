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
    reset: function() {
        var action = {
            type: 'reset',

        };
        AppDispatcher.dispatch(action);

    },
    changeSelectJob: function(obj) {
        var action = {
            type: 'changeSelectJob',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    changeSelectBigJob: function(obj) {
        var action = {
            type: 'changeSelectBigJob',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    changeSelectSmallJob: function(obj) {
        var action = {
            type: 'changeSelectSmallJob',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    changeSelectBJob: function(obj) {
        var action = {
            type: 'changeSelectBJob',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    changeSelectBBigJob: function(obj) {
        var action = {
            type: 'changeSelectBBigJob',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    changeSelectBSmallJob: function(obj) {
        var action = {
            type: 'changeSelectBSmallJob',
            obj: obj
        }
        AppDispatcher.dispatch(action);
    },
    updateBigJogList: function(val) {
        var action = {
            type: 'updateBigJogList',
            val: val,

        };
        AppDispatcher.dispatch(action);
    },
    updateSmallJogList: function(obj) {
        var action = {
            type: 'updateSmallJogList',
            obj

        };
        AppDispatcher.dispatch(action);
    },
    updateJogList: function(obj) {
        var action = {
            type: 'updateJogList',
            obj

        };
        AppDispatcher.dispatch(action);
    },


    setInsurancePrice: function(msg) {
        var action = {
            type: 'setInsurancePrice',
            msg: msg
        };
        AppDispatcher.dispatch(action);
    },

    changepayendyear: function(val) {
        var action = {
            type: 'changepayendyear',
            val: val
        };
        AppDispatcher.dispatch(action);
    },
    //更改年限
    changeyearLong: function(val) {
        var action = {
            type: 'changeyearLong',
            val: val
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
    changeBbrNoStart: function(val) {
        var action = {
            type: 'changeBbrNoStart',
            val: val,

        };
        AppDispatcher.dispatch(action);
    },
    changeBbrNoEnd: function(val) {
        var action = {
            type: 'changeBbrNoEnd',
            val: val,

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

    onChangeRelation: function(val) {
        var action = {
            type: 'onChangeRelation',
            val: val,

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
    changeCity: function(obj) {
        var action = {
            type: 'changeCity',
            obj,
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

    // 切换省份
    changeBProvince: function(obj) {
        var action = {
            type: 'changeBProvince',
            obj: obj,
        };
        AppDispatcher.dispatch(action);
    },
    changeBCity: function(obj) {
        var action = {
            type: 'changeBCity',
            obj,
        };
        AppDispatcher.dispatch(action);
    },
    changeBCounty: function(obj) {
        var action = {
            type: 'changeBCounty',
            obj,
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

    closeCity: function(val) {
        var action = {
            type: 'closeCity',
            val,
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
    switchIDTimes: function() {
        var action = {
            type: 'switchIDTimes',

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
    initUserInfo: function(obj, abJobCategory) {
        var action = {
            type: 'initUserInfo',
            obj: obj,
            abJobCategory: abJobCategory,
        }
        AppDispatcher.dispatch(action);
    },
    initBbrInfo: function(obj, abJobCategory) {
        var action = {
            type: 'initBbrInfo',
            obj: obj,
            abJobCategory: abJobCategory,
        }
        AppDispatcher.dispatch(action);
    },
    changeInnumber: function(val) {
        var action = {
            type: 'changeInnumber',
            val: val
        }
        AppDispatcher.dispatch(action);
    }


};