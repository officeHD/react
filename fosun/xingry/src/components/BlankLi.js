import React from 'react';
import style from './asset/css/index.less'

const BlankLi = ({children, item,onClick,extra}) => (
  <div className={style.blank_li} onClick={onClick}>
    <label>{item}</label>
    {extra?extra:children} 
  </div>
)

export default BlankLi