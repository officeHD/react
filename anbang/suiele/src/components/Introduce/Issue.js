import React, {Component} from 'react'
 
import style from '../asset/css/introduce.less'

export default class Issue extends Component{
  render() {
    return(
       <div className={style.issue}>
         <span className={style.issue_title}>哪些地区可以投保？</span>
         <p>
            产品销售区域：全国，
            本产品由安邦人寿保险股份有限公司承保，在北京、上海、广东、深圳、浙江、江苏、天津、河北、河南、山东、吉林、黑龙江、辽宁、湖南、湖北、四川、江西、山西、安徽设有分公司，没有分公司的省份请选择就近省份投保。
         </p>
          <span className={style.issue_title}>保单账户如何结算？</span>
         <p>在保险合同有效期内，保单账户价值每月结算一次，保单账户结算日为每月1日。
            本公司每月根据国务院保险监督管理机构的有关规定，结合本公司万能账户的实际投资状况，确定上个月的结算利率，并在结算日起6个工作日内公布。结算利率不低于最低保证利率，结算利率超过最低保证利率的部分是不确定的。
         </p>
       </div>
    )
  }
}