import React from 'react'
import style from '../asset/css/Introduce.less'
import { Icon } from 'antd-mobile';

const Footer = ({icon, title}) => (
    
  <div className={style.footer}>
    <Icon type={require(`../asset/svg/c_left.svg`)}/>
    用心服务每一位
    <Icon type={require(`../asset/svg/c_right.svg`)}/>
  </div>
)

export default Footer