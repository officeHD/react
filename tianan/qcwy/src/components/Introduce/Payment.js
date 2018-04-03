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
                  <th rowSpan="2">保障范围</th>
                  <th colSpan="2">保障额度</th>
                  <th colSpan="2">保费</th>
              </tr>
              <tr>
                  <th>省心版</th>
                  <th>安心版</th>
                  <th>省心版</th>
                  <th>安心版</th>
              </tr>
          </thead>
          <tbody>
              <tr>
               <td>意外身故残疾</td>
               <td>5万</td>
               <td>10万</td>
               <td></td>
               <td></td>
                
              </tr>
              <tr>
               <td>意外门诊医疗</td>
               <td>0.5万</td>
               <td>0.8万</td>
               <td>3-6周岁<br/>180/年</td>
                <td>3-6周岁<br/>260/年</td>
                
              </tr>
              <tr>
               <td>住院医疗</td>
               <td>5万</td>
               <td>8万</td>
               <td></td>
               <td></td>
                
              </tr>
              <tr>
               <td>疾病身故 </td>
                <td>3万</td>
               <td>6万</td>
               <td></td>
               <td></td>
                
              </tr>
               <tr>
               <td>第三者身故残疾 </td>
                <td> </td>
               <td>5万</td>
               <td rowSpan="2">7-20周岁<br/>160/年</td>
               <td rowSpan="2">7-20周岁<br/>200/年</td>
                
              </tr>
               <tr>
               <td>第三者医疗 </td>
                <td> </td>
               <td>1万</td>
               
                
              </tr>
               <tr>
               <td>第三者财产损失 </td>
                <td> </td>
               <td>5万</td>
               <td></td>
               <td></td>
                
              </tr>
          </tbody>
        </table>
      </div> 
    )
  }
}