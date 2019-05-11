import React, { Component } from 'react'
import BlankLi from '../../components/BlankLi';
import { observer, inject } from 'mobx-react';
import InputBox from '../../components/InputBox'
import RadioSelect from '../../components/RadioSelect';

// import ClickDiv from './ClickDiv'
import { DatePicker,Button } from 'antd-mobile';
import moment from 'moment';
import SubTitle from '../../components/SubTitle'
// import RelationTypeContainer from '../containers/RelationTypeContainer'
// import PickerPlaceContainer from '../containers/PickerPlaceContainer'
// import data from '../reducers/data.json'
import style from './index.less'


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
        const { store: { benefit, insurance } } = this.props;

        let benefitList = benefit.lists.slice();

        return (

            <div >
                <SubTitle title={`受益人信息`} show={this.state.show} icon="insured" />
                <div className={this.state.show ? "coat_ul" : "hide"}>
                    <BlankLi title="受益人类型">
                        <RadioSelect list={insurance.benefitArry}
                            current={benefit.type}
                            radioClick={val => { benefit.setBenefitType(val) }}
                        />
                    </BlankLi>
                    {
                        benefit.type == "1" ? null : <div>
                            {
                                benefitList.map((item, index) => {
                                    return <div key={index}>
                                        <BlankLi title={`身故受益人${index + 1}`}>
                                            <span>删除</span>
                                        </BlankLi>
                                        <BlankLi title={`是投保人的`}>
                                            <RadioSelect list={insurance.relationBenefitArry}
                                                current={item.relation}
                                                radioClick={val => {
                                                    benefit.setData({
                                                        index: index,
                                                        dataType: "relation",
                                                        value: val,
                                                    })
                                                }}
                                            />
                                        </BlankLi>
                                        <BlankLi title={`姓名`}>
                                            <InputBox val={item.name} onChangeVal={val => {
                                                benefit.setData({
                                                    index: index,
                                                    dataType: "name",
                                                    value: val,
                                                })
                                            }} onBlurChange={val => benefit.searchName(val)} />
                                        </BlankLi>
                                        <BlankLi title={`手机号`}>
                                            <InputBox val={item.phone} onChangeVal={val => {
                                                benefit.setData({
                                                    index: index,
                                                    dataType: "phone",
                                                    value: val,
                                                })
                                            }} maxLength="11" />
                                        </BlankLi>
                                        <BlankLi title="身份证号">
                                            <InputBox className="account"
                                                val={item.idNum} onChangeVal={val => {
                                                    benefit.setData({
                                                        index: index,
                                                        dataType: "idNum",
                                                        value: val
                                                    })
                                                }} maxLength="20" />
                                        </BlankLi>
                                        <BlankLi title="证件有效期">
                                            <DatePicker
                                                mode="date"
                                                value={item.validDateEnd ? new Date(item.validDateEnd) : null}
                                                extra={"请选择"}
                                                minDate={new Date()}
                                                onOk={date => benefit.setData({
                                                    index: index,
                                                    dataType: "validDateEnd",
                                                    value: moment(date).format('YYYY-MM-DD')
                                                })}
                                            >
                                                <CustomChildren> </CustomChildren>
                                            </DatePicker>
                                            <label className={style.radio_style}
                                                onClick={e => benefit.setData({
                                                    index: index,
                                                    dataType: "validDateEnd",
                                                    value: item.validDateEnd === "9999-12-31" ? "" : '9999-12-31'

                                                })}
                                            >
                                                <img style={{ marginRight: '6px' }}
                                                    src={require(`../../components/asset/img/anxinli/${item.validDateEnd === "9999-12-31" ? "radio_on" : "radio_off"}.png`)}
                                                /> 长期有效
                                            </label>
                                        </BlankLi>
                                        <BlankLi title="受益比例">
                                            <InputBox className="account"
                                                val={item.rate} onChangeVal={val => {
                                                    benefit.setData({
                                                        index: index,
                                                        dataType: "rate",
                                                        value: val
                                                    })
                                                }} maxLength="20" />
                                        </BlankLi>
                                        
                                    </div>
                                })
                            }
                            {benefitList.length<3?<Button onClick={e=>{benefit.addBenefit()}}>添加受益人</Button>:null}
                            
                        </div>


                    }


                </div>
            </div>

        )
    };
}