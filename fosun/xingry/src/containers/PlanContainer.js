import { connect } from 'react-redux'
import { changeInsurantAddress, changeMAxAge, changeInsurantNo, changeInsurantGender, changeOccupationType, changeOccupationShow, changeInsuSocialSecFla, changeAmnt, changePayMent, getRate, changeInsurantBirthday, changeSocialInsuAddress, changeInsuYear, changeInsuYearFlag } from '../actions'
import Plan from '../components/Instruction/Plan'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
    occupation: state.occupation,
    varietyData: state.varietyData,
    insuredsData: state.insuredsData
})

const mapDispatchToProps = (dispatch) => ({
    showTrial:()=>{
        console.log(1);
        // dispatch(changeShowTrial())
    },
    // 出生日期
    onChangeInsurantBirthday: (val) => {
        dispatch(changeInsurantBirthday(val));
        dispatch(getRate());
    },
    //修改被保人性别
    onChangeInsurantGender: (option) => {
        dispatch(changeInsurantGender(option))
        dispatch(getRate());
    },
    //交费年期
    onChangePayMent: (val) => {
        dispatch(changePayMent(val))
        dispatch(getRate());
    },
    //保额
    onChangeAmnt: (val) => {
        dispatch(changeAmnt(val));
        dispatch(getRate());
    },
    //修改被保人身份证号
    onChangeInsurantNo: (val) => {
        dispatch(changeInsurantNo(val))

    },
    //是否参加社保
    onChangeInsuSocialSecFla: (val) => {
        let flag = "Y"
        if (val === 1) {
            flag = 'N'
        }
        dispatch(changeInsuSocialSecFla(flag))
    },
    //居住地
    onChangeInsurantAddress: (val) => {
        dispatch(changeInsurantAddress(val));
        dispatch(changeOccupationType("insurant"));
    },
    onChangeOccupationShow: () => {
        dispatch(changeOccupationShow())
    },
    //社保地
    onChangeSocialInsuAddress: (val, insuCity) => {
        if (!insuCity) {
            Toast.info('请选择居住城市');
            return false;
        }
        dispatch(changeSocialInsuAddress(val))
    },
    //保险年期
    onChangeInsuYear: (val, insuCity) => {
        dispatch(changeMAxAge(50));
        if (val[0] < 60) {
            dispatch(changeInsuYearFlag("Y"))
            if (val[0] == 30) {
                dispatch(changeMAxAge(40));
            }
        } else {
            dispatch(changeInsuYearFlag("A"))
        }
        dispatch(changeInsuYear(val))
        dispatch(getRate());
    }
})


const InstructionContainer = connect(
    mapDispatchTo,
    mapDispatchToProps
)(Plan)

export default InstructionContainer