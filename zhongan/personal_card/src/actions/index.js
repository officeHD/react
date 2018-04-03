import * as api from '../api'
import data from '../reducers/data.json'

 
export const GO_TO_STEP = 'GO_TO_STEP'
export const CHANGE_TYPE = 'CHANGE_TYPE'
export const CHANGE_HOLDER_NAME = 'CHANGE_HOLDER_NAME'
export const CHANGE_HOLDER_CERTI_TYPE = 'CHANGE_HOLDER_CERTI_TYPE'
export const CHANGE_HOLDER_NO = 'CHANGE_HOLDER_NO'
export const CHANGE_HOLDER_GENDER = 'CHANGE_HOLDER_GENDER'
export const CHANGE_HOLDER_BIRTHDAY = 'CHANGE_HOLDER_BIRTHDAY'
export const CHANGE_HOLDER_PHONE = 'CHANGE_HOLDER_PHONE'
export const CHANGE_HOLDER_EMAIL = 'CHANGE_HOLDER_EMAIL'
export const CHANGE_INSURANT_NAME = 'CHANGE_INSURANT_NAME'
export const CHANGE_INSURANT_CERTI_TYPE = 'CHANGE_INSURANT_CERTI_TYPE'
export const CHANGE_INSURANT_NO = 'CHANGE_INSURANT_NO'
export const CHANGE_INSURANT_GENDER = 'CHANGE_INSURANT_GENDER'
export const CHANGE_INSURANT_BIRTHDAY = 'CHANGE_INSURANT_BIRTHDAY'
export const CHANGE_INSURANT_PHONE = 'CHANGE_INSURANT_PHONE'
export const CHANGE_INSURED_RELA_TO_HOLDER = 'CHANGE_INSURED_RELA_TO_HOLDER'
export const CHANGE_APPLY_NUM = 'CHANGE_APPLY_NUM'
export const SHOW_SELECTOR = 'SHOW_SELECTOR'
export const CLOSE_SELECTOR = 'CLOSE_SELECTOR'
export const CHANGE_CONTACT_CERTI_TYPE = 'CHANGE_CONTACT_CERTI_TYPE'
export const CHANGE_CAR_TYPE = 'CHANGE_CAR_TYPE'
export const CHANGE_USING_TYPE = 'CHANGE_USING_TYPE'
export const CHANGE_APPROVED_SEATS = 'CHANGE_APPROVED_SEATS'
export const CHANGE_EFFECTIVE_DATE = 'CHANGE_EFFECTIVE_DATE'
export const CHANGE_IDS = 'CHANGE_IDS'
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING'
export const CHANGE_STAFF_ID = 'CHANGE_STAFF_ID'
export const INIT_PROVINCE_DATA = 'INIT_PROVINCE_DATA'
export const INIT_CITY_DATA = 'INIT_CITY_DATA'
export const INIT_COUNTY_DATA = 'INIT_COUNTY_DATA'
export const SHOW_LI_SELECTOR = 'SHOW_LI_SELECTOR'
export const CLOSE_LI_SELECTOR = 'CLOSE_LI_SELECTOR'
export const CHANGE_PROVINCE = 'CHANGE_PROVINCE'
export const CHANGE_CITY = 'CHANGE_CITY'
export const CHANGE_COUNTY = 'CHANGE_COUNTY'
export const INIT_EDIT_DATA = 'INIT_EDIT_DATA'
export const CHANGE_BALANCE = 'CHANGE_BALANCE'
export const CHANGE_IS_ZA_CASHIER = 'CHANGE_IS_ZA_CASHIER'
export const CHANGE_IS_OTHER_WAY = 'CHANGE_IS_OTHER_WAY'
export const CHANGE_PERSON_PREMIUM = 'CHANGE_PERSON_PREMIUM'
export const CHANGE_CARDS = 'CHANGE_CARDS'
export const CHANGE_IS_EDIT = 'CHANGE_IS_EDIT'
export const CHANGE_OCCUPATION_SHOW = 'CHANGE_OCCUPATION_SHOW'
export const GO_BACK_STEP = 'GO_BACK_STEP'
export const CHOICE_IND = 'CHOICE_IND'
export const CLICK_JOB = 'CLICK_JOB'
export const CLOSE_OCCUPATION_SHOW = 'CLOSE_OCCUPATION_SHOW'



//步骤间跳转
export const goToStep = (step) => ({
  type: GO_TO_STEP,
  step,
})


//修改起保日期
export const changeEffectiveDate = (val) => ({
  type: CHANGE_EFFECTIVE_DATE,
  val,
})

//改变投保人姓名
export const changeHolderName = (val) => ({
  type: CHANGE_HOLDER_NAME,
  val,
})

//修改投保人证件类型
export const changeHolderCertiType = (index) => ({
  type: CHANGE_HOLDER_CERTI_TYPE,
  index,
})

//修改投保人证件号
export const changeHolderNo = (val) => ({
  type: CHANGE_HOLDER_NO,
  val,
})

//修改投保人出生日期
export const changeHolderBirthday = (val) => ({
  type: CHANGE_HOLDER_BIRTHDAY,
  val,
})

//修改投保人性别
export const changeHolderGender = (index) => ({
  type: CHANGE_HOLDER_GENDER,
  index,
})

//修改投保人电话
export const changeHolderPhone = (val) => ({
  type: CHANGE_HOLDER_PHONE,
  val,
})

//修改投保人邮箱
export const changeHolderEmail = (val) => ({
  type: CHANGE_HOLDER_EMAIL,
  val,
})

//检查投保人数据有效性
export const checkHolder = () => (dispatch, getState) => {
  let state = getState();
  if(api.checkData('投保人姓名', state.holderName) && api.checkData('投保人证件号码', state.holderCertiNo) && api.checkData('投保人出生日期', state.holderBirthday) && api.checkData('投保人电话', state.holderPhone) && (state.holderEmail === '' ||  api.checkData('投保人邮箱', state.holderEmail))) {
    dispatch(goToStep(2));
    window.location.href = '#/step2';
  }
}

//改变被保人姓名
export const changeInsurantName = (val) => ({
  type: CHANGE_INSURANT_NAME,
  val,
})

//修改被保人证件类型
export const changeInsurantCertiType = (index) => ({
  type: CHANGE_INSURANT_CERTI_TYPE,
  index,
})

//修改被保人证件号
export const changeInsurantNo = (val) => ({
  type: CHANGE_INSURANT_NO,
  val,
})

//修改被保人出生日期
export const changeInsurantBirthday = (val) => ({
  type: CHANGE_INSURANT_BIRTHDAY,
  val,
})

//修改被保人性别
export const changeInsurantGender = (index) => ({
  type: CHANGE_INSURANT_GENDER,
  index,
})

//修改被保人电话
export const changeInsurantPhone = (val) => ({
  type: CHANGE_INSURANT_PHONE,
  val,
})

//修改被保人与投保人关系
export const changeInsuredRelaToHolder = (index) => ({
  type: CHANGE_INSURED_RELA_TO_HOLDER,
  index,
})

//检查被保人数据有效性
export const checkInsurant = () => (dispatch, getState) => {
  let state = getState();
  if (state.occupation.occupationCategoryName === '') {
    alert('投保人职业类别 不得为空！')
  } else if (state.insuredRelaToHolder === 0) {
    dispatch(goToStep(3));
    window.location.href = '#/step3';
  } else if (api.checkData('被保人姓名', state.insurantName) && api.checkData('被保人证件号码', state.insurantCertiNo) && api.checkData('被保人出生日期', state.insurantBirthday) && api.checkData('被保人电话', state.insurantPhone)) {
    dispatch(goToStep(3));
    window.location.href = '#/step3';
  }
}

//检查安康守护卡 卡号和密码的数据有效性
export const checkAnKang = () => (dispatch, getState) => {
  let state = getState();
  let cardsNum = data.ApplyNum[state.applyNum] - state.personPremium / 100
  var flag = true;
  for (let i = 0; i < cardsNum; i++) {
    if (!api.checkData(`第${i + 1}张卡单卡号`, state.cards[i].insuranceId) || !api.checkData(`第${i + 1}张卡单密码`, state.cards[i].password )) {
      flag = false;
    }
  }
  if (flag) {
    dispatch(submitCards());
  }
}
 

//修改购买份数
export const changeApplyNum = (index) => ({
  type: CHANGE_APPLY_NUM,
  index,
})

//打开选择器
export const showSelector = (options, index, target) => ({
  type: SHOW_SELECTOR,
  options,
  index,
  target,
})

//关闭选择器
export const closeSelector = () => ({
  type: CLOSE_SELECTOR,
})

//从后端获取的订单id、投保人id、被保对象id、订单号
export const changeIds = (orderId, holderId, insuerId, insuredId, url, policyNo) => ({
  type: CHANGE_IDS,
  orderId,
  holderId,
  insuerId,
  insuredId,
  url,
  policyNo,
})

//更改遮罩层的显示
export const changeIsLoading = () => ({
  type: CHANGE_IS_LOADING,
})

//更改员工id
export const changeStaffId = (id) => ({
  type: CHANGE_STAFF_ID,
  id,
})

//获取钱包账户余额
export const getBalance = () => (dispatch, getState) => {
  dispatch(changeIsLoading())
  api.getBalance(getState(), msg => {
    dispatch(changeIsLoading())
    if (msg.result === 1) {
        dispatch(goToStep(4))
        dispatch(changeBalance((msg.remainingSum).toFixed(2)))
        window.location.href = '#/step4'
      }else{
        alert(msg.message)
      }
  })
}

//改变钱包账户余额
export const changeBalance = (ba) => ({
  type: CHANGE_BALANCE,
  ba,
})

//改变是否显示众安收银台
export const changeIsZACashier = () => ({
  type: CHANGE_IS_ZA_CASHIER,
})

//改变是否显示其他支付方式
export const changeIsOtherWay = () => ({
  type: CHANGE_IS_OTHER_WAY,
})

//改变个人钱包支付金额
export const changePersonPremium = (val) => ({
  type: CHANGE_PERSON_PREMIUM,
  val,
})


//发送数据到后端，众安收银台要传paymentWay = 0
export const sendData = () => (dispatch, getState) => {
  
  if (getState().isZACashier) {
    dispatch(changeIsLoading())
    api.sendData(getState(), 0, msg => {
      dispatch(changeIsLoading())
      dispatch(changeIds(msg.orderId, msg.holderId, msg.insuerId, msg.insuredId, msg.url, msg.policyNo))
      if (msg.result !== 1) {
        alert(msg.message)
        //如果是订单超过24小时失效，则页面要回到订单列表页面
        if ((msg.message).indexOf('该订单已超过24小时未支付,订单已失效！') >= 0) {
          window.location.href = `../app_order_list?staffId=${msg.staffId}`
        }
        
      }
    })
  }
}
 
//发送数据到后端，钱包+卡单 要传paymentWay = 1
export const sendData2 = () => (dispatch, getState) => {
  dispatch(changeIsLoading())
  api.sendData(getState(), 1, msg => {
      dispatch(changeIds(msg.orderId, msg.holderId, msg.insuerId, msg.insuredId, msg.url, msg.policyNo))
      if (msg.result === 1) {
        api.goToPayNormal(getState())
      }else{
        dispatch(changeIsLoading())
        alert(msg.message)
        //如果是订单超过24小时失效，则页面要回到订单列表页面
        if ((msg.message).indexOf('该订单已超过24小时未支付,订单已失效！') >= 0) {
          window.location.href = `../app_order_list?staffId=${msg.staffId}`
        }
      }
  })
}

//修改是否是编辑页面
export const changeIsEdit = () => ({
  type: CHANGE_IS_EDIT,
})
//运行环境
export const changeType = () => ({
  type: CHANGE_TYPE,
  
})

//初始化数据
export const initData = () => (dispatch, getState) => {
  let id = api.getDataFromUrl('id')
  let step = window.location.hash.split('step')[1] - 0;
  
  //有订单ID说明是编辑页面,并标记为编辑状态，最后step1返回时返回到订单列表页
  if (id) {
    dispatch(changeIsEdit())
    api.getEditDate(getState(), id,  msg => {
      if (msg.result === 1) {
        dispatch(initEditData(msg.entity, step))
        //如果是step4,则还要获取人员的staffId
        if (step === 4) {
          api.getBalance(getState(), msg => {
             if (msg.result === 1) {
              dispatch(changeBalance((msg.remainingSum).toFixed(2)))
            } else {
              alert(msg.message)
            }
          })
        }
        
      } else {
        alert(msg.message)
      }
    })

  } else {
    dispatch(changeStaffId(api.getDataFromUrl('staffId')))
    let type=api.getDataFromUrl('type')
    if(type){
      dispatch(changeType())
    }
    
  }
}

//初始化编辑数据
export const initEditData = (entity, step) => ({
  type: INIT_EDIT_DATA,
  entity,
  step,
})

//显示<Li>选择器
export const showLiSelector = (target) => ({
  type: SHOW_LI_SELECTOR,
  target,
})

//关闭<Li>选择器
export const closeLiSelector = () => ({
  type: CLOSE_LI_SELECTOR,
})

//输入安康守护卡的卡号和密码
export const changeCards = (index, item ,val) => ({
  type: CHANGE_CARDS,
  index, 
  item,
  val,
})

//提交其他支付方式
export const submitCards = () => (dispatch, getState) => {
  dispatch(changeIsLoading())
  api.submitCards(getState(), msg => {
      dispatch(changeIsLoading())
      if (msg.result === 1) {
        dispatch(sendData2())
      }else{
        alert(msg.message)
      }
  })
}

//显示职业类别选择器
export const changeOccupationShow = () => ({
  type: CHANGE_OCCUPATION_SHOW,
})

//显示职业类别选择器
export const closeOccupationShow = () => ({
  type: CLOSE_OCCUPATION_SHOW,
})

//返回选择行业
export const goBackStep = () => ({
  type: GO_BACK_STEP,
})

//选择则了一个行业
export const choiceInd = (index) => ({
  type: CHOICE_IND,
  index,
})

//选择了一个职业
export const clickJob = (occuName, occuClass) => ({
  type: CLICK_JOB,
  occuName,
  occuClass,
})

