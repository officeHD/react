import { connect } from 'react-redux'
import { changeInsurantName, changeInsurantNo, showSelector, changeInsurantGender, changeInsurantBirthday, changeInsurantPhone, changeInsurantEmail } from '../actions'
import Insurant from '../components/Insurant'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  insuredRelaToHolder: state.insuredRelaToHolder,
  insurantCertiType: state.insurantCertiType,
  insurantName: state.insurantName,
  insurantCertiNo: state.insurantCertiNo,
  insurantGender: state.insurantGender,
  insurantBirthday: state.insurantBirthday,
  insurantPhone: state.insurantPhone,
  justRead: state.step === 3,
})

const mapDispatchToProps = (dispatch) => ({
  onChangeInsurantName: (val) => {
    dispatch(changeInsurantName(val))
  },
  showInsurantCertiTypeBox: (index) => {
    dispatch(showSelector(data.HolderCertiType, index, 'InsurantCertiType'))
  },
  onChangeInsurantNo: (val) => {
    dispatch(changeInsurantNo(val))
    if (val.length === 17) {
      let year = val.substr(6, 4)
      let month = val.substr(10, 2)
      let day = val.substr(12, 2)
      let sex = val.substr(16, 1) - 0;
      dispatch(changeInsurantBirthday(year + '-' + month + '-' + day))
      dispatch(changeInsurantGender((sex + 1) % 2))
    }
  },
  onChangeInsurantBirthday: (val) => {
    dispatch(changeInsurantBirthday(val))
  },
  onChangeInsurantGender: (option) => {
    dispatch(changeInsurantGender(option))
  },
  //修改投保人电话
  onChangeInsurantPhone: (val) => {
    dispatch(changeInsurantPhone(val))
  }

})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Insurant)

export default Container