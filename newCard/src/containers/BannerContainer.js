import { connect } from 'react-redux'
 
import Banner from '../components/Banner'
 

const mapStateToProps = (state) => ({
  agent: state.agent,
})

 
  
const BannerContainer = connect(
  mapStateToProps,
  
)(Banner)

export default BannerContainer
