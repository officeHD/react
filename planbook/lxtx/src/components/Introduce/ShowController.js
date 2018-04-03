import React from 'react'
import style from '../asset/css/Introduce.less'
import { Icon } from 'antd-mobile';

const Out = ({show}) => (
    
  <span className={style.show_controller}>
    <Icon type={require(`../asset/svg/${show ? 'up' : 'down'}.svg`)}/>
  </span>

)

export default Out