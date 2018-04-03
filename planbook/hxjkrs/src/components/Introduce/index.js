import React , {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Insure from './Insure';
import Footer from './Footer';
import { componies } from '../asset/json/appInfo.json';
import AppStore from '../../stores/AppStore';

import InsuranceStore from '../../stores/InsuranceStore';
import style from '../asset/css/Introduce.less';
import { Toast } from 'antd-mobile'; 
import {saveInsuranceInfo} from '../APIUtils';
 import QueueAnim from 'rc-queue-anim';


export default class Instruction extends Component {
    constructor(props){
        super(props);
        this.state = this.getData(); 
        this._onChange=this._onChange.bind(this); 
        this.handelClick=this.handelClick.bind(this); 
        
    };
    getData() {
      return {
        product:AppStore.getProduct()||"HXJKRS001A",
        type: AppStore.getType(),  
        workNum: AppStore.getWorkNum(),  
        stakeholder:InsuranceStore.getStakeholder()
      }
    };
    componentDidMount() { 
      InsuranceStore.addChangeListener(this._onChange);  
      AppStore.addChangeListener(this._onChange);  
    };
    componentWillUnmount () {
      InsuranceStore.removeChangeListener(this._onChange); 
      AppStore.removeChangeListener(this._onChange); 
    };
    _onChange() {  
        this.setState(this.getData());  
    };
    send(){
      if(window.minsheng){
          window.minsheng.share()
      }else{
          tianbai.share()  
      }  
    }
    handelClick(){
      if(this.state.workNum&&this.state.workNum!="null"){
        if(this.state.stakeholder.infoshow){
          saveInsuranceInfo();
        }else{
          Toast.info("请添加投保选择",1)
        }
      }else{
         Toast.info("请登录使用",1)
      } 
    }
    render() {
      let company;
      for (var i = 0; i < componies.length; i++) {
        if(componies[i].productid===this.state.product){
          company=componies[i] 
        }
      }
      let tbrscop=[];
      let bbrscop=[];
      for (var i = 0; i <= 60; i++) {
        tbrscop[tbrscop.length]={label:i+"岁",value:i}
      }
      for (var i = 0; i <= 64; i++) {
        bbrscop[bbrscop.length]={label:i+"岁",value:i}
      }
      return (
        <div className={style.main}>
          <TitleBar title={company.product+"计划书演示"}/>
          <Insure company={company} tbrscop={tbrscop} bbrscop={bbrscop}/>
        
          <QueueAnim type={"bottom"} delay={700} duration={800} className="queue-simple">
            <Footer key="a" />

            <div key="b" className={style.bottom}>
              <button onClick={this.handelClick}>生成计划书演示</button>
            </div>
          </QueueAnim>
        </div>
      );
    };
}