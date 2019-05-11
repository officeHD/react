import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../../components/NavBar';
import BlankLi from '../../components/BlankLi';
import RadioSelect from '../../components/RadioSelect';
import InputBox from '../../components/InputBox';


import SubTitle from '../detail/SubTitle';
import { DatePicker,Toast } from 'antd-mobile';
import moment from 'moment';
import style from "./index.less"
let CustomChildren = ({ extra, onClick }) => (
    <span onClick={onClick} >{extra}</span>
);
@inject('store')
@observer

export default class AddTodo extends Component {
  
    render() {
        const { store } = this.props;
        let insurance = store.insurance;
        let insurant = store.insurant;
        
        return (
            <div className={style.computer}>
                <NavBar title="保费试算" />
                <SubTitle title="被保人信息" />
                <BlankLi title="被保人性别">
                     <RadioSelect list={[{name:"男",value:"0"},{name:"女",value:"1"}]} current={store.insurant.sex} 
                     radioClick={val=>{insurant.setUserData({sex:val});insurance.getPrem()}}
                     />
                </BlankLi>
                <BlankLi title="出生日期">
                    <DatePicker
                        mode="date"
                        value={insurant.birthDate ? new Date(insurant.birthDate) : new Date()}
                        extra={"请选择出生日期"}
                        minDate={new Date(insurance.ageEnd)}
                        maxDate={new Date(insurance.ageStar)}
                        onOk={date => {insurant.setUserData({birthDate:moment(date).format('YYYY-MM-DD')});insurance.getPrem()}}
                    >
                        <CustomChildren></CustomChildren>
                    </DatePicker>
                </BlankLi>
                <SubTitle title="选择投保方案" />
                <BlankLi title="交费年期">
                    <RadioSelect list={insurance.paymentArry} current={insurance.payment} radioClick={val=>{insurance.initData({payment:val});insurance.getPrem()}}/>
                </BlankLi>
                <BlankLi title="保险期限">
                <RadioSelect list={insurance.insuYearArry} current={insurance.insuYear} radioClick={val=>{insurance.initData({insuYear:val});insurance.getPrem()}}/>
                
                </BlankLi>
                <BlankLi title="有无社保">
                <RadioSelect list={insurance.socialSecFlagArry} current={insurant.socialSecFlag} radioClick={val=>{insurant.setUserData({socialSecFlag:val});insurance.getPrem()}}/>
                
                </BlankLi>
                <BlankLi title="保险金额">
                    <InputBox val={insurance.amnt} type="number" className={style.amntInput} onChangeVal={val=>{insurance.initData({amnt:val})}} onBlurChange={val=>insurance.getPrem()} /><div className={style.danwei}>万元</div>
                </BlankLi>
                <BlankLi title="保费">
                <div className={style.premClass}>
                <span className={style.prem}>{insurance.prem}</span> 元 
                </div>
                </BlankLi>
                  
                    <ul className={style.fixedBottom} >
                        <li onClick={e=>insurance.computer()}> 下一步 </li>
                    </ul>
                 
               
            </div>
        )
    }
}