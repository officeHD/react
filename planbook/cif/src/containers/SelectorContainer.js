import { connect } from 'react-redux'
import { closeSelector, changeHRC_HRD, checkHRC_HRDFee } from '../actions'
import Selector from '../components/Selector'

const mapStateToProps = (state) => ({
  isShow: state.selector.isShow,
  target: state.selector.target,
  index: state.selector.index,
  list: state.selector.list,
})

const mapDispatchToProps = (dispatch) => ({
  onSelect: (target, index) => {
    switch(target) {
      case 'HRC_HRD':
        dispatch(changeHRC_HRD('index', index))
        dispatch(checkHRC_HRDFee())
        break;
      default:
        break;
    }
  },
  onClose: () => {
    dispatch(closeSelector())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Selector)

export default Container