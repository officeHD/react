import { combineReducers } from 'redux'
import data from './data.json';

import * as act from '../actions'

const carBaseList = data.carBaseList
const prices = data.prices
const brands = data.brands

//标题栏的标题
const title = (state = '车型选择', action) => {
  switch (action.type) {
    
    default:
      return state
  }
}


//显示价格区间选择框
const showPriceRange = (state = false, action) => {
  switch (action.type) {
    case act.SHOW_PRICES:
      return true
    case act.SHOW_BRANDS:
    case act.CHANGE_FILTER_OPTION:
      return false
    default:
      return state
  }
}

//显示品牌选择选择框
const showBrandRange = (state = false, action) => {
  switch (action.type) {
    case act.SHOW_BRANDS:
      return true
    case act.SHOW_PRICES:
    case act.CHANGE_FILTER_OPTION:
      return false
    default:
      return state
  }
}

//是否显示筛选条件列表
const showOptionList = (state = false, action) => {
  switch (action.type) {
    case act.SHOW_BRANDS:
    case act.SHOW_PRICES:
      return true
    case act.CHANGE_FILTER_OPTION:
      return false
    default:
      return state
  }
}

//当前的筛选类型
const selectedOptionId = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_FILTER_OPTION:
      return action.id
    default:
      return state
  }
}

//车型列表
const carList = (state = carBaseList, action) => {
  switch (action.type) {
    case act.CHANGE_FILTER_OPTION:
      switch(action.id) {
        case 0:
          return carBaseList
        case 1:
          return carBaseList.filter((car) => { return car.price <= 100000 })
        case 2:
          return carBaseList.filter((car) => { return (car.price > 100000 && car.price <= 150000)})
        case 3:
          return carBaseList.filter((car) => { return (car.price > 150000 && car.price <= 200000)})
        case 4:
          return carBaseList.filter((car) => { return car.price > 200000 })
        case 5:
          return carBaseList.filter((car) => { return car.brand === '标致' })
        case 6:
          return carBaseList.filter((car) => { return car.brand === '大众' })
        case 7:
          return carBaseList.filter((car) => { return car.brand === '广汽本田' })
        case 8:
          return carBaseList.filter((car) => { return car.brand === '起亚' })
        case 9:
          return carBaseList.filter((car) => { return car.brand === '日产' })
        case 10:
          return carBaseList.filter((car) => { return car.brand === '知鑫租' })
        case 11:
          return carBaseList.filter((car) => { return car.brand === '楼兰' })
      }

    default:
      return state
  }
}

//筛选条件列表
const optionList = (state = [], action) => {
  switch (action.type) {
    case act.SHOW_PRICES:
      return prices
    case act.SHOW_BRANDS:
      return brands
    default:
      return state
  }
}

//选择的车
const selectedCar = (state = {}, action) => {
  switch (action.type) {
    case act.CHOICE_CAR:
      return action.car
    default:
      return state
  }
}

//租赁方式（0=纯租赁，1=以租代购，2=只看不买）
const purchaseWay = (state = 0, action) => {
  switch (action.type) {
    case act.CHANGE_PURCHASE_WAY:
      return action.way
    case act.CHOICE_CAR:
      return 0
    default:
      return state
  }
}

//以租代购 选择的产品Id
const productId = (state = 1, action) => {
  switch (action.type) {
    case act.CHOICE_PRODUCT:
      return action.id
    case act.CHOICE_CAR:
      return 1
    default:
      return state
  }
}

//显示参数表
const showParameter = (state = false, action) => {
  switch (action.type) {
    case act.TOGGLE_SHOW_PARAMETER:
      return !state
    case act.CHANGE_PURCHASE_WAY:
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  title,
  carList,
  optionList,
  showPriceRange,
  showBrandRange,
  showOptionList,
  selectedOptionId,
  selectedCar,
  purchaseWay,
  productId,
  showParameter,
})

export default rootReducer