import React, {Component} from 'react'
import style from '../asset/css/introduce.less'
import ShowController from './ShowController'
import Condition from './Condition'
export default class Out extends Component {  
    render(){ 
      return (
        <div className={style.detail}>
            <Condition title="身故保险金" tip="账户价值对比" more="被保险人保单年度初年龄，指保单年度第一日被保险人当时的年龄。被保险人保单年度初年龄未满 18 周岁，按账户价值比例100%赔付，已满 18 周岁但未满 41 周岁按160%，已满 41 周岁但未满 61 周岁按140%，已满 61 周岁按120%。"/>
          	<Condition title="满期保险金" tip="账户价值" more="保险期间届满时，被保险人仍然生存的，本公司按本保险合同保单账户价值给付“满期保险金”，本保险合同终止。"/>
          	<Condition title="持续奖金" tip="账户价值的1%" more="在本保险合同有效期内，被保险人在第 5 个保单年度末仍然生存的，本公司将在该保单年度末按当时保单账户价值的 1%作为持续奖金计入保单账户。"/>
        </div>
         
      )
    }
}