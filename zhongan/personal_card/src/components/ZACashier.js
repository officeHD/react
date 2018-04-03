import React from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import style from './asset/css/index.less'

const OutPut = ({ insuredId, url, applyNum}) => {

  return (
    <li className={style.cashier_li}>
      <p>
        <label>订单编号：</label>
        {insuredId}
      </p>
      <p>
        <label>商品名称：</label>
        个人综合意外险
      </p>
      <p>
        <label>商品单价：</label>
        100.00
      </p>
      <p>
        <label>购买份数：</label>
        {applyNum} 份
      </p>
      <a href={url}>
          <button className={style.next_btn}>去支付</button>
        </a>
    </li>
  )
}

export default OutPut