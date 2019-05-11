import React from 'react'
// import { Icon } from 'antd-mobile';
import style from './asset/css/index.less'

const onGoBack=()=>{
    history.go(-1)
}

const TitleBar = ({ title,  type, ismain }) =>{
    if(type == 'ms' ){
        return null;
    }
    return (

        <div className={style.line_bar}>
            <div className={style.title_bar}>
                {!ismain ? 
                <button onClick={onGoBack}></button>   : ""} 
                <h1>{title}</h1>
            </div>
             
        </div>
    )
}

export default TitleBar