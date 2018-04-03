import React, {Component} from 'react';
import { DatePicker,Picker,List } from 'antd-mobile';
import style from '../asset/css/introduce.less';
import Form from './Form';
import AppStore from '../../stores/AppStore';
import InsuranceStore from '../../stores/InsuranceStore';
import AppActionCreators from '../../actions/AppActionCreators';
import {Toast } from 'antd-mobile';
export default class CarInfo extends Component {
     constructor(props) {
        super(props);
        this.state ={ 
            formshow:false,
            stakeholder: InsuranceStore.getStakeholder(),
            type:AppStore.getType(),
            workNum:AppStore.getWorkNum(),
        };
        this._onChange=this._onChange.bind(this); 
        this.handelClick = this.handelClick.bind(this);   
        this.hideForm = this.hideForm.bind(this);   
        this.insure = this.insure.bind(this);   
    };
    componentDidMount() { 
        AppStore.addChangeListener(this._onChange); 
        InsuranceStore.addChangeListener(this._onChange); 
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
        InsuranceStore.removeChangeListener(this._onChange);  
    };
    _onChange() {  
        this.setState({ 
            stakeholder: InsuranceStore.getStakeholder(),
            workNum:AppStore.getWorkNum(),
            type:AppStore.getType(),
        });  
    };
    
    handelClick(e){
          
        if(!this.state.workNum){
            Toast.info('请登录后使用',1)
        }else{
            if(this.state.formshow){
                let birthday=this.state.stakeholder.bbrBirthday;
                let price=this.state.stakeholder.price;
                let name=this.state.stakeholder.bbrName;
                if(!birthday){
                    Toast.info('请选择出生日期', 2);
                }else if(this.state.stakeholder.bbrAge===0.5){

                    Toast.info('被保人必须大于28天',1); 
                }else if(this.state.stakeholder.bbrAge>60){
                    Toast.info('被保人必须小于60周岁',1); 
                }else{
                   window.location="#/insure";
                }
            }else{
                this.setState({
                    formshow:true,
                    finsh: !this.state.finsh,
                })
            } 
        }
        
    }
    hideForm(){
        
        this.setState({
         
           formshow:false,
          finsh: false,
        })
    }
    insure(){
        if(this.state.workNum){
            if(window.minsheng){
             window.minsheng.share()
            }else{
                window.location.href=`sn://share`;    
            }
        }else{
            Toast.info('请登录后使用',1)
        }
      
     
    }
    render() {
 
        let insurePrice=this.state.stakeholder.insurancePrice
 
        return (
                <div>
                    <div className={style.formBox}>
                       {this.state.formshow?<Form stakeholder={this.state.stakeholder}/>:null}
                    </div>
                    
                    <div className={this.state.type?style.bottoms:style.bottom}>
                        <button  className={style.white}>{insurePrice+" 元"}</button>
                        {this.state.type?"":<button  className={style.orange} onClick={this.insure}>发给客户</button>}
                        
                        <button  onClick={this.handelClick} className={this.state.workNum?"":style.default}>{this.state.formshow?"确定":"立即投保"}</button>
                    </div>
                    <div className={`${this.state.formshow?style.active:null} ${style.mask}`} onClick={this.hideForm}>
                    </div> 
                </div> 
             
        );
    };
}
