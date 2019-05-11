import React, { Component } from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import OrderContainer from '../containers/OrderContainer'
import HolderMesContainer from '../containers/HolderMesContainer'
import InsurantMesContainer from '../containers/InsurantMesContainer'
import BnfMesContainer from '../containers/BnfMesContainer'
import style from './asset/css/index.less'
import Footer from './public/Footer'
import LoadingContainer from '../containers/LoadingContainer'

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
        let { onGoToStep } = this.props;
        return (
            <div className={style.pbottom}>
                <TitleBarStepContainer />
                <OrderContainer />
                <HolderMesContainer />
                <InsurantMesContainer />
                <BnfMesContainer />
                <Footer />
                {this.state.show ? <div className={style.payTipMask} style={{zIndex:"99999"}}>
                    <div className={style.payTip}>
                        <img src={require('./asset/img/paytip.jpg')} onClick={e => this.showPage(false)} />
                        <p>确认投保信息支付后，该订单的 被保人10分钟内不能重新投保， 是否确认并前往支付？</p>
                        <div className={style.next_btn} onClick={e =>{this.showPage(false),onGoToStep()}}>确认</div>
                    </div>
                </div> : ""}

                <div className={style.next_box} onClick={e => this.showPage(true)}>
                    <button className={style.next_btn}>确定</button>
                </div>
                <LoadingContainer />
            </div>
        )
    }
}



