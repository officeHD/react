var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
     
    updateCarUrl: function(obj) {
        var action = {
            type: 'updateCarUrl',
            obj,
        };
        AppDispatcher.dispatch(action);
    }
};