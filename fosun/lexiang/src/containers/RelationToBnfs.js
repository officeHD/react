import { connect } from 'react-redux'
import { changeRelationToBnfs } from '../actions'
import RelationType from '../components/RelationType'

const mapStateToProps = (state) => ({

  relation: [

    { "value": "01", "label": "父母" },
    { "value": "00", "label": "配偶" },
    { "value": "02", "label": "子女" }
  ],
  relationName: "是被保人的"
})

const mapDispatchToProps = (dispatch) => ({
  //改变投保关系
  changeRelation: (val, index) => {
    //   console.log(val,index)
    dispatch(changeRelationToBnfs(val, index))
  }


})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelationType)

export default Container