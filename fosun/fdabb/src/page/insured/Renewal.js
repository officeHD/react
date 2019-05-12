import React, { Component } from 'react'
import BlankLi from '../../components/BlankLi';
import { observer, inject } from 'mobx-react';
import InputBox from '../../components/InputBox'
import RadioSelect from '../../components/RadioSelect';
import SubTitle from '../../components/SubTitle'
import style from './index.less'
import { validNum, removeAllSpace } from '../../api/util'

import { DatePicker, Picker, Toast } from 'antd-mobile';


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
    const { store: { insurance, order } } = this.props;

    return (

      <div >
        <SubTitle title={`续期账户`} show={this.state.show} icon="insured" />
        <Picker
          extra="请选择银行"
          data={insurance.payBankArry} value={[order.payBankCode]} cols={1}
          onOk={val => { order.setData({ payBankCode: val[0], reBankCode: val[0] }) }}
        >
          <BlankLi title="续期银行"></BlankLi>
        </Picker>
        <BlankLi title="续期账号">
          <InputBox val={validNum(order.payBankNum, [4], " ")} tip="请输入续期账号" className="account" maxLength="24"
            onChangeVal={val => { order.setData({ payBankNum: removeAllSpace(val), reBankNum: removeAllSpace(val) }) }}
          />
        </BlankLi>
      </div>
    )
  };
}