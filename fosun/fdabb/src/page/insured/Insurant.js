import React, { Component } from 'react'
import BlankLi from '../../components/BlankLi';
import { observer, inject } from 'mobx-react';
import InputBox from '../../components/InputBox'
import RadioSelect from '../../components/RadioSelect';
import OccupationSelect from '../../components/OccupationSelect';

import {validNum,removeAllSpace} from '../../api/util'
// import ClickDiv from './ClickDiv'
import { DatePicker, Picker, Toast } from 'antd-mobile';
import moment from 'moment';
import SubTitle from '../../components/SubTitle'
// import RelationTypeContainer from '../containers/RelationTypeContainer'
// import PickerPlaceContainer from '../containers/PickerPlaceContainer'
import style from './index.less'
import { address } from "../../store/address"
const CustomChildren = ({ extra, onClick, children }) => (
    <span className={style.pickDate} onClick={onClick}  >{extra}</span>
);
@inject('store')
@observer
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
        const { insurant, userType, store: { insurance, appUi } } = this.props;
        return (
            <div >
                <SubTitle title={`${userType}信息`} toggleShow={this.toggleShow} show={this.state.show} icon="insured" />
                {/* <RelationTypeContainer /> */}
                <div className={this.state.show ? "coat_ul" : "hide"}>

                    <div>
                        {
                            userType == "被保人" ? <BlankLi title="为谁投保">
                                <RadioSelect
                                    list={insurance.relationArry}
                                    current={insurant.relationsWithCustomer}
                                    radioClick={val => { insurant.setUserData({ relationsWithCustomer: val }) }}
                                />
                            </BlankLi> : null
                        }

                        <BlankLi title={`${userType}姓名`}>
                            <InputBox val={insurant.name}
                                onChangeVal={val => { insurant.setUserData({ name: val }) }}
                                onBlurChange={val => insurant.searchName(val)}
                            />
                        </BlankLi>
                        <BlankLi title={`${userType}电话`}>
                            <InputBox val={ validNum(insurant.phone,[3,4,4]," ")} maxLength="13" className="account"
                                
                                onChangeVal={val => { insurant.setUserData({ phone: removeAllSpace(val) }) }} />
                        </BlankLi>
                        {/* <BlankLi item="证件类型">
                                <ClickDiv val={idtype[0].label} onClickHandler={e => console.log("不可选择")} />
                                showInsurantCertiTypeBox(insuredsData.insuIdType)
                            </BlankLi> */
                        }
                        <BlankLi title="身份证号">
                            <InputBox className="account" maxLength="20"
                            val={validNum(insurant.idNum,[6,8,4]," ")} 
                                onBlurChange={val => { insurant.idNumCheck(removeAllSpace(val)) }}
                                onChangeVal={val => { insurant.setUserData({ idNum: removeAllSpace(val) }) }} />
                        </BlankLi>
                        {/* <DatePicker
                                mode="date"
                                value={insuredsData.insuBirthDate ? moment(insuredsData.insuBirthDate) : null}
                                extra={"请选择"}
                                minDate={moment().subtract(55, "years")}
                                maxDate={moment().subtract(28, "days")}
                                onOk={date => onChangeInsurantBirthday(moment(date).format('YYYY-MM-DD'))}
                                disabled={insuredsData.insuIdType != 0 ? false : true}
                            >
                                <BlankLi item="出生日期">
                                </BlankLi>
                            </DatePicker> */
                        }
                        {/* <BlankLi item="被保人性别">
                                <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={insuredsData.insuSex} onSelect={onChangeInsurantGender} disabled={insuredsData.insuIdType} />
                            </BlankLi> */
                        }
                        <BlankLi title="证件有效期">
                            <DatePicker
                                mode="date"
                                value={insurant.validDateEnd ? new Date(insurant.validDateEnd) : null}
                                extra={"请选择"}
                                minDate={new Date()}
                                onOk={date => insurant.setUserData({ validDateEnd: moment(date).format('YYYY-MM-DD') })}
                            >
                                <CustomChildren> </CustomChildren>
                            </DatePicker>
                            <label className={style.radio_style}
                                onClick={e => insurant.setUserData({
                                    validDateEnd: insurant.validDateEnd === "9999-12-31" ? "" : '9999-12-31'
                                })}
                            >
                                <img style={{ marginRight: '6px' }}
                                    src={require(`../../components/asset/img/anxinli/${insurant.validDateEnd === "9999-12-31" ? "radio_on" : "radio_off"}.png`)}
                                /> 长期有效
                            </label>
                        </BlankLi>

                        {
                            (userType == "被保人" && insurant.relationsWithCustomer == "04") || userType == "投保人" ?
                                <div>
                                    <BlankLi title="邮箱">
                                        <InputBox val={insurant.email} tip="用于接收电子保单"
                                            onChangeVal={val => { insurant.setUserData({ email: val }) }} />
                                    </BlankLi>
                                </div> : null

                        }
                        {/* <PickerPlaceContainer title="被保人地址"
                                placeVal={[insuredsData.insuProvince, insuredsData.insuCity, insuredsData.insuCounty]}
                                checkPlace={onChangeInsurantAddress}
                            /> */}
                        <Picker
                            title="选择地区"
                            extra="请选择"
                            data={address}
                            value={[insurant.province, insurant.city, insurant.country]}
                            onOk={val => { insurant.setUserData({ province: val[0], city: val[1], country: val[2] }) }}
                        >
                            <BlankLi title="所在地区"></BlankLi>
                        </Picker>
                        <BlankLi title="详细地址">
                            <InputBox val={insurant.permanentAddress} tip="请输入详细地址"
                                onChangeVal={val => { insurant.setUserData({ permanentAddress: val }) }} />
                        </BlankLi>
                    </div>
                    {/* {
                            insuredsData.insuSocialSecFlag === "Y" ?
                            <BlankLi item="社保所在地">
                                {insuredsData.socialInsuProvinceName} ，{insuredsData.socialInsuCityName}
                            </BlankLi> : null
                        }
                        <BlankLi item="年收入">
                            <input type="text" id="333" style={{ width: "80px" }} placeholder="请输入" value={insuredsData.insuInCome} onChange={e => onChangeInsuInCome((e.target.value).trim())} maxLength={5} /> 万
                        </BlankLi> */}
                    {
                        userType == "被保人" ? <div>
                            <BlankLi title="身高 (cm)">
                                <InputBox val={insurant.height} maxLength={3} tip="被保人身高 "
                                    onChangeVal={val => { insurant.setUserData({ height: val }) }}
                                />
                            </BlankLi>
                            <BlankLi title="体重 (kg)">
                                <InputBox val={insurant.weight} maxLength={3} tip="被保人体重 "
                                    onChangeVal={val => { insurant.setUserData({ weight: val }) }}
                                />
                            </BlankLi>
                            <BlankLi title="被保人职业" onClick={e => appUi.changeShow(!appUi.showOccuPation)}>
                                {insurant.occupationName?insurant.occupationName:"请选择"}
                            </BlankLi>
                        </div> : null
                    }

                </div>
                {

                    appUi.showOccuPation ? <OccupationSelect setcode={val=>insurant.setJob(val)} code={insurant.occupationCode} parent={insurant.occupationParent}
                        changeShow={e => appUi.changeShow(!appUi.showOccuPation)} /> : null
                }
            </div>

        )
    };
}