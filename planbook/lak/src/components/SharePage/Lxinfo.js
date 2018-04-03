import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
      let amnt=this.props.planData.amt;
     let amnt1,amnt10,amnt5;
      if (amnt%10000===0) {
        amnt1=(amnt/10000)+"万"
        amnt10=(amnt/10000)*10+"万"
        amnt5=(amnt/10000)*5+"万"
      } else{
        amnt1=amnt 
        amnt10=amnt*10 
        amnt5=amnt*5 
      }

       
      console.log(amnt)
       return (
        <div className={style.person}>
	         <dl className={style.insureInfo}>
	         	<dt>保障详情</dt>
            <dd className={style.infolist}>航空  <span className={style.pullright}><span className={style.att}>{amnt10}</span>元</span></dd>
	         	<dd className={style.infolist}>交通工具：<span className={style.pullright}><span className={style.att}>{amnt10}</span>元</span></dd>
            <dd className={style.infolist}>自驾车：<span className={style.pullright}><span className={style.att}>{amnt10}</span>元</span></dd>
            <dd className={style.infolist}>电梯：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infolist}>自驾车：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infolist}>法定节假日：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infolist}>重大自然灾害：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infolist}>一般意外：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infolist}>非意外：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
	         	<dd className={style.infolist}>满期金：<span className={style.pullright}><span className={style.att}>{amnt5}</span>元</span></dd>
            <dd className={style.infotips}>以上保障包含意外身故或伤残，伤残保险金给付需乘以伤残比例系数</dd>
             <dd className={style.infotips}>航空、交通工具、自驾车在被保人75岁后（含）保障减半</dd>
            
	         </dl>
   		</div>

        )
    };
}