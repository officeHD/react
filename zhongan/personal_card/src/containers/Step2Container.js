import { connect } from 'react-redux'
import { checkInsurant } from '../actions'
import Step2 from '../components/Step2'

const mapStateToProps = (state) => ({
  step: state.step,
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(checkInsurant())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2)

export default Container