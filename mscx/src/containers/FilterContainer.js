import { connect } from 'react-redux'
import { showPrices, showBrands } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state) => ({
  showPriceRange: state.showPriceRange,
  showBrandRange: state.showBrandRange,
})

const mapDispatchToProps = (dispatch, state) => ({
  onShowPrices: () => {
    dispatch(showPrices())
  },
  onShowBrands: () => {
    dispatch(showBrands())
  }
})
  
const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
