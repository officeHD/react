import React, {Component}  from 'react'
import ShowController from './ShowController'
import style from '../asset/css/index.less'

export default class Out extends Component {
  constructor(props){
        super(props);
        this.state = {
          show: false,
        }

        this.toggleShow = this.toggleShow.bind(this)
    }

    toggleShow() {
      this.setState({
        show: !this.state.show
      })
    }

    render(){ 
      return (
        <div className={style.documents}>
          <ul>
            <li><a href={`${ctx}/static/pdf/zhongan/ywsh.pdf`} target="_blank">意外伤害保险条款</a></li>
            <li><a href={`${ctx}/static/pdf/zhongan/ywsh-ylfy.pdf`} target="_blank">附加意外伤害医疗费用保险条款（b款）</a></li>
            <li><a href={`${ctx}/static/pdf/zhongan/ywsh-zyjt.pdf`} target="_blank">附加意外伤害住院津贴保险条款</a></li>
          </ul>
          <p className={this.state.show ? style.all : ''}>
            1、本保险产品由中安在线财产保险股份有限公司承保（以下简称“众安保险”），通过互联网在全国区域销售；<br />
            2、本产品投保人应为18周岁以上有完全民事行为能力的人，并与被保险人存在可保利益；<br />
            3、本保险产品被保险人投保时年龄为0-65周岁；<br />
            4、本保险产品仅限为在中国大陆地区有固定居住地的人士投保；<br />
            5、本保险产品保险期间为一年，自您成功投保后次日零时生效；<br />
            6、投保人为被保险人首次投保本保险或非连续投保本保险时，自本合同生效日起 90日为等待期；<br />
            7、本保险产品仅提供电子保单，您成功投保后，众安保险将给您发送电子保单，请您注意查收，根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保单和纸质保单具有同等法律效力；<br />为避免因邮箱录入错误导致您的个人信息泄露，请提供真实电邮地址；<br />
            8、同时请您了解，在投保本产品前您应履行相应的如实告知义务，具体如下：投保人或被保险人应如实填写投保信息，并就保险公司提出的询问据实告知，否则保险公司有权根据《中华人民共和国保险法》第十六条的规定解除保险合同且不承担赔偿责任；<br />订立保险合同时，保险公司就保险标的或者被保险人的有关情况提出询问的，投保人应当如实告知。投保人故意或者因重大过失未履行前款规定的如实告知义务，足以影响保险公司决定是否同意承保或者提高保险费率的，保险公司有权解除合同。投保人故意不履行如实告知义务的，保险公司对于合同解除前发生的保险事故，不承担赔偿责任，并不退还保险费。投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险公司对于合同解除前发生的保险事故，不承担赔偿责任，但退还保险费；<br />
            9、阅读条款：投保前请您认真阅读《意外伤害保险条款》（众安备-意外伤害【2014】主9号），了解保险责任及责任免除，尤其是对其中免除保险人责任的条款（包括但不限于责任免除、投保人被保险人义务、保险金申请与给付等），请充分理解并接受上述内容同意以此作为订立保险合同的依据；<br />
            10、退保规则：未发生赔付的保单，投保人要求解除本合同，自保险人接到保险合同解除申请书之日次日零时起，本合同的效力终止。保险人收到上述证明文件和资料之日起30日内退还本合同的未满期净保险费（未满期净保险费=保险费×[1-(保险单已经过天数/保险期间天数)]×（1-30%）），经过天数不足一天的按一天计算。
          </p>
          <ShowController show={this.state.show} onToggleShow={this.toggleShow} />
        </div>
      )
    }
}