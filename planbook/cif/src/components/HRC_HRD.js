import React from 'react'
import LiStatic from './LiStatic'
import LiClick from './LiClick'
import LiRadio from './LiRadio'
import style from './asset/css/index.less'
const OutPut = ({isShow, str, fee, C_D, isFirst, hasSocialSecu, index, onShowPlanSele, onChangeText}) => {
  if (!isShow) {
    return null
  }

  return (
    <ul className={style.blank_ul}>
      <li><label>HR{C_D}，<span className={style.small}>中荷附加住院费用医疗保险{C_D}款</span></label></li>
      <LiRadio theme="社保/新农合" value={hasSocialSecu} item="hasSocialSecu" onChangeText={onChangeText} />
      <LiRadio theme="首次投保" value={isFirst} item="isFirst" onChangeText={onChangeText} />
      <LiClick theme="投保计划" value={str} onClickHandle={e => onShowPlanSele(index)} />
      <LiStatic theme="附加保费(元)" value={fee} />
    </ul>    
  )
}

export default OutPut