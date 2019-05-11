import { connect } from 'react-redux'
import { onCheckHealthy, checkHealthy } from '../actions'
import SureHealth from '../components/SureHealth'

const mapStateToProps = (state) => ({
  
    healthy:state.healthy,
    imparts: state.varietyData.imparts
})

const mapDispatchToProps = (dispatch) => ({
    handelClick: (val) => {
        // if (val === "3") {
        //     if (window.minsheng) {
        //         window.minsheng.clickOnAndroid();
        //     } else {
        //         window.location.href = "sn://clickOnIOS";
        //         window.history.go(-1)
        //     }
        // }
        dispatch(checkHealthy(val)); 

    },
    goNext: () => {
        dispatch(checkHealthy('0'));
    }
})

const Step1Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SureHealth)

export default Step1Container