import { connect } from 'react-redux'
import { changePurchaseWay } from '../actions'
import PurchaseWaySwitcher from '../components/PurchaseWaySwitcher'

const mapStateToProps = (state) => ({
  purchaseWay: state.purchaseWay,
  car: state.selectedCar,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChoice0: () => {
    dispatch(changePurchaseWay(0))
  },
  onChoice1: () => {
    dispatch(changePurchaseWay(1))
  }
})
  
const PurchaseWaySwitcherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseWaySwitcher)

export default PurchaseWaySwitcherContainer
