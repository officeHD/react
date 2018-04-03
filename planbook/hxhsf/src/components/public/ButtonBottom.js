import React, {Component} from 'react';
import style from '../asset/css/ButtonBottom.less'

export default class Out extends Component {

    render() {
        return (
            <div className={this.props.fixed ? style.fixed : style.next}>
                <button type="button" 
                  className={this.props.disabled ? style.disabled : style.button}
                  onClick={this.props.disabled ? null : this.props.onClickHandle} >
                    {this.props.text ? this.props.text : '下一步'}
                  </button>   
            </div>
        );
    };
}