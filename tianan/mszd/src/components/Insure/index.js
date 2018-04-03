import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Account from './Account';
import Policyholder from './Policyholder';
import Recognizee from './Recognizee';
import Notice from './Noticed';
import Bottom from './Bottom'; 
import { Toast } from 'antd-mobile'; 
import InsuranceStores from '../../stores/InsuranceStore';
import {checkData,orderOperation} from '../APIUtils';
import { componies } from '../asset/json/appInfo.json';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            stakeholder: InsuranceStores.getStakeholder(),
            company:  componies[0],
            hasNoticed: false,
            anyone: false,
        }
        this.onInsuranceChange = this.onInsuranceChange.bind(this);
        this.toggleHasNoticed = this.toggleHasNoticed.bind(this);
        this.toggleAnyone = this.toggleAnyone.bind(this);
        this.next = this.next.bind(this);
    };
    onInsuranceChange() {
        this.setState({
            stakeholder: InsuranceStores.getStakeholder(),       //相关方数据集合
        });
    }
    componentDidMount() {      
        InsuranceStores.addChangeListener(this.onInsuranceChange);
    };

    componentWillUnmount() {
        InsuranceStores.removeChangeListener(this.onInsuranceChange);
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
            &&checkData('投保人住址',this.state.stakeholder.tbrAdd)
              &&checkData('邮箱',this.state.stakeholder.email)
            &&checkData('被保人手机',this.state.stakeholder.bbrPhone)
            &&checkData('被保人身份证',this.state.stakeholder.bbrNo)
            &&checkData('被保人姓名',this.state.stakeholder.bbrName)
            &&checkData('被保人住址',this.state.stakeholder.tbrAdd)
        ){ if (!this.state.stakeholder.tbrCountry.name){
                Toast.info('请选择投保人地址',2);  
            }else if(this.state.stakeholder.bbrAge<3){
                Toast.info('被保人必须大于3周岁',1); 
            }else if(this.state.stakeholder.bbrAge>20){
                Toast.info('被保人必须小于20周岁',1); 
            }else if(this.state.stakeholder.tbrAge<18){
                Toast.info('投保人必须大于18周岁',1); 
            }else if (!this.state.hasNoticed) {
                Toast.info('请先确认 重要提示', 2);
            }else{
                window.location="#order"    
            }
        } 
    };

    render() {
        if(this.state.stakeholder.tbrNo.length==18||this.state.stakeholder.tbrNo.length==15){
            if(this.state.stakeholder.tbrAge&&this.state.stakeholder.tbrAge<18){
                Toast.info('投保人必须大于18周岁', 2);
            }
        }
        if(this.state.stakeholder.bbrNo.length==18){
            if(this.state.stakeholder.bbrAge<3){
                Toast.info('被保人必须大于3周岁',1); 
            } else if(this.state.stakeholder.bbrAge>20){
                Toast.info('被保人必须小于20周岁',1); 
            } 
        }
        return (
            <div>
                <TitleBar title={this.state.company.product} />
                <Recognizee stakeholder={this.state.stakeholder} />
                <Policyholder stakeholder={this.state.stakeholder} /> 
                <Account stakeholder={this.state.stakeholder}/>
                <Notice 
                    hasNoticed={this.state.hasNoticed} 
                    anyone={this.state.anyone} 
                    toggleHasNoticed={this.toggleHasNoticed} 
                    toggleAnyone={this.toggleAnyone}
                />
                <Bottom stakeholder={this.state.stakeholder} onClickHandle={this.next}/>
            </div>
        )
    };
}