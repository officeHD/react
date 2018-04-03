import React, {Component} from 'react';
import style from '../asset/css/Insure.less';
import {  Picker,List } from 'antd-mobile';
import { Link } from 'react-router';
 import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
 
export default class App extends Component {
     constructor(props){
        super(props);
    }
     checkHelth(){
        InsuranceActionCreators.showHealth();
     }
    render() {
        let scope=[
            {label:"本人",value:"00"},
            {label:"父母",value:"01"},
            {label:"配偶",value:"02"},
            {label:"子女",value:"03"},
            {label:"其他",value:"04"},
            {label:"雇佣",value:"05"},
            {label:"抚养",value:"06"},
            {label:"扶养",value:"07"},
            {label:"赡养",value:"08"}
        ]
        let relation='';
        for(var i=0;i<scope.length;i++){
            
            if(scope[i].value===this.props.stakeholder.relation[0]){
            relation=scope[i].label;

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
                            <List>
                                <Picker 
                                    data={scope} 
                                    cols={1}  
                                    title="被保人与投保人关系"
                                    value="01"
                                    
                                    disabled="true"
                                >
                                    <div>
                                        <label>被保人与投保人关系</label>
                                        <input
                                            placeholder="本人"
                                            value={relation}
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