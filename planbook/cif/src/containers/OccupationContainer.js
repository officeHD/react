import { connect } from 'react-redux'
import { changeOccupationShow, changeIsLoading, choiceInd, goBackStep, changeInsured, changeApplicant, checkHRC_HRDFee, checkADDCFee, checkAMRCFee } from '../actions'
import Occupation from '../components/Occupation'

const mapStateToProps = (state) => ({
  isShow: state.occupation.isShow,
  forPerson: state.occupation.forPerson,
  step: state.occupation.step,
  title: state.occupation.step === 0 ? '行业' : '工作性质',
  btn: state.occupation.step === 0 ? '&times;' : '&lArr;',
  ind: state.occupation.ind,
})

const mapDispatchToProps = (dispatch, state) => ({
  onClickBtn: (step) => {
    if (step === 0) {
      dispatch(changeIsLoading())
      dispatch(changeOccupationShow())
    } else {
      dispatch(goBackStep())
    }
  },
  onClickInd: (ind) => {
    dispatch(choiceInd(ind))
  },
  onClickJob: (work, life, accident, hospital, forPerson) => {
    dispatch(goBackStep())
    dispatch(changeIsLoading())
    dispatch(changeOccupationShow())
    if (forPerson === 0) {
      dispatch(changeInsured('work', work))
      dispatch(changeInsured('life', life))
      dispatch(changeInsured('accident', accident))
      dispatch(changeInsured('hospital', hospital))
      dispatch(checkHRC_HRDFee())
      dispatch(checkADDCFee())
      dispatch(checkAMRCFee())
    } else {
      dispatch(changeApplicant('work', work))
      dispatch(changeApplicant('life', life))
      dispatch(changeApplicant('accident', accident))
      dispatch(changeApplicant('hospital', hospital))
    }
  },
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Occupation)

export default OutPut
