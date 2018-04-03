import React, {Component} from 'react'; 
import Place from './Place';
import style from '../asset/css/Insure.less';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import {getUserInfoAPI} from '../APIUtils';
export default class App extends Component {
    constructor(props){
        super(props); 
    };
    getUserInfo(event){
        let key=event.target.value.trim();
        getUserInfoAPI(key);
    }
    render() {
        return (
            <div>
                <div className={style.top_title}>
                    <img src={require(`../asset/img/person.png`)}/>
                    投保人信息填写 
                </div>
                <div className={style.content}>
                    <ul className={style.content_ul}>
                        <li className={style.list}>
                            <label>姓名</label>
                            <input 
                                type="text"
                                placeholder="请输入真实姓名" 
                                value={this.props.stakeholder.tbrName} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrName'),this.getUserInfo(event)}}
                            />
                        </li>
                        <li className={style.list}>
                            <label>手机号</label>
                            <input 
                                type="number"
                                placeholder="请输入手机号" 
                                value={this.props.stakeholder.tbrPhone} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrPhone')}}
                            />
                        </li>
                        <li className={style.list}>
                            <label>身份证号</label>
                            <input 
                                type="text"
                                placeholder="请输入身份证号"
                                value={this.props.stakeholder.tbrNo} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrNo')}}
                                maxLength="18"
                            />
                        </li>
                        <li className={style.list}>
                            <label>通讯地址</label>
                            <Place 
                                province={this.props.stakeholder.tbrProvince} 
                                city={this.props.stakeholder.tbrCity} 
                                country={this.props.stakeholder.tbrCountry}
                            />
                        </li>
                        <li className={style.list}>
                            <label>详细地址</label>
                            <input  
                                type="text" 
                                placeholder="精确到门牌号" 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrAdd')}}
                                value={this.props.stakeholder.tbrAdd}
                            />
                        </li>
                         <li className={style.list}>
                            <label>邮箱</label>
                            <input 
                                type="text"
                                placeholder="用于接收电子保单"
                                value={this.props.stakeholder.email} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'email')}}
                                maxLength="18"
                            />
                        </li>
                        
                    </ul>
                </div>    
            </div>
        )
    };
}