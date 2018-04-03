import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Account from './Account';
import Policyholder from './Policyholder';
import Recognizee from './Recognizee';
import Notice from './Noticed';
import Bottom from './Bottom';
import Pay from './Pay';
import { Toast } from 'antd-mobile';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import AppActionCreators from '../../actions/AppActionCreators';
import InsuranceStores from '../../stores/InsuranceStore';
import AppStore from '../../stores/AppStore';
import { orderOperation } from '../APIUtils';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          topay: AppStore.getPayfor(),
          stakeholder: InsuranceStores.getStakeholder(),
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
        if (this.state.hasNoticed) {
            orderOperation()

        } else {
            Toast.info('请先确认 重要提示', 2);
            window.scrollTo(0, 3000)
        }
    };

    hidePay(){
       AppActionCreators.hideToPay();
       this.setState({
            topay: AppStore.getPayfor(),
        });
    }
    render() {
        return (
            <div>
                <TitleBar title="复星联合康乐一生重疾保险" />
                <Recognizee stakeholder={this.state.stakeholder}/>
                {this.state.stakeholder.sameAs?'':<Policyholder stakeholder={this.state.stakeholder}/>}
                <Account stakeholder={this.state.stakeholder}/>
                <Notice hasNoticed={this.state.hasNoticed} anyone={this.state.anyone} toggleHasNoticed={this.toggleHasNoticed} toggleAnyone={this.toggleAnyone}/>
                <Bottom onClickHandle={this.next}/>
            </div>
        )
    };
}