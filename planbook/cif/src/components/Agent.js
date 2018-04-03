import React from 'react'
import ItemTitle from './ItemTitle'
import LiText from './LiText'
import style from './asset/css/index.less'
const OutPut = ({agent, onChangeText}) => (
  <div className={style.agent}>
    <ItemTitle path="agent" title="代理人信息"/>
    <ul className={style.blank_ul}>
      <LiText theme="名称" value={agent.name} item="name" onChangeText={onChangeText} />
      <LiText theme="联系电话" value={agent.phone} item="phone" onChangeText={onChangeText} />
    </ul>
  </div>
)

export default OutPut