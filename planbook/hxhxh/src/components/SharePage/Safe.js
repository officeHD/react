import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Payment extends Component {
    constructor(props){
        super(props); 
    }
    render() {
       return (
        <div className={style.person}>
	         <dl className={style.insureInfo}>
	         	<dt>保障说明</dt>
            <dd className={style.prompt}>
              <p>
                公共交通：乘坐客运火车、地铁、轻轨、客运轮船、客运汽车、出租车等公共交通工具

              </p>
              <p>
                重大自然灾害、驾乘车、公共交通、航空意外赔付时，不再赔付一般意外身故金

              </p>
              
            </dd>
	         </dl>
 
   		</div>

        )
    };
}