import React from 'react'
import style from './asset/css/index.less'

const OutPut = ({ showLiSelector, liSelectorOptions, liSelectorSelected, liSelectorTarget, onSelect, onClose}) => {
  if (!showLiSelector) {
    return null
  }

  return (
    <div className={style.li_selector} onClick={onClose}>
      <ul>
        {liSelectorOptions.map((option, index) => 
          <li 
            key={index} 
            className={liSelectorSelected === option[liSelectorTarget + 'Name'] ? {style.selected} : ''} 
            onClick={e => onSelect(liSelectorTarget, option[liSelectorTarget + 'Name'], option[liSelectorTarget + 'No'])}>
            {option[liSelectorTarget + 'Name']}
          </li> 
        )}
      </ul>
    </div>
  )
}

export default OutPut