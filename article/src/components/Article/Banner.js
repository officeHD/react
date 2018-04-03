import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast } from 'antd-mobile';
export default class Out extends Component {
 	render() {
        return (
          <div className={style.banner}>
            <div className={style.title}>
              <span>分享自民盛保险</span>    
              <button><a>关注</a></button>
            </div>
            <div className={style.content}>
              <h2>增员过程中的技巧增员过程中的技巧增员过程中的技巧增员</h2>  
              <p>发布时间：<time>2017-03-14</time></p>
            </div>

          </div>
        );
    };

}