import { connect } from 'react-redux'
import Loading from '../components/Loading'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
})

const LoadingContainer = connect(
  mapStateToProps
)(Loading)

export default LoadingContainer