import React from 'react'
import ItemTitle from './ItemTitle'
import LiText from './LiText'
import LiNumber from './LiNumber'
import LiRadio from './LiRadio'
import LiClick from './LiClick'
import style from './asset/css/index.less'
const OutPut = ({insured, onChangeText, onShowIndustryCategory}) => (
  <div className="insured">
    <ItemTitle path="insured" title="被保人信息"/>
    <ul className={style.blank_ul}>
      <LiText theme="姓名" value={insured.name} item="name" onChangeText={onChangeText} />
      <LiRadio theme="性别" value={insured.sex} item="sex" onChangeText={onChangeText} />
      <LiNumber theme="年龄" value={insured.age} item="age" onChangeText={onChangeText} />
      <LiClick theme="职业类别" value={insured.work} onClickHandle={onShowIndustryCategory} />
    </ul>
  </div>
)

export default OutPut