import React, {Component} from 'react';
import moment from 'moment';
import Place from './Place';
import Bigjob from './Bigjob';
import Smalljob from './Smalljob';
import Job from './Job';
import { DatePicker,Picker,List } from 'antd-mobile';
import style from '../asset/css/Insure.less';
import Switcher from '../public/Switcher'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import InsuranceStore from '../../stores/InsuranceStore';
import {getUserInfoAPI,changeInsurePrice} from '../APIUtils';
export default class App extends Component {
     constructor(props){
        super(props);
         this.state = this.getData();
        this.onCarChange = this.onCarChange.bind(this);
        
    };
    getData() {
        return {
            tbPlace: InsuranceStore.getTbPlace(),
        }
    };
    onCarChange() {
        this.setState(this.getData());
    }
    componentDidMount() {      
        InsuranceStore.addChangeListener(this.onCarChange);
    };
    componentWillUnmount() {
        InsuranceStore.removeChangeListener(this.onCarChange);
    };
    getUserInfo(event){
        
        let key=event.target.value.trim();
        
        getUserInfoAPI(key);
    }
    changeTbrid(event){
        if(this.props.stakeholder.sameAs){
            let val=event.target.value.trim();
            let bbrBirthday='';
            if(val.length===15||val.length===18){
                if (val.length == 15) {
                    bbrBirthday = "19" + val.substr(6, 6);
                } else if (val.length == 18) {
                    bbrBirthday = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2); 
                }
                InsuranceActionCreators.changeBirthday(bbrBirthday);
                changeInsurePrice();
            }
        }
        
    }
    render() {
        return (
            <div>
                <div className={style.top_title}>
                    <span>
                    <img src={require(`../asset/img/person.png`)}/>
                    投保人信息填写 
                    </span>
                    
                     
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
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrNo'),this.changeTbrid(event)}}
                                maxLength="18"
                            />
                        </li>
                         <li className={style.list}>
                            <DatePicker 
                                mode="date"
                                maxDate={moment()}
                                minDate={moment('1900-08-06 +0800', 'YYYY-MM-DD Z')}
                                title="证件有效起期"
                                value={this.props.stakeholder.tbrNoStart === '' ? moment() : moment(this.props.stakeholder.tbrNoStart)}
                                onChange={val => InsuranceActionCreators.changeTbrNoStart(moment(val).format('YYYY-MM-DD'))}

                            >
                                <div>
                                    <label>证件有效起期</label>
                                    <input  type="text" 
                                            placeholder="请选择" 
                                            readOnly="readonly"
                                            value={this.props.stakeholder.tbrNoStart}
                                    />
                                </div>
                            </DatePicker>  
                        </li>
                       <li className={style.list}>
                            <DatePicker 
                                mode="date"
                                maxDate={moment('2099-12-31 +0800', 'YYYY-MM-DD Z')}
                                minDate={moment(this.props.stakeholder.tbrNoStart)}
                                title="证件有效止期"   
                                value={this.props.stakeholder.tbrNoEnd === '' ? moment() : moment(this.props.stakeholder.tbrNoEnd)}
                                onChange={val => InsuranceActionCreators.changeTbrNoEnd(moment(val).format('YYYY-MM-DD'))}
                                
                            >
                                <div>
                                    <label>证件有效止期</label>
                                    <input  type="text" 
                                            placeholder="请选择" 
                                            readOnly="readonly"
                                            value={this.props.stakeholder.tbrNoEnd}
                                    />
                                </div>
                            </DatePicker>  
                        </li>
                        <li className={style.list}>
                            <label>证件长期有效</label>
                            <Switcher isOn={this.props.isLongTimeID} onClick={InsuranceActionCreators.switchIDTime}/>
                            
                        </li>
                          <li className={style.list}>
                            <label>职业大类</label>
                            <Bigjob jobs={this.props.stakeholder.bigjobs} job={this.props.stakeholder.bigjob} />
                        </li>    
                        <li className={style.list}>
                            <label>职业小类</label>
                            <Smalljob jobs={this.props.stakeholder.smalljobs} job={this.props.stakeholder.smalljob} bigjob={this.props.stakeholder.bigjob}/>
                            
                        </li>
                        <li className={style.list}>
                            <label>职业类别</label>
                            <Job jobs={this.props.stakeholder.jobs} job={this.props.stakeholder.job} bigjob={this.props.stakeholder.bigjob} smalljob={this.props.stakeholder.smalljob}/>
                        </li> 
                        <li className={style.list}>
                            <label>电子邮箱</label>
                            <input  type="text" 
                                    placeholder="请输入邮箱号" 
                                    onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrEmail')}}
                                    value={this.props.stakeholder.tbrEmail}
                                    />
                        </li>
                        <li className={style.list}>
                            <label>通讯地址</label>
                            <Place province={this.props.stakeholder.tbrProvince} city={this.props.stakeholder.tbrCity} country={this.props.stakeholder.tbrCountry}/>
                        </li>
                        <li className={style.list}>
                            <label>详细地址</label>
                            <input  type="text" 
                                    placeholder="精确到门牌号" 
                                    onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'tbrAdd')}}
                                    value={this.props.stakeholder.tbrAdd}
                            />
                        </li>
                        <li className={style.list}>
                            <label>邮政编码</label>
                            <input  type="text" 
                                    placeholder="请输入邮政编码" 
                                    onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'zipCode')}}
                                    value={this.props.stakeholder.zipCode}
                            />
                        </li>
                    </ul>
                </div>
                

                 
            </div>
        )
    };
}