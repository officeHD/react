import React from 'react'
import ItemTitle from './ItemTitle'
import data from '../reducers/data.json'
import style from './asset/css/index.less'
const OutPut = ({theme, value}) => (
  <li>
    <label>{theme}</label>
      {value}
  </li>  
)

export default OutPut