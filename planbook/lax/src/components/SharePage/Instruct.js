import React, {Component} from 'react';
import Sickdetail from './Sickdetail';
import style from '../asset/css/share.less';
export default class Payment extends Component {
    constructor(props){
        super(props); 
        
    }
     
    render() {
       return (
        <div className={style.person}>
	         <dl className={style.insureInfo}>
	         	<dt>保障说明 </dt>
              <dd className={style.prompt}>
                <p className={style.detail}>
                以上保障等待期为180天，因意外则不受180天的限制
                </p>
                <p className={style.detail}>
                重疾责任终止后，合同继续有效，现金价值为0
                </p>
                <p className={style.detail}>
                18岁后：身故前未罹患重疾，赔付10万元与已交保费较大者；在发生重疾之后5年内身故，赔付10万元与已交保费较大者的50%；发生在初次确诊重疾日起5年后身故，赔付10万元与已交保费较大者
                </p>
              </dd>
	         </dl>
            
   		</div>

        )
    };
}