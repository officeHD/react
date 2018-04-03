import React from 'react'
import LiRadio from './LiRadio'
import LiStatic from './LiStatic'
import style from './asset/css/index.less'
const OutPut = ({isShow, isBuy, fee, onChangeText }) => {
  if (!isShow) {
    return null
  }

  return (
    <ul className={style.blank_ul}>
      <li><label>WPA，<span className={style.small}>中荷附加亲子型保险费豁免失能收入损失保险</span></label></li>
      <LiRadio theme="是否投保" value={isBuy} item="isBuy" onChangeText={onChangeText} />
      <LiStatic theme="附加保费(元)" value={fee} />
    </ul>    
  )
}

export default OutPut