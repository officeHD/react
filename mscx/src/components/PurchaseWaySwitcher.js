import React from 'react'

const PurchaseWaySwitcher = ({purchaseWay, car, onChoice0, onChoice1}) => (
    
  <div className="purchase_way_switcher">
    <button className={purchaseWay === 0 ? 'selected' : ''} onClick={onChoice0}>纯租赁</button>
    {car.type === 1 ? <button className={purchaseWay === 1 ? 'selected' : ''} onClick={onChoice1}>以租代购</button> : null}
  </div>
)
 
export default PurchaseWaySwitcher