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
            {this.props.planData.subamnt?
              <dd className={style.infolist}>住院保险额度：<span className={style.pullright}><span className={style.att}>{this.props.planData.subamnt}</span>元</span></dd>:''
            }
            
            {this.props.planData.subnum?
              <div>
                <dd className={style.infolist}>住院津贴<span className={style.pullright}><span className={style.att}>{this.props.planData.subnum*30}</span>元</span></dd>
                <dd className={style.infolist}>急诊津贴：<span className={style.pullright}><span className={style.att}>{this.props.planData.subnum*30}</span>元</span></dd>
                <dd className={style.infolist}>救护车津贴<span className={style.pullright}><span className={style.att}>{this.props.planData.subnum*30}</span>元</span></dd>
                <dd className={style.infolist}>抢救室津贴<span className={style.pullright}><span className={style.att}>{this.props.planData.subnum*60}</span>元</span></dd>
                <dd className={style.infolist}>ICU病房津贴<span className={style.pullright}><span className={style.att}>{this.props.planData.subnum*60}</span>元</span></dd>
                <dd className={style.infolist}>住院前门诊津贴<span className={style.pullright}><span className={style.att}>{this.props.planData.subnum*30}</span>元</span></dd>
              </div>:''
            }
            
             
            <dd className={style.infotips}>疾病，意外皆可保，有无社保皆可保，费用有补偿，健康有保障</dd>
             
	         </dl>
   		</div>

        )
    };
}