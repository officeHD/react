import React, {Component} from 'react';
import style from '../asset/css/SelectorSex.less'

export default class Out extends Component {
    render() {
        let listShows = this.props.options.map((text, index) => {
            let onOrOff = (text === this.props.selectedOption) ? 'on' : 'off';
            return (
                <li key={index} onClick={e => this.props.onClickHandle({text, index,})}>
                    <img src={require('../asset/img/radio_' + onOrOff + '.png')} />{text}
                </li>
            ) 
        });
        return (
            <div className="cover" onClick={this.props.onClose}>
                <ul className={style.selector_radio}>
                    {listShows}
                </ul>
            </div>
        );
    };
}
