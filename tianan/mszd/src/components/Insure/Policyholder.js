import React, {Component} from 'react';  
import Place from './Place';
import style from '../asset/css/Insure.less';
import moment from 'moment';
import { DatePicker,Picker,List } from 'antd-mobile';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import {getUserInfoAPI} from '../APIUtils';
export default class App extends Component {
    constructor(props){
        super(props);
    }
    getUserInfo(event){
        let key=event.target.value.trim();
        getUserInfoAPI(key,"bbr");
    }
    render() {
        return (
            <div>
                <div className={style.top_title}>
                    <img src={require(`../asset/img/person.png`)}/>被保人信息填写  
                </div>
                <div className={style.content}>
                    <ul className={style.content_ul}>
                        <li className={style.list}>
                            <label>姓名</label>
                            <input 
                                type="text"
                                placeholder="请输入真实姓名" 
                                value={this.props.stakeholder.bbrName} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bbrName'),this.getUserInfo(event)}}
                            />
                        </li> 
                         <li className={style.list}>
                            <label>手机号</label>
                            <input 
                                type="text"
                                placeholder="请输入手机号" 
                                value={this.props.stakeholder.bbrPhone} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bbrPhone')}}
                            />
                        </li>
                        
                         <li className={style.list}>
                            <label>身份证号</label>
                            <input 
                                type="text"
                                placeholder="请输入身份证号" 
                                value={this.props.stakeholder.bbrNo} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bbrNo')}}
                            />
                        </li>
                       
                        <li className={style.list}>
                            <label>通讯地址</label>
                            <Place 
                                type="bbr" 
                                province={this.props.stakeholder.bbrProvince} 
                                city={this.props.stakeholder.bbrCity} 
                                country={this.props.stakeholder.bbrCountry}
                            />
                        </li>
                      
                        <li className={style.list}>
                            <label>详细地址</label>
                            <input  type="text" 
                                placeholder="精确到门牌号" 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bbrAdd')}}
                                value={this.props.stakeholder.bbrAdd}
                            />
                        </li>
                        <li className={style.list}>
                            <DatePicker 
                                mode="date"
                               
                                minDate={moment(this.props.stakeholder.minBirthday)}
                                title="保险起期"
                                value={this.props.stakeholder.beginDate === '' ? moment() : moment(this.props.stakeholder.beginDate)}
                                onChange={(val) => InsuranceActionCreators.setBeginDate(moment(val).format('YYYY-MM-DD'))}
                            >
                            <div>
                                <label>保险起期</label>
                                <input type="text" placeholder="请选择保险开始日期" 
                                    readOnly="readonly"
                                    value={this.props.stakeholder.beginDate}
                                />
                            </div>
                            </DatePicker>
                        </li>
                         <li className={style.list}>
                            <label>保险期限</label>
                             <input  type="text" 
                                  
                                    value="一年"    
                                    readOnly="readonly"       
                            /> 
                        </li> 
                    </ul>
                </div> 
            </div>
        )
    };
}