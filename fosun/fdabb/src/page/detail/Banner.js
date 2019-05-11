import React from 'react'
import style from './index.less'

const Banner = ({code}) => (
	<div className={style.banner}>
	  	<img className={style.top_img} src={require(`../../components/asset/img/banner/${code}.jpg`)} />
        {/* <div className={style.words}>本产品由大地保险承保并负责理赔<img className={style.logo} src={require('../../components/asset/img/logo.png')} /></div>  */}
    </div>
)
export default Banner