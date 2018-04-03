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
        <div className={style.person}>
	         <dl className={style.insureInfo}>
	         	<dt>保障详情</dt>
            <dd className={style.infolist}>66种重疾<span className={style.att}>{amnt1}</span>元</dd>
            <dd className={style.infotip}>确诊即赔，重疾责任终止，合同继续有效</dd>
	         	
             
	         	<dd className={style.infolist}>22种轻症<span className={style.att}>{amnt2}</span>元</dd>
	         	<dd className={style.infolist}>最高限制<span className={style.att}>{amnt3}</span>元</dd>
            <dd className={style.infotip}>每种轻症仅1次赔付，累计以3次为限</dd>
	         </dl>
   		</div>

        )
    };
}