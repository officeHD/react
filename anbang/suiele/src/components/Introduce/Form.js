import React, {Component} from 'react';
import { DatePicker,Picker,List } from 'antd-mobile';
import moment from 'moment';
import Radio from '../public/Radio';
import style from '../asset/css/introduce.less';
 
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
 
 
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
                        onChange={val => InsuranceActionCreators.changeBirthday(moment(val).format('YYYY-MM-DD'))}
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
                    <label>趸交保费</label>
                     <input type="num" placeholder="100的整数倍，最高20万元" 
                            
                        value={this.props.stakeholder.price}
                        onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'price')}}
                    />
                </li>
                <li>
                    <label>保险期限</label>
                    <span>10年</span>
                </li>
                 
            </ul>
        );
    };
}

