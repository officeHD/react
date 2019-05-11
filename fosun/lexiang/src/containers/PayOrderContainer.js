import { connect } from 'react-redux'
import PayOrder from '../components/PayOrder'
import { changeCardName, changePayPhone, changeBankNum, changeBankCode, getMesCode, changeSmsCode, changeAttentionC } from '../actions'

const mapStateToProps = (state) => ({
    bankCode: state.payData.bankCode,
    payType: state.payData.payType,
    cardName: state.appntData.name,
    bankNum: state.payData.bankNum,
    payPhone: state.payData.payPhone,
    smsCode: state.payData.smsCode,
    inApp: state.staffmes.inApp,
    second: state.payData.second
})

const mapDispatchToProps = (dispatch) => ({
    onChangeCardName: (val) => { dispatch(changeCardName(val)) },
    onChangePayPhone: (val) => { dispatch(changePayPhone(val)) },
    onChangeBankCode: (val) => { dispatch(changeBankCode(val)) },
    onChangeBankNum: (val) => { dispatch(changeBankNum(val)) },
    onChangeSmsCode: (val) => { dispatch(changeSmsCode(val)) },
    onGetMesCode: (val) => { dispatch(getMesCode(val)) },
    onchangeC: () => { dispatch(changeAttentionC()) }
})

const HolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PayOrder)

export default HolderContainer