import React, {Component} from 'react'
 
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <ul className={style.blank_ul}>
        <li>安邦安鑫利两全保险（万能型）A款</li>   
        <li><label>投保年龄</label> <span>28天-70周岁</span></li>   
        <li><label>缴费方式</label> <span>趸交</span></li>   
        <li><label>保险期限</label> <span>10年</span></li>   
      </ul>
    )
  }
}