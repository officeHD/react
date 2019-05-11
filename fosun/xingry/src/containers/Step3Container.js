import { connect } from 'react-redux'
import { payOrder } from '../actions'
import Step3 from '../components/Step3'

const mapStateToProps = (state) => ({
  payType:state.payData.payType,
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: (payType) => {
    dispatch(payOrder(payType))
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3)

export default Container