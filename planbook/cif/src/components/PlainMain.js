import React from 'react'
import ItemTitle from './ItemTitle'
import LiNumber from './LiNumber'
import LiRadio from './LiRadio'
import LiStatic from './LiStatic'
import style from './asset/css/index.less'
const OutPut = ({plainMain, onChangeText}) => (
  <div className={style.plainMain}>
    <ItemTitle path="plainMain" title="主险投保计划"/>
    <ul className={style.blank_ul}>
      <LiRadio theme="缴费期限" value={plainMain.year} item="year" onChangeText={onChangeText} />
      <LiNumber theme="保额(万元)" value={plainMain.coverage} item="coverage" onChangeText={onChangeText}/>
      <LiStatic theme="年交保费(元)" value={plainMain.fee} />
    </ul>
  </div>
)

export default OutPut