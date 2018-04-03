import { connect } from 'react-redux'
import { changeWA, checkWAFee } from '../actions'
import WA from '../components/WA'

const mapStateToProps = (state) => ({
  isShow: state.WA.isShow,
  isBuy: state.WA.isBuy,
  fee: state.WA.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeWA(item, val))
    if (val) {
      //如果投保，则获取保费
      dispatch(checkWAFee())

    //如果不投保
    } else {
      dispatch(changeWA('fee', ''))
    }
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(WA)

export default OutPut
