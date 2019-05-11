import React ,{Component}from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import OrderContainer from '../containers/OrderContainer'
import LoadingContainer from '../containers/LoadingContainer'
import PayOrderContainer from '../containers/PayOrderContainer'
import PayTypeContainer from '../containers/PayTypeContainer'
import SubTitle from './public/SubTitle'

import style from './asset/css/index.less'

export default class OutPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showPage = this.showPage.bind(this);
  }
  showPage(val) {
    this.setState({
      show: val,
    })
  }
  render() {
    let { payType, onGoToStep } = this.props;
    return (
      <div className={style.pbottom}>
        <TitleBarStepContainer />
        <OrderContainer />
        <SubTitle title="请选择支付方式" icon="payment" />
        <PayTypeContainer />
        <PayOrderContainer />
       
       
        <div className={style.pay_box}>
          <button className={style.next_btn} onClick={e => onGoToStep(payType)}>确认付款</button>
        </div>
        <LoadingContainer />
      </div>
    )
  }

}
