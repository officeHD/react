import React, { Component } from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'

import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import style from './asset/css/index.less'
import PickerPlaceContainer from '../containers/PickerPlaceContainer'
import RadioSelector from './RadioSelector'
import SubTitle from './public/SubTitle'
import data from '../reducers/data.json'

const CustomChildren = ({ extra, onClick, children }) => (
  <span onClick={onClick} style={{ float: 'left', color: '#333' }}>{extra}</span>
);

export default class OutPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    const { appntData, onChangeHolderGender, onChangeHolderLocation, onChangeAddress,
      onChangeHolderEmail, onChangeEffictive, onChangeHolderBirthday,
      onChangeHolderNo, showHolderCertiTypeBox, onChangeHolderPhone, onChangeHolderName } = this.props;
    let idtype = data.CertiType.filter((item) => item.value == appntData.idType);

    return (
      <div>
        <SubTitle title="本人信息(投保人)" show={this.state.show} toggleShow={this.toggleShow} icon="applicant" />
        <div className={this.state.show ? "coat_ul" : "hide"}>
          <BlankLi item="姓名">
            <InputBox val={appntData.name} onChangeVal={onChangeHolderName} />
          </BlankLi>
          <BlankLi item="手机号">
            <InputBox val={appntData.phone} onChangeVal={onChangeHolderPhone} maxLength="11" />
          </BlankLi>
          <BlankLi item="证件类型">
            <ClickDiv val={idtype[0].label} onClickHandler={e =>console.log("不可选") } />
            {/* showHolderCertiTypeBox(appntData.idType) */}
          </BlankLi>
          <BlankLi item="身份证号">
            <InputBox val={appntData.idNum} onChangeVal={onChangeHolderNo} maxLength="18" />
          </BlankLi>
          <DatePicker
            mode="date"
            value={appntData.birthDate ? moment(appntData.birthDate) : null}
            extra={"请选择"}
            minDate={moment().subtract(70, "years")}
            maxDate={moment().subtract(18, "years")}
            onOk={date => onChangeHolderBirthday(moment(date).format('YYYY-MM-DD'))}
            disabled={appntData.idType != 0 ? false : true}
          >
            <BlankLi item="出生日期"> </BlankLi>
          </DatePicker>
  
          <BlankLi item="投保人性别">
            <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={appntData.sex} onSelect={onChangeHolderGender} disabled={appntData.idType} />
          </BlankLi>
          <BlankLi item="证件有效期">
            <DatePicker
              mode="date"
              value={appntData.validDateEnd ? moment(appntData.validDateEnd) : null}
              extra={"请选择"}
              minDate={moment()}
              maxDate={moment().add(20, "years")}
              onOk={date => onChangeEffictive(moment(date).format('YYYY-MM-DD'))}
            >
              <CustomChildren> </CustomChildren>
            </DatePicker>
            <label className={style.radio_style} onClick={e => onChangeEffictive()} style={{ float: 'right', width: 'auto' }}>
              <img src={require(appntData.validDateEnd == "9999-12-31" ? './asset/img/anxinli/radio_on.png' : './asset/img/anxinli/radio_off.png')} style={{ marginRight: '6px' }} />
              长期有效
              </label>
          </BlankLi>

          <BlankLi item="邮箱">
            <InputBox val={appntData.email} onChangeVal={onChangeHolderEmail} tip="用于接收电子保单" />
          </BlankLi>
          <PickerPlaceContainer title="投保人地址"
            placeVal={[appntData.province, appntData.city, appntData.county]}
            checkPlace={onChangeAddress}
          />
          <BlankLi item="详细地址">
            <InputBox val={appntData.permanentAddress} onChangeVal={onChangeHolderLocation} tip="请输入详细地址" />
          </BlankLi>
          {/* <BlankLi item="职业类别"> 
            <ClickDiv val={occupation.holderCategoryName} onClickHandler={onChangeOccupationShow} /> 
          </BlankLi>
            */}
          {/* <BlankLi item="年收入">
            <input type="text" style={{width:"80px"}} placeholder="请输入" value={appntData.inCome} onChange={e => onChangeInCome((e.target.value).trim())} maxLength={5} /> 万
          </BlankLi> */}
        </div>
      </div>
    )
  };
}