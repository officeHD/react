import { connect } from 'react-redux'
import { changeEffectiveDate } from '../actions'
import Product from '../components/Product'

const mapStateToProps = (state) => ({
  effectiveDate: state.effectiveDate,
  expiryDate: state.expiryDate,
  justRead: state.step === 3,
})

const mapDispatchToProps = (dispatch) => ({
  onChangeEffectiveDate: (val) => {
    dispatch(changeEffectiveDate(val))
  }
})

const HolderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export default HolderContainer