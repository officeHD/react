import React from 'react'

const HandlerButtons = ({purchaseWay, car, productId, showParameter, onEnterpriseBuy, onPersonBuy}) => (
    
  <div className={showParameter? "hide" : "handler_buttons "}>
    <button className='blue' onClick={e => onEnterpriseBuy(purchaseWay, car, productId)} >企业{purchaseWay ? '购买' : '租赁'}</button>
    <button className='red' onClick={e => onPersonBuy(purchaseWay, car, productId)} >个人{purchaseWay ? '购买' : '租赁'}</button>
  </div>
)

export default HandlerButtons