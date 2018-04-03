import React , {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Tremlist from './Tremlist';
 
import { componies } from '../asset/json/appInfo.json';
import AppStore from '../../stores/AppStore';
import style from '../asset/css/term.less';
import { Toast } from 'antd-mobile';  


export default class Term extends Component {
    constructor(props){
        super(props);
        this.state = this.getData(); 
        this._onChange=this._onChange.bind(this); 
        
    };
    getData() {
      return {
        product:AppStore.getProduct()||"HXHXF001A",
        type: AppStore.getType(), 
        planData:AppStore.getPlanData() ,
        staffmes:AppStore.getStaff() 
      }
    };
    componentDidMount() { 
      AppStore.addChangeListener(this._onChange);
     
    };
    componentWillUnmount () {
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
  
    render() {
     
       let company;

      for (var i = 0; i < componies.length; i++) {
        if(componies[i].productid===this.state.product){
          company=componies[i] 
        }
      }
        return (
           <div>
            <TitleBar title={company.product+"计划书演示"}/>
            <div className={style.term_title}><h4>华夏<span className={style.productname}>{company.product}</span></h4></div>
            <Tremlist company={company}/>
          </div>
        );
    };
}