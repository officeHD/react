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
                以上身价保障责任，仅按最高一项给付保险金
              </p>
            </dd>
	         </dl>
 
   		</div>

        )
    };
}