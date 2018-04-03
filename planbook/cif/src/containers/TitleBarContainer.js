import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'

const mapStateToProps = (state) => ({
  title: 'CIF计划书',
   type: state.type,
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
