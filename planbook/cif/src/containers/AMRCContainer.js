import { connect } from 'react-redux'
import { changeAMRC, checkAMRCFee } from '../actions'
import AMRC from '../components/AMRC'

const mapStateToProps = (state) => ({
  isShow: state.ADDC.fee > 0,
  coverage: state.AMRC.coverage,
  fee: state.AMRC.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeAMRC(item, val))
    dispatch(checkAMRCFee())
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(AMRC)

export default OutPut
