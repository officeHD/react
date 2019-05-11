import React from 'react'
import style from './asset/css/index.less'

const RadioSelector = ({ a, b, selected, onSelect, disabled, parmas }) => (
  <ul className={style.radio_selector}>
    <li onClick={e => onSelect(0, disabled, parmas)}><img src={require(!(selected-0) ? './asset/img/anxinli/radio_on.png' : './asset/img/anxinli/radio_off.png')} />{a}</li>
    <li onClick={e => onSelect(1, disabled, parmas)}><img src={require((selected-0) ? './asset/img/anxinli/radio_on.png' : './asset/img/anxinli/radio_off.png')} />{b}</li>
  </ul>
)
export default RadioSelector