import { connect } from 'react-redux'
import { changeOccupationShow, changeApplicant, changeIsLoading, checkWPAShow, checkWPShow, checkWPBShow } from '../actions'
import Applicant from '../components/Applicant'

const mapStateToProps = (state) => ({
  applicant: state.applicant,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeApplicant(item, val))
    switch (item) {
      case 'isParent' :
        dispatch(checkWPAShow())
        break;
      case 'asInsured' :
        if (val) {
          dispatch(changeApplicant('isParent', 0))
        }
        dispatch(checkWPShow())
        break;
      case 'age' :
        dispatch(checkWPShow())
        dispatch(checkWPAShow())
        dispatch(checkWPBShow())
        break;
      default:
        break;
    }
  },
  onShowIndustryCategory: () => {
    dispatch(changeIsLoading())
    dispatch(changeOccupationShow(1))
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Applicant)

export default OutPut
