import { connect } from 'react-redux'
import { getRate, changeInsurantName,scrollToAnchor, changeInsurantZipCode, changeOccupationType, changeInsurantHeight, changeInsurantWeight, changeInsurantAddress, changeInsurantLocation, changeInsuInCome, changeInsurantEmail, changeInsurantNo, changeInvalidDate, getPersonInfo, showSelector, changeAttentionA, changeAttentionB, changeInsurantGender, changeInsurantBirthday, changeInsurantPhone, changeJobCategoryLabel, changeOccupationShow, changeJobCategory } from '../actions'
import Insurant from '../components/Insurant'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';

const mapStateToProps = (state) => ({
  insuredsData: state.insuredsData,
  forInsuredPerson: state.forInsuredPerson,
  varietyCode: sessionStorage.varietyCode,
  insurantCertiType: state.insurantCertiType,
  insurantName: state.insurantName,
  insurantCertiNo: state.insurantCertiNo,
  insurantGender: state.insurantGender,
  insurantBirthday: state.insurantBirthday,
  insurantPhone: state.insurantPhone,
  insurantEmail: state.insurantEmail,
  longEffective: state.insurantEffective,
  insurantZipCode: state.insurantZipCode,
  insurantAddressValue: state.insurantAddressValue,
  insurantLocation: state.insurantLocation,
  certInvalidDate: state.certInvalidDate,
  occupation: state.occupation,


})

const mapDispatchToProps = (dispatch) => ({
  //修改被保人姓名
  onChangeInsurantName: (val) => {
    var nameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{0,20}$/;
    let sval = val.replace(/,/g, "·")
    sval = val.replace(/\./g, "·")
    sval = val.replace(/\。/g, "·")
    if (nameReg.test(sval)) {
      dispatch(changeInsurantName(sval));
      dispatch(getPersonInfo());
    } 
   
  },
  showInsurantCertiTypeBox: (index) => {

    dispatch(showSelector(data.CertiType, index, 'InsurantCertiType'));
    document.querySelector('body').classList.add("overFlow");
  },
  onscrollToAnchor:(id)=>{
    scrollToAnchor(id)
  },
  //修改被保人身份证号
  onChangeInsurantNo: (val) => {
    dispatch(changeInsurantNo(val))

  },
  //修改被保人出生日期
  onChangeInsurantBirthday: (val) => {
    dispatch(changeInsurantBirthday(val))

  },
  //修改被保人性别
  onChangeInsurantGender: (option, disabled) => {

    if (disabled != 0) {
      dispatch(changeInsurantGender(option))
      dispatch(getRate());
    } else {
      Toast.info('性别由身份证号判定', 2)
    }

  },
  //修改投保人电话
  onChangeInsurantPhone: (val) => {
    dispatch(changeInsurantPhone(val))
  },
  //修改被保人身份证有效期
  onChangeInvalidDate: (val) => {

    dispatch(changeInvalidDate(val))
  },
  //邮编
  onChangeInsurantZipCode: (val) => {
    dispatch(changeInsurantZipCode(val))
  },
  onChangeInsurantEmail: (val) => {
    dispatch(changeInsurantEmail(val))
  },
  onChangeInsurantAddress: (val) => {
    dispatch(changeInsurantAddress(val))

  },
  onChangeInsurantLocation: (val) => {
    dispatch(changeInsurantLocation(val))
  },
  onChangeInsurantHeight: (val) => {
    if (val <= 0) {
      val = "";
    }
    val = val.replace(/[^\d.]/g, '');
    dispatch(changeInsurantHeight(val))

  },
  onChangeInsurantWeight: (val) => {
    if (val <= 0) {
      val = "";
    }
    val = val.replace(/[^\d.]/g, '');
    dispatch(changeInsurantWeight(val))
  },
  changeJobCategory: (val) => {
    data.jobCategoryList.map((item, index) => {
      if (val[0] === item.value) {
        dispatch(changeJobCategoryLabel(item.label))
      }
    })
    dispatch(changeJobCategory(val))
  },
  onChangeOccupationShow: () => {
    dispatch(changeOccupationShow())
    dispatch(changeOccupationType("insurant"))

  },
  onChangeInsuInCome: (val) => {
    
    val = val.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符   
    val = val.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的   
    val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数   
    dispatch(changeInsuInCome(val))
    

  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Insurant)

export default Container