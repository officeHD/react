import React, {Component} from 'react';
import { DatePicker,Picker,List } from 'antd-mobile';
import moment from 'moment';
import Radio from '../public/Radio';
import style from '../asset/css/introduce.less';
import AppActionCreators from '../../actions/AppActionCreators';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import InsuranceStore from '../../stores/InsuranceStore';
import {requestPrice} from '../APIUtils';
export default class CarInfo extends Component {
     constructor(props) {
        super(props);
          
        
    };
    setGender(){
         InsuranceActionCreators.changeGender();
    }
    setGenders(){
        InsuranceActionCreators.changeGenders();    
    }
    
    render() {
        let scope=[
            {label: '1份',value: 1},
            {label: '2份',value: 2},
            {label: '3份',value: 3},
            {label: '4份',value: 4},
            {label: '5份',value: 5},
            {label: '6份',value: 6},
            {label: '7份',value: 7},
            {label: '8份',value: 8},
            {label: '9份',value: 9},
            {label: '10份',value: 10}
        ];
        let innumber='';
        for(var i=0;i<scope.length;i++){
            if(scope[i].value===this.props.stakeholder.innumber[0]){
            innumber=scope[i].label;

            }
        }
        return (
            <ul className={style.form}>
                <li>
                    <span className={style.form_title}>投保方案</span>
                    <img/>
                </li>
                 <li>
                    <DatePicker 
                        mode="date"
                        maxDate={moment()}
                        minDate={moment('1900-08-06 +0800', 'YYYY-MM-DD Z')}
                        title="出生日期"
                        value={this.props.stakeholder.bbrBirthday === '' ? moment() : moment(this.props.stakeholder.bbrBirthday)}
                        onChange={(val) => InsuranceActionCreators.changeBirthday(moment(val).format('YYYY-MM-DD'))}
                    >
                    <div>
                        <label>出生日期</label>
                        <input type="text" placeholder="请选择" 
                            readOnly="readonly"
                            value={this.props.stakeholder.bbrBirthday}

                        />
                    </div>
                    </DatePicker>  
                </li>
                 
                <li>
                    <label>性别</label>
                    <Radio setGender={this.setGender} setGenders={this.setGenders} gender={this.props.stakeholder.bbrSex} left="男" right="女"/>
                </li>
               
                 <li className={style.tip}>
                    <List>
                    <Picker 
                        data={scope} 
                        cols={1}  
                        title="保险份数"
                        value={this.props.stakeholder.innumber}
                        onChange={(val) => {InsuranceActionCreators.changeInnumber(val)}}  
                        
                    >
                        <div>
                            <label>保险份数</label>
                            <input type="text" placeholder="最多10份/人" 
                                readOnly="readonly"
                                value={innumber}
                            />
                             
                        </div>
                    </Picker>
                     </List>
                </li>

                <li>
                    <label>保险期限</label>
                    <span>至25周岁</span>
                </li>
                
            </ul>
        );
    };
}

