import mainprice from '../components/asset/json/anbang_001.json';
import umainprice from '../components/asset/json/anbang_002.json';
import AppStore from './AppStore';



var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';


//投保日期定在当前日期的后1天
let d = new Date();
d = d.setDate(d.getDate() + 1);
d = new Date(d);
const year = d.getFullYear();
const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();



var beginDate = year + "-" + month + "-" + day + "  0时"; //保险起期
var endDate = year + 10 + "-" + month + "-" + day + "  24时"; //保险止期
var minBirthday = year - 12 + "-" + month + "-" + day;
var isLongTimeID = 0; //身份证是否长期有效
var isLongTimeIDs = 0; //身份证是否长期有效
var workNum = AppStore.getWorkNum();
var policyUrl = '' //电子保单路径

var stakeholder = { //保单相关方
    minBirthday: minBirthday,
    innumber: [], //保险份数 
    health: '',
    price: '', //保单价格
    price01: '', //保单价格
    price02: '', //保单价格
    bbrName: '', //被保人姓名
    bbrSex: 0, //被保人性别
    bbrNo: '', //被保人证件号
    bbrPhone: '', //被保人手机号
    bbrEmail: '', //被保人邮箱
    bbrBirthday: '', //被保人出生日期
    bbrNoStart: '', //投保人证件号有效期始
    bbrNoEnd: '', //投保人证件号有效期末
    bbrAge: '', //被保人年龄

    healthshow: false,
    tbrName: '', //投保人姓名
    tbrNo: '', //投保人证件号
    tbrNoStart: '', //投保人证件号有效期始
    tbrNoEnd: '', //投保人证件号有效期末
    tbrBirthday: '',
    tbrSex: '',
    tbrAge: '',
    idtype: [],
    bjob: [],

    tbrPhone: '', //投保人电话
    tbrEmail: '', //投保人电子邮箱
    height: '', //身高
    weight: '', //身高
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
    tbrAdd: '', //详细地址地址
    cardName: '',
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
    closeCity: 1, //直辖市关闭市选项


    sameAs: false, //同投保人
    provinceDatas: false, //省数据

    bankprovinceDatas: {}, //省数据
    bankDatas: [{}], //银行数据
    banksData: '', //支行数据
    cityDatas: {}, //市数据
    countyDatas: {}, //县数据
    bigjobs: "", //职业大类集合
    bigjob: "",
    smalljobs: "", //职业小类类集合
    smalljob: "",
    jobs: "", //职业集合
    job: "",
    relation: [],
    orderId: '',
    prtNo: '',
    sumPrem: '',
    orderId: '',
    newAccName: '',
    newBankCode: '',
    newBankAccNo: '',
    zipCode: '',
    heathflag: '',

};


var isShowAddress = false; //是否显示选择地址的框
var payResult = {
    result: '',
    time: '',
    insuranceFee: '',
    prtNo: '',
    contNo: '',
    insuranceName: '',
    idNumber: '',
}

//处理input的输入
function handleChange(event, name) {
    // 获取目标控件的值
    let val = event.target.value.trim();
    stakeholder[name] = val;
    //如果是身份证 修改被保人出生日期
    if (name === "bbrNo") {
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

            if (stakeholder.bbrAge === 0) {
                let diff = nowDateTime.valueOf() - birthDate.valueOf();
                let diff_day = parseInt(diff / (1000 * 60 * 60 * 24));
                if (diff_day < 28) {
                    stakeholder.bbrAge = 0.5;
                }
            }
            changeInsurePrice();
        }
    }
    if (name === "tbrNo") {
        var strBirthday = '';
        if (val != null && val != "") {
            if ((val.length != 15) && (val.length != 18)) {
                return;
            }
            if (val.length == 15) {
                stakeholder.tbrBirthday = "19" + val.substr(6, 6);
                strBirthday = "19" + val.substr(6, 2) + "/" + val.substr(8, 2) + "/" + val.substr(10, 2);
            } else if (val.length == 18) {
                stakeholder.tbrBirthday = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2);
                strBirthday = val.substr(6, 4) + "/" + val.substr(10, 2) + "/" + val.substr(12, 2);
            }
            // 修改性别
            var last = val[val.length - 2];

            if (last % 2 != 0) {

                stakeholder.tbrSex = 0;
            } else {
                stakeholder.tbrSex = 1;
            }
            var birthDate = new Date(strBirthday);
            var nowDateTime = new Date();
            stakeholder.tbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();


            if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
                stakeholder.tbrAge--;
            }
            changeInsurePrice();
        }
    }
    if (name === "bbrBirthday") {
        changeBirthday(val);
    }


}

function changeInnumber(val) {
    stakeholder.innumber = val;


}

function closeCity(val) {
    stakeholder.closeCity = val;
}

function changeCardBank(obj) {
    stakeholder.bankcard.name = obj.name || '';
    stakeholder.bankcard.no = obj.id || '';
    stakeholder.cardPro.name = '';
    stakeholder.cardPro.no = '';
    stakeholder.cardCity.name = '';
    stakeholder.cardCity.no = '';
    stakeholder.bankcards.no = '';
    stakeholder.bankcards.name = '';
    stakeholder.banksData = '';
}
//更新银行省信息
function changeCardProvince(obj) {
    stakeholder.cardPro.name = obj.name || '';
    stakeholder.cardPro.no = obj.no || '';
    stakeholder.cardCity.name = '';
    stakeholder.cardCity.no = '';
    stakeholder.bankcards.no = '';
    stakeholder.bankcards.name = '';
    stakeholder.banksData = '';

}

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

function updateBigJogList(val) {

    stakeholder.bigjobs = val;
}

function updateSmallJogList(obj) {

    stakeholder.smalljobs = obj;

}

function updateJogList(obj) {
    stakeholder.jobs = obj;

}

function changeSelectBigJob(obj) {
    stakeholder.bigjob = obj;
    stakeholder.smalljob = '';
    stakeholder.job = '';
}


function changeSelectSmallJob(obj) {
    stakeholder.smalljob = obj;
    stakeholder.job = '';

}

function changeSelectJob(obj) {
    stakeholder.job = obj;
}

function savePayResult(obj) {

    payResult.result = obj.result;
    payResult.time = obj.entity.time;
    payResult.insuranceFee = obj.entity.insuranceFee;
    payResult.prtNo = obj.entity.prtNo;
    payResult.contNo = obj.entity.contNo;
    payResult.idNumber = obj.entity.idNumber;
    payResult.insuranceName = obj.entity.insuranceName;
     payResult.staffName  = obj.entity.staffName ;
    payResult.phone = obj.entity.phone;
}

function changeBirthday(val) {

    stakeholder.bbrBirthday = val;
    let d = new Date(val)
    let year = d.getFullYear();
    let month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    endDate = year + 25 + "-" + month + "-" + day + "24时"

    var birthDate = new Date(stakeholder.bbrBirthday);
    var nowDateTime = new Date();
    stakeholder.bbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();

    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        stakeholder.bbrAge--;
    }
    if (stakeholder.bbrAge === 0) {
        let diff = nowDateTime.valueOf() - birthDate.valueOf();
        let diff_day = parseInt(diff / (1000 * 60 * 60 * 24));
        if (diff_day < 28) {
            stakeholder.bbrAge = 0.5;
        }
    }


    changeInsurePrice()

}

function changeInsurePrice() {
    mainprice.map((ele, index) => {
        if (ele.age === stakeholder.bbrAge) {
            if (!stakeholder.bbrSex) {
                stakeholder.price01 = ele.value.man
            } else {
                stakeholder.price01 = ele.value.femal
            }
        }
    });
    umainprice.map((ele, index) => {

        if (ele.age === stakeholder.bbrAge) {
            if (!stakeholder.bbrSex) {
                stakeholder.price02 = ele.value.man
            } else {
                stakeholder.price02 = ele.value.femal
            }
        }
    });

     console.log(stakeholder.price01)
      
}

function changeGender() {

    stakeholder.bbrSex = 0;
    changeInsurePrice();
}

function initBanklist(value) {
    stakeholder.bankDatas = value;
}

function changeGenders() {
    stakeholder.bbrSex = 1;
    changeInsurePrice();
}

function savePolicyUrl(text) {
    policyUrl = text;
}
//恢复初始设定的数据
function reset() {


    beginDate = year + "-" + month + "-" + day; //保险起期
    stakeholder = { //保单相关方
        minBirthday: minBirthday,
        innumber: [], //保险份数 
        health: '',
        price: '', //保单价格
        price01: '', //保单价格
        price02: '', //保单价格
        bbrName: '', //被保人姓名
        bbrSex: 0, //被保人性别
        bbrNo: '', //被保人证件号
        bbrPhone: '', //被保人手机号
        bbrEmail: '', //被保人邮箱
        bbrBirthday: '', //被保人出生日期
        bbrNoStart: '', //投保人证件号有效期始
        bbrNoEnd: '', //投保人证件号有效期末
        bbrAge: '', //被保人年龄

        healthshow: false,
        tbrName: '', //投保人姓名
        tbrNo: '', //投保人证件号
        tbrNoStart: '', //投保人证件号有效期始
        tbrNoEnd: '', //投保人证件号有效期末
        tbrBirthday: '',
        tbrSex: '',
        tbrAge: '',
        idtype: [],
        bjob: [],

        tbrPhone: '', //投保人电话
        tbrEmail: '', //投保人电子邮箱
        height: '', //身高
        weight: '', //身高
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
        tbrAdd: '', //详细地址地址
        cardName: '',
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
        closeCity: 1, //直辖市关闭市选项


        sameAs: false, //同投保人
        provinceDatas: false, //省数据

        bankprovinceDatas: {}, //省数据
        bankDatas: [{}], //银行数据
        banksData: '', //支行数据
        cityDatas: {}, //市数据
        countyDatas: {}, //县数据
        bigjobs: "", //职业大类集合
        bigjob: "",
        smalljobs: "", //职业小类类集合
        smalljob: "",
        jobs: "", //职业集合
        job: "",
        relation: [],
        orderId: '',
        prtNo: '',
        sumPrem: '',
        orderId: '',
        newAccName: '',
        newBankCode: '',
        newBankAccNo: '',
        zipCode: '',
        heathflag: '',

    }

}
// 输入姓名初始化信息
function initUserInfo(obj, abJobCategory) {

    stakeholder.tbrPhone = obj.phone || '';
    stakeholder.tbrEmail = obj.email || '';
    stakeholder.tbrNo = obj.idNum || '';

    stakeholder.tbrSex = obj.sex;
    stakeholder.tbrBirthday = obj.birthDate || '';
    stakeholder.tbrNoStart = obj.validDate || '';
    stakeholder.tbrNoEnd = obj.validDateEnd || '';
    stakeholder.tbrProvince.name = obj.provinceName || '';
    stakeholder.tbrProvince.no = obj.province || '';
    stakeholder.tbrCity.name = obj.cityName || '';
    stakeholder.tbrCity.no = obj.city || '';
    stakeholder.tbrCountry.name = obj.countyName || '';
    stakeholder.tbrCountry.no = obj.county || '';
    stakeholder.tbrAdd = obj.permanentAddress || '';
    stakeholder.zipCode = obj.zipCode || '';
    stakeholder.bigjob = abJobCategory || '';
    stakeholder.smalljob = abJobCategory || '';
    stakeholder.job = abJobCategory || '';
    let strBirthday = "";
    if (obj.idNum == 15) {

        strBirthday = "19" + obj.idNum.substr(6, 2) + "/" + obj.idNum.substr(8, 2) + "/" + obj.idNum.substr(10, 2);
    } else if (obj.idNum == 18) {

        strBirthday = obj.idNum.substr(6, 4) + "/" + obj.idNum.substr(10, 2) + "/" + obj.idNum.substr(12, 2);
    }

    var birthDate = new Date(strBirthday);
    var nowDateTime = new Date();
    stakeholder.tbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        stakeholder.tbrAge--;
    }

}

// 输入姓名初始化信息
function initBbrInfo(obj, abJobCategory) {

    stakeholder.bbrPhone = obj.phone || '';

    stakeholder.bbrNo = obj.idNum;
    stakeholder.height = obj.height || '';
    stakeholder.weight = obj.weight || '';
    stakeholder.bjob[0] = obj.occupationCode || '';
    stakeholder.idtype[0] = obj.idType || '';
    stakeholder.bbrSex = obj.sex;
    stakeholder.bbrBirthday = obj.birthDate || '';
    stakeholder.bbrNoStart = obj.validDate || '';
    stakeholder.bbrNoEnd = obj.validDateEnd || '';
    
  
     

        var birthDate = new Date(stakeholder.bbrBirthday);
        var nowDateTime = new Date();
        stakeholder.bbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();
        if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
            stakeholder.bbrAge--;
        }
       

        changeInsurePrice();
}


function changeTbrNoStart(val) {
    stakeholder.tbrNoStart = val;
}

function changeTbrNoEnd(val) {
    stakeholder.tbrNoEnd = val;
}

function changeBbrNoStart(val) {
    stakeholder.bbrNoStart = val;
}

function changeBbrNoEnd(val) {
    stakeholder.bbrNoEnd = val;
}

function onChangeRelation(val) {

    stakeholder.relation = val;

}

function onChangeIdtype(val) {

    stakeholder.idtype = val;

}

function onChangebjob(val) {

    stakeholder.bjob = val;

}

//更新市数据
function updateProvinceDatas(no, obj) {
    stakeholder.bankprovinceDatas[no] = obj;
}

function showHealth() {
    stakeholder.healthshow = true;
}

function userNotHealth() {
    stakeholder.health = "部分情况有";
    stakeholder.healthshow = false;
    stakeholder.heathflag = "Y";
}

function initBankslist(value) {
    stakeholder.banksData = value;
}


function userHealth() {
    stakeholder.health = "以上情况全无";
    stakeholder.healthshow = false;
    stakeholder.heathflag = "N";
}

//更新地址省信息
function changeProvince(obj) {
    stakeholder.tbrProvince.name = obj.name;
    stakeholder.tbrProvince.no = obj.no;

}
//更改投保城市
function changeCity(obj) {

    stakeholder.tbrCity.name = obj.name;
    stakeholder.tbrCity.no = obj.no;
    stakeholder.tbrCountry.name = '';
    stakeholder.tbrCountry.no = '';

}


//更新县信息
function changeCounty(obj) {

    stakeholder.tbrCountry.name = obj.name;
    stakeholder.tbrCountry.no = obj.no;

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

    stakeholder.orderId = obj.id;
    stakeholder.prtNo = obj.prtNo;
    stakeholder.sumPrem = obj.sumPrem;
}

function switchIDTime() {
    isLongTimeID = (isLongTimeID ? 0 : 1);
    stakeholder.tbrNoEnd = (isLongTimeID ? '9999-12-31' : '');
}

function switchIDTimes() {
    isLongTimeIDs = (isLongTimeIDs ? 0 : 1);
    stakeholder.bbrNoEnd = (isLongTimeIDs ? '9999-12-31' : '');
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

    getIsLongTimeID: function() {
        return isLongTimeID;
    },
    getIsLongTimeIDs: function() {
        return isLongTimeIDs;
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
        case 'changeBbrNoStart':
            changeBbrNoStart(action.val);
            emitChange();
            break;
        case 'changeBbrNoEnd':
            changeBbrNoEnd(action.val);
            emitChange();
            break;


        case 'onChangeRelation':
            onChangeRelation(action.val);
            emitChange();
            break;

        case 'onChangeIdtype':
            onChangeIdtype(action.val);
            emitChange();
            break;

        case 'onChangebjob':
            onChangebjob(action.val);
            emitChange();
            break;

        case 'changeProvince':
            changeProvince(action.obj);
            emitChange();
            break;
        case 'changeSelectBigJob':
            changeSelectBigJob(action.obj);
            emitChange();
            break;
        case 'changeSelectSmallJob':
            changeSelectSmallJob(action.obj);
            emitChange();
            break;
        case 'changeSelectJob':
            changeSelectJob(action.obj);
            emitChange();
            break;



        case 'changeCardProvince':
            changeCardProvince(action.obj);
            emitChange();
            break;
        case 'closeCity':
            closeCity(action.val);
            emitChange();
            break;
        case 'changeCity':
            changeCity(action.obj);
            emitChange();
            break;

        case 'changeBankCards':
            changeBankCards(action.obj);
            emitChange();
            break;
        case 'updateCityDatas':
            updateCityDatas(action.no, action.obj);
            emitChange();
            break;
        case 'changeCounty':
            changeCounty(action.obj);
            emitChange();
            break;
        case 'changeCardCity':
            changeCardCity(action.obj);
            emitChange();
            break;
        case 'reset':
            reset();
            emitChange();
            break;
        case 'updateJogList':
            updateJogList(action.obj);
            emitChange();
            break;
        case 'updateBigJogList':
            updateBigJogList(action.val);
            emitChange();
            break;
        case 'updateSmallJogList':
            updateSmallJogList(action.obj);
            emitChange();
            break;
        case 'updateProvinceDatas':
            updateProvinceDatas(action.no, action.obj);
            emitChange();
            break;
        case 'changeCardBank':
            changeCardBank(action.obj);
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
        case 'switchIDTimes':
            switchIDTimes();
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
        case 'savePolicyUrl':
            savePolicyUrl(action.text)
            emitChange();
            break;
        case 'initUserInfo':
            initUserInfo(action.obj, action.abJobCategory)
            emitChange();
            break;
        case 'initBbrInfo':
            initBbrInfo(action.obj, action.abJobCategory)
            emitChange();
            break;
        case 'changeInnumber':
            changeInnumber(action.val)
            emitChange();
            break;


        default: // ... do nothing
            break;
    }
}

InsuranceStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = InsuranceStore;