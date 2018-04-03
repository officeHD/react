import React from 'react'
import ItemTitle from './ItemTitle'
import LiNumber from './LiNumber'
import LiRadio from './LiRadio'
import LiStatic from './LiStatic'
import style from './asset/css/index.less'
const OutPut = ({ onGenerate }) => (
  <button type="button" className={style.generateBtn} onClick={onGenerate}>生成计划书演示</button>
)

export default OutPut