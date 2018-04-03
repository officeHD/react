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
    payendyear: ['趸交'], //缴费年期
    payendyeartext: "趸交",
    mainNum: '', //主险份数

    subnum: ['1'], //附加险份数
    subnumtext: '', //附加险份数
    subnumval: '', //附加险份数
    subamnt: ["5000"], //附加险保额
    subamntval:"",
    subyear: "", //附加险年份
    subyearval: "", //附加险年份
    subinsA:'HXHSF002B',
    amnt: '',
    amnttext: '10万',
    amnts: ['10'],
    insuYear: [],
    insuYeartext: '终身',
    productid: 'LXTX00O1,LXTX00B1,LXTX00B2',
    subproductid: 'LXB00A1',
    varietyCode: "",
    subvarietyCode:'',
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
    if (val === "LXTX00O1") {
        stakeholder.productid = "LXTX00O1,LXTX00B1,LXTX00B2";
        stakeholder.varietyCode = "LXTX00O1,LXTX00B1,LXTX00B2";
        stakeholder.insuYear = ["30"];
        stakeholder.insuYeartext = '30年';
        stakeholder.amnt = 100000;
    } else {
        stakeholder.productid = val;
        stakeholder.varietyCode = val;
        stakeholder.insuYear = "终身";
        stakeholder.insuYeartext = "终身";
        if (val === "LAX00O1") {
            stakeholder.subproductid = 'LXB00B1';
        }
    }
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
    stakeholder.subinsurea = !val;
    if(val){
        stakeholder.subnumval = "";
     
    }else{
        stakeholder.subamntval = 5000;
         stakeholder.subamnt = ["5000"];
        stakeholder.subamnttext = "5000";
    }
    changeSubVarietyCode();
};

function changeSubinsureB(val) {
    stakeholder.subinsureb = !val;
     if(val){
        stakeholder.subnumval = "";
     
    }else{
       stakeholder.subnum = ["1"];
    stakeholder.subnumtext = "1份";
    stakeholder.subnumval = 1; 
    }
    changeSubVarietyCode();
};
function changeSubVarietyCode(){
    if(stakeholder.subinsurea){
        if(stakeholder.subinsureb){
           stakeholder.subvarietyCode=stakeholder.subinsA+",HXAXWU002B"            
        }else{
            stakeholder.subvarietyCode=stakeholder.subinsA;
        }
     }else{
        if(stakeholder.subinsureb){
           stakeholder.subvarietyCode="HXAXWU002B";           
        }else{
            stakeholder.subvarietyCode="";
        }
     }
}

function changeSubyear(val) {

    stakeholder.subyear = val;
    if (val === "2013款") {
        stakeholder.subinsA="HXHSF002B";
        stakeholder.subyearval = 2013;
    } else {
        stakeholder.subyearval = 2014;
        stakeholder.subamnt = ["5000"];
        stakeholder.subamnttext = "5000";
        stakeholder.subinsA="HXHSF001B";
    }
    if(stakeholder.subinsureb){
        stakeholder.subvarietyCode=stakeholder.subinsA+",HXAXWU002B";
    }else{
        stakeholder.subvarietyCode=stakeholder.subinsA;
    }

};


function changeSubAmnt(val) {
    stakeholder.subamnt = val;
    stakeholder.subamnttext = val + '';
    stakeholder.subamntval = val[0];
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
    console.log(stakeholder.onOrOff)
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