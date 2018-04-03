import React from 'react'
import style from './asset/css/index.less'

const RadioSelector = ({a, b, selected, onSelect}) => (
  <ul className={style.radio_selector}>
    <li onClick={e => onSelect(0)}><img src={selected === 0 ? ctx + '/static/img/carInf/radio_on.png' : ctx + '/static/img/carInf/radio_off.png'} />{a}</li>
    <li onClick={e => onSelect(1)}><img src={selected === 1 ? ctx + '/static/img/carInf/radio_on.png' : ctx + '/static/img/carInf/radio_off.png'} />{b}</li>
  </ul>
)

export default RadioSelector