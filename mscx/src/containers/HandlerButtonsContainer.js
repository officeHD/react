import { connect } from 'react-redux'
import HandlerButtons from '../components/HandlerButtons'

const toAPP = (travelType, travelWay, car, packageId) => {
  /*
    if (企业) {
      进入第三页面
    } else {
      if (以租代购 && 不满足三条件) {
        进入多的页面
      } else {
        进入少的页面
      }
    }

  */

  //默认是企业的
  let type = 2

  //如果是个人的，判断多还是少
  if (travelType === 0) {
    let plan = car.plan[packageId - 1]
    let loan = car.bao - plan.startPayment
    let startRatio = plan.startRatio
    let flag = (loan < 600000 && startRatio > 30) || (loan >= 60000 && loan < 90000 && startRatio > 40) || (loan >= 90000 && loan < 120000 && startRatio > 50)
    if (travelWay === 1 && !flag) {
      type = 1
    } else {
      type = 0
    }
  }

  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  
  if (isAndroid && window.minsheng) {
    //type(0=不需要流水和房产，1=需要, 2=企业)
    //travelType(0=个人，1=企业)
    //travelWay(0=纯租赁，1=以租代购)
    //car.id(车型id)
    //packageId(分期产品id)
    window.minsheng.toUpload(type, travelType, travelWay, car.id, packageId)
  } else if (isiOS) {
    window.location.href = `sn://clickUpload?${type}&${travelType}&${travelWay}&${car.id}&${packageId}`;
  } else {
    alert('需在民盛保险APP中使用');
  }
}

const mapStateToProps = (state) => ({
  purchaseWay: state.purchaseWay,
  car: state.selectedCar,
  productId: state.productId,
  showParameter: state.showParameter,
})

const mapDispatchToProps = (dispatch, state) => ({
  onEnterpriseBuy: (travelWay, car, packageId) => {
    toAPP(1, travelWay, car, packageId)
  },
  onPersonBuy: (travelWay, car, packageId) => {
    toAPP(0, travelWay, car, packageId)
  }
})
  
const HandlerButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HandlerButtons)

export default HandlerButtonsContainer
