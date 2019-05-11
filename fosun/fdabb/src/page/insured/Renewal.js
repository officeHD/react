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
        <SubTitle title={`续期账户`} show={this.state.show} icon="insured" />
        <BlankLi title="续期银行">
           
        </BlankLi>
        <BlankLi title="续期账号">
           
        </BlankLi>
         
      </div> 
    )
  };
}