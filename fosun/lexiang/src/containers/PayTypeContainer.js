import { connect } from 'react-redux'
import { changePayType} from '../actions'
import RelationType from '../components/RelationType'

const mapStateToProps = (state) => ({

  relation: [
    
    { "value": "01", "label": "微信" },
    { "value": "02", "label": "银行卡" }
  ],
  forInsuredPerson:state.payData.payType,
  relationName: "支付方式"
})

const mapDispatchToProps = (dispatch) => ({
  //改变投保关系
  changeRelation: (val, index) => {
    
    dispatch(changePayType(val, index))
  }


})

const PayTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelationType)

export default PayTypeContainer