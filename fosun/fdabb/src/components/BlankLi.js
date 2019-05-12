import React from 'react';
import style from './asset/css/index.less'

const BlankLi = ({children, title,extra,onClick=null}) => (
  <div className={style.blank_li} onClick={onClick}>
    <label className={style.left}>{title}</label>
    <div className={style.right}>{extra?extra:children}</div>
  </div>
)

export default BlankLi