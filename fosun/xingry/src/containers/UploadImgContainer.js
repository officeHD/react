import { connect } from 'react-redux'
import { upLoadImg } from '../actions'
import UploadImg from '../components/UploadImg'

const mapStateToProps = (state) => ({
    appntData: state.appntData,
    insuredsData: state.insuredsData

})

const mapDispatchToProps = (dispatch) => ({
  
    imageuploaded: (event, typeWay,insure) => {
       
        dispatch(upLoadImg(event, typeWay,insure))
        
    }
})

const NumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImg)

export default NumContainer