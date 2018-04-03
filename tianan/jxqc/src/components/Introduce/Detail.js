import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <ul className={style.blank_ul}>
        <li className={style.blank_li_title}>{this.props.company.product}</li>   
        <li>
          <label>投保年龄</label> 
          <div className="pull_right"> 
            <span className="button_border">3-6周岁</span><span className="button_border">7-20周岁</span>
          </div>
          
         </li>   
        <li>
          <label>计划</label>
          <div className="pull_right">
            <span className="button_border"> 省心版</span> 
            <span className="button_border"> 安心版</span>
          </div> 
        </li>   
        <li><label>保险期限</label> <span className="pull_right">一年</span></li>   
      </ul>
    )
  }
}