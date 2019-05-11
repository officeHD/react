import React from 'react'
import style from './public.less'
import { Icon } from 'antd-mobile';

const Footer = () => (
  <div className={style.footer}>
    <Icon type={require(`../asset/svg/c_left.svg`)} />
    用心服务每一位
    <Icon type={require(`../asset/svg/c_right.svg`)} />
  </div>
)

export default Footer