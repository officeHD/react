import React, {Component} from 'react';
import Message from './Message';
import {Picker,List } from 'antd-mobile';
import ShowController from './ShowController';
import SelectorSex from '../public/SelectorSex';
import {Toast } from 'antd-mobile';

import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import style from '../asset/css/Introduce.less';
export default class Model extends Component {
    constructor(props){
        super(props);
        this.state = this.getData();  
        this.changeState=this.changeState.bind(this);  
        this.onInsuranceChange=this.onInsuranceChange.bind(this);  
    }
     getData() {
      return {
        product:true,
        onOrOff:(InsuranceStore.getStakeholder()).onOrOff,
         stakeholder: InsuranceStore.getStakeholder(),  
      }
    };
    onInsuranceChange() {
        this.setState({
            onOrOff: (InsuranceStore.getStakeholder()).onOrOff, 
            stakeholder: InsuranceStore.getStakeholder(),            
        });
    }
     componentDidMount() {      
        InsuranceStore.addChangeListener(this.onInsuranceChange);
        
    };

    componentWillUnmount() {
        InsuranceStore.removeChangeListener(this.onInsuranceChange);
        
    };
   
     changeState(){
       
        if(this.props.stakeholder.payendyeartext==="趸交"){
            Toast.info("趸交不可添加",1)
        }else{

            InsuranceActionCreators.changeSubinsure(this.state.onOrOff)         
        }
    }
    render() {
        let company=this.props.company;
        let paymentscope,scope,insuYear;
        if(company.productid==="LXTX00O1"){
            paymentscope=[
                {label:"趸交",value:"趸交"},
                {label:"3年交",value:3},
                {label:"5年交",value:5},
                {label:"10年交",value:10}
            ]
            scope=[
                {label:"10万",value:"10"},
                {label:"20万",value:20},
                {label:"30万",value:30},
                {label:"40万",value:40},
                {label:"50万",value:50}
            ]
            insuYear=[{label:"30年",value:"30"},{label:"至80岁",value:80} ]
        }else {
            paymentscope=[
                {label:"趸交",value:"趸交"},
                {label:"5年交",value:5},
                {label:"10年交",value:10},
                {label:"15年交",value:15},
                {label:"20年交",value:20}
            ]
        } 

        return (

          <div className={style.modellay}>
              <ul className={style.content_ul}>
              		<li className={style.ultitle}>
                        {company.product}  
                    </li>
                   {company.productid==="LXTX00O1"? 
                        <li className={style.list} >
                            <List>
                                <Picker 
                                   data={insuYear} 
                                   cols={1}  
                                   title="保险期间" 
                                   value={this.props.stakeholder.insuYear}
                                   onChange={(val) => {InsuranceActionCreators.changeInsuYear(val)}}      
                               >
                                   <div>
                                       <label>保险期间</label>
                                       <input
                                           placeholder="趸交"
                                           readOnly="readonly"
                                           value={this.props.stakeholder.insuYeartext}
                                       />
                                       <ShowController show={this.props.show}/>
                                   </div>
                               </Picker>
                            </List>
                       </li>:
                       <li className={style.list}>
                           <label>保险期间</label>
                           <input placeholder="终身" readOnly="readonly"/> 
                       </li>
                   }
                    <li className={style.list} >
                        <List>
                            <Picker 
                                data={paymentscope} 
                                cols={1}  
                                title="缴费期间" 
                                value={this.props.stakeholder.payendyear}
                                onChange={(val) => {InsuranceActionCreators.changePayendyear(val)}}      
                            >
                                <div>
                                    <label>缴费期间</label>
                                    <input
                                        placeholder="趸交"
                                        readOnly="readonly"
                                        value={this.props.stakeholder.payendyeartext}
                                    />
                                    <ShowController show={this.props.show}/>
                                </div>
                            </Picker>
                         </List>
                    </li>
                    {company.productid==="LXTX00O1"?'':
                        <li className={style.list}>
                            <label>基本保额</label>
                            <input 
                                type="number"
                                placeholder="输入五万元（含）以上" 
                                 value={this.props.stakeholder.amnt} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'amnt')}}
                            /> 元
                        </li>}  
                    
                    {company.productid==="LXTX00O1"? <li className={style.listl}>
                        <Message title="附加乐行天下意外伤害保险"   onOrOff="on" /> 
                        <List>
                            <Picker 
                                data={scope} 
                                cols={1}  
                                title="保额" 
                                value={this.props.stakeholder.amnts}
                                onChange={(val) => {InsuranceActionCreators.changeAmnt(val)}}      
                            >
                                <div>
                                    <label>保额</label>
                                    <input
                                        placeholder="10万"
                                        readOnly="readonly"
                                        value={this.props.stakeholder.amnttext}
                                    /><ShowController show={this.props.show}/>
                                </div>
                            </Picker>
                        </List>
                    </li>:''}
                    {company.productid==="LXTX00O1"? 
                    <li className={style.listl}>
                        <Message title="附加乐行天下意外伤害住院津贴"   onOrOff="on" /> 
                        <label>津贴</label>
                        <input
                            placeholder="100元/天"
                            readOnly="readonly"
                        />           
                    </li>:""}

                    
                        <Message 
                            title={company.subinsurance} 
                            changeState={this.changeState} 
                            onOrOff={this.state.onOrOff}  
                        /> 
                    <li className={style.opera}>
                    	<button onClick={this.props.hideModel}>取消</button>
                    	<button onClick={this.props.sureModel}>确定</button>
                    </li>
                    
                </ul>
          </div>
        )
    };
}