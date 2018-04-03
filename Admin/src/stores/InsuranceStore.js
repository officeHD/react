var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var InsuranceStore = assign({}, EventEmitter.prototype, {
    provinceDatas: false,   //省数据
    cityDatas: {},      //市数据
    countyDatas: {},   //县数据
    items: [],
    staff: [{"name": "王颖","branchCompanyId": "总公司","branchCompanyName": "民盛保险总代","position": "总经理室总经理","phoneNum": "18955113688","workNum": "00000109",}],
    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    addNewItemHandler: function(text) {
        this.items.push(text);
    },
    getCityDatas: function() {
        return cityDatas;
    },
    updateProvinceDatas(msg) {
        cityDatas = msg;
    },
    //更新市数据
    updateCityDatas(no, obj) {
        cityDatas[no] = obj;
    },
    getAll: function() {
        return this.items;
    },
    updateStaff: function(data) {
        this.staff = data;
    },
    getStaff: function() {
        return this.staff;
    }
});

module.exports = InsuranceStore;