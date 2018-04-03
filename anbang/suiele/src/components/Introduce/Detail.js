import React, {Component} from 'react'
 
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <ul className={style.blank_ul}>
        <li>安邦随e乐两全保险</li>   
        <li><label>投保年龄</label> <span>18-70周岁</span></li>   
        <li><label>缴费方式</label> <span>趸交(可追加)</span></li>   
        <li><label>保险期限</label> <span>10年</span></li>   
        <li><label>投保金额</label> <span>100的整数倍，最高20万</span></li>   
        <li><label>可多次投保</label> <span> 总额1000万</span></li>   
      </ul>
    )
  }
}