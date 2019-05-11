import React from 'react'
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';
import style from './index.less'
const Step = Steps.Step;
const Instruction = ({ onGoToStep }) => (

    <WingBlank size="lg">

        <WhiteSpace />
        <Steps size="large" current={4}>
            <Step title="报案" description={<p>拨打客服电话：<a href='tel:4008802177'>400-880-2177</a>进行报案</p>} icon={<span className="iconfont "></span>} />
            <Step title="准备材料" description="远程协助您准备好理赔材料" icon="<span>11</span>"/>
            <Step title="保险公司审核" description="准备好的保险材料寄送给保险公司" icon="<span>11</span>"/>
            <Step title="领取理赔金" description="保险公司会将理赔金给付至指定账户"icon="<span>11</span>" />
        </Steps>
        <WhiteSpace />
    </WingBlank>

)
export default Instruction