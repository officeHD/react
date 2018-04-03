import { connect } from 'react-redux'
import { goToStep,onShare } from '../actions'
import Instruction from '../components/Instruction/'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
  staffId: state.staffId,
  type: state.type,
})

const mapDispatchToProps = (dispatch) => ({
	
  onGoToStep: () => {
    
       dispatch(goToStep(1))
        location.href = '#/step1' 
  },
  onShare:()=>{
  	 if(window.minsheng){
             window.minsheng.share()
        }else{
            window.location.href=`sn://share`;    
        }
  }
})

 
const InstructionContainer = connect(
  mapDispatchTo,
  mapDispatchToProps
)(Instruction)

export default InstructionContainer