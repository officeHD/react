import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import { Icon } from 'antd-mobile';
import style from '../asset/css/payResult.less';
import { getFileUrl } from '../APIUtils';
import InsuranceStores from '../../stores/InsuranceStore';
export default class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
          policyUrl: InsuranceStores.getPolicyUrl(),
          payResult: InsuranceStores.getPayResult(),
          stakeholder: InsuranceStores.getStakeholder(),
        }
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
         this.goBack = this.goBack.bind(this);
    }
     onInsuranceChange() {
        this.setState({
            policyUrl: InsuranceStores.getPolicyUrl(),       //相关方数据集合
            payResult: InsuranceStores.getPayResult(),
            stakeholder: InsuranceStores.getStakeholder(),
        });
    }
    componentDidMount() {
      
        InsuranceStores.addChangeListener(this.onInsuranceChange);
    };

    componentWillUnmount() {
        InsuranceStores.removeChangeListener(this.onInsuranceChange); 
    };
    goBack(){
      if(this.state.payResult){
         window.location="./"
      }else{
        window.history.back()
      }  
    }
    downloadFile(){
        getFileUrl();      
    }
    render() {
        return (
            <div>
                 <TitleBar title="交易详情"/>
                
                <span className={style.statu}>支付成功</span>
                <ul className={style.content_ul}>
                    <li className={style.list_title}>
                        <label className={style.list_t}>支付金额<span className={style.lists}></span></label>

                          <span className={style.fr}> <span className={style.red}>￥ {this.state.payResult.insuranceFee}</span><br/>保单金额</span>
                    </li>
                </ul>
               <ul className={style.content_ul}>
                    <li className={style.list}>
                        <label className={style.list_t}>订单信息<span className={style.lists}></span></label>

                          
                    </li>
                    <li className={style.list}>
                        <label>商品<span className={style.lists}></span></label>
                          {this.state.payResult.insuranceName}
                    </li>
                    <li className={style.list}>
                        <label>保单号<span className={style.lists}></span></label>
                          {this.state.payResult.contNo}
                    </li>
                    <li className={style.list}>
                        <label>投保单号<span className={style.lists}></span></label>
                          {this.state.payResult.prtNo}
                    </li>
                    <li className={style.list}>
                        <label>交易时间<span className={style.lists}></span></label>
                          {this.state.payResult.time}
                    </li>
                </ul>
                
                
                  <div className={style.tick}>
                    <div className={style.list}>
                     <label className={style.list_t}>电子保单<span className={style.lists}></span></label>

                    </div>
                    {this.state.policyUrl?
                     
                      <div className={style.download} > 
                          <a href={this.state.policyUrl} download>
                            <img  src={require('../asset/img/download.png')}/>
                          </a>
                          点击下载
                     </div>: <div className={style.download}  onClick={this.downloadFile}> 
                          <img  src={require('../asset/img/download.png')}/>
                         生成保单
                      </div>
                   }
                     
                     
                    
                </div> 
                
                 
            </div>
        )
    
    }
}