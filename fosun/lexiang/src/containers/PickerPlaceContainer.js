import { connect } from 'react-redux'
import PickerPlace from '../components/public/PickerPlace'

const mapStateToProps = (state) => ({
    addressData: state.addressData
})

const mapDispatchToProps = (dispatch) => ({})

const PickerPlaceContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PickerPlace)

export default PickerPlaceContainer