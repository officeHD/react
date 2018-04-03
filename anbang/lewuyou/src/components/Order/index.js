import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import style from '../asset/css/Order.less';
import { orderOperation } from '../APIUtils';
import InsuranceStores from '../../stores/InsuranceStore';
export default class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
          stakeholder: InsuranceStores.getStakeholder(),
        }
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
    }
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
     
    sureOrder(){
        orderOperation(1) 
    }
    render() {
 
        return (
            <div>
                <TitleBar title="乐无忧1号少儿两全保险（分红型）" />
                <div className={style.content}>
                     <div className={style.mes}>
                    <label>投保人信息</label>
                    <ul>
                        <li>姓名：{this.state.stakeholder.tbrName}</li>
                        <li>手机号码：{this.state.stakeholder.tbrPhone}</li>
                        <li>身份证号：{this.state.stakeholder.tbrNo}</li>
                        <li>证件有效期：{this.state.stakeholder.tbrNoStart+" 至 "+(this.state.stakeholder.tbrNoEnd?this.state.stakeholder.tbrNoEnd:"长期")}</li>
                        <li>电子邮箱：{this.state.stakeholder.tbrEmail}</li>
                        <li>通讯地址：{this.state.stakeholder.tbrProvince.name+" "+this.state.stakeholder.tbrCity.name+" "+this.state.stakeholder.tbrCountry.name}</li>
                        <li>详细地址：{this.state.stakeholder.tbrAdd}</li>
                        <li>邮政编码：{this.state.stakeholder.zipCode}</li>
                        <li>职业：{this.state.stakeholder.job.job}</li>
                    </ul>
                </div>
                <div className={style.mes}>
                    <label>被保人信息</label>
                    <ul>
                        <li>被保人与投保人关系：子女</li>
                        <li>姓名：{this.state.stakeholder.bbrName}</li>
                        <li>身份证号：{this.state.stakeholder.bbrNo}</li>
                        <li>手机号码：{this.state.stakeholder.tbrPhone}</li>
                        <li>健康告知： {this.state.stakeholder.health}</li>
                    </ul>
                </div>
                <div className={style.mes}>
                    <label>其他信息</label>
                    <ul>
                        <li>受益人：法定</li>
                        <li>保单类型：电子保单</li>
                    </ul>
                </div>
                </div>
               
                <div className={style.bottom}>
                    <button  onClick={this.sureOrder}>确定</button>
                </div> 
            </div>
        )
    };
}