import citys from '../components/asset/json/citys.json';
// import appInfo from '../components/json/appInfo.json';
import InsuranceStore from '../stores/InsuranceStore';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var plateNo = '皖'; //车牌号
var name = ''; // 车主名 任路路
var idCard = ''; //证件号 340222199504273538
var city = '340100'; //城市代码
var vehicleType = "02"; //康特，车辆类型
var vehicleTypeName = "小型汽车"; //
var useCharacter = "01"; //康特，使用性质
var useCharacterName = "家庭自用"; //
var isHome = 1; //是否是7座以下私家车，默认是=1，否=0
var isNewCar = false; //是否是新车 
var brandModel = ''; //品牌型号
var engineNo = ''; //发动机号
var isTransferOwnership = 0; //是否过户，1过户 0非过户
var issueDate = ''; //过户日期
var registerDate = ''; //注册日期
var vin = ''; //车架号
var styleList = []; //车型列表
var styleIndex; //车型选择的索引
var carUrl = {
    url: '',
    channel: 'minsheng',
    token: '',
    user_id: '',
    result:''
}; //第三方地址

//修改车牌号第一位省简称
function updateProvinceShort(short) {

    //更新车牌号
    if (plateNo.length <= 1) {
        plateNo = short
    } else if (plateNo.length <= 6) {
        plateNo = short + plateNo.substr(1)
    } else if (plateNo.length === 7) {
        plateNo = short + plateNo.substr(1)
        getCityCode();
    }
}

//修改车牌后六位
function updatePlateNum(event) {
    let val = event.target.value.trim().toUpperCase();
    if (val.length < 7) {
        let num = val || '';
        //更新车牌号
        plateNo = plateNo.substr(0, 1) + num;

        if (val.length === 6) {
            emitChange();
            if (/^[A-Z]/.test(val)) {
                getCityCode();
            } else {
                alert('车牌号必须以字母开头');
            }
        }
    }
};

//生成行驶城市的城市代码
function getCityCode() {

    let cityObj = false;
    let citysArr = citys.insureCity;
    let provinceShort = plateNo.substr(1);
    switch (provinceShort) {
        case '京':
        case '沪':
        case '渝':
        case '津':
            citysArr.map((ele, index) => {
                if (ele.license === provinceShort) {
                    cityObj = ele
                }
            });
            break;
        case '赣':
        case '宁':
        case '青':
        case '贵':
            if (InsuranceStore.getInsuranceCom() === 3) {
                alert('中华车险不可投保该地区！');
            }
            break;
        default:
            let two = plateNo.substr(0, 2);
            citysArr.map((ele, index) => {
                if (ele.license === two) {
                    cityObj = ele
                }
            });

            break;
    }
    if (!cityObj) {
        alert('车牌号无效，请检查输入');
    } else {
        city = cityObj.cityCode;
    }
}

// //修改车辆类型
// function updateVehicleType(index) {
//     let obj = appInfo.vehicleType.data[index];
//     vehicleType = obj.Code;
//     vehicleTypeName = obj.Name;
// }

// //修改使用性质
// function updateUseCharacter(index) {
//     let obj = appInfo.useCharacter.data[index];
//     useCharacter = obj.Code;
//     useCharacterName = obj.Name;
// }

//切换是否是私家车
function switchIsHome() {
    if (isHome) {
        isHome = 0;
        vehicleType = "01";
        useCharacter = "11";
        vehicleTypeName = "大型汽车";
        useCharacterName = "营业出租租赁";

    } else {
        isHome = 1;
        vehicleType = "02";
        useCharacter = "01";
        vehicleTypeName = "小型汽车";
        useCharacterName = "家庭自用";

    }
};

//更新是否是新车
function updateIsNewCar(flag) {
    isNewCar = flag;

    //如果是新车则没有过户过
    if (flag) {
        isTransferOwnership = 0; //是否过户，1过户 0非过户
        issueDate = ''; //过户日期
    }
}

//修改车主信息
function updateOwner(_name, _idCard) {
    name = _name;
    idCard = _idCard;
}


//修改车主名
function updateName(event) {
    name = event.target.value.trim();
}

//更新证件号输入
function updateIdCard(event) {
    idCard = event.target.value.trim();
};

//更新行驶证信息
function updateLicence(obj) {
    brandModel = obj.brandModel; //品牌型号
    engineNo = obj.engineNo; //发动机号
    isTransferOwnership = obj.isTransferOwnership; //是否过户，1过户 0非过户
    issueDate = (isTransferOwnership ? obj.issueDate.substr(0, 10) : ''); //过户日期
    registerDate = obj.registerDate; //注册日期
    vin = obj.vin; //车架号
}

//清空行驶证信息
function clearLincence() {
    brandModel = ''; //品牌型号
    engineNo = ''; //发动机号
    isTransferOwnership = 0; //是否过户，1过户 0非过户
    issueDate = ''; //过户日期
    registerDate = ''; //注册日期
    vin = ''; //车架号
}

//修改注册日期
function updateRegisterDate(event) {
    registerDate = event.target.value.trim();
}

//切换是否过户
function toggleOwnership() {
    isTransferOwnership = (isTransferOwnership ? 0 : 1);
    issueDate = '';

}

//修改过户日期
function updateIssueDate(event) {
    issueDate = event.target.value.trim();
}

//更新车架号输入
function updateVin(event) {
    let val = event.target.value.toUpperCase();
    if (val.length < 18) {
        vin = val;
    }
};

//更新发动机号输入
function updateEngineNo(event) {
    let val = event.target.value.toUpperCase();
    engineNo = val;
};

//更新品牌型号输入
function updateBrandModel(event) {
    let val = event.target.value;
    brandModel = val;
};

//更新车型列表
function updateStyleList(arr) {
    styleList = arr;
};

//更新所选车型索引
function updateStyleIndex(index) {
    styleIndex = index;
}

//恢复初始设定的数据
function reset() {
    plateNo = ''; //车牌号
    city = '340100'; //城市代码
    vehicleType = "02"; //康特，车辆类型
    vehicleTypeName = "小型汽车"; //
    useCharacter = "01"; //康特，使用性质
    useCharacterName = "家庭自用"; //
    isHome = 1; //是否是7座以下私家车，默认是=1，否=0
    isNewCar = false; //是否是新车 
    name = ''; // 车主名 
    idCard = ''; //证件号
    brandModel = ''; //品牌型号
    engineNo = ''; //发动机号
    isTransferOwnership = 0; //是否过户，1过户 0非过户
    issueDate = ''; //过户日期
    registerDate = ''; //注册日期
    vin = ''; //车架号
    styleList = []; //车型列表
    styleIndex = 0; //车型选择的索引  
}

//从订单详情页过来时，初始化页面数据
function initCarEditData(msg) {
    name = msg.ownerName;
    isHome = msg.isHome - 0;
    idCard = msg.idCard;
    plateNo = msg.lcnNo;
    brandModel = msg.vehicleName;
    engineNo = msg.engNo;
    registerDate = msg.fstRegDte;
    vin = msg.vhlFrm;
}

//mobicroll插件更新注册日期
function changeRegisterDate(text) {
    registerDate = text;
}

//mobicroll插件更新过户日期
function changeIssueDate(text) {
    issueDate = text;
}

//根据投保城市修改默认的车牌号
function changeDefaultPlate(no) {

    let citysArr = citys.insureCity;
    let license = ''
    citysArr.map((ele, index) => {
        if (ele.cityCode === no) {
            license = ele.license
        }
    })

    if (plateNo.length < 3) {
        plateNo = license
    }
}

//从最近投保车辆中选择了一辆车
function updateFromRecent(obj) {
    plateNo = obj.plateNo; //车牌号
    name = obj.name; // 车主名 任路路
    idCard = obj.idCard; //证件号 340222199504273538
    city = obj.city; //城市代码
    isHome = obj.isHome - 0; //是否是7座以下私家车，默认是=1，否=0
    isNewCar = obj.newVhl === '1'; //是否是新车 

}

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

    getPlateNo: function() {
        return plateNo;
    },

    getCity: function() {
        return city;
    },

    getVehicleType: function() {
        return vehicleType;
    },

    getUseCharacter: function() {
        return useCharacter;
    },

    getVehicleTypeName: function() {
        return vehicleTypeName;
    },

    getUseCharacterName: function() {
        return useCharacterName;
    },

    getIsHome: function() {
        return isHome;
    },

    getIsNewCar: function() {
        return isNewCar;
    },

    getName: function() {
        return name;
    },

    getIdCard: function() {
        return idCard;
    },

    getBrandModel: function() {
        return brandModel;
    },

    getEngineNo: function() {
        return engineNo;
    },

    getIsTransferOwnership: function() {
        return isTransferOwnership;
    },

    getIssueDate: function() {
        return issueDate;
    },

    getRegisterDate: function() {
        return registerDate;
    },

    getVin: function() {
        return vin;
    },

    getStyleList: function() {
        return styleList;
    },

    getStyleIndex: function() {
        return styleIndex;
    },
    getCarUrl: function() {
        return carUrl;
    }

});

function handleAction(action) {
    switch (action.type) {
        case 'update_provinceShort':
            updateProvinceShort(action.short);
            emitChange();
            break;
        case 'get_cityCode':
            getCityCode();
            emitChange();
            break;
        case 'update_plateNum':
            updatePlateNum(action.event);
            emitChange();
            break;
            // case 'update_vehicleType':
            //     updateVehicleType(action.index);
            //     emitChange();
            //     break;
            // case 'update_useCharacter':
            //     updateUseCharacter(action.index);
            //     emitChange();
            //     break;
        case 'switch_isHome':
            switchIsHome();
            emitChange();
            break;
        case 'update_isNewCar':
            updateIsNewCar(action.flag);
            emitChange();
            break;
        case 'update_owner':
            updateOwner(action.name, action.idCard);
            emitChange();
            break;
        case 'update_name':
            updateName(action.event);
            emitChange();
            break;
        case 'update_idCard':
            updateIdCard(action.event);
            emitChange();
            break;
        case 'update_licence':
            updateLicence(action.obj);
            emitChange();
            break;
        case 'clearLincence':
            clearLincence();
            emitChange();
            break;
        case 'update_registerDate':
            updateRegisterDate(action.event);
            emitChange();
            break;
        case 'toggle_ownership':
            toggleOwnership();
            emitChange();
            break;
        case 'update_issueDate':
            updateIssueDate(action.event);
            emitChange();
            break;
        case 'update_vin':
            updateVin(action.event);
            emitChange();
            break;
        case 'update_engineNo':
            updateEngineNo(action.event);
            emitChange();
            break;
        case 'update_brandModel':
            updateBrandModel(action.event);
            emitChange();
            break;
        case 'update_styleList':
            updateStyleList(action.arr);
            emitChange();
            break;
        case 'update_styleIndex':
            updateStyleIndex(action.index);
            emitChange();
            break;
        case 'reset':
            reset();
            emitChange();
            break;
        case 'initCarEditData':
            initCarEditData(action.msg);
            emitChange();
            break;
        case 'changeRegisterDate':
            changeRegisterDate(action.text);
            emitChange();
            break;
        case 'changeIssueDate':
            changeIssueDate(action.text);
            emitChange();
            break;
        case 'changeDefaultPlate':
            changeDefaultPlate(action.no);
            emitChange();
            break;
        case 'updateFromRecent':
            updateFromRecent(action.obj);
            emitChange();
            break;
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