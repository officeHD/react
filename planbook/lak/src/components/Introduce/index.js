import React , {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Insure from './Insure';
import Footer from './Footer';
import { componies } from '../asset/json/appInfo.json';
import AppStore from '../../stores/AppStore';
import style from '../asset/css/Introduce.less';
import { Toast } from 'antd-mobile'; 
import {saveInsuranceInfo} from '../APIUtils';
import InsuranceStore from '../../stores/InsuranceStore';


export default class Instruction extends Component {
    constructor(props){
        super(props);
        this.state = this.getData(); 
        this._onChange=this._onChange.bind(this); 
         this.handelClick=this.handelClick.bind(this); 
    };
    getData() {
      return {
        product:AppStore.getProduct()||"LAX00O1",
        type: AppStore.getType(),
        workNum: AppStore.getWorkNum(),  
        stakeholder:InsuranceStore.getStakeholder()
      }  
      }
     
    componentDidMount() { 
      AppStore.addChangeListener(this._onChange)   
      InsuranceStore.addChangeListener(this._onChange)   
    };
    componentWillUnmount () {
      AppStore.removeChangeListener(this._onChange); 
      InsuranceStore.removeChangeListener(this._onChange); 
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

        if(company.productid==="LAX00O1"){
          for (var i = 18; i <= 68; i++) {
              tbrscop[tbrscop.length]={label:i+"岁",value:i}
          }
          for (var i = 0; i <= 60; i++) {
              bbrscop[bbrscop.length]={label:i+"岁",value:i}
          }
        }else if(company.productid==="LAK00O1"){
          for (var i = 18; i <= 67; i++) {
              tbrscop[tbrscop.length]={label:i+"岁",value:i}
          }
          for (var i = 0; i <= 60; i++) {
              bbrscop[bbrscop.length]={label:i+"岁",value:i}
          }
        }else if(company.productid==="LXTX00O1"){
          for (var i = 18; i <= 68; i++) {
              tbrscop[tbrscop.length]={label:i+"岁",value:i}
          }
          for (var i = 18; i <= 60; i++) {
              bbrscop[bbrscop.length]={label:i+"岁",value:i}
          }
        }
       
        return (
           <div className={style.main}>
            <TitleBar title={company.product+"计划书演示"}/>
            <Insure company={company} tbrscop={tbrscop} bbrscop={bbrscop}/>
            
            <Footer />
            <div className={style.bottom}>
              <button onClick={this.handelClick}>生成计划书演示</button>
            </div>
          </div>
        );
    };
}