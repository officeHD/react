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
        let relationNo=this.state.stakeholder.relation;
        let relation;
            if(relationNo==="00"){
                relation="本人"
            }else if(relationNo==="03"){
                relation="子女"
            }
        return (
            <div>
                <TitleBar title="安邦安鑫利两全保险（万能型）A款" />
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
                        <li>被保人与投保人关系：{relation}</li>
                        {
                            relation==="本人"?"":
                            <div>
                                <li>姓名：{this.state.stakeholder.bbrName}</li>
                                <li>身份证号：{this.state.stakeholder.bbrNo}</li>
                                <li>手机号码：{this.state.stakeholder.bbrPhone}</li>
                                <li>证件有效期：{this.state.stakeholder.bbrNoStart+" 至 "+(this.state.stakeholder.bbrNoEnd?this.state.stakeholder.bbrNoEnd:"长期")}</li>
                                <li>电子邮箱：{this.state.stakeholder.bbrEmail}</li>
                                <li>通讯地址：{this.state.stakeholder.bbrProvince.name+" "+this.state.stakeholder.bbrCity.name+" "+this.state.stakeholder.bbrCountry.name}</li>
                                <li>详细地址：{this.state.stakeholder.bbrAdd}</li>
                                <li>邮政编码：{this.state.stakeholder.bzipCode}</li>
                                <li>职业：{this.state.stakeholder.bjob.job}</li>
                            </div>
                        }
                       
                        <li>被保人健康告知：{this.state.stakeholder.health}</li>
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