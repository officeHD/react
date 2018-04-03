import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <ul className={style.blank_ul}>
        <li className={style.blank_li_title}>安邦畅行无忧两全保险</li>   
        <li><label>投保年龄</label> <span>28天-60周岁</span></li>   
        <li><label>缴费方式</label> <span>趸交、3年、5年、10年</span></li>   
        <li><label>保险期限</label> <span>10年、20年、30年</span></li>   
        <li><label>自动垫交</label> <span>是</span></li>   
        
      </ul>
    )
  }
}