import React from 'react'
import style from './asset/css/index.less'
import ShowController from './Instruction/ShowController'
import { Icon } from 'antd-mobile';

const SubTitle = ({ title, show, toggleShow, icon }) => (
  <div className={style.subtitle}>
    {icon ? <Icon type={require(`./asset/svg/${icon}.svg`)} /> : null}
    {title}
    <ShowController show={show} onToggleShow={toggleShow} />
  </div>
)

export default SubTitle