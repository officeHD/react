import {
    Toast
} from 'antd-mobile';
//校验数据有效性
export const dataReg = (str, text) => {
    if (text === '' || !text) {
        //非空验证
        Toast.info(`${str} 不得为空！`, 2);
        return false
    } else {
        //格式验证
        let reg;
        switch (true) {
            case str.indexOf('姓名') >= 0:
            case str.indexOf('持卡人') >= 0:
                reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,15}$/;
                break;
            case str.indexOf('证件号') >= 0:
            case str.indexOf('身份证') >= 0:
                reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
                break;
            case str.indexOf('证件有效期') >= 0:
            case str.indexOf('日期') >= 0:
                reg = /^[1-9]\d{3}-[0-1]\d-[0-3]\d$/;
                break;
            case str.indexOf('电话') >= 0:
            case str.indexOf('手机') >= 0:
                reg = /^1\d{10}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[0-9]{6}$/;
                break;
            case str.indexOf('验证码') >= 0:
                reg = /^[0-9]{4,6}$/;
                break;
            default:
                reg = /[\s\S]*/;
                break
        }
        if (!reg.test(text)) {
            Toast.info(`${str} 格式不正确！`, 2);
            return false;
        }
        return true;
    }
}

export const idNumValid = (code) => {
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

export const numDivide = (num) => {
    var str = '';
    var reg = /\s/g; //加入正则，过滤掉字符串中的空格
    num.replace(reg, "").split('').map(function (item, index) {
        (index + 1) % 4 == 0 ? str = str + item + ' ' : str += item;
    })
    return str;
}
/*
    *   用途：按一定规则分割字符串
    *   第1个参数是要分割的字符串 比如：18801233565
    *   第2个参数是每隔多少个字符分割 比如：18801233565 分成 188 0123 3565 就传[3,4,4];
                                                     要分成123 456 789  就传[3]；
    *   第3个参数是用什么来分割 比如：18801233565 分成 188-0123-3565 就传'-'
    * */
 

   export const removeAllSpace=(str) =>{
    return str.replace(/\s+/g, "");
   } 
export const validNum=(num,arr,str)=>{
    var newPhoneNum = [];
     num=removeAllSpace(num);
    if(arr.length == 1){
        while(num.length > 0){
            var newNum = num.slice(0,arr[0]);
            num = num.substr(arr[0]);
            newPhoneNum.push(newNum);
        }
    }else {
        arr.map((item,i)=>{
            var newNum = num.slice(0,item);
            num = num.substr(item);
            newPhoneNum.push(newNum);
        });
    }

    return newPhoneNum.join(str).trim();
}

