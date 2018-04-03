import { connect } from 'react-redux'
import { changeWPA, checkWPAFee } from '../actions'
import WPA from '../components/WPA'

const mapStateToProps = (state) => ({
  isShow: state.WPA.isShow,
  isBuy: state.WPA.isBuy,
  fee: state.WPA.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeWPA(item, val))
    if (val) {
      //如果投保，则获取保费
      dispatch(checkWPAFee())

    //如果不投保
    } else {
      dispatch(changeWPA('fee', ''))
    }
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(WPA)

export default OutPut
