import React, {Component} from 'react';
import { DatePicker,Picker,List } from 'antd-mobile';
import style from '../asset/css/introduce.less';
 
import AppStore from '../../stores/AppStore';
import AppActionCreators from '../../actions/AppActionCreators';
import {Toast } from 'antd-mobile';
export default class CarInfo extends Component {
     constructor(props) {
        super(props);
        this.state ={ 
            formshow:false,
            
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
         
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
         
    };
    _onChange() {  
        this.setState({ 
           
            workNum:AppStore.getWorkNum(),
            type:AppStore.getType(),
        });  
    };
    
    handelClick(e){
          
        if(!this.state.workNum){
            Toast.info('请登录后使用',1)
        }else{
            window.location="#/insure";
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
 
        let insurePrice=this.props.stakeholder.insurePrice
        return (
                <div>
                    
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
