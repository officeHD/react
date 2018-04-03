import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Parameters from '../components/Parameters'
import Plan0Container from './Plan0Container'
import Plan1Container from './Plan1Container'
import Plan2Container from './Plan2Container'

const RentPlanContainer = ({ purchaseWay, showParameter, parameter, type }) => {
  
  //如果是显示车辆参数
  if (showParameter) {
    return <Parameters parameter={parameter}/>
  }

  //如果是只看不卖的车
  if (type === 2) { 
    return <Plan2Container />
  }

  //以租代购 或者 纯租赁
  switch (purchaseWay) {
    case 0:
      return <Plan0Container />
    case 1:
      return <Plan1Container />
    default:
      return null
  }
  
}

const mapStateToProps = state => ({
  purchaseWay: state.purchaseWay,
  showParameter: state.showParameter,
  parameter: state.selectedCar.parameter,
  type: state.selectedCar.type,
})

export default connect(
  mapStateToProps,
)(RentPlanContainer)
