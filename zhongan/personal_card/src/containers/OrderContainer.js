import { connect } from 'react-redux'
import Order from '../components/Order'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  insuredId: state.insuredId,
  applyNum: data.ApplyNum[state.applyNum],
})

const HolderContainer = connect(
  mapStateToProps
)(Order)

export default HolderContainer