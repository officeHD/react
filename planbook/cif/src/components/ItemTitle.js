import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({path, title}) => (
  <div className={style.item_title}>
    <img src={`${ctx}/static/img/cif/${path}.png`} />{title}
  </div>
)

export default OutPut