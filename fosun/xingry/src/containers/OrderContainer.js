import { connect } from 'react-redux'
import Order from '../components/Order'
 
const mapStateToProps = (state) => ({
  orderNo: state.orderData.orderNo,
  varietyData: state.varietyData 
})

const HolderContainer = connect(
  mapStateToProps
)(Order)

export default HolderContainer