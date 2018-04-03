import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast } from 'antd-mobile';
export default class Content extends Component {
 	render() {
        return (
          <div className={style.article}>
            <div className={style.title}>
              个人介绍
            </div>
            <p>大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好</p>
          </div>
        );
    };

}