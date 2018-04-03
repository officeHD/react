import React, {Component} from 'react'
import { Icon } from 'antd-mobile';
import style from '../asset/css/TitleBar.less'
 

export default class TitleBar extends Component {
    constructor(props) {
        super(props);
    };
    //后退一步
    goBack() {
        window.history.back()
    }

    render() {
        return (
            
                <div className={style.title_bar}>
                    <Icon  className={style.goBack} type={require('../asset/svg/goBack.svg')} onClick={this.goBack} id="go_back"/>
                    <h1>{this.props.title}</h1>
                    <label onClick={this.props.handelShow}>筛选</label>
                </div>
                 
           
        );
    };
}