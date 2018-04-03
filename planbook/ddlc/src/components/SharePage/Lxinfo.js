import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
      let amnt=this.props.planData.amt;
     let amnt1,amnt2,amnt10,amnt5,amnt20;
      if (amnt%10000===0) {
        amnt1=(amnt/10000)+"万";
        amnt2=(amnt/10000)*2+"万";
        amnt10=(amnt/10000)*10+"万";
        amnt5=(amnt/10000)*5+"万";
        amnt20=(amnt/10000)*20+"万";
      } else{
        amnt1=amnt ;
        amnt10=amnt*10 ;
        amnt5=amnt*5 ;
      }

       
      console.log(amnt)
       return (
        <div className={style.person}>
	         <dl className={style.insureInfo}>
	         	<dt>保障详情</dt>
            <dd className={style.infolist}>95种重疾：<span className={style.pullright}><span className={style.att}>{amnt}</span>元</span></dd>
            <dd className={style.infotips}>针对癌症、心肌炎、糖尿病等95种高发重疾确诊即赔（甲状腺癌除外），无需担心高昂医疗费与收入损失，专注治疗与康复</dd>
            <dd className={style.infolist}>特定重疾：<span className={style.pullright}><span className={style.att}>{amnt*1.5}</span>元</span></dd>
            <dd className={style.infotips}>70岁前，针对7种特定重疾，除重疾保障外，额外赔付保额的50%</dd>
            <dd className={style.infolist}>25种轻症：<span className={style.pullright}><span className={style.att}>{amnt/5}</span>元</span></dd>
            <dd className={style.infotips}>70岁前，针对25种常见轻症确诊即赔，不同轻症最高可赔付三次</dd>
            <dd className={style.infolist}>甲状腺癌：<span className={style.pullright}><span className={style.att}>{amnt/5}</span>元</span></dd>
            <dd className={style.infotips}>针对甲状腺癌独立赔付，不影响其他责任</dd>
            <dd className={style.infolist}>身价保障： <span className={style.pullright}><span className={style.att}>{amnt}</span>元</span></dd>

	         
            
            <dd className={style.infotips}>豁免保障：若被保人首次确诊轻症，免交后续保费，保单利益不变</dd>
             
	         </dl>
   		</div>

        )
    };
}