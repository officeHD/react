import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast } from 'antd-mobile';
export default class Introduce extends Component {
	 constructor(props){
        super(props);
         
        
    };

    
 	render() {
        return (
          <div className={style.introduce}>
            <div className={style.title}>
              个人介绍
            </div>
            <p> </p>
          </div>
        );
    };

}