import { connect } from 'react-redux'
import { checkOrder, getRate } from '../actions'
import Step1 from '../components/Step1'

const mapStateToProps = (state) => ({
  fee: state.varietyData.fee
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(checkOrder())
  }
})

const Step1Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1)

export default Step1Container