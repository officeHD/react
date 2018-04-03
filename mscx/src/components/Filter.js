import React from 'react'

const Filter = ({showPriceRange, showBrandRange, onShowPrices, onShowBrands}) => (
  <ul className="filter">
    <li className={showPriceRange ? 'selected' : ''} onClick={onShowPrices}>价格区间</li>
    <li className="split"></li>
    <li className={showBrandRange ? 'selected' : ''} onClick={onShowBrands}>品牌选择</li>
  </ul>
)

export default Filter