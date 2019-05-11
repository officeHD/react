import { connect } from 'react-redux'
import { toggleShowParameter, goToStep } from '../actions'
import TitleBar from '../components/public/TitleBar'

const mapStateToProps = (state) => ({
  title: state.varietyData.title,
  step: state.step,
  staffId: state.staffmes.staffId,
  type: state.staffmes.inApp,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: () => {
    history.go(-1)
  }
})
  
const TitleBarDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarDetailContainer
