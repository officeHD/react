import React from 'react'
import style from './asset/css/index.less'

const ClickDiv = ({val, isOpen, onClickHandler}) => (
  <div className={style.click_div + ' ' +  (isOpen ? style.open : '')} onClick={onClickHandler}>
    {val === '' || val === undefined || val === null ? <span>请选择</span> : val}
  </div>
)

export default ClickDiv