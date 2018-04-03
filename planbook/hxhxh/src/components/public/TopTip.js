import React, {Component} from 'react';
import style from '../asset/css/Toptip.less'

export default class TopTip extends Component {
    render() {
        return <div className={style.top_tip}>{this.props.tip}</div>
    };
}