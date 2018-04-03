import React, {Component} from 'react';
import { createForm } from 'rc-form';
import { DatePicker,Picker,List } from 'antd-mobile';
import moment from 'moment';
import Radio from '../public/Radio';
import style from '../asset/css/introduce.less';
import AppActionCreators from '../../actions/AppActionCreators';
import AppStore from '../../stores/AppStore';
import {requestPrice} from '../APIUtils';


export default class CarInfo extends Component {
     constructor(props) {
        super(props);
        this.state =this.getData();
        this._onChange=this._onChange.bind(this); 
         
    };
    componentDidMount() { 
        AppStore.addChangeListener(this._onChange);  
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
    };
    _onChange() {  
        this.setState(this.getData());  
    } 
    getData() {
        return {
            PriceInfo: AppStore.getPriceInfo()
        }
    }

    onPickerChange(val){
        
         AppActionCreators.changeYearLength(val);
         requestPrice();
    }
    setGender(){

         AppActionCreators.changeGender();
         requestPrice();
        
    }
    setGenders(){
         
        AppActionCreators.changeGenders();
         requestPrice();
        
    }
    setAdditional(){
        AppActionCreators.setAdditional();
         // requestPrice();
    }
    unAdditional(){
        AppActionCreators.unAdditional();
         // requestPrice();
    }
    render() {
        console.log(this.state.PriceInfo);
        let scope=[
        {label: '5万',value: '5万'},
        {label: '10万',value: '10万'},
        {label: '15万',value: '15万'},
        {label: '20万',value: '20万',},
        {label: '25万',value: '25万',},
        {label: '30万',value: '30万',},
        {label: '35万',value: '35万',},
        {label: '40万',value: '40万',},
        {label: '45万',value: '45万',},
        {label: '50万',value: '50万',}
        ];
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
                        value={this.state.PriceInfo.birthday === '' ? moment() : moment(this.state.borthday)}
                        onChange={val => AppActionCreators.changeBirthday(moment(val).format('YYYY-MM-DD'))}
                    >
                    <div>
                        <label>出生日期</label>
                        <input type="text" placeholder="请选择" 
                            readOnly="readonly"
                            value={this.state.PriceInfo.birthday}
                        />
                    </div>
                    </DatePicker>  
                </li>
                <li>
                    <label>性别</label>
                    <Radio setGender={this.setGender} setGenders={this.setGenders} gender={this.state.PriceInfo.man} left="男" right="女"/>
                </li>
                <li>
                    <label>保障期限</label>
                     <span className={style.radio+" "+style.checked} >终身</span>
                </li>
                <li className={style.tip}>
                    <List>
                    <Picker 
                        data={scope} 
                        cols={1}  
                        title="保障范围"
                        value={this.state.PriceInfo.yearLength}
                        onPickerChange={this.onPickerChange}
                    >
                        <div>
                            <label>保障范围</label>
                            <input type="text" placeholder="请选择" 
                                readOnly="readonly"
                                value={this.state.PriceInfo.yearLength}
                            />
                            <ul className={style.ul_tip}>
                                <li>重疾保障金 <span>最高十万</span></li>
                                <li>身故保险金<span>最高十万</span></li>
                            </ul>
                        </div>
                    
                        
                    </Picker>
                     </List>
                </li>

                <li>
                    <label>缴费期限</label>
                    <input type="text" placeholder="20年" readOnly="readonly" value="20 年"/>
                </li>
                <li className={style.tip}>
                    <label>附加险</label>
                    <Radio setGender={this.setAdditional} setGenders={this.unAdditional} gender={this.state.PriceInfo.additional} left="有" right="无"/>
                    
                    <ul className={style.ul_tip}>
                        <li>轻症保险金 <span>最高十万</span></li>
                        <li>轻症疾病保险豁免<span>最高十万</span></li>
                    </ul>
                </li>
                 
            </ul>
        );
    };
}

