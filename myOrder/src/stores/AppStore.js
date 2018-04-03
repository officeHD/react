import CarActionCreators from '../actions/CarActionCreators';
import InsuranceActionCreators from '../actions/InsuranceActionCreators';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';


var userInfo = { list: [], total: 1 };
var currentPage = 0;
var userDetail = '';

var isAlertProgress = false; //是否显示进度条
var isFinished = false; //是否完成请求
var msg = '';
var type = "";
var edit = 'no'; //是否是编辑页面，yes是，no否
var fromPage = ''; //如果是编辑，则来自detail或list页面
var isSubFrame = false; //是否显示iframe，用于展示爱豆的页面
var companyList = [{ titleUrl: "static/img/lifeInsurance/anbanglogo2.png", sales: 0, gysName: "189", productName: "天安财险" }]
var isRadioSelector = false;
var options;
var selectedOption;
var liClickHandle;
var cid; //第三方神秘参数
var workNum = ''; //岗位号
var position; //经纬度

var tempOrderNo = ''; //获取推荐保险起期时，后台的临时订单号
var csPrice = ''; //临时的转存数据


var stakeholder = { //保单相关方
    health: '',
    insuranceFee: '',
    price: '200', //保单价格
    bbrName: '', //被保人姓名
    bbrSex: 0, //被保人性别
    bbrNo: '', //被保人证件号
    bbrPhone: '', //被保人手机号
    bbrEmail: '', //被保人邮箱
    bbrBirthday: '', //被保人出生日期

    healthshow: false,
    tbrName: '', //投保人姓名
    tbrIdType: '', //投保人姓名
    tbrNo: '', //投保人证件号
    tbrNoStart: '', //投保人证件号有效期始
    tbrNoEnd: '', //投保人证件号有效期末
    tbrPhone: '', //投保人电话
    tbrEmail: '', //投保人电子邮箱
    tbrSex: '', //投保人性别

    tbrAdd: '', //详细地址地址
    add_province: '340000', //收件省代码
    add_city: '340100', //收件市代码
    add_district: '', //收件区县代码
    tbrProvince_name: '安徽省', //收件省
    tbrCity_name: '合肥市', //收件市
    tbrCountry_name: '', //收件区县
    bbrProvince_name: '安徽省', //收件省
    bbrCity_name: '合肥市', //收件市
    bbrCountry_name: '', //收件区县

    store: { name: '', address: '', id: '' }, //取件门店

    sameAs: false, //同投保人
    relation: '', //同投保人关系
    provinceDatas: false, //省数据
    cityDatas: {}, //市数据
    countyDatas: {}, //县数据
    storesList: {}, //门店数据

    orderNum: '',
    serialNumber: '',
    prtNo: '',
    sumPrem: '',

    newAccName: '',
    newBankCode: '',
    newBankAccNo: '',
    insuranceName: '',
    payType: '',
    payResult: true,
    orderStatus: '',
    companyAb: ''


};

function changeTitle() {
    type = true;

}
//返回到第一步
function stepGoFirst() {
    edit = 'no';
    fromPage = '';
}

function saveOrderMes(obj) {
    stakeholder.orderNum = obj.orderNum;
    stakeholder.serialNumber = obj.serialNumber;
    stakeholder.insuranceName = obj.insuranceName;
    stakeholder.orderStatus = obj.orderStatus;
    stakeholder.companyAb = obj.companyAb;
    stakeholder.remark = obj.remark;
    stakeholder.payType = obj.payType;


}

function initAppEditData(workNum) {
    workNum = workNum;
}

function saveUserInfo(msg) {
    userInfo = msg
}

function saveCompanyList(arr) {
    companyList = arr
}

function saveUserDetail(msg) {



    stakeholder.insurances = msg.plan.insurances;
    stakeholder.contNo = msg.plan.contNo;
    stakeholder.tbrName = msg.appliant.name;
    stakeholder.tbrNo = msg.appliant.idNum;
    stakeholder.tbrPhone = msg.appliant.phone;
    stakeholder.tbrSex = msg.appliant.sex;
    stakeholder.tbrNoStart = msg.appliant.validDate;
    stakeholder.tbrNoEnd = msg.appliant.validDateEnd;
    stakeholder.tbrEmail = msg.appliant.email;
    stakeholder.tbrIdType = msg.appliant.idType;
    stakeholder.tbrProvince_name = msg.appliant.province_name;
    stakeholder.tbrCity_name = msg.appliant.city_name;
    stakeholder.tbrCountry_name = msg.appliant.country_name;
    stakeholder.tbrPermanentAddress = msg.appliant.permanentAddress;
    stakeholder.zipCode = msg.appliant.zipCode;

    stakeholder.bbrName = msg.insured.name;
    stakeholder.bbrNo = msg.insured.idNum;
    stakeholder.bbrPhone = msg.insured.phone;
    stakeholder.bbrSex = msg.insured.sex;
    stakeholder.bbrEmail = msg.insured.email;
    stakeholder.bbrNoStart = msg.insured.validDate;
    stakeholder.bbrNoEnd = msg.insured.validDateEnd;
    stakeholder.bbrIdType = msg.insured.idType;
    stakeholder.bbrProvince_name = msg.insured.province_name;
    stakeholder.bbrCity_name = msg.insured.city_name;
    stakeholder.bbrCountry_name = msg.insured.country_name;
    stakeholder.bbrPermanentAddress = msg.insured.permanentAddress;
    stakeholder.relation = msg.insured.relationsWithCustomer;
    stakeholder.zipCode = msg.insured.zipCode;
}


//跳转到保单相关人步骤
function stepGoStakeholder(_fromPage) {
    edit = 'yes';
    fromPage = _fromPage;
}

function setcurrentPage(val) {
    currentPage = val;
}
//显示RadioSelector
function showRadioSelector(obj) {
    isRadioSelector = true;
    options = obj.options;
    selectedOption = obj.selectedOption;
    liClickHandle = obj.liClickHandle;
}

//隐藏RadioSelector
function hideRadioSelector() {
    isRadioSelector = false;
}

//显示子页面
function showSubFrame() {
    isSubFrame = true;
}

//关闭子页面
function hideSubFrame() {
    isSubFrame = false;
}


//初始化经纬度
function initPosition(_position) {
    position = _position;
}

//开始AlertProgress
function startAlertProgress() {
    isAlertProgress = true;
}

//完成AlertProgress
function finishAlertProgress() {
    isFinished = true
}

//
function messageAlertProgress(theMsg) {
    msg = theMsg;
}

//
function closeAlertProgress() {
    isAlertProgress = false;
    isFinished = false;
    msg = '';

}

//
function saveTempOrderNo(no, price) {
    tempOrderNo = no;
    csPrice = price;
}

function emitChange() {
    AppStore.emit(CHANGE_EVENT);
}

var AppStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    // 获取投保人信息
    getStakeholder: function() {
        return stakeholder;
    },
    getUserInfo: function() {
        return userInfo
    },
    getUserDetail: function() {
        return userDetail
    },
    getIsRadioSelector: function() {
        return isRadioSelector;
    },

    getIsSubFrame: function() {
        return isSubFrame;
    },

    getOptions: function() {
        return options;
    },
    getcurrentPage: function() {
        return currentPage
    },
    getSelectedOption: function() {
        return selectedOption;
    },

    getLiClickHandle: function() {
        return liClickHandle;
    },

    getCid: function() {
        return cid;
    },

    getWorkNum: function() {
        return workNum;
    },

    getPosition: function() {
        return position;
    },

    getEdit: function() {
        return edit;
    },

    getFromPage: function() {
        return fromPage;
    },

    getIsAlertProgress: function() {
        return isAlertProgress;
    },

    getIsFinished: function() {
        return isFinished;
    },

    getMsg: function() {
        return msg;
    },

    getTempOrderNo: function() {
        return tempOrderNo
    },

    getCsPrice: function() {
        return csPrice
    },
    getCompanyList: function() {
        return companyList
    },
    getType: function() {
        return type;
    },



});

function handleAction(action) {
    switch (action.type) {

        case 'saveUserDetail':
            saveUserDetail(action.msg)
            emitChange()
            break;
        case 'saveUserInfo':
            saveUserInfo(action.msg)
            emitChange()
            break;
        case 'stepGoStakeholder':
            stepGoStakeholder(action.fromPage);
            emitChange();
            break;
        case 'step_go_first':
            stepGoFirst();
            emitChange();
            break;
        case 'setcurrentPage':
            setcurrentPage(action.val);
            emitChange();
            break;
        case 'saveCompanyList':
            saveCompanyList(action.arr);
            emitChange();
            break;


        case 'show_radioSelector':
            showRadioSelector(action.obj);
            emitChange();
            break;
        case 'hide_radioSelector':
            hideRadioSelector();
            emitChange();
            break;

        case 'show_subFrame':
            showSubFrame();
            emitChange();
            break;
        case 'hide_subFrame':
            hideSubFrame();
            emitChange();
            break;
        case 'saveOrderMes':
            saveOrderMes(action.obj);
            emitChange();
            break;
        case 'initAppEditData':
            initAppEditData(action.workNum);
            emitChange();
            break;
        case 'changeTitle':
            changeTitle();
            emitChange();
            break;

        case 'initPosition':
            initPosition(action.position);
            emitChange();
            break;
        case 'startAlertProgress':
            startAlertProgress();
            emitChange();
            break;
        case 'finishAlertProgress':
            finishAlertProgress();
            emitChange();
            break;
        case 'messageAlertProgress':
            messageAlertProgress(action.msg);
            emitChange();
            break;
        case 'closeAlertProgress':
            closeAlertProgress();
            emitChange();
            break;
        case 'saveTempOrderNo':
            saveTempOrderNo(action.no, action.price);
            emitChange();
            break;

        default: // ... do nothing
            break;
    }
}

AppStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = AppStore;