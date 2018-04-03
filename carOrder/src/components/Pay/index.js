import React, {Component} from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import TitleBar from '../public/TitleBar';
import Banks from './Bank';
import Banklist from './Banklist';
import Place from './Place';
import { applyPay,getBankList,checkData } from '../APIUtils';
import InsuranceStores from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
 
import style from '../asset/css/pay.less';
 
export default class Pay extends Component {
    constructor(props){
        super(props);
        this.state = {
          stakeholder: InsuranceStores.getStakeholder(),
          formshow:false,
       
           
        }
         
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
         this.sureOrder = this.sureOrder.bind(this);
         this.showMask = this.showMask.bind(this);
         this.onOpenChange = this.onOpenChange.bind(this);
          
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
         applyPay();
    }
    showMask(){
      if(!this.state.formshow){
         
         if(checkData('姓名',this.state.stakeholder.cardName)&&checkData('账户号',this.state.stakeholder.cardNo)&&checkData('支行',this.state.stakeholder.bankcard.no)){
            this.setState({
              formshow: !this.state.formshow,       //相关方数据集合
            });
         }
      }else{
         this.setState({
          formshow: !this.state.formshow,       //相关方数据集合
        });
      }
     
    }
   
    onOpenChange()  {
      this.setState({
            formshow: !this.state.formshow,       //相关方数据集合
        });
          window.location="#/banksupport"
      }
    render() {
       
         
        return (
            <div className={style.pay}>
                
                <TitleBar title="订单支付" />
                <div className={style.pay_content}>
                <ul className={style.content_uls}>
                    <li className={style.list}>
                        <label>保单金额</label>
                         <span className={style.fr}>
                            <span className={style.red}>{this.state.stakeholder.price} </span>
                         元 </span>
                    </li>
                </ul>
                <ul className={style.content_uls}>
                        <li className={style.list}>
                            <label>账户名</label>
                            <input 
                                type="text"
                                placeholder="请输入真实姓名" 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'cardName')}}
                                    value={this.state.stakeholder.cardName}
                            />
                        </li>
                        
                        <li className={style.list}>
                            <label>开户银行</label>
                             <Banks banks={this.state.stakeholder.bankDatas} bank={this.state.stakeholder.bankcard}/>
                        </li>
                        <li className={style.list}>
                            <label>开户地址</label>
                             <Place closeCity={this.state.stakeholder.closeCity} unionBankId={this.state.stakeholder.bankcard.no} province={this.state.stakeholder.cardPro} city={this.state.stakeholder.cardCity}/>
                        </li>
                        <li className={style.list}>
                            <label>开户支行</label>
                           <Banklist banks={this.state.stakeholder.banksData} bank={this.state.stakeholder.bankcards}  unionBankId = {this.state.stakeholder.bankcard.no}  provinceId={this.state.stakeholder.cardPro.no} townId={this.state.stakeholder.cardCity.no}/>
                        </li>    
                        <li className={style.list}>
                            <label>账户号</label>
                            <input 
                                type="text"
                                placeholder="仅限本人银行卡" 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'cardNo')}}
                                value={this.state.stakeholder.cardNo}
                            />
                        </li>                  
                </ul>
                <span className={style.pull_right} onClick={this.onOpenChange}>查看支持银行及限额</span>
                </div>
                <div className={style.bottom}>
                    <button  onClick={this.showMask}>确定支付</button>
                </div> 
                <div className={`${this.state.formshow?style.active:null} ${style.mask}`}  onClick={this.showMask}>
                  <div className={style.mask_content}>
                    <p className={style.mask_title}>
                      授权
                    </p>
                    <p>
                      投保人（以下简称本人）对安邦人寿保险股份有限公司（以下简称贵公司）及下列的开户银行（以下简称银行授权如下）：
                    </p>
                    <p>
                      1.本人同意贵公司委托银行，从本人填写的投保单中银行账户划付保险合同中约定的所需缴纳的保险费，并保证有足够的金额支付应交保险费。
                    </p>
                    <p>
                      2.本人填写的投保单中授权的账户所有人为投保人本人，本人确认授权账户的开户银行、户名和账号均真实有效，续期缴费账户与首期保费缴纳账户为同一账户。
                    </p>
                    <button onClick={this.sureOrder}>
                      同意
                    </button>
                  </div>
                </div>
            </div>
        )
    };
}