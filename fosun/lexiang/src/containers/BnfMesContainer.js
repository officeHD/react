import { connect } from 'react-redux'
import OrderMes from '../components/OrderMes'


const mapStateToProps = (state) => {
    return ({
        title: "受益人",
        bnfsData: state.bnfsData,
        bnfsType: state.bnfsType,
        bnfrelation: [
            { "value": "01", "label": "父母" },
            { "value": "00", "label": "配偶" },
            { "value": "02", "label": "子女" }
        ]

    })
}


const HolderContainer = connect(
    mapStateToProps
)(OrderMes)

export default HolderContainer