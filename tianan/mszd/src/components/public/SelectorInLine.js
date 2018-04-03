import React, {Component} from 'react';
import style from '../asset/css/SelectorInLine.less'

export default class Out extends Component {

    render() {
        if (!this.props.isShow) {
            return null;
        }
         
        let listShows = this.props.options.map((text, index)=> {
            if(this.props.search){
                if(text.indexOf(this.props.search) >= 0){
                return (
                    <li key={index} className={text === this.props.selected ? style.selected : ''} onClick={e => this.props.onSelect({text, index,})}>{text}</li>
                );
                }
            }
           
              else{  return (
                    <li key={index} className={text === this.props.selected ? style.selected : ''} onClick={e => this.props.onSelect({text, index,})}>{text}</li>
                );
            }
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