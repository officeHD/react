import React from 'react'
import style from './asset/css/index.less'

 
const RadioSelect = ({ current,  list, radioClick }) =>{ 
    return ( 
        <div className={style.radioSelect}>
            {
                list.map((item)=>{
                    return <span key={item.value} className={`${item.value==current?style.active:""} ${style.radioLi}`} onClick={e=>radioClick(item.value)}>{item.name}</span>
                })
            }
        </div>
    )
}

export default RadioSelect