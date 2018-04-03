import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
      <div className={style.table}>
      
              <p>
                本保险合同有效期内，被保险人身故或全残的，本公司按本主险合同累计已交保险费乘以身故或全残当时被保险人保单年度初
              </p>
               <table>
                 <thead>
                    <tr>
                     <th>被保险人保单年度初年龄</th>
                     <th>账户价值比例</th>
                    </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>未满18周岁</td>
                     <td>100%</td>
                      
                   </tr>
                   <tr>
                     <td>已满18周岁但未满41周岁</td>
                     <td>160%</td>
                      
                   </tr>
                   <tr>
                     <td>已满41周岁但未满61周岁</td>
                     <td>140%</td>
                      
                   </tr>
                   <tr>
                     <td>已满61周岁</td>
                     <td>120%</td>
                      
                   </tr>
                 </tbody>
               </table>
               <label>*被保险人保单年度初年龄，指保单年度第一日被保险人当时的年龄。</label>
            </div>    
    )
  }
}