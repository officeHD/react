import React, {Component} from 'react';
import { DatePicker,Picker,List } from 'antd-mobile';
import style from '../asset/css/introduce.less';
import Form from './Form';
import AppStore from '../../stores/AppStore';
import AppActionCreators from '../../actions/AppActionCreators';
import {Toast } from 'antd-mobile';
export default class CarInfo extends Component {
     constructor(props) {
        super(props);
        this.state =this.getData();
        this._onChange=this._onChange.bind(this); 
        this.handelClick = this.handelClick.bind(this);   
        this.hideForm = this.hideForm.bind(this);   
        this.insure = this.insure.bind(this);   
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
    getData() {
        return {
            priceInfo: AppStore.getPriceInfo(),
            formshow:AppStore.getFormshow(),
            workNum:AppStore.getWorkNum(),
        }
    }
    handelClick(e){
        if(!this.state.workNum){
            Toast.info('请登录后使用',1)
        }else{
            if(this.state.formshow){
                if(!this.state.priceInfo.birthday){
                    Toast.fail('请选择出生日期', 2);
                }else if(!this.state.priceInfo.yearLength){
                    Toast.fail('保障范围', 2);
                }else{
                    window.location="#/health";
                }
            }else{
                AppActionCreators.toggleFormShow()
                this.setState({
                    finsh: !this.state.finsh,
                })
            } 
        }
    }
    hideForm(){
        AppActionCreators.toggleFormShow()
        this.setState({
         
           
          finsh: false,
        })
    }
    insure(){
       if(!this.state.workNum){
             Toast.info('请登录后使用',1)
        }else{
            if(window.minsheng){
                window.minsheng.share()
            }else{
                window.location.href=`sn://share`;    
            }
          }
     
    }
    render() {
        
        return (
            
                <div>
                    <div className={style.formBox}>
                       {this.state.formshow?<Form/>:null}
                    </div>
                    <div className={style.bottom}>
                        <button  className={style.white}>200元</button>
                        <button  className={style.orange} onClick={this.insure}>发给客户</button>
                        <button  onClick={this.handelClick}>{this.state.formshow?"确定":"立即投保"}</button>
                    </div>
                    <div className={`${this.state.formshow?style.active:null} ${style.mask}`} onClick={this.hideForm}>
                    </div>
                     
                </div> 
             
        );
    };
}
