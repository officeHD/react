import { connect } from 'react-redux'
import { changePlainMain, checkMainFee } from '../actions'
import PlainMain from '../components/PlainMain'

const mapStateToProps = (state) => ({
  plainMain: state.plainMain,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changePlainMain(item, val))
    dispatch(checkMainFee());
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlainMain)

export default OutPut
