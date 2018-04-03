import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Account from './Account';
import Policyholder from './Policyholder';
import Recognizee from './Recognizee';
import Notice from './Noticed';
import Bottom from './Bottom';
import Health from './Health';
import { Toast } from 'antd-mobile';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import AppActionCreators from '../../actions/AppActionCreators';
import InsuranceStores from '../../stores/InsuranceStore';
import AppStore from '../../stores/AppStore';
import {checkData,orderOperation} from '../APIUtils';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          topay: AppStore.getPayfor(),
          stakeholder: InsuranceStores.getStakeholder(),
          isLongTimeID: InsuranceStores.getIsLongTimeID(),
          hasNoticed: false,
          anyone: false,
          
        }
        this.onInsuranceChange = this.onInsuranceChange.bind(this);
        this.toggleHasNoticed = this.toggleHasNoticed.bind(this);
        this.toggleAnyone = this.toggleAnyone.bind(this);
        this.next = this.next.bind(this);
        this.hidePay = this.hidePay.bind(this);
    };
    samePolicy(){
        InsuranceActionCreators.toggleSameAs();
    };
    onInsuranceChange() {
        this.setState({
            stakeholder: InsuranceStores.getStakeholder(),       //相关方数据集合
            topay: AppStore.getPayfor(),
            isLongTimeID: InsuranceStores.getIsLongTimeID(),
        });
    }
    componentDidMount() {      
        InsuranceStores.addChangeListener(this.onInsuranceChange);
        AppStore.addChangeListener(this.onInsuranceChange);
     
    };

    componentWillUnmount() {
        InsuranceStores.removeChangeListener(this.onInsuranceChange);
        AppStore.removeChangeListener(this.onInsuranceChange);
    };
     //切换已告知
    toggleHasNoticed() {
        this.setState({
            hasNoticed: !this.state.hasNoticed
        })
    };
    toggleAnyone(){
      this.setState({
            anyone: !this.state.anyone
        })
    };

    next() {
         if(checkData('姓名',this.state.stakeholder.tbrName)
            &&checkData('身份证',this.state.stakeholder.tbrNo)
            &&checkData('手机',this.state.stakeholder.tbrPhone)
            &&checkData('邮箱',this.state.stakeholder.tbrEmail)
            &&checkData('住址',this.state.stakeholder.tbrAdd)
            &&checkData('邮政编码',this.state.stakeholder.zipCode)
            ){if(!this.state.stakeholder.tbrNoStart){
                Toast.info('请选择投保人证件有效起期',2);  
            }else if(!this.state.stakeholder.tbrNoEnd){
                Toast.info('请选择投保人证件有效止期',2);  
            }else if(!this.state.stakeholder.job.job){
                Toast.info('请选择投保人职业',2);  
            }else if(!this.state.stakeholder.tbrCountry.name){
                Toast.info('请选择投保人地址',2);  
            }else if(this.state.stakeholder.bbrAge<18){
                Toast.info('投保人必须大于18周岁', 2);
            }else if(this.state.stakeholder.bbrAge>70){
                Toast.info('被保人必须小于70周岁', 2);
            }else if (!this.state.hasNoticed) {
                Toast.info('请先确认 重要提示', 2);
                window.scrollTo(0, 3000) 
            }else if(!this.state.stakeholder.health){
                Toast.info('请确认健康告知', 2);
            } else {
                orderOperation(); 
            }
         }
        
        
    };

    hidePay(){
       AppActionCreators.hideToPay();
       this.setState({
             topay: AppStore.getPayfor(),
        });
    }
    render() {
        if(this.state.stakeholder.tbrNo.length==18||this.state.stakeholder.tbrNo.length==15){
            if(this.state.stakeholder.bbrAge<18){
                Toast.info('投保人必须大于18周岁', 2);
            }
        }
        return (
            <div>
                {this.state.stakeholder.healthshow?<Health/>:''}
             
                <TitleBar title="安邦随e乐两全保险" />
                <Recognizee stakeholder={this.state.stakeholder} isLongTimeID={this.state.isLongTimeID}/>
                {this.state.stakeholder.sameAs?'':<Policyholder stakeholder={this.state.stakeholder}/>}
                <Account stakeholder={this.state.stakeholder}/>
                <Notice hasNoticed={this.state.hasNoticed} anyone={this.state.anyone} toggleHasNoticed={this.toggleHasNoticed} toggleAnyone={this.toggleAnyone}/>
                <Bottom stakeholder={this.state.stakeholder} onClickHandle={this.next}/>
            </div>
        )
    };
}