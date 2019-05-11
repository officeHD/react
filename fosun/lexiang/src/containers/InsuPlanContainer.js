import { connect } from 'react-redux'
import { changeMAxAge, changeAmnt, changePayMent, getRate,changeInsureCover,changeInsuSocialSecFla, changeInsuYear, changeInsuYearFlag,changeExtra,changeRevenCode,changeAccount } from '../actions'
import InsuPlan from '../components/InsuPlan'
import data from '../reducers/data.json'
const mapDispatchTo = (state) => ({

    varietyData: state.varietyData,
    payBankArr:data.payBank,
    renewInfo:state.renewInfo,
    relation:state.insuredsData.relationsWithCustomer,
 
    insuSocialSecFlag:state.insuredsData.insuSocialSecFlag
})

const mapDispatchToProps = (dispatch) => ({
    onChangeExtra:()=>{
        dispatch(changeExtra());
       
    },
    onChangeInsureCover:(val)=>{
        dispatch(changeInsureCover(val));
    },
    //交费年期
    onChangePayMent: (val) => {
        dispatch(changePayMent(val))
        dispatch(getRate());
    },
      //是否参加社保
      onChangeInsuSocialSecFla: (val) => {
        let flag = "Y"
        if (val === 1) {
            flag = 'N'
        }
        dispatch(changeInsuSocialSecFla(flag));
        dispatch(getRate());
    },
    //保额
    onChangeAmnt: (val) => {
        let value=val.replace(/[^0-9]/g,'');
        if(value<=0){
            value="";
        }
        dispatch(changeAmnt(value));
        dispatch(getRate());
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
    },
    onChangeBankCode:(val)=>{
    
        dispatch(changeRevenCode(val))  ;
    },
    onChangeAccount:(val)=>{
        dispatch(changeAccount(val));
        
    }
})


const InsuPlanContainer = connect(
    mapDispatchTo,
    mapDispatchToProps
)(InsuPlan)

export default InsuPlanContainer