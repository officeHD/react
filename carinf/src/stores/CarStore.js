 var AppDispatcher = require('../dispatcher/AppDispatcher');
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');

 var CHANGE_EVENT = 'change';


 var carUrl = {
     url: '',
     channel: 'minsheng',
     token: '',
     user_id: '',
     result: ''
 }; //第三方地址

 var tbPlace = { province: { name: '安徽省', no: '340000' }, city: { name: '合肥市', no: 340100 } } //投保地区







 function updateCarUrl(obj) {
     carUrl.url = obj.url;
     carUrl.channel = obj.channel;
     carUrl.token = obj.token;
     carUrl.user_id = obj.user_id;
     carUrl.result = obj.result;
     carUrl.message = obj.message;
 }

 function emitChange() {
     CarStore.emit(CHANGE_EVENT);
 }

 var CarStore = assign({}, EventEmitter.prototype, {
     addChangeListener: function(callback) {
         this.on(CHANGE_EVENT, callback);
     },
     removeChangeListener: function(callback) {
         this.removeListener(CHANGE_EVENT, callback);
     },
     getCarUrl: function() {
         return carUrl;
     },
     getTbPlace: function() {
         return tbPlace;
     }

 });

 function handleAction(action) {
     switch (action.type) {
         case 'updateCarUrl':
             updateCarUrl(action.obj);
             emitChange();
             break;
         default: // ... do nothing
             break;
     }
 }

 CarStore.dispatchToken = AppDispatcher.register(handleAction);
 module.exports = CarStore;