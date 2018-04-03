import zAJAX from 'z-ajax'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';


//获取钱包账户余额
export const getBalance = (state, cb) => {
  zAJAX(`${ctx}/appZhongan/personal/get_staff`, { staffId: state.staffId }, cb)
}

//向后端获取数据
export const sendData = (state, paymentWay, cb ) => {

  //被保人是投保人本人
  let self = state.insuredRelaToHolder === 0
  //安康守护卡的id字符串
  let cardsNum = data.ApplyNum[state.applyNum] - state.personPremium / 100
  let insuranceId = '';
  if (paymentWay - 0 === 1 && cardsNum) {
    let ids = []
    for(let i = 0; i < cardsNum; i++) {
      ids.push(state.cards[i].insuranceId)
    }
    insuranceId = ids.join(',')
  }
  
  let datas = {
    id : state.orderId,// 订单主键
    holderId : state.holderId,// 投保人id
    insuerId : state.insuerId,// 被保对象id
    insuredId : state.insuredId,// 订单号
    effectiveDate : state.effectiveDate, // 保单起期
    staffId : state.staffId,//员工ID
    paymentWay: paymentWay, //0，众安收银台；1，其他
    type: paymentWay - 0 + 1,
    insuranceId: insuranceId,
    personPremium: state.personPremium, //个人付款金额
    isEdit: state.isEdit,
    
    insurantList : [{
      amount : '',
      insurantGender : data.HolderGenderValue[(self ? state.holderGender : state.insurantGender)],// 被保人性别 M男 F女
      insurantBirthday : self ? state.holderBirthday : state.insurantBirthday,// 被保人出生日期
      insurantCertiNo : self ? state.holderCertiNo : state.insurantCertiNo,// 被保人证件号码
      insurantCertiType : data.HolderCertiTypeValue[(self ? state.holderCertiType : state.insurantCertiType)],// 被保人证件类型 个人： I身份证 
      insurantName : self ? state.holderName : state.insurantName,// 被保人名称
      insurantPhone : self ? state.holderPhone : state.insurantPhone,// 被保人电话


      insuredRelaToHolder : data.InsuredRelaToHolderValue[state.insuredRelaToHolder],//被保人与投保人的关系
      occupationCategory: state.occupation.occupationCategory, //被保人职业类别
      premium : 100 * data.ApplyNum[state.applyNum],//保费总价
      insurantUnit : data.ApplyNum[state.applyNum]//购买份数
    }],

    policyHolder : {
      holderGender : data.HolderGenderValue[state.holderGender],// 投保人性别 M男 F女
      holderBirthday : state.holderBirthday,// 投保人出生日期
      holderCertiNo : state.holderCertiNo,// 投保人证件号码
      holderCertiType : data.HolderCertiTypeValue[state.holderCertiType],// 投保人证件类型 个人： I身份证 
      holderName : state.holderName,// 投保人名称
      holderEmail : state.holderEmail,// 投保人名称
      holderPhone : state.holderPhone,// 投保人名称
    }
  }

  zAJAX(`${ctx}/appZhongan/personal/insert_order`, { data: JSON.stringify(datas) }, cb)
}

//验证安康守护卡的账号密码
export const submitCards = (state, cb ) => {
  let cardsNum = data.ApplyNum[state.applyNum] - state.personPremium / 100
  let ids = [], pwd = [];
  for(let i = 0; i < cardsNum; i++) {
    ids.push(state.cards[i].insuranceId)
    pwd.push(state.cards[i].password)
  }

  let datas = {
    sumPremium: data.ApplyNum[state.applyNum] * 100,  //众安核心保费
    personPremium: state.personPremium, //个人付款金额
    insuranceId: ids.join(','), //安康守护卡卡号
    password: pwd.join(','),  //密码
  }

  zAJAX(`${ctx}/appZhongan/personal/ankang_login`, datas, cb)
}

//前往最后的页面
export const goToPayNormal = (state) => {
  window.location.href = './pay_nomal?insuredId=' + state.insuredId + '&sumPremium=' + 100 * data.ApplyNum[state.applyNum] + '&policyNo=' + state.policyNo + '&applyNum=' + data.ApplyNum[state.applyNum] + '&staffId=' + state.staffId

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
      case str.indexOf('姓名') >= 0 :
        reg = /^[\u4e00-\u9fa5]{2,10}$/;
        break;
      case str.indexOf('证件号码') >= 0 :
      case str.indexOf('身份证') >= 0 :
        reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
        break;
      case str.indexOf('日期') >= 0 :
        reg = /^[1-2]\d{3}-[0-1]\d-[0-3]\d$/;
        break;
      case str.indexOf('电话') >= 0 :
      case str.indexOf('手机') >= 0 :
        reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        break;
      case str.indexOf('邮箱') >= 0 :
        reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        break;
      case str.indexOf('卡单卡号') >= 0 :
        reg = /^[a-zA-Z0-9]{12}$/;
        break;
      case str.indexOf('卡单密码') >= 0 :
        reg = /^[a-zA-Z0-9]{6}$/;
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


//数字前补零
const tran_val = (val) => {
  if((val - 0) < 10){
    val = "0" + val;
  }
  return val;
}

//日期转字符串
export const dateToString = (time) => {
  const datenew = new Date(time); 

  const year = datenew.getFullYear(); 
  const month = tran_val(datenew.getMonth() + 1);
  const date = tran_val(datenew.getDate()); 

  return year + '-' + month + '-' + date ;
}

//从地址栏里获取数据
export const getDataFromUrl = (name) => {
  //构造一个含有目标参数的正则表达式对象  
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
  //匹配目标参数  
  var r = window.location.search.substr(1).match(reg);  
  //返回参数值  
  if (r!== null) return unescape(r[2]);  
  return null;
}

//如果是编辑页面，初始化编辑数据
export const getEditDate = (state, id, cb) => {
  zAJAX(`${ctx}/appZhongan/personal/detail`, {id: id}, cb)
}