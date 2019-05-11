import { connect } from 'react-redux'
import { changeService, changeCards, checkAnKang } from '../actions'
import Service from '../components/public/Service'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  service: state.isShowService,
  staffmes: state.staffmes
})
const mapDispatchToProps = (dispatch) => ({
  
  onchangeShow: () => {
    dispatch(changeService())
  } 
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Service)

export default Container