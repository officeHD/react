import React, {Component} from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import RadioSelector from './RadioSelector'
import data from '../reducers/data.json'


export default class OutPut extends Component {

  render() {
    return (
      <ul className="coat_ul">
        <BlankLi item="投保人姓名">
          {this.props.justRead ? this.props.holderName :
          <InputBox val={this.props.holderName} onChangeVal={this.props.onChangeHolderName}/>
          }
        </BlankLi>
        <BlankLi item="证件类型">
          {this.props.justRead ? data.HolderCertiType[this.props.holderCertiType] :
          <ClickDiv val={data.HolderCertiType[this.props.holderCertiType]} onClickHandler={e => this.props.showHolderCertiTypeBox(this.props.holderCertiType)}/>
          }
        </BlankLi>
        <BlankLi item="证件号码">
          {this.props.justRead ? this.props.holderCertiNo :
          <InputBox val={this.props.holderCertiNo} onChangeVal={this.props.onChangeHolderNo}/>
          }
        </BlankLi>
        <BlankLi item="出生日期">
          {this.props.justRead ? this.props.holderBirthday :
          <InputBox val={this.props.holderBirthday} onChangeVal={this.props.onChangeHolderBirthday}/>
          }
        </BlankLi>
        <BlankLi item="投保人性别">
          {this.props.justRead ? data.HolderGender[this.props.holderGender] :
          <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={this.props.holderGender} onSelect={this.props.onChangeHolderGender}/>
          }
        </BlankLi>
        <BlankLi item="投保人电话">
          {this.props.justRead ? this.props.holderPhone :
          <InputBox val={this.props.holderPhone} onChangeVal={this.props.onChangeHolderPhone}/>          
          }
        </BlankLi>
        <BlankLi item="投保人邮箱">
          {this.props.justRead ? this.props.holderEmail :
          <InputBox val={this.props.holderEmail} onChangeVal={this.props.onChangeHolderEmail} tip="用于接收电子保单"/>
          }
        </BlankLi>
      </ul>
    )
  };
}