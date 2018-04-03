import React, {Component} from 'react';
import style from '../asset/css/Introduce.less';

export default class Message extends Component {
    constructor(props){
        super(props);
    }
    render() {
       
       
        return (
            <div className={style.box_tile} onClick={this.props.changeState}>
            {this.props.onOrOff? <img src={require(`../asset/img/radio_${this.props.onOrOff}.png`)} />:''}
            {this.props.title}

            </div>
        )
    };
}