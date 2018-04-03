import React, {Component} from 'react';
import style from '../asset/css/SelectorInLine.less'

export default class Out extends Component {

    render() {
        if (!this.props.isShow) {
            return null;
        }

        let listShows = this.props.options.map((text, index)=> {
            return (
                <li key={index} className={text === this.props.selected ? style.selected : ''} onClick={e => this.props.onSelect({text, index,})}>{text}</li>
            );
        });

        return (
            <div className="cover" onClick={this.props.onClose}>
                <ul className={style.li_selector}>
                    {listShows}
                </ul>
            </div>
        );
    };
}