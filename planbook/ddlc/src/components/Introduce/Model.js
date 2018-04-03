import React, {Component} from 'react';
import Message from './Message';
import {Picker,List } from 'antd-mobile';
import ShowController from './ShowController';
import SelectorSex from '../public/SelectorSex';
import {Toast } from 'antd-mobile';

import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import style from '../asset/css/Introduce.less';
 import QueueAnim from 'rc-queue-anim';

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
           options:['男','女'],
        selected:"男" 
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
       
        let bbrAge=this.state.stakeholder.bbrAge[0];
        let company=this.props.company;
        let paymentscope;
        if(bbrAge>0&&bbrAge<=45){
            paymentscope=[
                {label:"10年交",value:10},
                {label:"15年交",value:15},
                {label:"20年交",value:20}
            ]
        } else if(bbrAge>45&&bbrAge<=50){
            paymentscope=[
                {label:"10年交",value:10},
                {label:"15年交",value:15}  
            ]
        }else if(bbrAge>50&&bbrAge<=55){
            paymentscope=[
                {label:"10年交",value:10} 
            ]
        }

        return (
          <div className={style.modellay} >
            <QueueAnim type={["scale","scale"]} delay={[0,0]}>
              <ul key="a" className={style.content_ul}>
              		<li className={style.ultitle}>
                        {company.product}  
                    </li>
                   
                       <li className={style.list}>
                           <label>保险期间</label>
                           <input placeholder="至75岁" readOnly="readonly"/>  
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
                            <label>投保保额</label>
                            <input 
                                type="text"
                                placeholder="保额" 
                                value={this.props.stakeholder.amnt} 
                                
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'amnt')}}
                            /> 
                        </li>  
                    
                     
                       
                    <li className={style.opera}>
                    	<button onClick={this.props.hideModel}>取消</button>
                    	<button onClick={this.props.sureModel}>确定</button>
                    </li>
              </ul>
            </QueueAnim>
          </div>
         
        )
    };
}