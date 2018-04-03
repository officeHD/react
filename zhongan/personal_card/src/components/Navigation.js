import React from 'react';
import style from './asset/css/index.less'

const Navigation = ({step}) => (
  <div className={style.navigation}>
    <span>
      <img className={style[`step${step}`]} src={ctx + '/static/img/zhongan/car_insurance/step' + step + '.png'} />
    </span>
  </div>
)

export default Navigation