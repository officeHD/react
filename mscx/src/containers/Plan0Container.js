import { connect } from 'react-redux'
import { changeInsuranceCom, askOrders } from '../actions'
import Plan0 from '../components/Plan0'

const mapStateToProps = (state) => ({
  car: state.selectedCar,
})
  
const Plan0Container = connect(
  mapStateToProps,
)(Plan0)

export default Plan0Container