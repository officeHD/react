import { connect } from 'react-redux'
import { changeHolderName, changeHolderNo, getPersonInfo, changeOccupationType, showSelector, changeOccupationShow, changeHolderHeight, changeHolderWeight, changeInCome, changeHolderLocation, changeHolderZipCode, changeHolderGender, changeHolderBirthday, changeHolderPhone, changeHolderEmail, changeEffictive, changeHolderAddress } from '../actions'
import Holder from '../components/Holder'


import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';
const mapStateToProps = (state) => {
    return ({
        occupation: state.occupation,
        appntData: state.appntData
    })
}

const mapDispatchToProps = (dispatch) => ({
    onChangeHolderName: (val) => { 
        var nameReg =  /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{0,20}$/;
        let sval = val.replace(/,/g, "·")
        sval = val.replace(/\./g, "·")
        sval = val.replace(/\。/g, "·")
        if (nameReg.test(val)) {
            dispatch(changeHolderName(sval))
            dispatch(getPersonInfo("holder"));
        } 
    },
    //证件有效期
    onChangeEffictive: (val) => {
        dispatch(changeEffictive(val))
    },
    showHolderCertiTypeBox: (index) => {
        // console.log(index);
        dispatch(showSelector(data.CertiType, index, 'holderCertiType'))
        document.querySelector('body').classList.add("overFlow");
    },
    //投保人身份证
    onChangeHolderNo: (val) => {
        dispatch(changeHolderNo(val))
    },
    //修改投保人电话
    onChangeHolderPhone: (val) => {
        dispatch(changeHolderPhone(val))
    },
    //投保人性别
    onChangeHolderGender: (option, disabled) => {
        if (disabled == "0") {
            // Toast.info('性别由身份证号判定', 2);
            return false;
        }
        dispatch(changeHolderGender(option))
    },
    //选择地址
    onChangeAddress: (option) => {
        dispatch(changeHolderAddress(option))
    },
    //选择地址
    onChangeAddress: (option) => {
        dispatch(changeHolderAddress(option))
    },
    //选择地址
    onChangeHolderLocation: (val) => {
        dispatch(changeHolderLocation(val))
    },
    //修改出生日期
    onChangeHolderBirthday: (val) => {
        dispatch(changeHolderBirthday(val))
    },
    onChangeHolderHeight: (val) => {
        dispatch(changeHolderHeight(val))
    },
    onChangeHolderWeight: (val) => {
        dispatch(changeHolderWeight(val))
    },
    //修改投保人电子邮箱
    onChangeHolderEmail: (val) => {
        dispatch(changeHolderEmail(val))
    },
    onChangeOccupationShow: () => {
        dispatch(changeOccupationShow())
        dispatch(changeOccupationType("holder"))
    },
    //投保人邮编
    onChangeHolderZipCode: (val) => {
        dispatch(changeHolderZipCode(val))
    },
    onChangeInCome: (val) => {
        val = val.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符   
        val = val.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的   
        val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数   
        dispatch(changeInCome(val))
    }
})

const HolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Holder)

export default HolderContainer