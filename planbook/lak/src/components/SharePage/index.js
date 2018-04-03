import React , {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Backpage from './Backpage';
import Insureinfo from './Insureinfo';
import Person from './Person';
import Risktip from './Risktip';
import Payment from './Payment';
import Lxinfo from './Lxinfo';
import Tips from './Tips';
import Footer from './Footer';
import { componies } from '../asset/json/appInfo.json';
import AppStore from '../../stores/AppStore';
import style from '../asset/css/share.less';
import { Toast } from 'antd-mobile';  
import { Link } from 'react-router';

export default class Instruction extends Component {
    constructor(props){
        super(props);
        this.state = this.getData(); 
        this._onChange=this._onChange.bind(this); 
        this.hideback=this.hideback.bind(this); 
        
    };
    getData() {
      return {
        product:AppStore.getProduct()||"LAX00O1",
        type: AppStore.getType(), 
        planData:AppStore.getPlanData() ,
        staffmes:AppStore.getStaff() ,
        backpage:true
      }
    };
    componentDidMount() { 
      AppStore.addChangeListener(this._onChange);
       this.timer = setTimeout(
        () => { this.setState({
          backpage:false
        }) },
        4000
      );
     
    };
    componentWillUnmount () {
      AppStore.removeChangeListener(this._onChange); 
       this.timer && clearTimeout(this.timer);
    };
    _onChange() {  
        this.setState(this.getData());  
    };
    hideback(){
      
      this.setState({
          backpage:false
      })
    }
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
           <div className={this.state.backpage?style.main:style.mainhide}>
            <TitleBar title={company.product+"计划书演示"}/>
            <div  className={style.banner} >
              <img src={require(`../asset/img/${company.spell}.png`)} />
            </div>
            <Person planData={this.state.planData}/>

            {company.productid==="LXTX00O1"? <Lxinfo planData={this.state.planData}/>: <Insureinfo planData={this.state.planData}/>
           }
            <Payment planData={this.state.planData}/>
            <section className={style.terms_block}>
              <Link to="/term" className={style.contract_btn} >条款详情</Link>
            </section>
            <Risktip planData={this.state.planData}/>
          <Backpage planData={this.state.planData} hideback={this.hideback}/> 
            
            <Tips/>
            <Footer staffmes={this.state.staffmes} type={this.state.type}/>
            
          </div>
        );
    };
}