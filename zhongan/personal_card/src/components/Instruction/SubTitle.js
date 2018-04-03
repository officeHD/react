import React from 'react'
import style from '../asset/css/index.less'
import { Icon } from 'antd-mobile';

const SubTitle = ({icon, title}) => (
    
  <div className={style.sub_title}>
    <Icon type={require(`../asset/svg/${icon}.svg`)}/>
    {title}
  </div>
)

export default SubTitle