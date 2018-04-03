import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <ul className={style.blank_ul}>
        <li className={style.blank_li_title}>乐无忧1号少儿两全保险（分红型）</li>   
        <li><label>投保年龄</label> <span>28天-12周岁</span></li>   
        <li><label>缴费方式</label> <span>趸交</span></li>   
        <li><label>保险期限</label> <span>25周岁</span></li>   
        <li><label>单份保额</label> <span>1000元</span></li>   
        <li><label>限购份数</label> <span>10份/人</span></li>   
      </ul>
    )
  }
}