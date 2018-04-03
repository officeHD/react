import React from 'react'
import style from '../asset/css/introduce.less'
import { Icon } from 'antd-mobile';

const SubTitle = ({icon, title}) => (
    
  <div className={style.sub_title}>
  	 
  	<p>{title}</p>
    
  </div>
)

export default SubTitle