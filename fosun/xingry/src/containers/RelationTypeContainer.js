import { connect } from 'react-redux'
import { changeForInsuredPerson, getRate } from '../actions'
import RelationType from '../components/RelationType'


const mapStateToProps = (state) => ({
  forInsuredPerson: state.insuredsData.relationsWithCustomer,
  varietyCode: sessionStorage.varietyCode,
  relation: [
    {
      "value": "04",
      "label": "本人"
    },
    {
      "value": "00",
      "label": "配偶"
    },
    {
      "value": "02",
      "label": "子女"
    },
    {
      "value": "01",
      "label": "父母"
    }
  ],
  relationName: "是投保人的"
})

const mapDispatchToProps = (dispatch) => ({
  //改变投保关系
  changeRelation: (val) => {
    dispatch(changeForInsuredPerson(val))

    dispatch(getRate())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelationType)

export default Container