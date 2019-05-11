import React, { Component } from 'react'
import { Picker } from 'antd-mobile';
import InputBox from './InputBox'
import SubTitle from './public/SubTitle'
import Plans from './public/Plans'
import RadioSelector from './RadioSelector'
import BlankLi from './BlankLi'
import style from './asset/css/index.less'

export default class InsuPlan extends Component {
    render() {
        const { varietyData, relation,insuSocialSecFlag, onChangeAmnt, onChangeInsureCover,onChangePayMent, onChangeExtra, payBankArr, renewInfo, onChangeAccount,onChangeInsuSocialSecFla, onChangeBankCode } = this.props;
        return (
            <div>
                <SubTitle title="投保计划" show={true} icon="insured" />
                <div className="coat_ul">
                    <BlankLi item="主险">
                        {varietyData.title}
                    </BlankLi>
                    <BlankLi item="免赔额">10000 元</BlankLi>
                    <BlankLi item="保险期限">5 年</BlankLi>
                    <BlankLi item="投保地区">
                        北京/上海/广东/四川
                    </BlankLi>
                    <Picker
                        extra="请选择交费年期"
                        cols="1"
                        data={varietyData.payMentArry}
                        value={varietyData.payMent}
                        onOk={v => onChangePayMent(v)}
                    >
                        <BlankLi item="交费年期"> </BlankLi>
                    </Picker>
                    <BlankLi item="社保" >
                        <RadioSelector a="有" b="无" selected={insuSocialSecFlag === "N"} onSelect={onChangeInsuSocialSecFla} />
                    </BlankLi>
                   
                    
                    {/* <BlankLi item="保险金额">
                        <input type="text" id="333" style={{ width: "85px" }} placeholder="请输入" maxLength="3" value={varietyData.amnt} onChange={e => onChangeAmnt((e.target.value).trim())} />
                        (万)
                    </BlankLi> */}
                    {varietyData.payMent[0] != "趸交" ? <div>
                        <Picker
                            title="选择付款银行"
                            extra="由通联提供支付服务"
                            cols="1"
                            data={payBankArr}
                            value={[renewInfo.bankCode] || null}
                            onOk={v => onChangeBankCode(v)}
                        >
                            <BlankLi item="续期银行"> </BlankLi>
                        </Picker>
                        <BlankLi item="续期账号">
                            <InputBox val={renewInfo.account} onChangeVal={onChangeAccount} maxLength="19" />
                        </BlankLi>
                    </div> : ""
                    } 
                </div>
            </div>

        )
    };
}