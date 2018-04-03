import React, {Component} from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import RadioSelector from './RadioSelector'
import data from '../reducers/data.json'


export default class OutPut extends Component {

  render() {
    if (this.props.insuredRelaToHolder === 0) {
      return null
    }

    return (
      <ul className="coat_ul">
        <BlankLi item="被保人姓名">
          {this.props.justRead ? this.props.insurantName :
          <InputBox val={this.props.insurantName} onChangeVal={this.props.onChangeInsurantName}/>
          }
        </BlankLi>
        <BlankLi item="证件类型">
          {this.props.justRead ? data.HolderCertiType[this.props.insurantCertiType] :
          <ClickDiv val={data.HolderCertiType[this.props.insurantCertiType]} onClickHandler={e => this.props.showInsurantCertiTypeBox(this.props.insurantCertiType)}/>
          }
        </BlankLi>
        <BlankLi item="证件号码">
          {this.props.justRead ? this.props.insurantCertiNo :
          <InputBox val={this.props.insurantCertiNo} onChangeVal={this.props.onChangeInsurantNo}/>
          }
        </BlankLi>
        <BlankLi item="出生日期">
          {this.props.justRead ? this.props.insurantBirthday :
          <InputBox val={this.props.insurantBirthday} onChangeVal={this.props.onChangeInsurantBirthday}/>
          }
        </BlankLi>
        <BlankLi item="被保人性别">
          {this.props.justRead ? data.HolderGender[this.props.insurantGender] :
          <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={this.props.insurantGender} onSelect={this.props.onChangeInsurantGender}/>
          }
        </BlankLi>
        <BlankLi item="被保人电话">
          {this.props.justRead ? this.props.insurantPhone :
          <InputBox val={this.props.insurantPhone} onChangeVal={this.props.onChangeInsurantPhone}/>          
          }
        </BlankLi>

      </ul>
    )
  };
}