var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    updateProvinceShort: function(short) {
        var action = {
            type: 'update_provinceShort',
            short: short
        };
        AppDispatcher.dispatch(action);
    },

    updatePlateNum: function(event) {
        var action = {
            type: 'update_plateNum',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    getCityCode: function() {
        var action = {
            type: 'get_cityCode'
        };
        AppDispatcher.dispatch(action);

    },

    updateVehicleType: function(index) {
        var action = {
            type: 'update_vehicleType',
            index: index
        };
        AppDispatcher.dispatch(action);
    },

    updateUseCharacter: function(index) {
        var action = {
            type: 'update_useCharacter',
            index: index
        };
        AppDispatcher.dispatch(action);
    },

    switchIsHome: function() {
        var action = {
            type: 'switch_isHome'
        };
        AppDispatcher.dispatch(action);
    },

    updateIsNewCar: function(flag) {
        var action = {
            type: 'update_isNewCar',
            flag,
        };
        AppDispatcher.dispatch(action);
    },

    updateOwner: function(name, idCard) {
        var action = {
            type: 'update_owner',
            name,
            idCard,
        };
        AppDispatcher.dispatch(action);
    },

    updateName: function(event) {
        var action = {
            type: 'update_name',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    updateIdCard: function(event) {
        var action = {
            type: 'update_idCard',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    updateLincence: function(obj) {
        var action = {
            type: 'update_licence',
            obj: obj
        };
        AppDispatcher.dispatch(action);
    },

    clearLincence: function() {
        var action = {
            type: 'clearLincence',
        };
        AppDispatcher.dispatch(action);
    },

    updateRegisterDate: function(event) {
        var action = {
            type: 'update_registerDate',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    toggleOwnership: function() {
        var action = {
            type: 'toggle_ownership'
        };
        AppDispatcher.dispatch(action);
    },

    updateIssueDate: function(event) {
        var action = {
            type: 'update_issueDate',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    updateVin: function(event) {
        var action = {
            type: 'update_vin',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    updateEngineNo: function(event) {
        var action = {
            type: 'update_engineNo',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    updateBrandModel: function(event) {
        var action = {
            type: 'update_brandModel',
            event: event
        };
        AppDispatcher.dispatch(action);
    },

    updateStyleList: function(arr) {
        var action = {
            type: 'update_styleList',
            arr: arr
        };
        AppDispatcher.dispatch(action);
    },

    updateStyleIndex: function(index) {
        var action = {
            type: 'update_styleIndex',
            index: index
        };
        AppDispatcher.dispatch(action);
    },

    reset: function() {
        var action = {
            type: 'reset',
        };
        AppDispatcher.dispatch(action);
    },

    initCarEditData: function(msg) {
        var action = {
            type: 'initCarEditData',
            msg,
        };
        AppDispatcher.dispatch(action);
    },

    changeRegisterDate: function(text) {
        var action = {
            type: 'changeRegisterDate',
            text,
        };
        AppDispatcher.dispatch(action);
    },

    changeIssueDate: function(text) {
        var action = {
            type: 'changeIssueDate',
            text,
        };
        AppDispatcher.dispatch(action);
    },

    changeDefaultPlate: function(no) {
        var action = {
            type: 'changeDefaultPlate',
            no,
        };
        AppDispatcher.dispatch(action);
    },

    updateFromRecent: function(obj) {
        var action = {
            type: 'updateFromRecent',
            obj,
        };
        AppDispatcher.dispatch(action);
    },
    updateCarUrl: function(obj) {
        var action = {
            type: 'updateCarUrl',
            obj,
        };
        AppDispatcher.dispatch(action);
    }
};