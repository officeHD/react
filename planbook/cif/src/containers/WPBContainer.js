import { connect } from 'react-redux'
import { changeWPB, checkWPBFee } from '../actions'
import WPB from '../components/WPB'

const mapStateToProps = (state) => ({
  isShow: state.WPB.isShow,
  isBuy: state.WPB.isBuy,
  fee: state.WPB.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeWPB(item, val))
    if (val) {
      //如果投保，则获取保费
      dispatch(checkWPBFee())
    //如果不投保
    } else {
      dispatch(changeWPB('fee', ''))
    }
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(WPB)

export default OutPut
