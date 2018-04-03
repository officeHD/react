 
import AppStore from './AppStore';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';


//投保日期定在当前日期的后1天
let d = new Date();
d = d.setDate(d.getDate() + 1);;
d = new Date(d);
const year = d.getFullYear();
const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();

var insuranceCom = ''; //所选择的保险公司,1太平洋，2太平，3中华，4人保
var tbPlace = { province: { name: '安徽省', no: '340000' }, city: { name: '合肥市', no: '340100' }, country: { name: '', no: '' } } //投保地区
var insurePrice = 0;

var deliveryType = 0; //配送方式 0:快递， 1：自取
var schemeIndex = 1; //选中的套餐的索引,默认选择第二套
var beginDate = year + "-" + month + "-" + day + " 0时"; //保险起期
var endDate = year + 10 + "-" + month + "-" + day + " 24时"; //保险止期
var isLongTimeID = 0; //身份证是否长期有效
var workNum = AppStore.getWorkNum();
var policyUrl = ''; //电子保单路径
var stakeholder = { //保单相关方
    workNum:'',
    contNo:'',
    health: '',
    price: '', //保单价格
    price01: 100, //保单价格
    price02: 100, //保单价格
    bbrName: '', //被保人姓名
    bbrSex: 0, //被保人性别
    bbrNo: '', //被保人证件号
    bbrPhone: '', //被保人手机号
    bbrEmail: '', //被保人邮箱
    bbrBirthday: '', //被保人出生日期
    bbrAge: '', //被保人年龄

    healthshow: false,
    tbrName: '', //投保人姓名
    tbrNo: '', //投保人证件号
    tbrNoStart: '', //投保人证件号有效期始
    tbrNoEnd: '', //投保人证件号有效期末
    tbrPhone: '', //投保人电话
    tbrEmail: '', //投保人电子邮箱
    tbrProvince: {
        name: '',
        no: ''
    },
    tbrCity: {
        name: '',
        no: ''
    },
    tbrCountry: {
        name: '',
        no: ''
    },
    // 持卡人
    cardName: '',
    // 卡号
    cardNo: '',
    cardPro: {
        name: '',
        no: ''
    },
    cardCity: {
        name: '',
        no: ''
    },

    bankcard: {
        name: '',
        no: ''
    },
    // 支行
    bankcards: {
        name: '',
        no: ''
    },

    tbrAdd: '', //详细地址地址
companyAb:'',
orderStatus:'',



    store: { name: '', address: '', id: '' }, //取件门店

    sameAs: false, //同投保人
    provinceDatas: false, //省数据
    bankDatas: [{}], //银行数据
    banksData: [], //支行数据

    bankprovinceDatas: {}, //省数据
    cityDatas: {}, //市数据
    countyDatas: {}, //县数据
    storesList: {}, //门店数据
    relation: [],
    orderId: '',
    prtNo: '',
    sumPrem: '',
    orderId: '',
    newAccName: '',
    newBankCode: '',
    newBankAccNo: '',
    closeCity: 1,
    orderNum:''
};

var contactAddress = []; //业务员的常用保单投寄地址
var isShowAddress = false; //是否显示选择地址的框
var payResult = {
    time: '',
    insuranceFee: '',
    prtNo: '',
    contNo: '',
    insuranceName: '',
}

//处理input的输入
function handleChange(event, name) {
    // 获取目标控件的值
    let val = event.target.value.trim();
    stakeholder[name] = val;
    //如果是身份证 修改被保人出生日期
    if (name === "tbrNo") {
        var strBirthday = '';
        if (val != null && val != "") {
            if ((val.length != 15) && (val.length != 18)) {
                return;
            }
            if (val.length == 15) {
                stakeholder.bbrBirthday = "19" + val.substr(6, 6);
                strBirthday = "19" + val.substr(6, 2) + "/" + val.substr(8, 2) + "/" + val.substr(10, 2);

            } else if (val.length == 18) {
                stakeholder.bbrBirthday = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2);
                strBirthday = val.substr(6, 4) + "/" + val.substr(10, 2) + "/" + val.substr(12, 2);
            }
            // 修改性别
            var last = val[val.length - 2];

            if (last % 2 != 0) {

                stakeholder.bbrSex = 0;
            } else {
                stakeholder.bbrSex = 1;
            }
            var birthDate = new Date(strBirthday);
            var nowDateTime = new Date();
            stakeholder.bbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();

            if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
                stakeholder.bbrAge--;
            }

        }
    }


}

 
function savePayResult(obj) {
    
    payResult.time = obj.time;
    payResult.insuranceFee = obj.insuranceFee;
    payResult.prtNo = obj.prtNo;
    payResult.contNo = obj.contNo;
    payResult.insuranceName = obj.insuranceName;
}

function saveResult(obj) {
    
    stakeholder.price = obj.plan.insuranceFee;
    stakeholder.workNum = obj.plan.workNum;
   
    stakeholder.contNo = obj.plan.contNo;
    payResult.contNo = obj.plan.contNo;
    payResult.idNumber = obj.appliant.idNum; 

}

function changeBirthday(val) {
    stakeholder.bbrBirthday = val;
}

function closeCity(val) {
    stakeholder.closeCity = val;
}

function changeGender() {
    stakeholder.bbrSex = 0;
}

function changeGenders() {
    stakeholder.bbrSex = 1;
}

function savePolicyUrl(text) {
    policyUrl = text;
}
//恢复初始设定的数据
function reset() {
    insuranceCom = 3; //所选择的保险公司
    offers = []; //保险公司报价结果集合
    beginDate = year + "-" + month + "-" + day; //保险起期
    stakeholder = { //保单相关方
        bbrName: '', //被保人姓名
        bbrNo: '', //被保人证件
        bbrPhone: '', //被保人手机号
        bbrEmail: '', //被保人邮箱
        tbrName: '', //投保人姓名
        tbrNo: '', //投保人证件号
        tbrPhone: '', //投保人电话
        tbrEmail: '', //投保人电子邮箱
        collectName: '', //收件人姓名
        collectPhone: '', //收件人电话
        collectAdd: '', //收件地址

        store: { name: '', address: '', id: '' }, //取件门店
        sameAs: false, //同投保人
    }

}
// 输入姓名初始化信息
function initUserInfo(obj) {
    stakeholder.tbrPhone = obj.phone || '';
    stakeholder.tbrEmail = obj.email || '';
    stakeholder.tbrNo = obj.idNum || '';
    stakeholder.bbrSex = obj.sex;
    stakeholder.tbrNoStart = obj.validDate || '';
    stakeholder.tbrNoEnd = obj.validDateEnd || '';
    stakeholder.tbrProvince.name = obj.provinceName || '';
    stakeholder.tbrProvince.no = obj.province || '';
    stakeholder.tbrCity.name = obj.cityName || '';
    stakeholder.tbrCity.no = obj.city || '';
    stakeholder.tbrCountry.name = obj.countyName || '';
    stakeholder.tbrCountry.no = obj.county || '';
    if (obj.idNum.length == 15) {
        stakeholder.bbrBirthday = "19" + obj.idNum.substr(6, 6);

    } else if (obj.idNum.length == 18) {
        stakeholder.bbrBirthday = obj.idNum.substr(6, 4) + "-" + obj.idNum.substr(10, 2) + "-" + obj.idNum.substr(12, 2);

    }
}

function changeTbrNoStart(val) {
    stakeholder.tbrNoStart = val;
}

function changeTbrNoEnd(val) {
    stakeholder.tbrNoEnd = val;
}

function onChangeRelation(val) {

    stakeholder.relation = val;

}

function showHealth() {
    stakeholder.healthshow = true;
}

function userNotHealth() {
    stakeholder.health = "部分有";
    stakeholder.healthshow = false;
}

function userHealth() {
    stakeholder.health = "以上全无";
    stakeholder.healthshow = false;
}

//更新地址省信息
function changeProvince(obj) {
    stakeholder.tbrProvince.name = obj.name || '';
    stakeholder.tbrProvince.no = obj.no || '';
    stakeholder.tbrCity.name = '';
    stakeholder.tbrCity.no = '';
    stakeholder.tbrCountry.name = '';
    stakeholder.tbrCountry.no = '';

}

// 选择银行卡
function changeCardBank(obj) {
    stakeholder.bankcard.name = obj.name || '';
    stakeholder.bankcard.no = obj.id || '';
    stakeholder.cardPro.name = '';
    stakeholder.cardPro.no = '';
    stakeholder.cardCity.name = '';
    stakeholder.cardCity.no = '';
    stakeholder.bankcards.no = '';
    stakeholder.bankcards.name = '';
}
//更新银行省信息
function changeCardProvince(obj) {
    stakeholder.cardPro.name = obj.name || '';
    stakeholder.cardPro.no = obj.no || '';
    stakeholder.cardCity.name = '';
    stakeholder.cardCity.no = '';
    stakeholder.bankcards.no = '';
    stakeholder.bankcards.name = '';
}
// 更改银行卡城市
function changeCardCity(obj) {
    stakeholder.cardCity.name = obj.name || '';
    stakeholder.cardCity.no = obj.no || '';
    stakeholder.bankcards.no = '';
    stakeholder.bankcards.name = '';
}

// 选择支行、名字&号码
function changeBankCards(obj) {
    stakeholder.bankcards.name = obj.name || '';
    stakeholder.bankcards.no = obj.id || '';
}


//更改投保城市
function changeCity(obj) {
    stakeholder.tbrCity.name = obj.name || '';
    stakeholder.tbrCity.no = obj.no || '';
    stakeholder.tbrCountry.name = '';
    stakeholder.tbrCountry.no = '';

}



//更新县信息
function changeCounty(obj) {
    stakeholder.tbrCountry.name = obj.name || '';
    stakeholder.tbrCountry.no = obj.no || '';
    tbPlace.country.no = obj.no;
    tbPlace.country.name = obj.name;
    stakeholder.add_district = obj.no;
    stakeholder.add_district_name = obj.name;
}


function initBanklist(value) {
    stakeholder.bankDatas = value;
}

function initBankslist(value) {
    stakeholder.banksData = value;
}

//更新市数据
function updateProvinceDatas(no, obj) {
    stakeholder.bankprovinceDatas[no] = obj;
}
//更新市数据
function updateCityDatas(no, obj) {
    stakeholder.cityDatas[no] = obj;
}
//更新县数据
function updateCountyDatas(no, msg) {

    stakeholder.countyDatas[no] = msg;
}

function saveOrderMes(obj) {
    stakeholder.orderNum = obj.orderNum;
    stakeholder.idNum = obj.idNum;
    stakeholder.orderId = obj.id;
    stakeholder.prtNo = obj.prtNo;
    stakeholder.sumPrem = obj.sumPrem;
    stakeholder.orderStatus = obj.orderStatus;
    stakeholder.companyAb = obj.companyAb;
}

function switchIDTime() {
    isLongTimeID = (isLongTimeID ? 0 : 1);
    stakeholder.tbrNoEnd = '';
}

function emitChange() {
    InsuranceStore.emit(CHANGE_EVENT);
};

var InsuranceStore = assign({}, EventEmitter.prototype, {
    // 添加监听
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    // 移除监听
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    // 获取投保人信息
    getStakeholder: function() {
        return stakeholder;
    },
    // 获取投保起期
    getBeginDate: function() {
        return beginDate;
    },
    getEndDate: function() {
        return endDate;
    },
    getTbPlace: function() {
        return tbPlace;
    },
    getIsLongTimeID: function() {
        return isLongTimeID;
    },
    getPolicyUrl: function() {
        return policyUrl;
    },
    getPayResult: function() {
        return payResult;
    }
});

function handleAction(action) {
    switch (action.type) {
        //被保人和投保人关系处理
        case 'toggleSameAs':
            toggleSameAs(action.text);
            emitChange()
            break;
        case 'handleChange':
            handleChange(action.event, action.name);
            emitChange();
            break;
        case 'changeTbrNoStart':
            changeTbrNoStart(action.val);
            emitChange();
            break;
        case 'changeTbrNoEnd':
            changeTbrNoEnd(action.val);
            emitChange();
            break;
        case 'onChangeRelation':
            onChangeRelation(action.val);
            emitChange();
            break;
        case 'changeProvince':
            changeProvince(action.obj);
            emitChange();
            break;

        case 'changeCardProvince':
            changeCardProvince(action.obj);
            emitChange();
            break;

        case 'changeCardBank':
            changeCardBank(action.obj);
            emitChange();
            break;
        case 'changeBankCards':
            changeBankCards(action.obj);
            emitChange();
            break;

        case 'changeCity':
            changeCity(action.obj);
            emitChange();
            break;
        case 'changeCardCity':
            changeCardCity(action.obj);
            emitChange();
            break;

        case 'updateCityDatas':
            updateCityDatas(action.no, action.obj);
            emitChange();
            break;

        case 'initBanklist':
            initBanklist(action.value);
            emitChange();
            break;
        case 'initBankslist':
            initBankslist(action.value);
            emitChange();
            break;

        case 'closeCity':
            closeCity(action.val);
            emitChange();
            break;


        case 'changeCounty':
            changeCounty(action.obj);
            emitChange();
            break;


        case 'updateProvinceDatas':
            updateProvinceDatas(action.no, action.obj);
            emitChange();
            break;
        case 'updateCountyDatas':
            updateCountyDatas(action.no, action.obj);
            emitChange();
            break;
        case 'userNotHealth':
            userNotHealth();
            emitChange();
            break;
        case 'userHealth':
            userHealth();
            emitChange();
            break;

        case 'switchIDTime':
            switchIDTime();
            emitChange();
            break;
        case 'showHealth':
            showHealth();
            emitChange();
            break;
        case 'changeBirthday':
            changeBirthday(action.val);
            emitChange();
            break;
            // 男
 
        
            
        case 'changeGender':
            changeGender();
            emitChange();
            break;
            // 女
        case 'changeGenders':
            changeGenders();
            emitChange();
            break;
        case 'saveOrderMes':
            saveOrderMes(action.obj);
            emitChange();
            break;
        case 'savePayResult':
            savePayResult(action.obj);
            emitChange();
            break;
            case 'saveResult':
            saveResult(action.obj);
            emitChange();
            break;


        case 'savePolicyUrl':
            savePolicyUrl(action.text)
            emitChange();
            break;
        case 'initUserInfo':
            initUserInfo(action.obj)
            emitChange();
            break;


        default: // ... do nothing
            break;
    }
}

InsuranceStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = InsuranceStore;