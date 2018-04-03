import { connect } from 'react-redux'
import { checkHolder } from '../actions'
import Step1 from '../components/Step1'

const mapStateToProps = (state) => ({
  step: state.step,
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(checkHolder())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1)

export default Container