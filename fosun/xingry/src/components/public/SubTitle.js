import React from 'react'
import style from './public.less'
import ShowController from './ShowController'
import { Icon } from 'antd-mobile';

const SubTitle = ({title,show,toggleShow,icon}) => (
    
  <div className={style.subtitle}>
    {icon?<Icon type={require(`../asset/svg/${icon}.svg`)} />:null}
    {title}
    {toggleShow?<ShowController  show={show} onToggleShow={toggleShow}/>:null}
    
  </div>
)

export default SubTitle