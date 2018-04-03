import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Pay from './Pay';
import style from '../asset/css/Order.less';
import { orderOperation } from '../APIUtils';
import { Toast } from 'antd-mobile';
import InsuranceStores from '../../stores/InsuranceStore';
export default class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
          stakeholder: InsuranceStores.getStakeholder(),
          payshow:false,
        }
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
         this.onClickHandle = this.onClickHandle.bind(this);
         this.sureOrder = this.sureOrder.bind(this);
         this.payOrder = this.payOrder.bind(this);
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
        this.setState({
            payshow:true,
        });
    }
    onClickHandle(e){
       
        this.setState({
            payshow:false,
        });

    }
    payOrder(e){
       console.log(this.state.stakeholder.cardNo)
        if(this.state.stakeholder.cardNo&&this.state.stakeholder.passWord){
            orderOperation();
            this.setState({
            payshow:false,
        });

        }else{
            Toast.info('请输入卡号或密码',2);
        }  
    }
    render() {
        let relation='子女';
        return (
            <div>
                <TitleBar title="码上长大（学平险）" />
                <Pay payOrder={this.payOrder} isShow={this.state.payshow} stakeholder={this.state.stakeholder} onClickHandle={this.onClickHandle}/>
                <div className={style.content}>
                     <div className={style.mes}>
                    <label>投保人信息</label>
                    <ul>
                        <li>姓名：{this.state.stakeholder.tbrName}</li>
                        <li>手机号码：{this.state.stakeholder.tbrPhone}</li>
                        <li>身份证号：{this.state.stakeholder.tbrNo}</li>
                        <li>通讯地址：{this.state.stakeholder.tbrProvince.name+" "+this.state.stakeholder.tbrCity.name+" "+this.state.stakeholder.tbrCountry.name}</li>
                        <li>详细地址：{this.state.stakeholder.tbrAdd}</li>  
                    </ul>
                </div>
                <div className={style.mes}>
                    <label>被保人信息</label>
                    <ul>
                        <li>被保人与投保人关系：{relation}</li> 
                        <li>姓名：{this.state.stakeholder.bbrName}</li>
                        <li>身份证号：{this.state.stakeholder.bbrNo}</li>
                        <li>手机号码：{this.state.stakeholder.bbrPhone}</li> 
                        <li>通讯地址：{this.state.stakeholder.bbrProvince.name+" "+this.state.stakeholder.bbrCity.name+" "+this.state.stakeholder.bbrCountry.name}</li>
                        <li>详细地址：{this.state.stakeholder.bbrAdd}</li>      
                    </ul>
                </div>

                <div className={style.mes}>
                    <label>其他信息</label>
                    <ul>
                        <li>受益人：法定</li>
                        <li>保单类型：电子保单</li>
                        <li>支付金额：<span className={style.red}>{this.state.stakeholder.insurePrice} </span>元 </li>
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