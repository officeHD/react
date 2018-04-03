import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Order = ({ order, onAcceptance, onGetDetail, onGoToPay, onEdit, onDeleteOrder }) => {
  return (
    <li>
      <Link to={'/detail'}>
        <div className="order_head" onClick={e => onGetDetail(order.id, order.type)}>
          <span>订单编号：{order.insuredId}</span>
          <label className="completed">{order.stateName}</label>
        </div> 
        <div className="order_body" onClick={e => onGetDetail(order.id, order.type)}>
          <ul> 
              <li>产品：{order.packageName}</li>
              <li>保单起期：{order.effectiveDate}</li>
              <li>保单止期：{order.expiryDate}</li>
              <li>份数：{order.applyNum}</li>
              <li>下单时间：{order.orderTime }</li>
              <li>保费合计：￥{order.sumPremium }</li>
          </ul>
        </div> 
      </Link> 
      <div className="order_foot">
          {order.stateFlag === '1' || order.stateFlag === '6' ? <span><button type="button" onClick={e => {onDeleteOrder(order.id)}}>删除订单</button> <button type="button" onClick={e => {onGoToPay(order.id, order.type)}}>去支付</button></span> : null}
          {order.stateFlag === '2' ? <span><button type="button" onClick={e => {onDeleteOrder(order.id)}}>删除订单</button> <button type="button" onClick={e => {onEdit(order.id, order.type)}}>重新核保</button></span> : null}
          {order.stateFlag === '4' || order.stateFlag === '5' ? <button type="button" onClick={e => {onAcceptance(order.insuredId)}}>去承保</button> : null}
          {(order.stateFlag === '7' && (order.typeFlag === '1' || order.type === '1')) || order.stateFlag === '8' ? <button type="button" onClick={e => {onDeleteOrder(order.id)}}>删除订单</button> : null}
      </div>
  </li>
  )
}

export default Order