import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Payment extends Component {
    constructor(props){
        super(props); 
    }
    render() {
       let amnt=this.props.planData.mainamnt;
       return (

        <div>
          <div className={style.person}>
              <dl className={style.insureInfo}>
                <dt>固定领取</dt>
                <dd className={style.infolist}>88岁返还祝寿金<span className={style.att}>{(amnt*0.5176).toFixed(2)}元</span>  </dd>
                <dd className={style.prompt}>
                  <p>
                   给付完毕合同继续有效，提供高品质晚年生活</p>
                </dd>
                 
            </dl>
          </div>
          <div className={style.person}>
  	        <dl className={style.insureInfo}>
  	         	<dt>保费豁免</dt>
              
                <dd className={style.infolist}>罹患轻症，豁免主与附加险后期保费，人性关怀更显体贴</dd>
                <dd className={style.prompt}>
                  <p>
                    等待期90日内因非意外原因导致重疾/全残/身故，返还已交纳保费，主险及附加险合同终止
                  </p>
                  <p>
                    重疾保险金、疾病终末期保险金、身故/全残保险金，只赔付其中一项
                  </p>
                </dd>
  	        </dl>
          </div>
          <div className={style.person}>
              <dl className={style.insureInfo}>
                <dt>身故保障</dt>
                <dd className={style.infolist}>18岁后给付<span className={style.att}>{amnt}元</span>/已交保费/现价最大者</dd>
                <dd className={style.prompt}>
                  <p>
                    高额身价保障，为家人延续一份爱与责任
                  </p>
                  <p>
                    等待期90日内身故或全残，给付已交保费，合同终止
                  </p>
                </dd>
                 
            </dl>
          </div>
   		</div>

        )
    };
}