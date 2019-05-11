import React, { Component } from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import RadioSelector from './RadioSelector'
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import SubTitle from './public/SubTitle'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import PickerPlaceContainer from '../containers/PickerPlaceContainer'
import data from '../reducers/data.json'
import style from './asset/css/index.less'
const CustomChildren = ({ extra, onClick, children }) => (
  <span onClick={onClick} style={{ float: 'left', color: '#333' }}>{extra}</span>
);
export default class Insurant extends Component {
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
    const { insuredsData, onscrollToAnchor,
      onChangeInsurantName, onChangeInsurantPhone, showInsurantCertiTypeBox,
      onChangeInsurantNo, onChangeInsurantBirthday, onChangeInsurantGender,
      onChangeInsurantEmail, onChangeInsurantAddress, onChangeInvalidDate,
      onChangeOccupationShow, onChangeInsurantZipCode, onChangeInsurantLocation,
      occupation, onChangeInsuInCome, onChangeInsurantHeight, onChangeInsurantWeight } = this.props;
    let idtype = data.CertiType.filter((item) => item.value == insuredsData.insuIdType);

    return (

      <div>
        <SubTitle title="为谁投保（被保人）" show={this.state.show} icon="insured" />
        <RelationTypeContainer />
        <div className={this.state.show ? "coat_ul" : "hide"}>
          {insuredsData.relationsWithCustomer === '04' ? null :
            <div >
              <BlankLi item="被保人姓名">
                <InputBox val={insuredsData.insuName} onChangeVal={onChangeInsurantName} />
              </BlankLi>
              <BlankLi item="被保人电话">
                <InputBox val={insuredsData.insuPhone} onChangeVal={onChangeInsurantPhone} maxLength="11" />
              </BlankLi>
              <BlankLi item="证件类型">
                <ClickDiv val={idtype[0].label} onClickHandler={e => console.log("不可选择")} />
                {/* showInsurantCertiTypeBox(insuredsData.insuIdType) */}
              </BlankLi>
              <BlankLi item="证件号">
                <InputBox val={insuredsData.insuIdNum} onChangeVal={onChangeInsurantNo} maxLength="18" />
              </BlankLi>
              <DatePicker
                mode="date"
                value={insuredsData.insuBirthDate ? moment(insuredsData.insuBirthDate) : null}
                extra={"请选择"}
                // minDate={moment().subtract(55, "years")}
                // maxDate={moment().subtract(28, "days")}
                onOk={date => onChangeInsurantBirthday(moment(date).format('YYYY-MM-DD'))}
                disabled={insuredsData.insuIdType != 0 ? false : true}
              >
                <BlankLi item="出生日期">
                </BlankLi>
              </DatePicker>
              <BlankLi item="被保人性别">
                <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={insuredsData.insuSex} onSelect={onChangeInsurantGender} disabled={insuredsData.insuIdType} />
              </BlankLi>
              <BlankLi item="证件有效期">
                <DatePicker
                  mode="date"
                  value={insuredsData.insuValidDateEnd ? moment(insuredsData.insuValidDateEnd) : null}
                  extra={"请选择"}
                  minDate={moment()}
                  maxDate={moment().add(20, "years")}
                  onOk={date => onChangeInvalidDate(moment(date).format('YYYY-MM-DD'))}
                >
                  <CustomChildren> </CustomChildren>
                </DatePicker>
                <label className={style.radio_style} onClick={e => onChangeInvalidDate()} style={{ float: 'right', width: 'auto' }}>
                  <img src={require(insuredsData.insuValidDateEnd === "9999-12-31" ? './asset/img/anxinli/radio_on.png' : './asset/img/anxinli/radio_off.png')} style={{ marginRight: '6px' }} />
                  长期有效
                  </label>
              </BlankLi>
              <BlankLi item="邮箱">
                <InputBox val={insuredsData.insuEmail} onChangeVal={onChangeInsurantEmail} tip="用于接收电子保单" />
              </BlankLi>
              <PickerPlaceContainer title="被保人地址"
                placeVal={[insuredsData.insuProvince, insuredsData.insuCity, insuredsData.insuCounty]}
                checkPlace={onChangeInsurantAddress}
              />
              <BlankLi item="详细地址">
                <InputBox val={insuredsData.insuPermanentAddress} onChangeVal={onChangeInsurantLocation} tip="请输入详细地址" />
              </BlankLi>
            </div>
          }

          {/* {
            insuredsData.insuSocialSecFlag === "Y" ?
              <BlankLi item="社保所在地">
                {insuredsData.socialInsuProvinceName} ，{insuredsData.socialInsuCityName}
              </BlankLi> : null
          }
         
          <BlankLi item="年收入">
            <input type="text" id="333" style={{ width: "80px" }} placeholder="请输入" value={insuredsData.insuInCome} onChange={e => onChangeInsuInCome((e.target.value).trim())} maxLength={5} /> 万
          </BlankLi> */}
          
          <BlankLi item="身高 (cm)">
            <InputBox val={insuredsData.insuHeight} onChangeVal={onChangeInsurantHeight} maxLength={3} tip="被保人身高 " />
          </BlankLi>
          <BlankLi item="体重 (kg)">
            <InputBox val={insuredsData.insuWeight} onChangeVal={onChangeInsurantWeight} maxLength={3} tip="被保人体重 " />
          </BlankLi>
          <BlankLi item="被保人职业">
            <ClickDiv val={occupation.occupationCategoryName} onClickHandler={onChangeOccupationShow} />
          </BlankLi>
        </div>

      </div>

    )
  };
}