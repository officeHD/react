import React, {Component} from 'react';
import style from '../asset/css/share.less';
export default class Backpage extends Component {
    constructor(props){
        super(props); 
    }
    render() {
       return (
        <div>
	          <dl className={style.prompt_warp}>
            <dd className={style.warm_prompt}>
              <p>温馨提示：</p><p>以上演示说明为本平台对上述产品的理解便于保险从业人员学习、交流，演示数据仅供参考，请以实际为准。</p>
            </dd>
           </dl>
 
   		</div>

        )
    };
}