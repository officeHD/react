import {
    Toast
} from 'antd-mobile';

//从地址栏里获取数据
export const getDataFromUrl = (name) => {
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r !== null) return unescape(r[2]);
    return null;
}
export const GetAge = (val) => {
    let ageVal;
    let birthDate = new Date(val);
    let nowDateTime = new Date();
    ageVal = nowDateTime.getFullYear() - birthDate.getFullYear();
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        ageVal--;
    }

    return ageVal;
}


//多少天/月/年（前/后）日期
export const GetDateStr = (type, AddDayCount, day) => {
    var dd = new Date();
    if (day) {
        dd = new Date(day);
    }
    if (type == "day") {
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    } else if (type == "month") {
        dd.setMonth(dd.getMonth() + 1 + AddDayCount); //获取AddDayCount月后的日期
    }
    let year = dd.getFullYear();
    var y = type == "year" ? year + AddDayCount : dd.getFullYear();
    var m = dd.getMonth() + 1; //获取当前月份的日期
    var d = dd.getDate();
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }
    return y + "-" + m + "-" + d;
}


//校验数据有效性
export const checkData = (str, text) => {
     
    if (text === '') {
        //非空验证
        Toast.info(`${str} 不得为空！`, 2);
        return false
    } else {
        //格式验证
        let reg;
        switch (true) {
            case str.indexOf('姓名') >= 0:
                reg = /^[\u4e00-\u9fa5]{2,10}$/;
                break;
            case str.indexOf('证件号码') >= 0:
            case str.indexOf('身份证') >= 0:
                reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
                break;
            case str.indexOf('日期') >= 0:
                reg = /^[1-2]\d{3}-[0-1]\d-[0-3]\d$/;
                break;
            case str.indexOf('电话') >= 0:
            case str.indexOf('手机') >= 0:
                reg = /^1[0-9]{10}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                break;
            case str.indexOf('卡单卡号') >= 0:
                reg = /^[a-zA-Z0-9]{12}$/;
                break;
            case str.indexOf('卡单密码') >= 0:
                reg = /^[a-zA-Z0-9]{6}$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[0-9]{6}$/;
                break;
            default:
                reg = /^\w+$/;
                break
        }
        if (!reg.test(text)) {
            Toast.info(`${str} 格式不正确！`, 2);
            return false;
        }
        return true;
    }
}


export const checkBenfit = (store) => {
    let flag=true;
    let benfitList=store.benefit.lists.slice();
    console.log(store.benefit)
    benfitList.forEach((item,index) => {
        if(!checkData(`受益人${index+1}姓名`,item.name)||!checkData(`受益人${index+1}手机号`,item.phone)
        ||!checkData(`受益人${index+1}身份证号`,item.idNum)||!checkData(`受益人${index+1}证件有效期`,item.validDateEnd)
        ||!checkData(`受益人${index+1}受益比例`,item.rate)){
            flag=false;
            return false;
        }
    }); 
    return flag;
}


export const IdentityCodeValid = (code) => {
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    var tip = "";
    var pass = true;
    var code15 = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
    var code18 = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;

    if (!code || !code18.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        tip = "身份证地址编码错误";
        pass = false;
    } else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != code[17]) {
                tip = "身份证校验位错误";
                pass = false;
            }
        }
    }
    if (!pass) Toast.info(tip, 2);
    return pass;
}

