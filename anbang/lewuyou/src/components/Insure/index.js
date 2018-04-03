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
          isLongTimeIDs: InsuranceStores.getIsLongTimeIDs(),
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
             isLongTimeIDs: InsuranceStores.getIsLongTimeIDs(),
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
          if(checkData('投保人姓名',this.state.stakeholder.tbrName)
            &&checkData('投保人身份证',this.state.stakeholder.tbrNo)
            &&checkData('投保人手机',this.state.stakeholder.tbrPhone)
            &&checkData('投保人邮箱',this.state.stakeholder.tbrEmail)
            &&checkData('投保人住址',this.state.stakeholder.tbrAdd)
            &&checkData('投保人邮政编码',this.state.stakeholder.zipCode)
            &&checkData('被保人姓名',this.state.stakeholder.bbrName)
            &&checkData('被保人身份证',this.state.stakeholder.bbrNo)
            ){if(!this.state.stakeholder.tbrNoStart){
                Toast.info('请选择投保人证件有效起期',2);  
            }else if(!this.state.stakeholder.tbrNoEnd){
                Toast.info('请选择投保人证件有效止期',2);  
            } else if(!this.state.stakeholder.job.job){
                Toast.info('请选择投保人职业',2);  
            }else if(!this.state.stakeholder.bbrNoStart){
                Toast.info('请选择被保人证件有效起期',2);  
            }else if(!this.state.stakeholder.bbrNoEnd){
                Toast.info('请选择被保人证件有效止期',2);  
            }else if(!this.state.stakeholder.bjob[0]){
                Toast.info('请选择被保人职业',2);  
            } else if(this.state.stakeholder.bbrAge===0.5){
                Toast.info('被保人必须大于28天',1); 
            }else if(this.state.stakeholder.bbrAge>18){
                Toast.info('被保人必须小于18周岁',1); 
            }else if(this.state.stakeholder.tbrAge<18){
                Toast.info('投保人必须大于18周岁',1); 
            }else if (!this.state.hasNoticed) {
                Toast.info('请先确认 重要提示', 2);
                window.scrollTo(0, 3000) 
            }else if(!this.state.stakeholder.health){
                 Toast.info('请确认健康告知', 2);
            }  else {
               
                orderOperation() 
                 
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
         
            if(this.state.stakeholder.tbrAge<18){
                Toast.info('投保人必须大于18周岁', 2);
            }
        }
         if(this.state.stakeholder.bbrNo.length==18||this.state.stakeholder.bbrNo.length==15){
            if(this.state.stakeholder.bbrAge===0.5){
                Toast.info('被保人必须大于28天',1); 
            } else if(this.state.stakeholder.bbrAge>18){
                Toast.info('被保人必须小于18周岁',1); 
            } 
        }
        
        return (
            <div>
                {this.state.stakeholder.healthshow?<Health stakeholder={this.state.stakeholder}/>:''}
             
                <TitleBar title="乐无忧1号少儿两全保险（分红型）" />
                <Recognizee stakeholder={this.state.stakeholder} isLongTimeID={this.state.isLongTimeID}/>
                <Policyholder stakeholder={this.state.stakeholder} isLongTimeIDs={this.state.isLongTimeIDs}/>
                <Account stakeholder={this.state.stakeholder}/>
                <Notice hasNoticed={this.state.hasNoticed} anyone={this.state.anyone} toggleHasNoticed={this.toggleHasNoticed} toggleAnyone={this.toggleAnyone}/>
                <Bottom stakeholder={this.state.stakeholder} onClickHandle={this.next}/>
            </div>
        )
    };
}