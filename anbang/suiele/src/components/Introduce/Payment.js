import React, {Component} from 'react'
 
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <div className={style.payment}>
        <div className={style.payment_title}>
          <span className={style.payment_flag}>身故保险金</span>
        </div>
        <div className={style.table}>
          <table>
           <thead>
              <tr>
               <th>被保险人保单年度初年龄</th>
               <th>账户价值比例</th>
              </tr>
           </thead>
           <tbody>
             <tr>
               <td>已满18周岁但未满41周岁</td>
               <td>160%</td>
                
             </tr>
             <tr>
               <td>已满41周岁但未满61周岁</td>
               <td>140%</td>
                
             </tr>
             <tr>
               <td>已满61周岁 </td>
               <td>120%</td> 
             </tr>
           </tbody>
         </table>
         <p>在本主险合同有效期间内，被保险人身故的，本公司将按被保险人身故当时本主险合同保单账户价值乘以身故当时被保险人保单年度初年龄对应的账户价值比例给付“身故保险金”，本主险合同终止。被保险人保单年度初年龄，指保单年度第一日被保险人当时的年龄。</p>
        </div>
        <span className={style.payment_flag}>满期保险金</span>
         <div className={style.table}>
         <p>
           保险期间届满时，被保险人仍然生存的，本公司按本保险合同保单账户价值给付“满期保险金”，本保险合同终止。退保或部分领取手续费，按保单账户价值或部分领取的保单账户价值，乘以下表所列手续费比例确定：
         </p>
         <img src={require('../asset/img/manqi.jpg')}/>
         </div>
      </div>
    )
  }
}