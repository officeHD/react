import React, {Component} from 'react';
import { DatePicker,Picker,List } from 'antd-mobile';
import moment from 'moment';
import Radio from '../public/Radio';
import SelectorRadio from '../public/SelectorRadio';
import style from '../asset/css/introduce.less';
import AppActionCreators from '../../actions/AppActionCreators';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import InsuranceStore from '../../stores/InsuranceStore';
import {requestPrice,changeInsurePrice} from '../APIUtils';
export default class CarInfo extends Component {
     constructor(props) {
        super(props);
          this.state={
            options:[{name:"趸交",value:0}],
            year:10,
            type:0,
            endDay:InsuranceStore.getEndDate()

          }
        this.onInsuranceChange = this.onInsuranceChange.bind(this);
    };

     onInsuranceChange() {
        this.setState({
            endDay:InsuranceStore.getEndDate()
        });
    }
    componentDidMount() {      
        InsuranceStore.addChangeListener(this.onInsuranceChange);
    };

    componentWillUnmount() {
        InsuranceStore.removeChangeListener(this.onInsuranceChange);
        
    };
    setGender(){
         InsuranceActionCreators.changeGender();
           changeInsurePrice();
    }
    setGenders(){
        InsuranceActionCreators.changeGenders();  
          changeInsurePrice();  
    }
    ClickOption(val){
        if(val===1){
            this.setState({ options:[{name:"趸交",value:0}] ,year:10,type:0});
            InsuranceActionCreators.changeyearLong(10);
             InsuranceActionCreators.changepayendyear(0);
        }else if(val===2){
            this.setState({ options:[{name:"趸交",value:0} ,{name:"5年",value:5}],year:20 ,type:0});
            InsuranceActionCreators.changeyearLong(20);
             InsuranceActionCreators.changepayendyear(0);
        }else if(val===3){
            this.setState({ options:[{name:"趸交",value:0} ,{name:"5年",value:5},{name:"10年",value:10}],year:30,type:0 });
            InsuranceActionCreators.changeyearLong(30);
             InsuranceActionCreators.changepayendyear(0);
        }
        changeInsurePrice();
    }
 
   onClickHandle(obj){
        this.setState({type:obj.index});
        
        InsuranceActionCreators.changepayendyear(obj.text.value);
         changeInsurePrice();
   }
   changeBirthday(val){
    
     InsuranceActionCreators.changeBirthday(val);
     changeInsurePrice();
   }

    render() {
          let scope=[
           
            {label:"6万",value:"60000"},
            {label:"5万",value:"50000"},
            {label:"4万",value:"40000"},
            {label:"3万",value:"30000"},
            {label:"2万",value:"20000"},
            {label:"1万",value:"10000"},
        ]
        let listShows = this.state.options.map((text, index) => {
            return (
                <span className={`${this.state.type===index?style.checked:""} ${style.radio}`} key={index} onClick={e => this.onClickHandle({text, index})}>
                     {text.name}
                </span>
            )    
        });
        let relation='';
        
        for(var i=0;i<scope.length;i++){
            if(scope[i].value===this.props.stakeholder.amnts[0]){
                relation=scope[i].label;
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
                        onChange={(val) => this.changeBirthday(moment(val).format('YYYY-MM-DD'))}
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
                        <div>
                            <label>保险年期</label>
                            <span className={`${this.state.year===10?style.checked:""} ${style.radio}`} onClick={e =>this.ClickOption(1)}>10年</span>
                            <span className={`${this.state.year===20?style.checked:""} ${style.radio}`} onClick={e =>this.ClickOption(2)}>20年</span>
                            <span className={`${this.state.year===30?style.checked:""} ${style.radio}`} onClick={e =>this.ClickOption(3)}>30年</span>
                        </div>
                </li>
                 <li className={style.tip}>
                    <div>
                        <label>缴费年期</label>
                        {listShows}
                    </div>
                </li>
                <li className={style.list}>
                    <List>
                        <Picker 
                            data={scope} 
                            cols={1}  
                            title="保额"
                            value={this.props.stakeholder.amnt}
                            onChange={(val) => {InsuranceActionCreators.onChangeamnt(val),changeInsurePrice()}}   
                        >
                            <div>
                                <label>保额</label>
                                <input
                                    placeholder="6万"
                                    value={relation}
                                    readOnly="readonly"
                                />
                            </div>
                        </Picker>
                     </List>
                           
                </li>
                
            </ul>
        );
    };
}

