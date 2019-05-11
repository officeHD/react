import { connect } from 'react-redux'
import Order from '../components/Order'
 
const mapStateToProps = (state) => ({
  orderNo: state.orderData.orderNo,
  fee: state.varietyData.fee,
  payMent: state.varietyData.payMent,
  amnt: state.varietyData.amnt+"万",
   amount: state.amount
})

const HolderContainer = connect(
  mapStateToProps
)(Order)

export default HolderContainer