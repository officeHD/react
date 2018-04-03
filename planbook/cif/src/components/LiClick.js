import React from 'react'
import ItemTitle from './ItemTitle'
import data from '../reducers/data.json'
import style from './asset/css/index.less'
const OutPut = ({theme, value, onClickHandle}) => (
  <li onClick={onClickHandle}>
    <label>{theme}</label>
      <span>{value === '' || value === undefined || value === null ? <span className="grey">请选择</span> : value}</span>
      <img className={style.right_arrow} src={`${ctx}/static/img/cif/right_arrow.png`}/>
  </li>  
)

export default OutPut