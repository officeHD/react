import React from 'react'
import ItemTitle from './ItemTitle'
import data from '../reducers/data.json'
import style from './asset/css/index.less'
const OutPut = ({theme, value, item, onChangeText}) => (
  <li>
    <label>{theme}</label>
    <p className={style.radio_selector}>
      <span onClick={e => onChangeText(item, 0)}><img src={value === 0 ? ctx + '/static/img/carInf/radio_on.png' : ctx + '/static/img/carInf/radio_off.png'} />{data[item][0]}</span>
      <span onClick={e => onChangeText(item, 1)}><img src={value === 1 ? ctx + '/static/img/carInf/radio_on.png' : ctx + '/static/img/carInf/radio_off.png'} />{data[item][1]}</span>
    </p>
  </li>  
)

export default OutPut