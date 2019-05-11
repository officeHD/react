import {
    observable,
    action,
    computed
} from 'mobx';
import {
    GetAge,
    checkData, IdentityCodeValid
} from '../api/util';

// 订单store
export default class OrderStore {
    @observable name = ""; //姓名
    @observable phone = ""; //手机号
    @observable idType = "0"; //证件类型
    @observable idNum = ""; //证件号码
    @observable email = ""; //邮箱
    @observable birthDate = ""; //生日
    @observable sex = 0; //性别
    @observable occupationCode = ''; //职业
    @observable province = ""; //省编号
    @observable city = ""; //所在城市
    @observable county = ""; //县编号
    @observable provinceName = ""; //省
    @observable cityName = ""; //市
    @observable countyName = ""; //县
    @observable permanentAddress = ""; //详细地址
    @observable zipCode = ""; //邮编
    @observable inCome = ''; //年收入
    @observable height = ''; //身高
    @observable weight = ''; //体重
    @observable maritalStatus = ''; //婚姻状况
    @observable validDate = ''; //证件有效起期
    @observable validDateEnd = ""; //证件有效止期
    @observable telephone = ''; //固话
    @observable relationsWithCustomer = ''; //被保人与投保人关系
    @observable idFrontImg = ''; //证件照正面
    @observable idBackImg = ''; // 证件照反面
    @observable socialSecFlag = 'Y'; //投保人是否有社保标志 0：非社保1：参加社保
    @observable socialAppProvince = ''; //投保人社保所在省编码
    @observable socialAppCity = ''; //投保人社保所在市编码
    @observable smokeFlag = ''; //投保人吸烟标记0：不吸烟1：吸烟
    @observable imparts = [] //健康告知
    @observable nationality = "CHN"; //国家 

    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @action
    setUserData(obj) {
        Object.assign(this, obj);
    }
    @action
    searchName(val) {
        if (checkData("姓名", val)) {
            console.log(val);

        }
    }
    @action 
    idNumCheck(val) { 
        let that = this;
        if (this.idType == "0") {
            if (IdentityCodeValid(val)) {
                that.birthDate = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2);
            }
        }
    }
    @computed get age() {
        let age = GetAge(this.birthDate);
        return age
    }

}