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
                1、本产品等待期为180天

              </p>
              <p>
                2、每种轻症给付一次，累计以三次为限
              </p>
              
            </dd>
	         </dl>
 
   		</div>

        )
    };
}