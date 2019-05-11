import { connect } from 'react-redux'
import { upLoadImg } from '../actions'
import UploadImg from '../components/UploadImg'

const mapStateToProps = (state) => ({
    fontimg: state.fontimg,
    backimg: state.backimg

})

const mapDispatchToProps = (dispatch) => ({
  
    imageuploaded: (event, typeWay) => {
       
        dispatch(upLoadImg(event, typeWay))
        
    }
})

const NumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImg)

export default NumContainer