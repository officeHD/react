import React, {Component} from 'react'
import { Icon } from 'antd-mobile';
import style from '../asset/css/TitleBarFrame.less'

export default class TitleBar extends Component {

    //后退一步
    goBack() {
        window.history.back()
    }

    render() {
        return (
            <div className={style.title_bar}>
                <Icon  className={style.goBack} type={require('../asset/svg/goBack.svg')} onClick={this.goBack} id="go_back"/>
                <h1>{this.props.title}</h1>
            </div>
        );
    };
}