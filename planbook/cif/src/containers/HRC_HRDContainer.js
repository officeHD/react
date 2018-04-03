import { connect } from 'react-redux'
import { showSelector, changeHRC_HRD, checkHRC_HRDFee } from '../actions'
import HRC_HRD from '../components/HRC_HRD'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  isShow: true,
  C_D: state.HRC_HRD.hasSocialSecu === 0 ? 'C' : 'D',
  index: state.HRC_HRD.index,
  str: data.HRC_HRD[state.HRC_HRD.index],
  isFirst: state.HRC_HRD.isFirst,
  hasSocialSecu: state.HRC_HRD.hasSocialSecu,
  fee: state.HRC_HRD.fee,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeHRC_HRD(item, val))
    dispatch(checkHRC_HRDFee())
  },
  onShowPlanSele: (index) => {
    dispatch(showSelector('HRC_HRD', index, data.HRC_HRD))
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(HRC_HRD)

export default OutPut
