import { connect } from 'react-redux'
import OrderMes from '../components/OrderMes'


const mapStateToProps = (state) => {
    return ({
        title: "投保人",
        name: state.appntData.name,
        phone: state.appntData.phone,
        certiNo: state.appntData.idNum,
        email: state.appntData.email,
        effictive: state.appntData.validDateEnd,
        address: state.appntData.provinceName+" "+state.appntData.cityName+" "+state.appntData.countyName,
        location: state.appntData.permanentAddress,
        
    })
}


const HolderContainer = connect(
    mapStateToProps
)(OrderMes)

export default HolderContainer