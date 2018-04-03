import zAJAX from 'z-ajax'
import data from '../reducers/data.json'

//获取代理人信息
export const getInfo = (state, id, cb) => {
    zAJAX(`${ctx}/lifeInsuranceApi/getInfo`, {staffid : id} , cb)
}


//获取中荷主险数据
export const getZH = (state, cb) => {

  //先判断数据是否准备好
  //被保人年龄在0~60岁，保额在1~50万
  var age = state.insured.age;
  var coverage = state.plainMain.coverage;
  if (age === '' || !(age >= 0 && age <= 60) || !(coverage >= 1 && coverage <= 50) ) {
    cb({result: 1, premium: ''})
  } else {
    //请求后台接口
    let datas = {
      zx: 'CIF',  // 主险为CIF
      age,  // 被保人年龄
      sex : data.sex[state.insured.sex],  // 被保性别 男/女
      amount : coverage * 10000,  //主险保额
      year : (state.plainMain.year + 1) * 10,  //主险年期 10/20
    }


    zAJAX(`${ctx}/lifeInsuranceApi/getZH`, datas, cb)
  }
}

//获取中荷住院医疗HRC_HRD保费
export const getZH_ZY = (state, cb) => {

  //先判断数据是否准备好
  //被保人年龄在0~60岁
  var age = state.insured.age;
  var level = state.insured.hospital;
  var plan = state.HRC_HRD.index;
  if (age === '' || !(age >= 0 && age <= 60) || level === '' || level === '拒保' || plan === 0 ) {
    cb({result: 1, zy_count: ''})
  } else {
    //请求后台接口
    let datas = {
      fj_zy: state.HRC_HRD.hasSocialSecu === 1 ? 'HRD' : 'HRC',  //附加住院险 HRC/HRD
      tf_first: state.HRC_HRD.isFirst,  //0非首次投保及非连续投保   1首次投保及非连续投保95折
      bbr_age : age,  //被保人年龄
      level,  //被保人职业等级
      plan,  //选择投保计划
    }

    zAJAX(`${ctx}/lifeInsuranceApi/getZH_ZY`, datas, cb)
  }
}

//获取中荷意外伤害ADDC保费
export const getZH_ADDC = (state, cb) => {

  //先判断数据是否准备好
  //被保人成年，则ADDC保额+主险保额<= 100万
  //被保人未成年，则ADDC保额+主险保额<= 50万
  var flag1 = state.insured.age >= 18 && state.ADDC.coverage + state.plainMain.coverage <= 100
  var flag2 = state.insured.age < 18 && state.ADDC.coverage + state.plainMain.coverage <= 50
  var level = state.insured.accident;
  var coverage = state.ADDC.coverage;
  if (coverage === '' || coverage === 0 || level === '' || level === '拒保' || !(flag1 || flag2)) {
    cb({result: 1, addc_count: ''})
  } else {
    //请求后台接口
    let datas = {
      level,  //被保人职业等级
      fj_addc_count: coverage * 10000,  //保额
    }

    zAJAX(`${ctx}/lifeInsuranceApi/getZH_AC`, datas, cb)
  }
}

//获取中荷意外伤害AMRC保费
export const getZH_AMRC = (state, cb) => {

  //先判断数据是否准备好
  //AMRC的保额不能超过ADDC保额的20%
  var level = state.insured.accident;
  var addc = state.ADDC.fee;
  var coverage = state.AMRC.coverage;
  if (coverage === '' || coverage === 0 || level === '' || level === '拒保'|| !(addc > 0) || coverage > state.ADDC.coverage * 2) {
    cb({result: 1, amrc_count: ''})
  } else {
    //请求后台接口
    let datas = {
      level,  //被保人职业等级
      fj_amrc_count: coverage * 1000,  //保额
    }

    zAJAX(`${ctx}/lifeInsuranceApi/getZH_AC`, datas, cb)
  }
}
//获取W系列附加险数据
export const getZH_WX = (state, wx, cb) => {
  
  var amount = (state.plainMain.fee - 0 || 0) + (state.HRC_HRD.fee - 0 || 0) + (state.ADDC.fee - 0 || 0) + (state.AMRC.fee - 0 || 0);
  var isBuy = state[wx.toUpperCase()].isBuy;
  var bbr_age = state.insured.age;
  var bbr_sex = data.sex[state.insured.sex];
  var tbr_age = state.applicant.asInsured ? bbr_age : state.applicant.age;
  var tbr_sex = state.applicant.asInsured ? bbr_sex : data.sex[state.applicant.sex];
  if (amount === 0 || isBuy !== 1 || bbr_age === '' || tbr_age === '' || !(bbr_age >= 0 && bbr_age <= 65) || !(tbr_age >= 0 && tbr_age <= 65) || !(amount > 0)) {
    var key = wx + '_count';
    cb({result: 1, [key]: ''})
  } else {
    let datas = {
      fjx: wx.toUpperCase(),    //WA WP WPA WPB
      year: (state.plainMain.year + 1) * 10,   //缴费年期 10/20
      amount,   //主险保额
      bbr_age,   //被保人年龄
      bbr_sex,   //被保人性别 男/女
      tbr_age,   //投保人年龄
      tbr_sex,   //投保人性别 男/女
    }

    zAJAX(`${ctx}/lifeInsuranceApi/getZH_W`, datas, cb)
  }
} 

//从地址栏里获取数据
export const getDataFromUrl = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
  var r = window.location.search.substr(1).match(reg);  
  if (r!== null) return decodeURI(r[2]);  
  return null; 
}
