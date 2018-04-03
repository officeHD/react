import { connect } from 'react-redux'
import { changeADDC, checkADDCFee } from '../actions'
import ADDC from '../components/ADDC'

const mapStateToProps = (state) => ({
  isShow: true,
  coverage: state.ADDC.coverage,
  fee: state.ADDC.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeADDC(item, val))
    dispatch(checkADDCFee())
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(ADDC)

export default OutPut
