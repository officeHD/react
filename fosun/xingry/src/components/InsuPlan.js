import React, { Component } from 'react'
import { Picker } from 'antd-mobile';
import InputBox from './InputBox'
import SubTitle from './public/SubTitle'
import Plans from './public/Plans'
import BlankLi from './BlankLi'
import style from './asset/css/index.less'

export default class InsuPlan extends Component {
    render() {
        const { varietyData, relation, onChangeAmnt, onChangePayMent, onChangeExtra, payBankArr, renewInfo, onChangeAccount, onChangeBankCode } = this.props;
        return (
            <div>
                <SubTitle title="投保计划" show={true} icon="insured" />
                <div className="coat_ul">
                    <BlankLi item="主险">
                        复星联合 星如意重大疾病保险
                    </BlankLi>
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
                    <BlankLi item="保险金额">
                        <input type="text" id="333" style={{ width: "85px" }} placeholder="请输入" maxLength="3" value={varietyData.amnt} onChange={e => onChangeAmnt((e.target.value).trim())} />
                        (万)
                    </BlankLi>
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
                            <InputBox className="account" val={renewInfo.account} onChangeVal={onChangeAccount} maxLength="24" />
                        </BlankLi>
                    </div> : ""
                    }
                    {varietyData.payMent[0] != "趸交" && relation !== "04" ?
                        <BlankLi item="附加险">
                            <label className={style.radio_style} onClick={e => onChangeExtra()}>
                                <img src={require(varietyData.extra ? './asset/img/anxinli/radio_on.png' : './asset/img/anxinli/radio_off.png')} style={{ marginRight: '6px' }} />  附加投保人豁免重大疾病保险
                            </label>
                        </BlankLi> : null
                    }

                </div>
            </div>

        )
    };
}