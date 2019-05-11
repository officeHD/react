//客服组件
import React from 'react';
import style from './public.less'
import { Icon } from 'antd-mobile';
const Service = ({ service, staffmes, onchangeShow }) => {
  return (
    <div className={style.main_posiiton} style={{ zIndex: 10 }}>
      <div className={service ? style.base : `${style.rotate} ${style.base}`} style={{ zIndex: 10 }}>
        <a className={style.contr_com} href={`${ctx}/wechat/index`}>
          <Icon type={require(`../asset/svg/company.svg`)} />  <br /> 民盛
        </a>
        <a className={style.contr_user} href={`${ctx}/usercard?workNum=${staffmes.workNum}`}>
          <Icon type={require(`../asset/svg/avatar.svg`)} /> <br /> 介绍
        </a>
        <a className={style.contr_tel} href={`tel:${staffmes.phoneNum}`}>
          <Icon type={require(`../asset/svg/tel.svg`)} />  <br /> 电话
        </a>
        <div className={style.mainbase} style={{ zIndex: 12 }}>
        </div>
      </div>
      <div
        onClick={(e) => { onchangeShow() }}
        className={service ? style.center : `${style.top} ${style.center}`}
        style={{ zIndex: 14 }}>
        <Icon type={require(`../asset/svg/server.svg`)} />
      </div>
    </div>
  )
}

export default Service



