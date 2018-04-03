import React from 'react'

const Product = ({product, selected, onChoiceProduct}) => (
    
  <div className="product" onClick={e => onChoiceProduct(product.id)}>
    <div className="product_top">
      <table className="product_table">
        <tbody>
          <tr>
            <td><img src={`${ctx}/static/img/mscx/radio_${selected ? 'on' : 'off'}.png`} /></td>
            <td><span>期数</span><label className="orange">{product.periods}期</label></td>
            <td><span>总花费</span><label className="orange">￥{product.total}</label></td>
          </tr>
        </tbody>
      </table>
    </div>
    <table className="product_detail">
      <tbody>
        <tr>
          <td>首付比例<br/>{product.startRatio}%</td>
          <td>首付款<br/>￥{product.startPayment}</td>
          <td>尾付比例<br/>{product.endRatio}%</td>
          <td>尾付款<br/>￥{product.endPayment}</td>
          <td>月供<br/>￥{product.monthly}</td>
          <td>上路花费<br/>￥{product.onRoad}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Product