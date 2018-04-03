import { connect } from 'react-redux'
import { toggleShowParameter, goToStep } from '../actions'
import TitleBar from '../components/TitleBar'

const mapStateToProps = (state) => ({
  title: '驾乘意外伤害险',
  step: state.step,
    staffId: state.staffId,
  type: state.type,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: (toStep, isEdit, staffId) => {
    dispatch(goToStep(toStep))
    let step = toStep > 0 ? 'step' + toStep : ''
    location.href = '#/' + step
  }
})
  
const TitleBarDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarDetailContainer
