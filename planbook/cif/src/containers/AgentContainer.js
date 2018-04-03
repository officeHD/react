import { connect } from 'react-redux'
import { changeAgent } from '../actions'
import Agent from '../components/Agent'

const mapStateToProps = (state) => ({
  agent: state.agent,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeAgent(item, val))
  }
})
  
const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Agent)

export default OutPut
