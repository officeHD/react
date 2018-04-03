import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({ isShow, list, index, target, onSelect, onClose}) => {
  if (!isShow) {
    return null
  }

  return (
    <div className={style.selector} onClick={onClose}>
      <ul>
        {list.map((option, i) => 
          <li key={i} onClick={e => onSelect(target, i)}>{option}<img src={ctx + '/static/img/carInf/radio_' + (i === index ? 'on' : 'off') + '.png'} /></li> 
        )}
      </ul>
    </div>
  )
}

export default OutPut