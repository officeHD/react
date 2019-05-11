import React from 'react'
import style from './asset/css/index.less'
import { Icon } from 'antd-mobile';

const Out = ({show, onToggleShow}) => (
    
  <div onClick={onToggleShow} className={style.show_controller}>
    {/* <Icon type={require(`./asset/svg/${show ? 'up' : 'down'}.svg`)}/> */}
    <span>3</span>
  </div>

)

export default Out