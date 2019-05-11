import { connect } from 'react-redux'
import { insertOrderByImg, getRate } from '../actions'
import Step1 from '../components/step1Img'

const mapStateToProps = (state) => ({
  fee: state.varietyData.fee
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {

    dispatch(insertOrderByImg())
  }
})

const Step1Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1)
 
export default Step1Container