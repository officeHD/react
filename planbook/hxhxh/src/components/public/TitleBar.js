import React, {Component} from 'react'
import { Icon } from 'antd-mobile';
import style from '../asset/css/TitleBar.less'
import AppStore from '../../stores/AppStore';

export default class TitleBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: AppStore.getType(),
        };
         this._onChange = this._onChange.bind(this);
    };
    componentDidMount() { 
        AppStore.addChangeListener(this._onChange); 
       
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
        
    };
    _onChange() {  
        this.setState({type: AppStore.getType(),});  
    };
     
    //后退一步
    goBack() {
        window.history.back()
    }

    render() {
       
        return (
            <div className={this.state.type?'hide':''}>
                <div className={style.title_bar}>
                    <Icon  className={style.goBack} type={require('../asset/svg/goBack.svg')} onClick={this.goBack} id="go_back"/>
                    <h1>{this.props.title}</h1>
                </div>
                <div className={style.line_bar}>
                </div>
            </div>
        );
    };
}