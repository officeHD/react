import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({title, onGoBack,type}) => (
	<div className={type?'hide':''}>
  		<div className={style.title_bar}>
    		<button className={style.go_back} type="button" onClick={onGoBack}> </button>
    		<h1>{title}</h1>
  		</div>
  		<div className={style.line_bar}>
        </div>
    </div>
)

export default OutPut