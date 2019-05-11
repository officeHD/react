import { connect } from 'react-redux'
import { changeBnfsType,changeBnfsName, changeBnfsNo,changeBnfsPhone, changeBnfsbnfLot, changeBnfsEffictive, addBnfs, delBnfs } from '../actions'
import Beneficiary from '../components/Bnfs'

const mapStateToProps = (state) => {
    return ({
        bnfsType: state.bnfsType,
        bnfsData: state.bnfsData
    })
}
const mapDispatchToProps = (dispatch) => ({
    
    changeBeneficiaryType: (val) => {
        dispatch(changeBnfsType(val));
    },
    onchangeBnfsName: (val, index) => {
        dispatch(changeBnfsName(val, index))
    },
    
    onchangeBnfsPhone: (val, index) => {
        dispatch(changeBnfsPhone(val, index))
    },
    onchangeBnfsNo: (val, index) => {
        dispatch(changeBnfsNo(val, index))
    },
    //证件有效期
    onChangeBnfsEffictive: (val, index) => {
        dispatch(changeBnfsEffictive(val, index))
    },
    onChangeBnfsBirthday: (val) => {
        // console.log(val)
    },
    onchangeBnfsbnfLot: (val, index) => {
        dispatch(changeBnfsbnfLot(val, index))
    },
    onChangeBnfsGender: (val) => {
        // console.log("计算值")
    },
    onAddBnfs: () => {
        dispatch(addBnfs())
    },
    onDelBnfs: (index) => {
        // console.log(index);
        dispatch(delBnfs(index))
    }
})

const BeneficiaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Beneficiary)

export default BeneficiaryContainer