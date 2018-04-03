var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var productId = "";
var planData = "";

var stakeholder = { //投保相关
    tbrSex: "男",
    tbrAge: ['18'],
    tbrAget: "18岁",
    bbrSex: "男",
    bbrAge: ['18'],
    bbrAget: "18岁",
    ReciveSex: 0,
    ReciveName: '',
    // 保费相关
    payendyear: ['5'], //缴费年期
    payendyeartext: "5年交",
    mainNum: '', //主险份数

    subnum: ['1'], //附加险份数
    subnumtext: '', //附加险份数
    subnumval: '', //附加险份数
    subamnt: ["5000"], //附加险保额
    subamntval: "",
    sub2amnt: ["5000"], //附加险保额
    sub2amntval: "",
    subyear: "", //附加险年份
    subyearval: "", //附加险年份
    subinsA: 'HXHSF002B',

    mainAmnt: '',
    subinsure: "HXTX001B", // 附加同祥A费率
    insureA: "HXJKRS001A", //华夏华夏福两全保险
    insureb: "", //华夏附加华夏福重大疾病保险
    insurec: "", //华夏附加投保人豁免保费重大疾病保险
    insured: "", //华夏医保通费用补偿医疗保险
    insuree: "", //华夏附加住院费用补偿医疗保险2013
    insuref: "", // 华夏附加住院费用补偿医疗保险2014
    insureg: "", //华夏安心无忧住院给付医疗保险

    amnt: '',
    amnttext: '10万',
    amnts: ['10'],
    insuYear: [],
    insuYeartext: '终身',
    productid: 'LXTX00O1,LXTX00B1,LXTX00B2',
    subproductid: 'LXB00A1',
    varietyCode: "",
    subvarietyCode: '',
    infoshow: false,
    subinfoshow: false,
    insuranceInfo: {},
    subinsuranceInfo: false,
    onOrOff: "off"
}

function reset() {
    stakeholder.infoshow = false;
}

function resetsub() {
    stakeholder.subinfoshow = false;
    stakeholder.subinsuranceInfo = false;
}


//处理input的输入
function handleChange(event, name) {
    // 获取目标控件的值
    let val = event.target.value.trim();
    stakeholder[name] = val;
}


function initInsuranceInfo(obj) {
    stakeholder.insuranceInfo = obj;
    stakeholder.infoshow = true;
};


function initSubInsuranceInfo(obj) {
    console.log(obj);
    stakeholder.subinsuranceInfo = obj;
    stakeholder.subinfoshow = true;
};

function initInsProduct(val) {
    productId = val;
    stakeholder.productid = "HXHXF001A";
    stakeholder.varietyCode = val;
    stakeholder.insuYear = "终身";
    stakeholder.insuYeartext = "终身";
};

function changePayendyear(val) {
    stakeholder.payendyear = val;
    if (val[0] === "趸交") {
        stakeholder.payendyeartext = "趸交";
    } else {
        stakeholder.payendyeartext = val + "年";
    }
};

function changeSubnum(val) {
    stakeholder.subnum = val;
    stakeholder.subnumtext = val + "份";
    stakeholder.subnumval = val[0];
};

function changeAmnt(val) {
    stakeholder.amnts = val;
    stakeholder.amnt = val * 10000;
    stakeholder.amnttext = val + "万";
};

function changeSubinsureA(val) {
    if (val) {
        stakeholder.insuref = "";
        stakeholder.subamntval = "";
    } else {
        stakeholder.insuref = "HXHSF001B";
        stakeholder.subamntval = "5000";
    }
};

function changeSubinsureB(val) {
    if (val) {
        stakeholder.insureg = "";

        stakeholder.subnumval = "";
    } else {
        stakeholder.insureg = "HXAXWU002B";
        stakeholder.subnumval = 1;
    }

};

function changeSubinsureC(val) {
    stakeholder.subinsurea = !val;
    if (val) {
        stakeholder.insuree = "";
        stakeholder.sub2amntval = "";
    } else {
        stakeholder.insuree = "HXHSF002B";
        stakeholder.sub2amntval = "5000";
    }
};

function changeMaininsure(val) {
    stakeholder.maininsurea = !val;
    if (val) {
        stakeholder.insurec = "";
    } else {
        stakeholder.insurec = "HXTX001B";
    }

};

function changeSubyear(val) {
    stakeholder.subyear = val;
    if (val === "2013款") {
        stakeholder.subinsA = "HXHSF002B";
        stakeholder.subyearval = 2013;
    } else {
        stakeholder.subyearval = 2014;
        stakeholder.subamnt = ["5000"];
        stakeholder.subamnttext = "5000";
        stakeholder.subinsA = "HXHSF001B";
    }
    if (stakeholder.subinsureb) {
        stakeholder.subvarietyCode = stakeholder.subinsA + ",HXAXWU002B";
    } else {
        stakeholder.subvarietyCode = stakeholder.subinsA;
    }
};

function changeSubAmnt(val) {
    stakeholder.subamnt = val;
    stakeholder.subamnttext = val + '';
    stakeholder.subamntval = val[0];
};

function changeSubAmnt2(val) {
    stakeholder.sub2amnt = val;
    stakeholder.sub2amnttext = val + '';
    stakeholder.sub2amntval = val[0];
};

function changeInsuYear(val) {
    stakeholder.insuYear = val;
    if (val == 30) {
        stakeholder.insuYeartext = "30年";
    } else {
        stakeholder.insuYeartext = "至80岁";
    }
};

function changeVarietyCode(val) {
    stakeholder.varietyCode = val;
};

function changeMaintype(val) {
    stakeholder.maintype = val;
    if (val === "同祥A豁免") {
        stakeholder.insurec = "HXTX001B";
    } else {
        stakeholder.insurec = "HXHM001B";
    }
};

function changeStateybt(val) {

    stakeholder.ybt = val;
    if (val) {
        stakeholder.insured = "HXYBT001B";
    } else {

        stakeholder.insured = "";
    }
};

// 切换年龄性别都清除投保计划
function changeTbrAge(val) {
    stakeholder.tbrAge = val;
    stakeholder.tbrAget = val + "岁";
    stakeholder.infoshow = false;

};

function changeTbrSex(val) {
    stakeholder.tbrSex = val;
    stakeholder.infoshow = false;
};

function changeBbrAge(val) {
    stakeholder.bbrAge = val;
    stakeholder.bbrAget = val + "岁";
    stakeholder.infoshow = false;
};

function changeBbrSex(val) {
    stakeholder.bbrSex = val;
    stakeholder.infoshow = false;
};

function changeReSex(val) {
    stakeholder.ReciveSex = val;
};

function changeSubinsure(text) {
    if (text === "off") {
        stakeholder.varietyCode = stakeholder.productid + "," + stakeholder.subproductid;
        stakeholder.onOrOff = "on";
    } else {
        stakeholder.varietyCode = stakeholder.productid;
        stakeholder.onOrOff = "off";
    }
};

function changeReName(val) {
    stakeholder.ReciveName = val;
};


function emitChange() {
    InsuranceStore.emit(CHANGE_EVENT);
};

var InsuranceStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getStakeholder: function() {
        return stakeholder;
    },
    getProduct: function() {
        return productId;
    }





});

function handleAction(action) {
    switch (action.type) {

        case 'changeTbrAge':
            changeTbrAge(action.val);
            emitChange();
            break;
        case 'changeTbrSex':
            changeTbrSex(action.val);
            emitChange();
            break;
        case 'changeStateybt':
            changeStateybt(action.val);
            emitChange();
            break;

        case 'changeBbrAge':
            changeBbrAge(action.val);
            emitChange();
            break;
        case 'changeBbrSex':
            changeBbrSex(action.val);
            emitChange();
            break;
        case 'changeReSex':
            changeReSex(action.val);
            emitChange();
            break;
        case 'changeReName':
            changeReName(action.val);
            emitChange();
            break;
        case 'changePayendyear':
            changePayendyear(action.val);
            emitChange();
            break;
        case 'changeAmnt':
            changeAmnt(action.val);
            emitChange();
            break;
        case 'changeInsuYear':
            changeInsuYear(action.val);
            emitChange();
            break;

        case 'changeSubyear':
            changeSubyear(action.val);
            emitChange();
            break;

        case 'changeVarietyCode':
            changeVarietyCode(action.val);
            emitChange();
            break;
        case 'initInsProduct':
            initInsProduct(action.val);
            emitChange();
            break;
        case 'changeSubnum':
            changeSubnum(action.val);
            emitChange();
            break;
        case 'changeSubAmnt2':
            changeSubAmnt2(action.val);
            emitChange();
            break;


        case 'changeSubAmnt':
            changeSubAmnt(action.val);
            emitChange();
            break;

        case 'initInsuranceInfo':
            initInsuranceInfo(action.obj);
            emitChange();
            break;
        case 'initSubInsuranceInfo':
            initSubInsuranceInfo(action.obj);
            emitChange();
            break;


        case 'changeMaintype':
            changeMaintype(action.text);
            emitChange();
            break;
        case 'changeMaininsure':
            changeMaininsure(action.text);
            emitChange();
            break;
        case 'changeSubinsure':
            changeSubinsure(action.text);
            emitChange();
            break;
        case 'changeSubinsureA':
            changeSubinsureA(action.text);
            emitChange();
            break;
        case 'changeSubinsureB':
            changeSubinsureB(action.text);
            emitChange();
            break;
        case 'changeSubinsureC':
            changeSubinsureC(action.text);
            emitChange();
            break;

        case 'handleChange':
            handleChange(action.event, action.name);
            emitChange();
            break;

        case 'reset':
            reset();
            emitChange();
            break;

        case 'resetsub':
            resetsub();
            emitChange();
            break;



        default: // ... do nothing
            break;
    }
}

InsuranceStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = InsuranceStore;