import React, { Component } from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import SupportBank from './SupportBank'
import data from '../reducers/data.json'
import { Picker } from 'antd-mobile';
import style from './asset/css/index.less'

export default class OutPut extends Component {
    state = {
        isShow: false
    }
    changeShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        let { payType,inApp, bankCode, cardName, bankNum, onChangeBankCode, onChangeCardName, onChangeBankNum, onchangeC } = this.props;
        if (payType === "01") {
            return null;
        }
        return (
            <div>
                <div className="coat_ul">
                    <Picker
                        title="选择付款银行"
                        extra="由通联提供支付服务"
                        cols="1"
                        data={data.payBank}
                        value={bankCode || null}
                        onOk={v => onChangeBankCode(v)}
                    >
                        <BlankLi item="付款银行"> </BlankLi>
                    </Picker>
                    <BlankLi item="持卡人">
                        {cardName}
                    </BlankLi>
                    <BlankLi item="银行账号">
                        <InputBox val={bankNum} onChangeVal={onChangeBankNum} maxLength="19" />
                    </BlankLi>
                    {/* <BlankLi item="预留手机号">
                        <div className={style.payPhone}>
                            <InputBox val={this.props.payPhone} onChangeVal={this.props.onChangePayPhone} maxLength="11" />
                            <label className={this.props.second > 0 ? style.default : null}
                                onClick={e => this.props.onGetMesCode(this.props.second)}>
                                {this.props.second <= 0||this.props.second == 60 ? '获取验证码' : `${this.props.second}s后重新获取`}
                            </label>
                        </div>
                    </BlankLi>
                    <BlankLi item="验证码">
                        <InputBox val={this.props.smsCode} onChangeVal={this.props.onChangeSmsCode} maxLength="6" />
                    </BlankLi> */}
                </div>
                <div className={style.attention} style={{ paddingBottom: "30px" }}>
                    <div className={style.attlist}>
                        <input style={{ verticalAlign: "top" }} type="checkbox" defaultChecked="checked" onChange={onchangeC} />我已阅读并同意
                       
                        {/* <br /> <br /> */}
                        <span onClick={this.changeShow.bind(this)} style={{ float: "right", color: "red" }}>查看银行限额</span>
                    </div>
                </div>
                {this.state.isShow ? <SupportBank changeShow={this.changeShow.bind(this)} /> : ''}
            </div>

        )
    };
}