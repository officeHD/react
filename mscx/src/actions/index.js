import * as api from '../api'

export const SHOW_PRICES = 'SHOW_PRICES'
export const SHOW_BRANDS = 'SHOW_BRANDS'
export const CHANGE_FILTER_OPTION = 'CHANGE_FILTER_OPTION'
export const CHOICE_CAR = 'CHOICE_CAR'
export const CHANGE_PURCHASE_WAY = 'CHANGE_PURCHASE_WAY'
export const CHOICE_PRODUCT = 'CHOICE_PRODUCT'
export const TOGGLE_SHOW_PARAMETER = 'TOGGLE_SHOW_PARAMETER'

//点击价格区间，打开价格区间选项框
export const showPrices = () => ({
  type: SHOW_PRICES,
})

//点击品牌选择，打开品牌选择选项框
export const showBrands = () => ({
  type: SHOW_BRANDS,
})

//选择了不同的筛选标签
export const changeFilterOption = (id) => ({
  type: CHANGE_FILTER_OPTION,
  id,
})

//选了某车型，并打开详情页
export const choiceCar = (car) => ({
  type: CHOICE_CAR,
  car,
})

//改变租赁方式
export const changePurchaseWay = (way) => ({
  type: CHANGE_PURCHASE_WAY,
  way,
})

//改变选择的产品Id
export const choiceProduct = (id) => ({
  type: CHOICE_PRODUCT,
  id,
})

//切换显示参数表
export const toggleShowParameter = () => ({
  type: TOGGLE_SHOW_PARAMETER ,
})

//点击购买按钮之后
export const buy = (travelType) => ({
  type: BUY,
  travelType,
})
