import { combineReducers } from 'redux'
import * as act from '../actions'
import { dateToString } from '../api'
import data from './data.json'

//全国省信息数据库
let provincesDataBase = []

//城市信息数据库
let citiesDataBase = []

//区县信息数据库
let countiesDataBase = []

//步骤
const step = (state = 0, action) => {
  switch (action.type) {
    case act.GO_TO_STEP:
      return action.step > 0 ? action.step : 0
    case act.INIT_EDIT_DATA:
      return action.step
    default:
      return state
  }
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
//员工ID
const staffId = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_STAFF_ID:
      return action.id
    case act.INIT_EDIT_DATA:
      return action.entity.staffId
    default:
      return state
  }
}

//投保人类型，0=个人, 1=企业
const holderType = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_TYPE:
      return action.option
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.holderType - 1
    default:
      return state
  }
}

//起保日期
let dd = new Date();
dd.setDate(dd.getDate() + 1);//获取AddDayCount天后的日期 
let tomorrow = dateToString(dd);
const effectiveDate = (state = tomorrow, action) => {
  switch (action.type) {
    case act.CHANGE_EFFECTIVE_DATE:
      return action.val
    case act.INIT_EDIT_DATA:
      return action.entity.effectiveDate
    default:
      return state
  }
}

//保险止期
let dd2 = new Date()
dd2.setYear(dd2.getFullYear() + 1)
// dd2.setDate(dd2.getDate() - 1)
let oneYearStr = dateToString(dd2)

const expiryDate = (state = oneYearStr, action) => {
  switch (action.type) {
    case act.CHANGE_EFFECTIVE_DATE:
      let dd = new Date(action.val)
      dd.setYear(dd.getFullYear() + 1)
      dd.setDate(dd.getDate() - 1)
      let oneYear = dateToString(dd)
      return oneYear
    case act.INIT_EDIT_DATA:
      return action.entity.expiryDate
    default:
      return state
  }
}

//投保人姓名
const holderName = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_NAME:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        return action.entity.customerInfo.holderName
      }
      return state
    default:
      return state
  }
}

//投保人证件类型
const holderCertiType = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_CERTI_TYPE:
      return action.index
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        let index = 0;
        data.HolderCertiTypeValue.map((el, index2) => {
          if (el === action.entity.customerInfo.holderCertiType) {
              index = index2;
          }
        });
        return index
      }
      return state
    default:
      return state
  }
}

//投保人证件号
const holderCertiNo = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_NO:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        return action.entity.customerInfo.holderCertiNo
      }
      return state
    default:
      return state
  }
}

//投保人性别
const holderGender = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_GENDER:
      return action.index
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        let index = 0;
        data.HolderGenderValue.map((el, index2) => {
          if (el === action.entity.customerInfo.holderGender) {
              index = index2;
          }
        });
        return index
      }
      return state
    default:
      return state
  }
}

//投保人出生日期
const holderBirthday = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_BIRTHDAY:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        return action.entity.customerInfo.holderBirthday
      }
      return state
    default:
      return state
  }
}

//投保人电话
const holderPhone = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_PHONE:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        return action.entity.customerInfo.contactPhone
      }
    default:
      return state
  }
}

//投保人邮箱
const holderEmail = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_HOLDER_EMAIL:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 0) {
        return action.entity.customerInfo.contactEmail
      }
      return state
    default:
      return state
  }
}

//联系人姓名
const contactPeople = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_CONTACT_PEOPLE:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        return action.entity.customerInfo.contactPeople
      }
      return state
    default:
      return state
  }
}

//联系人电话
const contactPhone = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_CONTACT_PHONE:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        return action.entity.customerInfo.contactPhone
      }
    default:
      return state
  }
}

//联系人证件类型
const contactCertiType = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_CONTACT_CERTI_TYPE:
      return action.index
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        let index = 0;
        data.ContactCertiTypeValue.map((el, index2) => {
          if (el === action.entity.customerInfo.contactCertiType) {
              index = index2;
          }
        });
        return index
      }
      return state
    default:
      return state
  }
}

//联系人证件号码
const contactCertiNo = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_CONTACT_CERTI_NO:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) { 
        return action.entity.customerInfo.contactCertiNo
      }
      return state
    default:
      return state
  }
}

//联系人邮箱地址
const contactEmail = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_CONTACT_EMAIL:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        return action.entity.customerInfo.contactEmail
      }
      return state
    default:
      return state
  }
}

//投保公司名称
const companyName = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_COMPANY_NAME:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        return action.entity.customerInfo.holderName
      }
      return state
    default:
      return state
  }
}

//投保公司证件类型
const companyCertiType = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_COMPANY_CERTI_TYPE:
      return action.index
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        let index = 0;
        data.CompanyCertiTypeValue.map((el, index2) => {
          if (el === action.entity.customerInfo.holderCertiType) {
              index = index2;
          }
        });
        return index
      }
      return state
    default:
      return state
  }
}

//投保公司证件号码
const companyCertiNo = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_COMPANY_CERTI_NO:
      return action.val
    case act.INIT_EDIT_DATA:
      if (action.entity.customerInfo.holderType - 1 === 1) {
        return action.entity.customerInfo.holderCertiNo
      }
      return state
    default:
      return state
  }
}

//投保公司省代码
const companyProvinceCode = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_PROVINCE:
      return action.code
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactProvinceCode
    default:
      return state
  }
}

//投保公司市代码
const companyCityCode = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_CITY:
      return action.code
    case act.CHANGE_PROVINCE:
      return ''
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactCityCode
    default:
      return state
  }
}

//投保公司区县代码
const companyCountryCode = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_COUNTY:
      return action.code
    case act.CHANGE_PROVINCE:
      return ''
    case act.CHANGE_CITY:
      return ''
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactCountryCode
    default:
      return state
  }
}

//投保公司省名称
const companyProvinceName = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_PROVINCE:
      return action.name
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactProvinceName
    default:
      return state
  }
}

//投保公司市名称
const companyCityName = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_CITY:
      return action.name
    case act.CHANGE_PROVINCE:
      return ''
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactRegionName
    default:
      return state
  }
}

//投保公司区县名称
const companyCountryName = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_COUNTY:
      return action.name
    case act.CHANGE_PROVINCE:
      return ''
    case act.CHANGE_CITY:
      return ''
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactCountyName
    default:
      return state
  }
}

//投保公司详细地址
const companyAddress = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_COMPANY_ADDRESS:
      return action.val
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.contactAddress
    default:
      return state
  }
}

//车辆类型
const carType = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_CAR_TYPE:
      return action.index
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.carType - 1
    case act.INIT_CAR_DATA:
      return action.carInfo.carType - 1
    default:
      return state
  }
}

//车辆使用性质
const usingType = (state = 1, action) => {
  switch (action.type) {
    case act.CHANGE_USING_TYPE:
      return action.index
    case act.INIT_EDIT_DATA:
      let index = 0;
      data.UsingTypeValue.map((el, index2) => {
        if (el === action.entity.customerInfo.usingType) {
            index = index2;
        }
      });
      return index
    case act.INIT_CAR_DATA:
      return action.carInfo.usingType - 0
    default:
      return state
  }
}

//车辆座位数
const approvedSeats = (state = 3, action) => {
  switch (action.type) {
    case act.CHANGE_APPROVED_SEATS:
      return action.index
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.approvedSeats - 2
    case act.INIT_CAR_DATA:
      return action.carInfo.approvedSeats - 2
    default:
      return state
  }
}

//车架号
const vinNo = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_VIN_NO:
      return action.val
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.vinNo
    case act.INIT_CAR_DATA:
      return action.carInfo.vinNo
    default:
      return state
  }
}

//发动机号
const engineNumber = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_ENGINE_NUMBER:
      return action.val
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.engineNumber
    case act.INIT_CAR_DATA:
      return action.carInfo.engineNumber
    default:
      return state
  }
}

//车牌号
const plateNumber = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_PLATE_NUMBER:
      return action.val
    case act.INIT_EDIT_DATA:
      return action.entity.customerInfo.plateNumber
    default:
      return state
  }
}

//购买份数
const applyNum = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_APPLY_NUM:
      return action.index
    case act.INIT_EDIT_DATA:
      let index = 0;
      data.ApplyNum.map((el, index2) => {
        if (el === action.entity.applyNum - 0) {
            index = index2;
        }
      });
      return index
    default:
      return state
  }
}

//选择器是否显示
const showSelector = (state = false, action) => {
  switch (action.type) {
    case act.SHOW_SELECTOR:
      return true
    case act.CLOSE_SELECTOR:
      return false
    default:
      return state
  }
}

//选择器显示的选项
const selectorSelected = (state = '', action) => {
  switch (action.type) {
    case act.SHOW_SELECTOR:
      return action.index
    case act.CLOSE_SELECTOR:
      return ''
    default:
      return state
  }
}

//选择器选中的索引
const selectorOptions = (state = [], action) => {
  switch (action.type) {
    case act.SHOW_SELECTOR:
      return action.options
    case act.CLOSE_SELECTOR:
      return []
    default:
      return state
  }
}

//选择器的目标
const selectorTarget = (state = '', action) => {
  switch (action.type) {
    case act.SHOW_SELECTOR:
      return action.target
    case act.CLOSE_SELECTOR:
      return ''
    default:
      return state
  }
}

//<li>选择器是否显示
const showLiSelector = (state = false, action) => {
  switch (action.type) {
    case act.SHOW_LI_SELECTOR:
      return true
    case act.CLOSE_LI_SELECTOR:
      return false
    default:
      return state
  }
}

//<li>选择器选中的索引
const liSelectorSelected = (state = '', action) => {
  switch (action.type) {
    // case act.CHANGE_PROVINCE:
    //   console.log(action);
    //   return action.name
    case act.CLOSE_LI_SELECTOR:
      return ''
    default:
      return state
  }
}

//<li>选择器显示的选项
const liSelectorOptions = (state = [], action) => {
  switch (action.type) {
    case act.SHOW_LI_SELECTOR:
      let options = []
      switch (action.target) {
        case 'province':
          options = provincesDataBase
          break;
        case 'region' :
          options = citiesDataBase
          break;
        case 'county' :
          options = countiesDataBase
          break;
        default: 
          break;
      }
      return options
    case act.CLOSE_LI_SELECTOR:
      return []
    default:
      return state
  }
}

//<li>选择器的目标
const liSelectorTarget = (state = '', action) => {
  switch (action.type) {
    case act.SHOW_LI_SELECTOR:
      return action.target
    case act.CLOSE_LI_SELECTOR:
      return ''
    default:
      return state
  }
}

// 订单主键
const orderId = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_IDS:
      return action.orderId
    case act.INIT_EDIT_DATA:
      return action.entity.id
    default:
      return state
  }
}

// 投保人id
const holderId = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_IDS:
      return action.holderId
    case act.INIT_EDIT_DATA:
      return action.entity.holderId
    default:
      return state
  }
}

// 被保对象id
const insuerId = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_IDS:
      return action.insuerId
    case act.INIT_EDIT_DATA:
      return action.entity.insuerId
    default:
      return state
  }
}

// 订单号
const insuredId = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_IDS:
      return action.insuredId
    case act.INIT_EDIT_DATA:
      return action.entity.insuredId
    default:
      return state
  }
}

//支付跳转地址
const url = (state = '', action) => {
  switch (action.type) {
    case act.CHANGE_IDS:
      return action.url
    case act.INIT_EDIT_DATA:
      return action.entity.payUrl
    default:
      return state
  }
}


//打开遮罩层
const isLoading = (state = false, action) => {
  switch (action.type) {
    case act.CHANGE_IS_LOADING:
      return !state
    default:
      return state
  }
}

//是否是编辑页面
const isEdit = (state = false, action) => {
  switch(action.type) {
    case act.CHANGE_IS_EDIT:
      return !state
    default:
      return state
  }
}

const provincesData = (state = [], action) => {
  switch (action.type) {
    case act.INIT_PROVINCE_DATA:
      provincesDataBase = action.obj
      return action.obj
    default:
      return state
  }
}

const citiesData = (state = [], action) => {
  switch (action.type) {
    case act.INIT_CITY_DATA:
      citiesDataBase = action.obj
      return action.obj
    default:
      return state
  }
}

const countiesData = (state = [], action) => {
  switch (action.type) {
    case act.INIT_COUNTY_DATA:
      countiesDataBase = action.obj
      return action.obj
    case act.CHANGE_PROVINCE:
      countiesDataBase = []
      return []
    default:
      return state
  }
}


const rootReducer = combineReducers({
  step,
  type,
  staffId,
  effectiveDate,
  expiryDate,
  holderType,
  holderCertiType,
  holderCertiNo,
  holderName,
  holderBirthday,
  holderGender,
  holderPhone,
  holderEmail,
  contactPeople,
  contactCertiType,
  contactCertiNo,
  contactPhone,
  contactEmail,
  companyName,
  companyCertiType,
  companyCertiNo,
  companyProvinceCode,
  companyCityCode,
  companyCountryCode,
  companyProvinceName,
  companyCityName,
  companyCountryName,
  companyAddress,
  carType,
  usingType,
  approvedSeats,
  vinNo,
  engineNumber,
  plateNumber,
  applyNum,
  showSelector,
  selectorSelected,
  selectorOptions,
  selectorTarget,
  showLiSelector,
  liSelectorSelected,
  liSelectorOptions,
  liSelectorTarget,
  effectiveDate,
  orderId,
  holderId,
  insuerId,
  insuredId,
  url,
  isLoading,
  isEdit,
  provincesData,
  citiesData,
  countiesData,
})

export default rootReducer