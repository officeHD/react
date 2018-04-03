import React from 'react'
import style from './asset/css/index.less'

const OutPut = ({ title, rate, responsibility, sum, deductible, d_sum}) => (
  <div className={style.insure_item_card}>
    <table className={style.top}>
      <tbody>
        <tr>
          <td><span className={style.big}>{title}</span><span className={style.item}>保障项目</span></td>
          <td><span className={style.gray}>赔付比例</span><span className={style.red}>{rate}%</span></td>
        </tr>
      </tbody>
    </table>
    <table className={style.main}>
      <tbody>
        <tr className={style.title}>
          <td>保障责任</td>
          <td>保障金额/人（元）</td>
        </tr>
        <tr>
          <td>{responsibility}</td>
          <td>{sum}</td>
        </tr>
        {d_sum ? 
        <tr className={style.title}>
          <td>次免赔{deductible}</td>
          <td></td>
        </tr>
        : null}
        {d_sum ? 
        <tr>
          <td>{d_sum}</td>
          <td></td>
        </tr>
        : null}
      </tbody>
    </table>
  </div>
)

export default OutPut