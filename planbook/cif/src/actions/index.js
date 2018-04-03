import * as api from '../api'
import data from '../reducers/data.json'

export const CHANGE_INSURED = 'CHANGE_INSURED'
export const CHANGE_TYPE = 'CHANGE_TYPE'
export const CHANGE_APPLICANT = 'CHANGE_APPLICANT'
export const CHANGE_PLAIN_MAIN = 'CHANGE_PLAIN_MAIN'
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING'
export const CHANGE_OCCUPATION_SHOW = 'CHANGE_OCCUPATION_SHOW'
export const CHOICE_IND = 'CHOICE_IND'
export const GO_BACK_STEP = 'GO_BACK_STEP'
export const SHOW_SELECTOR = 'SHOW_SELECTOR'
export const CLOSE_SELECTOR = 'CLOSE_SELECTOR'
export const CHANGE_HRC_HRD = 'CHANGE_HRC_HRD'
export const CHANGE_ADDC = 'CHANGE_ADDC'
export const CHANGE_AMRC = 'CHANGE_AMRC'
export const CHANGE_WA = 'CHANGE_WA'
export const CHANGE_WPA = 'CHANGE_WPA'
export const CHANGE_WPB = 'CHANGE_WPB'
export const CHANGE_WP = 'CHANGE_WP'
export const CHANGE_AGENT = 'CHANGE_AGENT'

//初始化数据
export const initData = () => (dispatch, getState) => {
  let id = api.getDataFromUrl('staffId')
  if (id) {
    api.getInfo(getState(), id, msg => {
      if (msg.result === 1) {

        dispatch(changeAgent('name', msg.name))
        dispatch(changeAgent('phone', msg.phone))
        dispatch(changeAgent('workNum', msg.workNum))
        
      } else {
        alert(msg.message);
      }
    })
  }
}
//运行环境
export const changeType = () => ({
  type: CHANGE_TYPE,
  
})
//编辑代理人信息
export const changeAgent = (item, val) => ({
  type: CHANGE_AGENT,
  item,
  val,
})

//编辑被保人信息
export const changeInsured = (item, val) => ({
  type: CHANGE_INSURED,
  item,
  val,
})

//编辑投保人信息
export const changeApplicant = (item, val) => ({
  type: CHANGE_APPLICANT,
  item,
  val,
})

//编辑主险投保计划
export const changePlainMain = (item, val) => ({
  type: CHANGE_PLAIN_MAIN,
  item,
  val,
})


//更改遮罩层的显示
export const changeIsLoading = () => ({
  type: CHANGE_IS_LOADING,
})

//显隐职业等级选择器
export const changeOccupationShow = (forPerson) => ({
  type: CHANGE_OCCUPATION_SHOW,
  forPerson: forPerson,
})


//选择则了一个行业
export const choiceInd = (ind) => ({
  type: CHOICE_IND,
  ind,
})

//返回选择行业
export const goBackStep = () => ({
  type: GO_BACK_STEP,
})

//投保信息发生变化，需要校验主险保费
export const checkMainFee = () => (dispatch, getState) => {
  api.getZH(getState(), msg => {
      if (msg.result === 1) {
        dispatch(changePlainMain('fee', msg.premium))
        dispatch(checkWPFee())
        dispatch(checkWPAFee())
        dispatch(checkWPBFee())
        dispatch(checkWAFee())
      } else {
        alert(msg.message);
      }
  })
}

//投保信息发生变化，需要校验HRC_HRD保费
export const checkHRC_HRDFee = () => (dispatch, getState) => {
  api.getZH_ZY(getState(), msg => {
      if (msg.result === 1) {
        dispatch(changeHRC_HRD('fee', msg.zy_count))
        dispatch(checkWPFee())
        dispatch(checkWPAFee())
        dispatch(checkWPBFee())
        dispatch(checkWAFee())
      } else {
        alert(msg.message);
      }
  })
}

//投保信息发生变化，需要校验ADDC保费
export const checkADDCFee = () => (dispatch, getState) => {
  api.getZH_ADDC(getState(), msg => {
      if (msg.result === 1) {
        dispatch(changeADDC('fee', msg.addc_count))
        dispatch(checkWPFee())
        dispatch(checkWPAFee())
        dispatch(checkWPBFee())
        dispatch(checkWAFee())
      } else {
        alert(msg.message);
      }
  })
}

//投保信息发生变化，需要校验AMRC保费
export const checkAMRCFee = () => (dispatch, getState) => {
  api.getZH_AMRC(getState(), msg => {
      if (msg.result === 1) {
        dispatch(changeAMRC('fee', msg.amrc_count))
        dispatch(checkWPFee())
        dispatch(checkWPAFee())
        dispatch(checkWPBFee())
        dispatch(checkWAFee())
      } else {
        alert(msg.message);
      }
  })
}

//投保信息发生变化，需要校验WP是否满足投保条件
export const checkWPShow = () => (dispatch, getState) => {
  //投保人为被保人的父母,且被保人年龄不得超过18周岁
  //投保人和被保人需是同一个人
  //投保人年龄18 - 55周岁。
  //缴费期满时投保人年期不得大于65周岁
  
  var state = getState();
  if (state.applicant.asInsured && state.insured.age <= 55 && state.insured.age >= 18 && state.insured.age - 0 + (state.plainMain.year + 1) * 10 <= 65) {
    dispatch(checkWPFee())
    dispatch(changeWP('isShow', true))
  } else {
    dispatch(changeWP('isShow', false))
    dispatch(changeWP('isBuy', ''))
    dispatch(changeWP('fee', ''))
  }
}

//投保信息发生变化，需要校验WP保费
export const checkWPFee = () => (dispatch, getState) => {
  api.getZH_WX(getState(), 'wp', msg => {
      if (msg.result === 1) {
        dispatch(changeWP('fee', msg.wp_count))
      } else {
        alert(msg.message);
      }
  })
}


//投保信息发生变化，需要校验WPA保费
export const checkWPAFee = () => (dispatch, getState) => {
  api.getZH_WX(getState(), 'wpa', msg => {
      if (msg.result === 1) {
        dispatch(changeWPA('fee', msg.wpa_count))
      } else {
        alert(msg.message);
      }
  })
}

//投保信息发生变化，需要校验WPA是否满足投保条件
export const checkWPAShow = () => (dispatch, getState) => {
  //投保人为被保人的父母
  //被保人年龄不得超过18周岁
  //投保人年龄不得超过55周岁
  //期满投保人年龄不能大于65周岁
  var state = getState();
  if (state.applicant.isParent === 1 && state.insured.age <= 18 && state.applicant.age <= 55 && state.applicant.age + (state.plainMain.year + 1) * 10 <= 65) {
    dispatch(checkWPAFee())
    dispatch(changeWPA('isShow', true))
  } else {
    dispatch(changeWPA('isShow', false))
    dispatch(changeWPA('isBuy', ''))
    dispatch(changeWPA('fee', ''))
  }
}

//投保信息发生变化，需要校验WPB是否满足投保条件
export const checkWPBShow = () => (dispatch, getState) => {
  //投保人年龄不得超过55周岁
  //期满投保人年龄不能大于65周岁
  var state = getState();
  if (state.applicant.age <= 55 && state.applicant.age + (state.plainMain.year + 1) * 10 <= 65) {
    dispatch(checkWPBFee())
    dispatch(changeWPB('isShow', true))
  } else {
    dispatch(changeWPB('isShow', false))
    dispatch(changeWPB('isBuy', ''))
    dispatch(changeWPB('fee', ''))
  }
}

//投保信息发生变化，需要校验WPB保费
export const checkWPBFee = () => (dispatch, getState) => {
  api.getZH_WX(getState(), 'wpb', msg => {
      if (msg.result === 1) {
        dispatch(changeWPB('fee', msg.wpb_count))
      } else {
        alert(msg.message);
      }
  })
}

//投保信息发生变化，需要校验WA是否满足投保条件
export const checkWAShow = () => (dispatch, getState) => {
  //被保人年龄须在18-55周岁之间
  //缴费期满时被保人年不得超过65周岁

  var state = getState();
  if (state.insured.age >= 18 && state.insured.age <= 55 && state.applicant.age + (state.plainMain.year + 1) * 10 <= 65) {
    dispatch(checkWAFee())
    dispatch(changeWA('isShow', true))
  } else {
    dispatch(changeWA('isShow', false))
    dispatch(changeWA('isBuy', ''))
    dispatch(changeWA('fee', ''))
  }
}


//投保信息发生变化，需要校验WA保费
export const checkWAFee = () => (dispatch, getState) => {
  api.getZH_WX(getState(), 'wa', msg => {
      if (msg.result === 1) {
        dispatch(changeWA('fee', msg.wa_count))
      } else {
        alert(msg.message);
      }
  })
}


//显示selector
export const showSelector = (target, index, list) => ({
  type: SHOW_SELECTOR,
  target,
  index,
  list,
})

//关闭选择器
export const closeSelector = () => ({
  type: CLOSE_SELECTOR,
})

//修改HRC_HRD的值
export const changeHRC_HRD = (item, val) => ({
  type: CHANGE_HRC_HRD,
  item,
  val,
})

//修改ADDC的值
export const changeADDC = (item, val) => ({
  type: CHANGE_ADDC,
  item,
  val,
})

//修改AMRC的值
export const changeAMRC = (item, val) => ({
  type: CHANGE_AMRC,
  item,
  val,
})

//修改WA的值
export const changeWA = (item, val) => ({
  type: CHANGE_WA,
  item,
  val,
})

//修改WPA的值
export const changeWPA = (item, val) => ({
  type: CHANGE_WPA,
  item,
  val,
})

//修改WPB的值
export const changeWPB = (item, val) => ({
  type: CHANGE_WPB,
  item,
  val,
})


//修改WP的值
export const changeWP = (item, val) => ({
  type: CHANGE_WP,
  item,
  val,
})

//生成计划书演示
export const generate = () => (dispatch, getState) => {
  var state = getState();
  if (state.plainMain.fee === '') {
    alert('尚未投保主险');
  } else if (state.insured.name === '') {
    alert('请填写被保人姓名');
  } else {
    var occu = state.insured.work;
    if (occu.length > 9) {
      occu = occu.substr(0, 9) + '...';
    }
   
    var hrefArr = [`./cifShare?workNum=${state.agent.workNum}&name=${state.insured.name}&age=${state.insured.age}&occu=${occu}&sex=${data.sex[state.insured.sex]}&coverage=${state.plainMain.coverage}&year=${(state.plainMain.year + 1) * 10}&fee=${state.plainMain.fee}&agent=${state.agent.name}&phone=${state.agent.phone}`];
    var amount = state.plainMain.fee - 0;
    //判断HRC_HRD
    if (state.HRC_HRD.fee !== '') {
      var str = '';
      if (state.HRC_HRD.hasSocialSecu === 1) {
        str = `&hrd=${state.HRC_HRD.fee}&plain=${data.HRC_HRD[state.HRC_HRD.index]}`;
      } else {
        str = `&hrc=${state.HRC_HRD.fee}&plain=${data.HRC_HRD[state.HRC_HRD.index]}`;
      }
      amount += (state.HRC_HRD.fee - 0);
      hrefArr.push(str);
    }

    //判断ADDC
    if (state.ADDC.fee !== '') {
      amount += (state.ADDC.fee - 0);
      hrefArr.push(`&addc=${state.ADDC.fee}`);
    }

    //判断AMRC
    if (state.AMRC.fee !== '') {
      amount += (state.AMRC.fee - 0);
      hrefArr.push(`&amrc=${state.AMRC.fee}`);
    }

    //判断WP
    if (state.WP.fee !== '') {
      hrefArr.push(`&wp=${state.WP.fee}`);
    }

    //判断WPA
    if (state.WPA.fee !== '') {
      hrefArr.push(`&wpa=${state.WPA.fee}`);
    }

    //判断WPB
    if (state.WPB.fee !== '') {
      hrefArr.push(`&wpb=${state.WPB.fee}`);
    }

    //判断WA
    if (state.WA.fee !== '') {
      hrefArr.push(`&wa=${state.WA.fee}`);
    }

    hrefArr.push(`&amount_fee=${amount}`);

    window.location.href = encodeURI(hrefArr.join(''));
  }
}