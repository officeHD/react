var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var InsuranceStore = require('../stores/InsuranceStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      InsuranceStore.addNewItemHandler(action.text);
      InsuranceStore.emitChange();
      break;
    default:
      // no op
  }
  switch(action.actionType) {
    case 'Update_Staff':
      InsuranceStore.updateStaff(action.data);
      InsuranceStore.emitChange();
      break;
    default:
      // no op
  }
})

module.exports = AppDispatcher;
