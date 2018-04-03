import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import { Icon ,Toast} from 'antd-mobile';
import style from '../asset/css/payResult.less';
import { getFileUrl } from '../APIUtils';
 
import InsuranceStores from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import AppStore from '../../stores/AppStore';
export default class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
          policyUrl: InsuranceStores.getPolicyUrl(),
          payResult: InsuranceStores.getPayResult(),
          stakeholder: InsuranceStores.getStakeholder(),
          type: AppStore.getType(),
        
        }
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
          this.pageview = this.pageview.bind(this);
         this.sureOrder = this.sureOrder.bind(this);
    }
     onInsuranceChange() {
        this.setState({
            policyUrl: InsuranceStores.getPolicyUrl(),       //相关方数据集合
            payResult: InsuranceStores.getPayResult(),
             stakeholder: InsuranceStores.getStakeholder(),
              type: AppStore.getType(),
        });
    }
    componentDidMount() {
      
        AppStore.addChangeListener(this.onInsuranceChange); 
        InsuranceStores.addChangeListener(this.onInsuranceChange);
         InsuranceActionCreators.reset();
    };

    componentWillUnmount() {
        InsuranceStores.removeChangeListener(this.onInsuranceChange); 
        AppStore.removeChangeListener(this.onInsuranceChange);  
    };
     
    downloadFile(){
        getFileUrl();      
    }
    sureOrder(){

      if(this.state.type){
        window.location="#/"
      }else{
            if(window.minsheng){
               window.minsheng.trunToLifeInsuranceActivity()
            }else{
                window.location.href=`sn://turnToLifeInsuranceController`;
               
            }
      }
    }
    pageview(){
            window.open('',"_blank").location= this.state.policyUrl     
   }
    render() {

        return (
            <div>
                 <TitleBar title="交易详情"/>
                
                <span className={style.statu}> <img  src={require('../asset/img/pay.png')}/>支付成功</span>
                <ul className={style.content_ul}>
                    <li className={style.list_title}>
                        <label className={style.list_t}>支付金额<span className={style.lists}></span></label>

                         <span className={style.red}>{this.state.payResult.insuranceFee}</span> 
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
                     <li className={style.list}>
                        <label>电子保单<span className={style.lists}></span></label>
                        {this.state.policyUrl? 
                          <span className={style.under}   onClick={this.pageview}>点击下载</span>
                          :<span className={style.under}  onClick={this.downloadFile}>生成电子保单</span>
                        }
                    </li>
                </ul>
                 <ul className={style.content_ul}>
                    <li className={style.list}>
                        <label className={style.list_t}>专属客服<span className={style.lists}></span></label> 
                    </li>
                    <li className={style.staff}>
                        <span className={style.staff_red}>
                        {this.state.payResult.staffName}
                      </span>
                           |  <span className={style.staff_red}> 
                             {this.state.payResult.phone}
                           </span>
                    </li>
                </ul>
                 <div className={style.bottom}>
                    <button  onClick={this.sureOrder}>继续购买</button>
                </div> 
                <p className={style.linkWechat}>
                  如需查看保单详情，请返回至我的订单或者<br/>关注<a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI2MzAyMTIzMw==&scene=110#wechat_redirect" target="_blank"> 
                  民盛公众号</a>查询。<br/>如有疑问请联系您的专属客服
                </p>
                 <p className={style.linkkefu}>  客服热线： 400-653-1274 
              
                </p>
            </div>
        )
    
    }
}