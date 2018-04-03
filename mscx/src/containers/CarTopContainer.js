import { connect } from 'react-redux'
import { showPrices, showBrands } from '../actions'
import CarTop from '../components/CarTop'

const mapStateToProps = (state) => ({
  car: state.selectedCar,
})
  
const CarTopContainer = connect(
  mapStateToProps
)(CarTop)

export default CarTopContainer
