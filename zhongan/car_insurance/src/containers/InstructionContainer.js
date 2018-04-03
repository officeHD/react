import { connect } from 'react-redux'
import { goToStep } from '../actions'
import Instruction from '../components/Instruction/'

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(goToStep(1))
  }
})
const mapStateTo = (state) => ({
  
  staffId: state.staffId,
})

const InstructionContainer = connect(
  mapStateTo,
  mapDispatchToProps
)(Instruction)

export default InstructionContainer