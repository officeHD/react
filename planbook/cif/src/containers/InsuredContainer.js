import { connect } from 'react-redux'
import { changeOccupationShow, changeInsured, changeIsLoading, checkMainFee, checkHRC_HRDFee, checkWPAShow, checkWAShow, checkWPShow, checkWPBShow } from '../actions'
import Insured from '../components/Insured'

const mapStateToProps = (state) => ({
  insured: state.insured,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeInsured(item, val))
    switch(item) {
      case 'sex':
        dispatch(checkMainFee())
        break;
      case 'age':
        dispatch(checkMainFee())
        dispatch(checkHRC_HRDFee())
        dispatch(checkWPAShow())
        dispatch(checkWPBShow())
        dispatch(checkWAShow())
        dispatch(checkWPShow())
        break;
      default:
        break;
    }

  },
  onShowIndustryCategory: () => {
    dispatch(changeIsLoading())
    dispatch(changeOccupationShow(0))
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Insured)

export default OutPut
