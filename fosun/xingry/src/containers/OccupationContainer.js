import { connect } from 'react-redux'
import { changeOccupationShow, choiceInd, goBackStep, clickJob, closeOccupationShow } from '../actions'
import Occupation from '../components/Occupation'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  isShow: state.occupation.isShow,
  step: state.occupation.step,
  indName: data.industryCategory[state.occupation.indIndex].name,
  title: state.occupation.step === 0 ? '行业' : '职业',
  btn: state.occupation.step === 0 ? '&times;' : '&lArr;',
  list: state.occupation.step === 0 ? data.industryCategory : data.industryCategory[state.occupation.indIndex].sub,

})

const mapDispatchToProps = (dispatch, state) => ({
  onClickBtn: (step) => {
    if (step === 0) {
      document.querySelector('body').classList.remove("overFlow");
      dispatch(changeOccupationShow())
    } else {
      dispatch(goBackStep())
    }
  },
  onClickInd: (index) => {
    dispatch(choiceInd(index))
  },
  onClickJob: (occuName, occuClass, no) => {
    document.querySelector('body').classList.remove("overFlow");
    dispatch(goBackStep())
    dispatch(changeOccupationShow())
    dispatch(clickJob(occuName, occuClass, no))
  },
  onClose: () => {
    document.querySelector('body').classList.remove("overFlow")
    dispatch(closeOccupationShow())
  }
})

const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Occupation)

export default OutPut
