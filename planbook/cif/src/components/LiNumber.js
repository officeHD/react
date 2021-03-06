import React from 'react'
import ItemTitle from './ItemTitle'
import style from './asset/css/index.less'
const OutPut = ({theme, value, item, onChangeText, onCheckBlur}) => (
  <li>
    <label>{theme}</label>
    <input type="number" placeholder="请输入" value={value} onChange={e => onChangeText(item, (e.target.value).trim() === '' ? '' :  (e.target.value).trim() - 0)}/>
  </li>
  
      
)

export default OutPut