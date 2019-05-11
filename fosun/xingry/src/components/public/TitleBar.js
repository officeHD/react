import React from 'react'
import { Icon } from 'antd-mobile';
import style from './public.less'

const TitleBar = ({ title, step, isEdit, staffId, onGoBack, type }) => (

	<div  >
		 {
			type=="ms" ? "":<div>
			<div className={`${style.title_bar}  `} style={{ zIndex: 10 }}>
				<Icon className={style.goBack} type={require('../asset/svg/goBack.svg')} onClick={e => onGoBack()} id="go_back" />
				<h1>{title}</h1>
			</div>
			<div className={`${style.line_bar} ${isiOS&&type!="pc" ? style.iosLine : ""}`}>
			</div>
		</div> 
		}
	</div>
)

export default TitleBar