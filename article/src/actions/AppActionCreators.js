var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
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
};