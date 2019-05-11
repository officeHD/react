import React from 'react'
import style from './public.less'
import { Icon } from 'antd-mobile';

const Out = ({show, onToggleShow}) => (
    
  <div onClick={onToggleShow} className={style.show_controller}>
    <Icon type={require(`../asset/svg/${show ? 'up' : 'down'}.svg`)}/>
  </div>

)

export default Out