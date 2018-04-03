import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/introduce.less'

export default class Out extends Component{
  render() {
    return(
<div className={style.table}>
         <table>
           <thead>
              <tr>
               <th>保障范围</th>
               <th>保额</th>
              </tr>
           </thead>
           <tbody>
             <tr>
               <td>满期保险金</td>
               <td>1.05倍保险费</td>
                
             </tr>
             <tr>
               <td>25种少儿常见重大疾病保险金</td>
               <td>20倍保额</td>
                
             </tr>
             <tr>
               <td>身故/全残保险金 </td>
               <td>10倍保额</td>
             </tr>
           </tbody>
         </table>
      </div>    )
  }
}