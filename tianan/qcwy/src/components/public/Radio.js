import React, {Component} from 'react';
import style from '../asset/css/Radio.less'

export default class Out extends Component {
    
    render() {
         

        return (
            <span>
                <span className={`${this.props.gender?"":style.checked} ${style.radio}`} onClick={this.props.setGender}>{this.props.left}</span>
                <span className={`${this.props.gender?style.checked:""} ${style.radio}`} onClick={this.props.setGenders}>{this.props.right}</span>
            </span>
        );
    };
}
