import React from 'react';
import style from './asset/css/index.less'

const BlankLi = ({children, item}) => (
  <li className={style.blank_li}>
    <label>{item}</label>
    {children}
  </li>
)

export default BlankLi