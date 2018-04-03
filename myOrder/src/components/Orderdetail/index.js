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
             policyUrl: InsuranceStores.getPolicyUrl(),
          stakeholder: AppStore.getStakeholder(),
        }
         this.onInsuranceChange = this.onInsuranceChange.bind(this);
         this.sureOrder = this.sureOrder.bind(this);
    }
     onInsuranceChange() {
        this.setState({
             policyUrl: InsuranceStores.getPolicyUrl(),
            stakeholder: AppStore.getStakeholder(),       //相关方数据集合
        });
    }
     componentDidMount() {      
        AppStore.addChangeListener(this.onInsuranceChange);
        InsuranceStores.addChangeListener(this.onInsuranceChange);
    };

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onInsuranceChange); 
        InsuranceStores.removeChangeListener(this.onInsuranceChange); 
    };
     
    sureOrder(){
        if(this.state.stakeholder.orderStatus==="未承保"&&this.state.stakeholder.companyAb===true){
            window.location="#/pay"
        }else{
             window.location="#/" 
        }    
    }
     downloadFile(){
        getFileUrl();      
    }

    render() {
        
        let insuranceDuration='';
        let ulList=this.state.stakeholder.insurances.map((text, index)=> {
            let insuYear="";
            let insuranceType="";
            if(text.insuYearType==='Y'){
                insuYear=text.insuYear+"年"
            }else{
               insuYear=text.insuYear+"岁" 
            }
            if(text.insuranceType.toString()==="0"){
                insuranceType="主险";
            }else{
               insuranceType="附加险"; 
            }
            if(text.insuranceDuration==="趸交"){
                insuranceDuration=text.insuranceDuration;
            }else{
                insuranceDuration=text.insuranceDuration+"年";
            }
            

             return(
                <ul key={index} className={style.insureUl}>
                    <li><span className={style.title}>险种：</span>{text.insuranceName}</li>
                  
                  
                    <li><span className={style.title}>险种类别：</span>{insuranceType}</li>
                    <li><span className={style.title}>保险期限：</span>{insuYear}</li>
                    <li><span className={style.title}>缴费年期：</span>{insuranceDuration}</li> 
                    { (!text.insuranceInfo|| text.insuranceInfo==0)? "": <li><span className={style.title}>保额：</span>{text.insuranceInfo}</li> 
                      
                    }
                    <li><span className={style.title}>保费：</span>{text.insuranceFee}</li> 
                </ul>
                )
        })
        console.log(this.state.stakeholder)
        return (
            <div>
                <TitleBar title="订单详情" />
                <div className={style.content}>
                    <div className={style.mes}>
                        <label><img src={require(`../asset/img/other.png`)}/>订单概况</label>
                        <ul>   <li><span className={style.title}>保单号：</span>{this.state.stakeholder.contNo?this.state.stakeholder.contNo:"未生成"}</li> </ul>
                       
                        {ulList}
                    </div>
                    <div className={style.mes}>
                        <label><img src={require(`../asset/img/person.png`)}/>投保人信息</label>
                        <ul>
                            <li><span className={style.title}>姓名：</span>{this.state.stakeholder.tbrName}</li>
                            <li><span className={style.title}>手机号码：</span>{this.state.stakeholder.tbrPhone}</li>
                            <li><span className={style.title}>身份证号：</span>{this.state.stakeholder.tbrNo}</li>
                            <li><span className={style.title}>证件有效期：</span>{this.state.stakeholder.tbrNoStart+" 至 "+(this.state.stakeholder.tbrNoEnd?this.state.stakeholder.tbrNoEnd:"长期")}</li>
                            <li><span className={style.title}>电子邮箱：</span>{this.state.stakeholder.tbrEmail}</li>
                            <li><span className={style.title}>通讯地址：</span>{this.state.stakeholder.tbrProvince_name+" "+this.state.stakeholder.tbrCity_name+" "+this.state.stakeholder.tbrCountry_name}</li>
                            <li><span className={style.title}>详细地址：</span>{this.state.stakeholder.tbrPermanentAddress}</li>
                        </ul>
                    </div>
                    <div className={style.mes}>

                        <label><img src={require(`../asset/img/person.png`)}/>被保人信息</label>
                        <ul>
                            <li><span className={style.title}>投保关系：</span>{this.state.stakeholder.relation}</li>
                            {this.state.stakeholder.relation==="本人"?'':
                                <div>
                                    <li><span className={style.title}>姓名：</span>{this.state.stakeholder.bbrName}</li>
                                    <li><span className={style.title}>手机号码：</span>{this.state.stakeholder.bbrPhone}</li>
                                    <li><span className={style.title}>身份证号：</span>{this.state.stakeholder.bbrNo}</li>
                             
                                    <li><span className={style.title}>证件有效期：</span>{this.state.stakeholder.bbrNoStart+" 至 "+(this.state.stakeholder.bbrNoEnd?this.state.stakeholder.bbrNoEnd:"长期")}</li>
                                 
                                    <li><span className={style.title}>通讯地址</span>：{this.state.stakeholder.bbrProvince_name+" "+this.state.stakeholder.bbrCity_name+" "+this.state.stakeholder.bbrCountry_name}</li>
                                   
                                   <li><span className={style.title}>详细地址：</span>{this.state.stakeholder.bbrPermanentAddress}</li>
                                </div>
                            }
                            
                        </ul>
                    </div>
                    <div className={style.mes}>
                        <label><img src={require(`../asset/img/other.png`)}/>其他信息</label>
                        <ul>
                            <li><span className={style.title}>受益人：</span>法定</li>
                            <li><span className={style.title}>保单类型：</span>电子保单  
                            {this.state.stakeholder.orderStatus==="已承保"&&this.state.stakeholder.companyAb===true?
                           this.state.policyUrl? <a className={style.dowload} href={this.state.policyUrl} download>下载保单</a>:<span className={style.dowload} onClick={this.downloadFile}>获取保单</span> 
                                :""
                            
                            }
                            </li>
                        </ul>
                    </div>
                </div>
               
                <div className={style.bottom}>
                    <button  onClick={this.sureOrder}>{this.state.stakeholder.orderStatus==="未承保"&&this.state.stakeholder.companyAb===true? "去支付":"确定"}</button>
                </div> 
            </div>
        )
    };
}