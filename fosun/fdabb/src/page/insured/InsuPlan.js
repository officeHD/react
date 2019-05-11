import React, { Component } from 'react'
import BlankLi from '../../components/BlankLi';
import { observer, inject } from 'mobx-react';
import InputBox from '../../components/InputBox'
import RadioSelect from '../../components/RadioSelect';
import SubTitle from '../../components/SubTitle'
import style from './index.less'

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
    const { store } = this.props;
    let insurance = store.insurance;
    console.log(insurance)
    return (

      <div >
        <SubTitle title={`投保方案`} show={this.state.show} icon="insured" />
        <BlankLi title="投保计划">
          {insurance.productName}
        </BlankLi>
        <BlankLi title="保障期限">
          {insurance.insuYear=="1000"?"终身":`至${insurance.insuYear}周岁`}
        </BlankLi>
        <BlankLi title="交费年期">
          {insurance.payment=="趸交"?"趸交":insurance.payment+"年交"}
        </BlankLi>
        <BlankLi title="有无社保">
          {insurance.socialSecFlag=="Y"?"有社保":"无社保"}
        </BlankLi>
        <BlankLi title="保额">
          {insurance.amnt}万元
        </BlankLi> 
      </div> 
    )
  };
}