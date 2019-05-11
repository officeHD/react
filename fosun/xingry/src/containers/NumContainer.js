import { connect } from 'react-redux'
import { showSelector } from '../actions'
import Num from '../components/Num'

const mapStateToProps = (state) => ({
  applyNum: state.applyNum,
  carType: state.carType,
  usingType: state.usingType,
})

const mapDispatchToProps = (dispatch) => ({
  onShowSelector: (options, index, target) => {
    dispatch(showSelector(options, index, target))
  }
})

const NumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Num)

export default NumContainer