var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

    addNewItem: function(text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
    updateStaff: function(data) {
        AppDispatcher.dispatch({
            actionType: 'Update_Staff',
            data: data
        });
    },
    updateCityDatas: function(no, obj) {
        var action = {
            type: 'updateCityDatas',
            no,
            obj,
        };
        AppDispatcher.dispatch(action);
    },


};

module.exports = ButtonActions;