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
         
        this.onInsuranceChange=this.onInsuranceChange.bind(this);  
        this.onClickHandle=this.onClickHandle.bind(this);  
    }
     getData() {
      return {
        product:true,
        onOrOff:(InsuranceStore.getStakeholder()).onOrOff,
        stakeholder: InsuranceStore.getStakeholder(), 
        options:['2013款','2014款'],
        paymentscope:[
                {label:"5000",value:5000},
                {label:"8000",value:8000},
                {label:"10000",value:10000},
                {label:"15000",value:15000}, 
                {label:"20000",value:20000}, 
                {label:"30000",value:30000}, 
                {label:"40000",value:40000}
            ],
        selected:"2013款" ,
        sublist:false,
        subonOrOff:"off",
        sublist1:false,
        subonOrOff1:"off" 
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
    onClickHandle(text){
        this.setState({
            selected:text.text,         
        });
        if(text.text==="2013款"){
            this.setState({
                paymentscope:[
                {label:"5000",value:5000},
                {label:"8000",value:8000},
                {label:"10000",value:10000},
                {label:"15000",value:15000}, 
                {label:"20000",value:20000}, 
                {label:"30000",value:30000}, 
                {label:"40000",value:40000}
            ]         
            });
        }else{
            this.setState({
                paymentscope:[
                {label:"5000",value:5000},
                {label:"10000",value:10000},
                {label:"15000",value:15000}, 
                {label:"20000",value:20000} 
                 
            ]         
            });
        }
        InsuranceActionCreators.changeSubyear(text.text); 
    }

    render() {
        let company=this.props.company;
        let scope=[];
        for (var i = 1; i < 21; i++) {
            scope[scope.length]={label:i+"份",value:i }
        }
        return (
          <div className={style.modellay} >
            <QueueAnim type={["scale","scale"]} delay={[0,0]}>
              <ul key="a" className={style.content_ul}>
              		<li className={style.ultitle}>
                        附加险
                    </li>
                    <li className={style.listl}>
                        <Message title="住院费用补偿" changeState={this.props.changeState} onOrOff={this.props.subonOrOff} /> 

                        {this.props.sublist?<div>
                            <SelectorSex selectedOption={this.state.selected}  options={this.state.options} onClickHandle={this.onClickHandle} />
                        <List>
                            <Picker 
                                data={this.state.paymentscope} 
                                cols={1}  
                                title="保额" 
                                value={this.props.stakeholder.subamnt}
                                onChange={(val) => {InsuranceActionCreators.changeSubAmnt(val)}}      
                            >
                                <div>
                                    <label>保额</label>
                                    <input
                                        placeholder="5000"
                                        readOnly="readonly"
                                        value={this.props.stakeholder.subamnttext}
                                    /><ShowController show={this.props.show}/>
                                </div>
                            </Picker>
                        </List>
                        </div>:''}
                        
                    </li> 
                   
                    <li className={style.listl}>
                        <Message title="安心无忧住院" changeState={this.props.changeState1} onOrOff={this.props.subonOrOff1}/> 
                        {
                            this.props.sublist1?<List>
                            <Picker 
                                data={scope} 
                                cols={1}  
                                title="保额" 
                                value={this.props.stakeholder.subnum}
                                onChange={(val) => {InsuranceActionCreators.changeSubnum(val)}}      
                            >
                                <div>
                                    <label>份数</label>
                                    <input
                                        placeholder="1份"
                                        readOnly="readonly"
                                        value={this.props.stakeholder.subnumtext}
                                    /><ShowController show={this.props.show}/>
                                </div>
                            </Picker>
                        </List>:''
                        }
                        
                         
                              
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