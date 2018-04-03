import React, {Component} from 'react';
import style from '../asset/css/Switcher.less'

export default class Switcher extends Component {

    render() {
        let yesOrNo = this.props.isOn ? 'yes' : 'no';
        return (
            <img className={style.switcher} src={require(`../asset/img/${yesOrNo}.png`)} onClick={this.props.onClick}/>
        );
    };
}