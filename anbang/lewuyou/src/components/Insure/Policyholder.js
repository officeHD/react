import React, {Component} from 'react';
import style from '../asset/css/Insure.less';
import { DatePicker,Picker,List } from 'antd-mobile';
import moment from 'moment';
import { Link } from 'react-router';
import Switcher from '../public/Switcher'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import { changeInsurePrice,getUserInfoAPI} from '../APIUtils';
export default class App extends Component {
     constructor(props){
        super(props);
    }
     checkHelth(){
        
     }
      getUserInfo(event){
        
        let key=event.target.value.trim();
 
        getUserInfoAPI(key,"bbr");
    }
    render() {
        let idtype=[
                {label:"居民身份证",value:"0"},
                {label:"出生证明",value:"4"},
                {label:"户口簿",value:"5"}
            ]
        let idlabel='';
        for(var i=0;i<idtype.length;i++){
            if(idtype[i].value===this.props.stakeholder.idtype[0]){
            idlabel=idtype[i].label;
            }
        }
        let scope=[
            {label:"一般学生",value:"2090114"},
            {label:"学龄前儿童",value:"2090115"},
             
        ]
        let bjob='';
        for(var i=0;i<scope.length;i++){
            if(scope[i].value===this.props.stakeholder.bjob[0]){
            bjob=scope[i].label;
            }
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
                         
                        <li className={`${style.list} ${style.list_long}`}>
                            <label>被保险人与投保人关系</label>
                            <input
                            placeholder="子女"
                            value='子女'
                            readOnly="readonly"
                        />   
                        </li>
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
                            <List>
                                <Picker 
                                    data={idtype} 
                                    cols={1}  
                                    title="证件类型"
                                     value={this.props.stakeholder.idtype}
                                    onChange={(val) => {InsuranceActionCreators.onChangeIdtype(val)}}   
                                >
                                    <div>
                                        <label>证件类型</label>
                                        <input
                                            placeholder="请选择"
                                            value={idlabel}
                                            readOnly="readonly"
                                        />
                                    </div>
                                </Picker>
                             </List>
                           
                        </li>
                        <li className={style.list}>
                            <label>证件号码</label>
                            <input 
                                type="text"
                                placeholder="请输入证件号" 
                                value={this.props.stakeholder.bbrNo} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'bbrNo')}}
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
                            <List>
                                <Picker 
                                    data={scope} 
                                    cols={1}  
                                    title="职业类别"
                                    value={this.props.stakeholder.bjob}
                                    onChange={(val) => {InsuranceActionCreators.onChangebjob(val)}}   
                                >
                                    <div>
                                        <label>职业类别</label>
                                        <input
                                            placeholder="请选择"
                                            value={bjob}
                                             readOnly="readonly"
                                        />
                                    </div>
                                </Picker>
                             </List>
                           
                        </li>
                        
                        <li className={`${style.list} ${style.list_long}`}>
                            <label>被保险人健康告知</label>
                           <Link to="/health" className={style.rightlabel} >{this.props.stakeholder.health?this.props.stakeholder.health:"请查看"}</Link>
                             
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    };
}