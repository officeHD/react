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
              <td>意外身故 </td>
              <td>10万</td> 
            </tr>

            <tr> 
              <td>意外残疾、烧烫伤</td>
              <td>6万</td> 
            </tr>
            <tr> 
              <td>全残失能补偿金</td>
              <td>22500元</td> 
            </tr>
            <tr>
              <td>意外伤害医疗费用<br/><span className={style.tips}>免赔额100元，给付比例80%</span></td>
              <td>2000元</td>
            </tr>
            <tr>
              <td>意外医疗住院补贴<br/><span className={style.tips}>每天补贴30元，累计补贴100天</span> </td>
              <td>3000元</td>
            </tr>
          </tbody>
        </table>
      </div> 
    )
  }
}