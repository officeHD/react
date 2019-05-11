import React from 'react';
import style from './asset/css/index.less'

const BlankLi = ({children, title}) => (
  <div className={style.blank_li}>
    <label className={style.left}>{title}</label>
    <div className={style.right}>{children}</div>
  </div>
)

export default BlankLi