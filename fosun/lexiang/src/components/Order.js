import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({ orderNo, fee, payMent, amnt, amount }) => {
  if (amount > 0) {
    amnt = amount
  }
  return (
    <div className={style.orderdetail}>
      <label>订单概况</label>
      <ul>
        {orderNo ? <li> <span className={style.title}>订单号：</span> {orderNo} </li> : null}
        <li> <span className={style.title}>交费期间：</span>{payMent[0] === "趸交" ? "一次性交" : payMent + "年"} </li>
        <li><span className={style.title}>保险额度：</span>{amnt}元 </li>
        <li><span className={style.title}>保费：</span><span className={style.red}>{fee} 元</span> </li>
      </ul>
    </div>
  )
}

export default OutPut