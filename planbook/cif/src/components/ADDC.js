import React from 'react'
import LiNumber from './LiNumber'
import LiStatic from './LiStatic'
import style from './asset/css/index.less'
const OutPut = ({isShow, coverage, fee, onChangeText }) => {
  if (!isShow) {
    return null
  }

  return (
    <ul className={style.blank_ul}>
      <li><label>ADDC，<span className={style.small}>中荷附加意外伤害保险C款</span></label></li>
      <LiNumber theme="保额(万元)" value={coverage} item="coverage" onChangeText={onChangeText} />
      <LiStatic theme="附加保费(元)" value={fee} />
    </ul>    
  )
}

export default OutPut