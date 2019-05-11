//宜家年金险
import React, { Component } from 'react'
import style from './astyle.less' 
import LazyLoad from 'react-lazyload';

export default class Instruction extends Component {
  render() {
    return (
      <div className={style.detail} style={{ position: "relative",margin:"15px 0" }}>
        <LazyLoad >
          <img src={require('../asset/img/plan/01.jpg')} />
          
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/02.jpg')} />
          
        </LazyLoad>
       
        <LazyLoad >
          <img src={require('../asset/img/plan/04.png')} />
          
        </LazyLoad>
        <table>
          <thead>
            <tr>
              <th>保险责任</th>
              <th>基本保险金</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>重大疾病</td>
              <td>
                分六组，每组限赔一次。第一次，基本保险金额、已交保险费、现金价值的较大者，第二次至第六次分别为基本保额的105%、110%、130%、150%、170%
              </td>
            </tr>
            <tr>
              <td>中症疾病</td>
              <td>
                最多赔付2次，均为基本保额的50%
              </td>
            </tr>
            <tr>
              <td>轻症疾病</td>
              <td>
                 最多赔付5次，第1-5次分别为基本保额的30%、35%、40%、45%、50%
              </td>
            </tr>
            <tr>
              <td>身故/全残</td>
              <td>
                18周岁生日当日24时之前，按保险实际交纳的保险费的200% 给付<br/>
                满18周岁生日当日24小时后基本保险金额、已交保险费、现金价值的较大值给付
              </td>
            </tr>
            <tr>
              <td>疾病终末期</td>
              <td>
                同身故/全残给付标准
              </td>
            </tr>
            <tr>
              <td>住院关爱津贴</td>
              <td>
                基本保险金额的0.1%乘实际住院天数
              </td>
            </tr>
            <tr>
              <td>投保人豁免</td>
              <td>
                 重大疾病、轻症疾病、中症疾病
              </td>
            </tr>
          </tbody>
        </table>
        <LazyLoad >
          <img src={require('../asset/img/plan/05.jpg')} /> 
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/06.jpg')} /> 
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/07.jpg')} />
        </LazyLoad>
      </div>
    )
  }
}