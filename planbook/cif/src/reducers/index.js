import { combineReducers } from 'redux'
import * as act from '../actions'

//初始化的被保人
let i_insured = {
  name: '',
  age: '',
  sex: 0,   //0表男，1表示女
  work: '',   //职业类别名称
  life: '',  //寿险
  accident: '',   //意外险
  hospital: '',   //住院医疗

}

//初始化的投保人
let i_applicant = {
  name: '',
  age: '',
  sex: 0,   //0表男，1表示女
  work: '',   //职业类别名称
  life: '',  //寿险
  accident: '',   //意外险
  hospital: '',   //住院医疗
  isParent: 0, //1是被保人的父母，0不是被保人的父母
  asInsured: true,   //true同被保人，fasle,不同投保人
}

//初始化的职业选择框
let i_occupation = {
  isShow: false,    //默认不显示
  step: 0,    //选择行业，step=0，选择职业，step=1
  ind: '',    //行业的名称
  forPerson: 0    //0被保人，1投保人
}

//初始化的主险计划
let i_plainMain = {
  year: 0,   //只有十年（0）和 二十年（1） 两种
  coverage: '',    //保额
  fee: '',   //保费
}

//初始HRC、HRD
let i_HRC_HRD = {
  isFirst: 1,   //1=是第一次，0=不是第一次
  hasSocialSecu: 0, //0没有社保或新农合，1有社保和新农合
  index: 0,   //0=不投保,1=计划一,2=计划二,3=计划三,4=计划四,5=计划五,6=计划六,
  fee: '',    //保费
}

//初始化的代理人
let i_agent = {
  name: '',
  phone: '',
  workNum:''
}

//初始化的selector
let i_selector = {
  isShow: false,
  target: '',
  list: [],
  index: 0,
}

//初始化的ADDC
let i_ADDC_AMRC = {
  isShow: false,    //是否显示
  coverage: '',   //保额
  fee: '',    //附加保费
}

//初始化的w类附加险
let i_W = {
  isShow: false,    //是否可以显示并投保
  isBuy: '',   //是否购买，0=否，1=是
  fee: '',    //附加保费
}
//运行环境
const type = (state = true, action) => {
  switch(action.type) {
    case act.CHANGE_TYPE:
      return !state
    default:
      return state
  }
}
//被保人
const insured = (state = i_insured, action) => {
  switch (action.type) {
    case act.CHANGE_INSURED:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//投保人
const applicant = (state = i_applicant, action) => {
  switch (action.type) {
    case act.CHANGE_APPLICANT:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//保险代理人
const agent = (state = i_agent, action) => {
  switch (action.type) {
    case act.CHANGE_AGENT:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//主险投保计划
const plainMain = (state = i_plainMain, action) => {
  switch (action.type) {
    case act.CHANGE_PLAIN_MAIN:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//HRC_HRD投保计划
const HRC_HRD = (state = i_HRC_HRD, action) => {
  switch (action.type) {
    case act.CHANGE_HRC_HRD:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//ADDC投保计划
const ADDC = (state = i_ADDC_AMRC, action) => {
  switch (action.type) {
    case act.CHANGE_ADDC:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//AMRC投保计划
const AMRC = (state = i_ADDC_AMRC, action) => {
  switch (action.type) {
    case act.CHANGE_AMRC:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//WA投保计划
const WA = (state = i_W, action) => {
  switch (action.type) {
    case act.CHANGE_WA:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//WPA投保计划
const WPA = (state = i_W, action) => {
  switch (action.type) {
    case act.CHANGE_WPA:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//WPB投保计划
const WPB = (state = i_W, action) => {
  switch (action.type) {
    case act.CHANGE_WPB:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//WP投保计划
const WP = (state = i_W, action) => {
  switch (action.type) {
    case act.CHANGE_WP:
      return { ...state, [action.item]: action.val}
    default:
      return state
  }
}

//职业类别选择器
const occupation = (state = i_occupation, action) => {
  switch (action.type) {
    case act.CHANGE_OCCUPATION_SHOW:
      return { ...state, isShow: !state.isShow, forPerson: action.forPerson || 0}
    case act.CHOICE_IND:
      return { ...state, ind: action.ind, step: 1 }
    case act.GO_BACK_STEP:
      return { ...state, step: 0}
    default:
      return state
  }
}

//selector选择器
const selector = (state = i_selector, action) => {
  switch (action.type) {
    case act.SHOW_SELECTOR :
      return {isShow: true, target: action.target, index: action.index, list: action.list}
    case act.CLOSE_SELECTOR :
      return { ...state, isShow: false}
    default:
      return state
  }
}


//打开遮罩层
const isLoading = (state = false, action) => {
  switch (action.type) {
    case act.CHANGE_IS_LOADING:
      return !state
    case act.SHOW_SELECTOR:
      return true
    case act.CLOSE_SELECTOR :
      return false
    default:
      return state
  }
}



const rootReducer = combineReducers({
  insured,
  type,
  applicant,
  agent,
  occupation,
  isLoading,
  plainMain,
  HRC_HRD,
  ADDC,
  AMRC,
  WA,
  WPA,
  WPB,
  WP,
  selector,
})

export default rootReducer