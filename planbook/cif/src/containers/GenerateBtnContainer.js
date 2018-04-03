import { connect } from 'react-redux'
import { generate } from '../actions'
import GenerateBtn from '../components/GenerateBtn'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, state) => ({
  onGenerate: () => {
    dispatch(generate())
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateBtn)

export default OutPut
