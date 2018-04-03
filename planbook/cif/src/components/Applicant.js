import React from 'react'
import ItemTitle from './ItemTitle'
import LiNumber from './LiNumber'
import LiText from './LiText'
import LiRadio from './LiRadio'
import LiClick from './LiClick'
import style from './asset/css/index.less'
const OutPut = ({applicant, onChangeText, onShowIndustryCategory}) => (
  <div className={style.applicant}>
    <ItemTitle path="applicant" title="投保人信息"/>
    <span className={applicant.asInsured ? `${style.asInsured} ${style.selected}` : style.asInsured} onClick={e => onChangeText('asInsured', !applicant.asInsured)}>同被保人</span>
    <ul className={applicant.asInsured ? style.hide  : style.blank_ul}>
      <LiText theme="姓名" value={applicant.name} item="name" onChangeText={onChangeText} />
      <LiRadio theme="性别" value={applicant.sex} item="sex" onChangeText={onChangeText} />
      <LiNumber theme="年龄" value={applicant.age} item="age" onChangeText={onChangeText} />
      <LiClick theme="职业类别" value={applicant.work} onClickHandle={onShowIndustryCategory} />
      <LiRadio theme="是被保人的父母" value={applicant.isParent} item="isParent" onChangeText={onChangeText} />
    </ul>
  </div>
)

export default OutPut