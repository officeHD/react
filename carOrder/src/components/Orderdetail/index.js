import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import style from '../asset/css/Order.less';
import { orderOperation ,getFileUrl} from '../APIUtils';
import AppStore from '../../stores/AppStore';
import InsuranceStores from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
export default class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
             
          stakeholder: InsuranceStores.getStakeholder(),
        }
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
         this.sureOrder = this.sureOrder.bind(this);
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
        window.location="#/"  
    }
     downloadFile(){
        getFileUrl();      
    }

    render() {
        
        return (
            <div>
                <TitleBar title="订单详情" />
                <div className={style.content}>
                    <div className={style.mes}>
                        <label>投保人信息</label>
                        <ul>
                            <li><span className={style.title}>姓名：</span>{this.state.stakeholder.tbr.name}</li>
                            <li><span className={style.title}>手机号码：</span>{this.state.stakeholder.tbr.phone}</li>
                            <li><span className={style.title}>身份证号：</span>{this.state.stakeholder.tbr.cardNum}</li>
                        </ul>
                    </div>
                    <div className={style.mes}>
                        <label>被保人信息</label>
                        <ul>
                            <li><span className={style.title}>姓名：</span>{this.state.stakeholder.bbr.name}</li>
                            <li><span className={style.title}>手机号码：</span>{this.state.stakeholder.bbr.phone}</li>
                            <li><span className={style.title}>身份证号：</span>{this.state.stakeholder.bbr.cardNum}</li>
                        </ul>
                    </div>
                    <div className={style.mes}>
                        <label>车辆信息</label>
                        <ul>
                            <li><span className={style.title}>车牌号：</span>{this.state.stakeholder.vehicleInfo.lcnNo}</li>
                            <li><span className={style.title}>车主姓名：</span>{this.state.stakeholder.bbr.phone}</li>
                            <li><span className={style.title}>车型车系：</span>{this.state.stakeholder.vehicleInfo.vehicleName}</li>
                            <li><span className={style.title}>车架号：</span>{this.state.stakeholder.vehicleInfo.vhlFrm}</li>
                            <li><span className={style.title}>发动机号：</span>{this.state.stakeholder.vehicleInfo.engNo}</li>
                            <li><span className={style.title}>投保城市：</span>{this.state.stakeholder.vehicleInfo.tbCity}</li>
                           
                        </ul>
                    </div>
                     
                    <div className={style.mes}>
                        <label>险种方案</label>
                        <ul>
                            <li><span className={style.title}>商业险合计：</span>{this.state.stakeholder.carOrderQuote.nRealAmt}</li>
                            <li><span className={style.title}>交强险：</span>{this.state.stakeholder.carOrderQuote.nTraffRealPrm}</li>
                            <li><span className={style.title}>车船税：</span>{this.state.stakeholder.carOrderQuote.nTaxRealPrm}</li>
                           
                        </ul>
                    </div>
                     
                    <div className={style.mes}>
                        <label>保单邮寄</label>
                        <ul>
                            <li><span className={style.title}>收件人：</span>{this.state.stakeholder.carInfo.linkMan}</li>
                            <li><span className={style.title}>收件地址：</span>{this.state.stakeholder.carInfo.address}</li>
                            <li><span className={style.title}>联系电话：</span>{this.state.stakeholder.carInfo.linkManPhone}</li>
                        </ul>
                    </div>
                </div>
               
                <div className={style.bottom}>
                    <button  onClick={this.sureOrder}> 确定 </button>
                </div> 
            </div>
        )
    };
}