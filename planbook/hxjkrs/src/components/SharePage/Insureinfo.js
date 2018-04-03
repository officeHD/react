import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
      let amnt=this.props.planData.mainamnt;
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
            <dd className={style.infolist}>77种重疾<span className={style.att}>{amnt}</span>元</dd>
            <dd className={style.infotip}> <p>全面赔付，无需担忧医疗费，专注治疗 </p></dd>
	         	
             
	         	<dd className={style.infolist}>33种轻症<span className={style.att}>{amnt2}</span>元</dd>
	     
            <dd className={style.infotip}> <p>每种轻症赔付一次，累计五次为限，最高3000元 </p></dd>
            <dd className={style.infolist}>最高限制<span className={style.att}>{amnt}</span>元</dd>
            <dd className={style.infotip}> <p>健康呵护周全，关爱家人 </p></dd>
	         </dl>
   		</div>

        )
    };
}