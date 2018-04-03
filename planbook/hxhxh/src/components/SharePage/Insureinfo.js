import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
      let amnt=this.props.planData.amt;
      let amnt1,amnt2,amnt3;
      if ((amnt/5)%10000===0) {
        amnt1=(amnt/10000)+"万";
        amnt2=(amnt/5/10000)+"万";
        amnt3=(amnt/5/10000)*3+"万";
      }else{
         amnt1=amnt;
        amnt2=(amnt/5);
        amnt3=(amnt/5*3);
      }
 
       return (
        <div >
       
          <div className={style.person}>
  	         <dl className={style.insureInfo}>
  	         	<dt>固定领取</dt>
              <dd className={style.infolist}>25岁-29岁每年领关爱金<span className={style.att}>{(amnt*0.06).toFixed(2)}元</span> </dd>
              <dd className={style.infotip}>保单第5年开始领至第9年，年年享受关爱</dd>
              <dd className={style.infolist}>30岁至59岁每年领<span className={style.att}>{(amnt*0.2308).toFixed(2)}元</span> </dd>
              <dd className={style.infolist}>60岁-终身每年领养老金<span className={style.att}>{(amnt*0.4616).toFixed(2)}元</span> </dd>
              <dd className={style.infotip}>稳定的现金流直至终身，满足长期财富规划</dd>
  	         	
               
  	          
  	         </dl>
          </div>
          <div className={style.person}>

              <dl className={style.insureInfo}>
              <dt>万能账户</dt>
              <dd className={style.infolist}>万能账户日计息月复利</dd>
              <dd className={style.infotip}>所有返还金可进入万能账户复利计息<br/>结算保底年化利率3.0%，使财富二次增值</dd>
              <dd className={style.infolist}>75周岁后每年领取养老金，祝寿添福</dd>
              <dd className={style.infolist}>身故/全残给付已交保费/账户价值较大者 </dd>
              <dd className={style.infotip}>已交保费需扣除已领养老金与部分领取账户价值后金额</dd>
              
               
              
             </dl>
          </div>
          <div className={style.person}>

              <dl className={style.insureInfo}>
              <dt>身故保障</dt>
              <dd className={style.infolist}>身故/全残金给付所交保费与现金价值较大者</dd>
              <dd className={style.infotip}>彰显生命尊严，确保资金安全</dd>
              
              
               
              
             </dl>
          </div>
   		</div>

        )
    };
}