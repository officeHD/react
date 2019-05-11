import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({ orderNo,varietyData }) => {
  
  return (
    <div className={style.orderdetail}>
      <label>订单概况</label>
      <ul>
        <li><span className={style.title}>主险：</span>{varietyData.title}  </li>
        {varietyData.extra?<li><span className={style.title}>附加险：</span>附加投保人豁免重大疾病保险 </li>:null}
        {orderNo ? <li> <span className={style.title}>订单号：</span> {orderNo} </li> : null}
        <li> <span className={style.title}>交费期间：</span>{varietyData.payMent[0] === "趸交" ? "一次性交" : varietyData.payMent[0] + " 年"} </li>
        
        <li><span className={style.title}>保险额度：</span>{varietyData.amnt} 万元 </li>
        <li><span className={style.title}>保费：</span><span className={style.red}>{varietyData.fee} 元</span> </li>
      </ul>
    </div>
  )
}

export default OutPut