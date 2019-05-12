
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../../components/NavBar';
import RadioSelect from '../../components/RadioSelect';
import BlankLi from '../../components/BlankLi';
import { DatePicker, Picker, Toast } from 'antd-mobile';
import InputBox from '../../components/InputBox'
import { validNum, removeAllSpace } from '../../api/util'

import style from './index.less';

@inject('store')
@observer

export default class AddTodo extends Component {
    render() {
        const { store: { insurance, insurant, order } } = this.props;
        return (
            <div className="pd150">
                <NavBar title={insurance.productName} />
                <div>
                    <BlankLi title="投保计划">
                        {insurance.productName}
                    </BlankLi>
                    <BlankLi title="保障期限">
                        {insurance.insuYear == "1000" ? "终身" : `至${insurance.insuYear}周岁`}
                    </BlankLi>
                    <BlankLi title="交费年期">
                        {insurance.payment == "趸交" ? "趸交" : insurance.payment + "年交"}
                    </BlankLi>
                    <BlankLi title="有无社保">
                        {insurance.socialSecFlag == "Y" ? "有社保" : "无社保"}
                    </BlankLi>

                    <BlankLi title="保额">
                        {insurance.amnt}万元
                    </BlankLi>
                    <BlankLi title="保费">
                        {insurance.prem}元
                    </BlankLi>

                    <BlankLi title="支付方式">
                        <RadioSelect
                            list={insurance.payTypeArray}
                            current={order.payType}
                            radioClick={val => { order.setData({ payType: val }) }}
                        />
                    </BlankLi>
                    {
                        order.payType == "00" ? "" : <div>

                            <Picker
                                extra="请选择银行"
                                data={insurance.payBankArry} value={[order.payBankCode]} cols={1}
                                onOk={val => { order.setData({ payBankCode: val[0] }) }}
                            >
                                <BlankLi title="续期银行"></BlankLi>
                            </Picker>
                            <BlankLi title="续期账号">
                                <InputBox val={validNum(order.payBankNum, [4], " ")} tip="请输入续期账号" className="account" maxLength="24"
                                    onChangeVal={val => { order.setData({ payBankNum: removeAllSpace(val) }) }}
                                />
                            </BlankLi>
                        </div>
                    }


                </div>
                <ul className={style.fixedBottom} onClick={e => insurance.computer}>
                    <li> 确定 </li>
                </ul>
            </div>
        )
    }
}