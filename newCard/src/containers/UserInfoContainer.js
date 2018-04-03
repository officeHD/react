import { connect } from 'react-redux'
import { changeADDC, checkADDCFee } from '../actions'
 
import UserInfo from '../components/UserInfo'
 

const mapStateToProps = (state) => ({
  agent: state.agent,
})

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: (item, val) => {
    dispatch(changeADDC(item, val))
    dispatch(checkADDCFee())
  }
})
  
const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)

export default UserInfoContainer
