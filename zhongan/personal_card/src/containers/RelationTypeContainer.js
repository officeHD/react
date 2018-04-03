import { connect } from 'react-redux'
import { showSelector, changeOccupationShow } from '../actions'
import RelationType from '../components/RelationType'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  insuredRelaToHolder: state.insuredRelaToHolder,
  justRead: state.step === 3,
  occupationCategoryName: state.occupation.occupationCategoryName,
})

const mapDispatchToProps = (dispatch) => ({
  onShowInsuredRelaToHolderBox: (index) => {
    dispatch(showSelector(data.InsuredRelaToHolder, index, 'InsuredRelaToHolder'))
  },
  onChangeOccupationShow: () => {
    dispatch(changeOccupationShow())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelationType)

export default Container