import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
      let amnt=this.props.planData.mainamnt;
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
            <dd className={style.infolist}>一般意外：<span className={style.pullright}><span className={style.att}>{amnt1}</span>元</span></dd>
            <dd className={style.infolist}>重大自然灾害：<span className={style.pullright}><span className={style.att}>{amnt2}</span>元</span></dd>
            <dd className={style.infolist}>驾乘车：<span className={style.pullright}><span className={style.att}>{amnt10}</span>元</span></dd>
            <dd className={style.infolist}>公共交通：<span className={style.pullright}><span className={style.att}>{amnt10}</span>元</span></dd>
            <dd className={style.infolist}>航空意外： <span className={style.pullright}><span className={style.att}>{amnt20}</span>元</span></dd>
	         	<dd className={style.infolist}>疾病身故：<span className={style.pullright}>已交保费<span className={style.att}>1.6</span>倍</span></dd>
            <dd className={style.infolist}>疾病全残：<span className={style.pullright}>已交保费<span className={style.att}>1.6</span>倍</span></dd>
	         	<dd className={style.infolist}>满期生存金：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infotips}>以上保障包含意外身故或意外全残</dd>
             
	         </dl>
   		</div>

        )
    };
}