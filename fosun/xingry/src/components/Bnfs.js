import React, { Component } from 'react'
import BlankLi from './BlankLi'
import SubTitle from './public/SubTitle'
import { Picker } from 'antd-mobile';
import BnfsList from './BnfsList'
export default class Beneficiary extends Component {
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
    const { bnfsType, bnfsData, changeBeneficiaryType, onchangeBnfsName,onchangeBnfsPhone, onchangeBnfsNo, onChangeBnfsEffictive, onChangeBnfsBirthday, onChangeBnfsGender, onchangeBnfsbnfLot, onAddBnfs, onDelBnfs } = this.props;
    
    let BeneficiaryArry = bnfsData.map((item, index) => {
      return (
        <BnfsList key={index} item={item}
          index={index}
          onDelBnfs={onDelBnfs}
          onchangeBnfsName={onchangeBnfsName}
          onchangeBnfsNo={onchangeBnfsNo}
          onChangeBnfsEffictive={onChangeBnfsEffictive}
          onChangeBnfsBirthday={onChangeBnfsBirthday}
          onchangeBnfsbnfLot={onchangeBnfsbnfLot}
          onchangeBnfsPhone={onchangeBnfsPhone}
          onChangeBnfsGender={onChangeBnfsGender} />
      )
    });
    return (
      <div>
        <SubTitle title="受益人信息" icon="payment" />
        <div className={this.state.show ? "coat_ul" : "hide"}>
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Picker
              title="受益人类型"
              extra="请选择"
              cols="1"
              data={[{ label: '法定', value: '1' }, { label: "指定", value: '2' }]}
              value={bnfsType}
              onOk={v => changeBeneficiaryType(v)}
            >
              <BlankLi item="受益人类型"></BlankLi>
            </Picker>
          </div>

        </div>
        {bnfsType[0] === "2" ?
          <div>
            {BeneficiaryArry}
            <button style={{ margin: "25px auto", display: "block", background: "transparent", border: "1px solid #159DFF", color: "#159DFF", padding: "10px 20px", borderRadius: "5px" }}
              onClick={onAddBnfs}
            >添加受益人</button>
          </div> : null
        }

      </div>
    )
  };
}