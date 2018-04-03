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
        this.changeState1=this.changeState1.bind(this);  
        this.onInsuranceChange=this.onInsuranceChange.bind(this);  
    }
     getData() {
      return {
        product:true,
        onOrOff:(InsuranceStore.getStakeholder()).onOrOff,
        onOrOff1:(InsuranceStore.getStakeholder()).onOrOff1,
         stakeholder: InsuranceStore.getStakeholder(),  
      }
    };
    onInsuranceChange() {
        this.setState({
            onOrOff: (InsuranceStore.getStakeholder()).onOrOff, 
            stakeholder: InsuranceStore.getStakeholder(),  
            onOrOff1:(InsuranceStore.getStakeholder()).onOrOff1,          
        });
    }
     componentDidMount() {      
        InsuranceStore.addChangeListener(this.onInsuranceChange);
        
    };

    componentWillUnmount() {
        InsuranceStore.removeChangeListener(this.onInsuranceChange);
        
    };
    changeState(){
      InsuranceActionCreators.changeSubinsure(this.state.onOrOff)           
    }
     changeState1(){

      InsuranceActionCreators.changeSubinsure1(this.state.onOrOff1)           
    }
    render() {
        let company=this.props.company;
        let  paymentscope=[
                {label:"趸交",value:"趸交"},
                {label:"3年交",value:3},
                {label:"5年交",value:5},
                {label:"10年交",value:10}
            ]

        return (

          <div className={style.modellay}>
              <ul className={style.content_ul}>
              		<li className={style.ultitle}>
                        {company.product}  
                    </li>
                   
                       <li className={style.list}>
                           <label>保险期间</label>
                           <input placeholder="终身" readOnly="readonly"/> 
                       </li>
                   
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
                   
                        <li className={style.list}>
                            <label>基本保额</label>
                            <input 
                                type="number"
                                placeholder="请输入保额" 
                                value={this.props.stakeholder.amnt} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'amnt')}}
                            />&nbsp;元
                        </li>  
                    
                     
                         <li className={style.listl}>
                            <Message 
                              title="金管家（万能型，F款）" 
                              changeState={this.changeState} 
                              onOrOff={this.state.onOrOff}  
                          /> 
                        </li> 
                        <li className={style.listl}> 
                          <Message 
                            title="医保通" 
                            changeState={this.changeState1} 
                            onOrOff={this.state.onOrOff1}  
                          /> 
                        </li>  

                        
                    <li className={style.opera}>
                    	<button onClick={this.props.hideModel}>取消</button>
                    	<button onClick={this.props.sureModel}>确定</button>
                    </li>
                    
                </ul>
          </div>
        )
    };
}