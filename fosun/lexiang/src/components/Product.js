import React, {Component} from 'react'
import BlankLi from './BlankLi'
import style from './asset/css/index.less'
export default class OutPut extends Component {
  render() {
    // console.log(this.props)
    return (
      <ul className="coat_ul">
        <BlankLi item="保险名称">
          个人综合意外险
        </BlankLi>
        <li className={style.blank_li}>
          <label>生效日期</label>
             <span className="date_span">{this.props.effectiveDate}</span>  
        </li>
      </ul>
    )
  };
}