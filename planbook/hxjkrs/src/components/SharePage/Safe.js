import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Payment extends Component {
    constructor(props){
        super(props); 
    }
    render() {
       let amnt=this.props.planData.mainamnt;
       return (
        <div  >
          <div className={style.person}>
  	         <dl className={style.insureInfo}>
  	         	<dt>保费豁免</dt>
               <dd className={style.infolist}>被保险人罹患轻症，免交后期保费</dd>
              <dd className={style.prompt}>
                <p>
                  人性化设计，尽显关爱

                </p>
                 
                
              </dd>
  	         </dl>
          </div>
          <div className={style.person}>
             <dl className={style.insureInfo}>
              <dt>身故保障</dt>
               <dd className={style.infolist}>终身拥有<span className={style.att}>{amnt}元</span>身价保障</dd>
              <dd className={style.prompt}>
                <p>
                  身价给付，彰显生命价值
                </p>
              </dd>
             </dl>
          </div>
        </div>


        )
    };
}