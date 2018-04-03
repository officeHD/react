import React from 'react'
import style from '../asset/css/introduce.less'
import { Icon } from 'antd-mobile';

const SubTitle = ({icon, title}) => (
    
  <div className={style.sub_title}>
  	 
  <span></span>
  	<p>{title}</p>
    <span className={style.right}></span>
    
  </div>
)

export default SubTitle