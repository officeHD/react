import { connect } from 'react-redux'
import { closeLiSelector, changeProvince, changeCity, changeCounty, getCitiesDate, getCountiesDate } from '../actions'
import LiSelector from '../components/LiSelector'

const mapStateToProps = (state) => ({
  showLiSelector: state.showLiSelector,
  liSelectorTarget: state.liSelectorTarget,
  liSelectorOptions: state.liSelectorOptions,
  liSelectorSelected: state.liSelectorSelected,
})

const mapDispatchToProps = (dispatch) => ({
  onSelect: (target, name, code) => {
    switch(target) {
      case 'province':
        dispatch(changeProvince(name, code))
        dispatch(getCitiesDate())
        break;
      case 'region':
        dispatch(changeCity(name, code))
        dispatch(getCountiesDate())
        break;
      case 'county':
        dispatch(changeCounty(name, code))
        break;
      // case 'UsingType':
      //   dispatch(changeUsingType(index))
      //   break;
      // case 'ApprovedSeats':
      //   dispatch(changeApprovedSeats(index))
      //   break;
      // case 'ApplyNum':
      //   dispatch(changeApplyNum(index))
      //   break;
      default:
        break;
    }
  },
  onClose: () => {
    dispatch(closeLiSelector())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiSelector)

export default Container