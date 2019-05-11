import { connect } from 'react-redux'
import { apply } from '../actions'
import Step2 from '../components/Step2'

const mapStateToProps = (state) => ({
  fee: state.risksData.prem
})
const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(apply());
  }
})

const Step2Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2)

export default Step2Container