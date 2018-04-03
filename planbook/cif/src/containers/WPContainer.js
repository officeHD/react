import { connect } from 'react-redux'
import { changeWP, checkWPFee } from '../actions'
import WP from '../components/WP'

const mapStateToProps = (state) => ({
  isShow: state.WP.isShow,
  isBuy: state.WP.isBuy,
  fee: state.WP.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeWP(item, val))
    if (val) {
      //如果投保，则获取保费
      dispatch(checkWPFee())

    //如果不投保
    } else {
      dispatch(changeWP('fee', ''))
    }
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(WP)

export default OutPut
