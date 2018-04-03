import React, {Component} from 'react';
import moment from 'moment';
import Bigjob from './Bigjob';
import Place from './Place';
import Smalljob from './Smalljob';
import { Link } from 'react-router';
import Job from './Job';
import style from '../asset/css/Insure.less';
import Switcher from '../public/Switcher'
import { DatePicker,Picker,List } from 'antd-mobile';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { changeInsurePrice,getUserInfoAPI} from '../APIUtils';
export default class App extends Component {
     constructor(props){
        super(props);
    }
    changeBbrNo(event){
        InsuranceActionCreators.handleChange(event, 'bbrNo');
        let val=event.target.value.trim()
        if(val.length===16||val.length===18){
            changeInsurePrice();
        }
    }
     getUserInfo(event){
        let key=event.target.value.trim();
        getUserInfoAPI(key,"bbr");
    }
    changeTbrid(val){
      
         if(val[0]==="00"){
                let bbrBirthday=this.props.stakeholder.tbrBirthday;
                InsuranceActionCreators.changeBirthday(bbrBirthday);    
         }
    }
    render() {
        let relation;
        if(this.props.stakeholder.bbrAge<18){
            relation='子女';
        }else{
            relation='本人';
        } 
        return (
            <div>
                <div className={style.top_title}>
                   
                    <span>
                    <img src={require(`../asset/img/person.png`)}/>
                    被保人信息填写  
                    </span>
                </div>
                <div className={style.content}>
                    <ul className={style.content_ul}>
                         
                        <li className={`${style.list} ${style.list_long}`} >
                            <label>被保人与投保人关系</label>
                             <input
                                placeholder="本人"
                                value={relation}
                                readOnly="readonly"
                            />         
                        </li>
                        {relation==="本人"?'':  
                        <div>
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
                                onChange={(event, type) => this.changeBbrNo(event)}
                            />
                        </li>
                       
                        <li className={style.list}>
                            <DatePicker 
                                mode="date"
                                maxDate={moment()}
                                minDate={moment('1900-08-06 +0800', 'YYYY-MM-DD Z')}
                                title="证件有效起期"
                                value={this.props.stakeholder.bbrNoStart === '' ? moment() : moment(this.props.stakeholder.bbrNoStart)}
                                onChange={val => InsuranceActionCreators.changeBbrNoStart(moment(val).format('YYYY-MM-DD'))}
                            >
                                <div>
                                    <label>证件有效起期</label>
                                    <input  type="text" 
                                            placeholder="请选择" 
                                            readOnly="readonly"
                                            value={this.props.stakeholder.bbrNoStart}
                                    />
                                </div>
                            </DatePicker>  
                        </li>
                   
                        <li className={style.list}>
                            <DatePicker 
                                mode="date"
                                maxDate={moment('2099-12-31 +0800', 'YYYY-MM-DD Z')}
                                minDate={moment(this.props.stakeholder.bbrNoStart)}
                                title="证件有效止期"   
                                value={this.props.stakeholder.bbrNoEnd === '' ? moment() : moment(this.props.stakeholder.bbrNoEnd)}
                                onChange={val => InsuranceActionCreators.changeBbrNoEnd(moment(val).format('YYYY-MM-DD'))}
                                
                            >
                                <div>
                                    <label>证件有效止期</label>
                                    <input  type="text" 
                                            placeholder="请选择" 
                                            readOnly="readonly"
                                            value={this.props.stakeholder.bbrNoEnd}
                                    />
                                </div>
                            </DatePicker>  
                        </li>
                       
                            <li className={style.list}>
                                <label>证件长期有效</label>
                                <Switcher isOn={this.props.isLongTimeIDs} onClick={InsuranceActionCreators.switchIDTimes}/>
                            </li>
                        
                         <li className={style.list}>
                            <label>职业大类</label>
                            <Bigjob type="bbr" 
                                    jobs={this.props.stakeholder.bigjobs} 
                                    job={this.props.stakeholder.bbigjob} />
                        </li>    
                        
                            <li className={style.list}>
                                <label>职业小类</label>
                                <Smalljob type="bbr" 
                                        jobs={this.props.stakeholder.smalljobs} 
                                        job={this.props.stakeholder.bsmalljob} 
                                        bigjob={this.props.stakeholder.bbigjob}/>
                                
                            </li>
                          
                            <li className={style.list}>
                                <label>职业类别</label>
                                <Job type="bbr" 
                                jobs={this.props.stakeholder.jobs} 
                                job={this.props.stakeholder.bjob} 
                                bigjob={this.props.stakeholder.bbigjob} 
                                smalljob={this.props.stakeholder.bsmalljob}/>
                            </li> 
                        
                            <li className={style.list}>
                                <label>电子邮箱</label>
                                <input  type="text" 
                                        placeholder="用于接收电子保单" 
                                        onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bbrEmail')}}
                                        value={this.props.stakeholder.bbrEmail}
                                        />
                            </li>
                    
                            <li className={style.list}>
                                <label>通讯地址</label>
                                <Place type="bbr" province={this.props.stakeholder.bbrProvince} city={this.props.stakeholder.bbrCity} country={this.props.stakeholder.bbrCountry}/>
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
                            <label>邮政编码</label>
                            <input  type="text" 
                                    placeholder="请输入邮政编码" 
                                    onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bzipCode')}}
                                    value={this.props.stakeholder.bzipCode}
                            />
                        </li>
                        </div>
                        }

                        
                         <li className={`${style.list} ${style.list_long}`}>
                            <label>被保人健康告知</label>
                              <Link to="/health" className={style.rightlabel} >{this.props.stakeholder.health?this.props.stakeholder.health:"请查看"}</Link>
                             
                        </li>
                    </ul>

                </div>
                

                 
            </div>
        )
    };
}