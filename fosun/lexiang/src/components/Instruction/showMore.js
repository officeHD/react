import React from 'react'
import style from '../astyle.less'
import { Icon } from 'antd-mobile';

const Out = ({ show, onToggleShow }) => (

  <div onClick={onToggleShow} className={style.show_more}>
    {show ? '收起' : '查看详情'}<Icon type={require(`../asset/svg/${show ? 'up' : 'down'}.svg`)} />
  </div>

)

export default Out