import { connect } from 'react-redux'
import { toggleShowParameter } from '../actions'
import TitleBar from '../components/TitleBar'

const mapStateToProps = (state) => ({
  title: state.selectedCar.name,
  more: true,
  showParameter: state.showParameter,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: () => {
    location.href = '#/'
  },
  onToggle: () => {
    dispatch(toggleShowParameter())
  }
})
  
const TitleBarDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarDetailContainer
