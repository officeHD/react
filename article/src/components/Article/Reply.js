import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast  } from 'antd-mobile';

export default class Reply extends Component {

	 constructor(props){
        super(props);
        
    };
     
 	render() {
 		  
        return (
          <div className={style.reply}>
             <input placeholder="写评论"/>
             <div className={style.opera}>
             	 <button>评论</button>
            	 <button> <img src={require(`../asset/img/good.png`)} />点赞</button>
             </div>
         </div>
        );
    };

}