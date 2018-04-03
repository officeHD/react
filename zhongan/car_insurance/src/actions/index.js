import * as api from '../api'

export const GO_TO_STEP = 'GO_TO_STEP'
export const CHANGE_TYPE = 'CHANGE_TYPE'
export const CHANGE_HOLDER_TYPE = 'CHANGE_HOLDER_TYPE'
export const CHANGE_HOLDER_NAME = 'CHANGE_HOLDER_NAME'
export const CHANGE_HOLDER_CERTI_TYPE = 'CHANGE_HOLDER_CERTI_TYPE'
export const CHANGE_HOLDER_NO = 'CHANGE_HOLDER_NO'
export const CHANGE_HOLDER_GENDER = 'CHANGE_HOLDER_GENDER'
export const CHANGE_HOLDER_BIRTHDAY = 'CHANGE_HOLDER_BIRTHDAY'
export const CHANGE_HOLDER_PHONE = 'CHANGE_HOLDER_PHONE'
export const CHANGE_HOLDER_EMAIL = 'CHANGE_HOLDER_EMAIL'
export const CHANGE_CONTACT_PEOPLE = 'CHANGE_CONTACT_PEOPLE'
export const CHANGE_CONTACT_PHONE = 'CHANGE_CONTACT_PHONE'
export const CHANGE_CONTACT_CERTI_NO = 'CHANGE_CONTACT_CERTI_NO'
export const CHANGE_COMPANY_NAME = 'CHANGE_COMPANY_NAME'
export const CHANGE_COMPANY_CERTI_TYPE = 'CHANGE_COMPANY_CERTI_TYPE'
export const CHANGE_COMPANY_CERTI_NO = 'CHANGE_COMPANY_CERTI_NO'
export const CHANGE_COMPANY_ADDRESS = 'CHANGE_COMPANY_ADDRESS'
export const CHANGE_CONTACT_EMAIL = 'CHANGE_CONTACT_EMAIL'
export const CHANGE_VIN_NO = 'CHANGE_VIN_NO'
export const CHANGE_ENGINE_NUMBER = 'CHANGE_ENGINE_NUMBER'
export const CHANGE_PLATE_NUMBER = 'CHANGE_PLATE_NUMBER'
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
export const INIT_CAR_DATA = 'INIT_CAR_DATA'
export const CHANGE_IS_EDIT = 'CHANGE_IS_EDIT'

//步骤间跳转
export const goToStep = (step) => ({
  type: GO_TO_STEP,
  step,
})

//改变投保人类型
export const changeHolderType = (option) => ({
  type: CHANGE_HOLDER_TYPE,
  option,
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

//次改投保人证件类型
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

//修改联系人姓名
export const changeContactPeople = (val) => ({
  type: CHANGE_CONTACT_PEOPLE,
  val,
})

//修改联系人电话
export const changeContactPhone = (val) => ({
  type: CHANGE_CONTACT_PHONE,
  val,
})

//修改企业证件类型
export const changeContactCertiType = (index) => ({
  type: CHANGE_CONTACT_CERTI_TYPE,
  index,
})


//修改企业证件号码
export const changeContactCertiNo = (val) => ({
  type: CHANGE_CONTACT_CERTI_NO,
  val,
})

//修改联系人联系邮箱
export const changeContactEmail = (val) => ({
  type: CHANGE_CONTACT_EMAIL,
  val,
})

//修改投保公司名称
export const changeCompanyName = (val) => ({
  type: CHANGE_COMPANY_NAME,
  val,
})

//修改投保公司证件号码
export const changeCompanyCertiNo = (val) => ({
  type: CHANGE_COMPANY_CERTI_NO,
  val,
})

//修改投保公司详细地址
export const changeCompanyCertiType = (index) => ({
  type: CHANGE_COMPANY_CERTI_TYPE,
  index,
})

//修改投保公司详细地址
export const changeCompanyAddress = (val) => ({
  type: CHANGE_COMPANY_ADDRESS,
  val,
})


//修改车辆类型
export const changeCarType = (index) => ({
  type: CHANGE_CAR_TYPE,
  index,
})

//修改使用性质
export const changeUsingType = (index) => ({
  type: CHANGE_USING_TYPE,
  index,
})

//修改座位数
export const changeApprovedSeats = (index) => ({
  type: CHANGE_APPROVED_SEATS,
  index,
})

//修改车架号
export const changeVinNo = (val) => ({
  type: CHANGE_VIN_NO,
  val,
})

//修改发动机号
export const changeEngineNumber = (val) => ({
  type: CHANGE_ENGINE_NUMBER,
  val,
})

//修改车牌号
export const changePlateNumber = (val) => ({
  type: CHANGE_PLATE_NUMBER,
  val,
})

//通过车牌号获取车辆的信息
export const getCarData = () => (dispatch, getState) => {
  dispatch(changeIsLoading())
  api.getCarData(getState(), msg => {
      dispatch(changeIsLoading())
      if (msg.result === 1) {
        dispatch(initCarData(msg.carInfo))
      }
  })
}

//初始化车辆信息
export const initCarData = (carInfo) => ({
  type: INIT_CAR_DATA,
  carInfo,
})

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
export const changeIds = (orderId, holderId, insuerId, insuredId, url) => ({
  type: CHANGE_IDS,
  orderId,
  holderId,
  insuerId,
  insuredId,
  url,
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

//发送数据到后端
export const sendData = () => (dispatch, getState) => {
  dispatch(changeIsLoading())
  api.sendDate(getState(), msg => {
      dispatch(changeIsLoading())
      dispatch(changeIds(msg.orderId, msg.holderId, msg.insuerId, msg.insuredId, msg.url))
      if (msg.result === 1) {
        dispatch(goToStep(4))
        location.href = '#/step4'
      }else{
        alert(msg.message)
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
  api.getProvincesDate(getState(), msg => {
      dispatch(initProvinceData(msg))
  })
  let id = api.getDataFromUrl('id')
  let step = window.location.hash.split('step')[1] - 0;

  //有订单ID说明是编辑页面,并标记为编辑状态
  if (id) {
    dispatch(changeIsEdit())
    api.getEditDate(getState(), id,  msg => {
      if (msg.result === 1) {
        // window.location.href = '#/step1'
        dispatch(initEditData(msg.entity, step))
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

//初始化省数据
export const initProvinceData = (obj) => ({
  type: INIT_PROVINCE_DATA,
  obj,
})

//初始化市数据
export const initCityData = (obj) => ({
  type: INIT_CITY_DATA,
  obj,
})

//初始化区县数据
export const initCountyData = (obj) => ({
  type: INIT_COUNTY_DATA,
  obj,
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

//修改联系人的省
export const changeProvince = (name, code) => ({
  type: CHANGE_PROVINCE,
  name,
  code,
})

//修改联系人的市
export const changeCity = (name, code) => ({
  type: CHANGE_CITY,
  name,
  code,
})

//修改联系人的区县
export const changeCounty = (name, code) => ({
  type: CHANGE_COUNTY,
  name,
  code,
})

//获取市的数据
export const getCitiesDate = () => (dispatch, getState) => {
  api.getCitiesDate(getState(), msg => {
      dispatch(initCityData(msg))
  })
}

//获取区县的数据
export const getCountiesDate = () => (dispatch, getState) => {
  api.getCountiesDate(getState(), msg => {
      dispatch(initCountyData(msg))
  })
}

//检查被保车辆的数据有效性
export const checkCarData = () => (dispatch, getState) => {
  let state = getState();
  if (api.checkData('车牌号', state.plateNumber) && api.checkData('车架号', state.vinNo) && api.checkData('发动机号', state.engineNumber) ) {
    dispatch(goToStep(3));
    window.location.href = '#/step3';
  } 
}

//投保人为个人时，检查投保人数据有效性
export const checkAPersonData = () => (dispatch, getState) => {
  let state = getState();
  if (api.checkData('投保人姓名', state.holderName) && 
    api.checkData('证件号码', state.holderCertiNo) && 
    api.checkData('出生日期', state.holderBirthday) &&
    api.checkData('电话', state.holderPhone) &&
    (state.holderEmail === '' ? true : api.checkData('邮箱', state.holderEmail))
    ) {
    dispatch(goToStep(2));
    window.location.href = '#/step2';
  }
}

//投保人为企业时，检查投保人数据有效性
export const checkACompanyData = () => (dispatch, getState) => {
  let state = getState();
  if (api.checkData('企业名称', state.companyName) && 
      api.checkData('企业证件', state.companyCertiNo) && 
      api.checkNotEmpty('详细地址', state.companyAddress) &&

      api.checkData('联系人姓名', state.contactPeople) &&
      api.checkData('证件号码', state.contactCertiNo) &&
      api.checkData('联系人电话', state.contactPhone) &&
      (state.contactEmail === '' ? true : api.checkData('联系人邮箱', state.contactEmail))
      ) {
    dispatch(goToStep(2));
    window.location.href = '#/step2';
  }
}

//驾乘险检查是否可去支付
export const checkPayData = () => (dispatch, getState) => {
  dispatch(changeIsLoading());
  let state = getState();
  api.checkPayData(state, msg => {
    dispatch(changeIsLoading());
    if (msg.result === 1) {
      window.location.href = state.url;
    } else {
      alert(msg.message)
      //如果是订单超过24小时失效，则页面要回到订单列表页面
      if (msg.message === '该订单已超过24小时未支付,订单已失效！' || msg.message === '该订单已被处理,请从订单列表重新进入！' || msg.message === '该订单已从其他渠道处理！') {
        window.location.href = `./app_order_list?staffId=${msg.staffId}`
      }
    }
  })
}


