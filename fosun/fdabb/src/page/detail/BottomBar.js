import React from 'react'
import style from './index.less'
import { Link } from 'react-router'

const Banner = ({staff}) => (
	<div className={style.bottom_btn}>
        <ul className={style.fixedBottom} > 
            {
                staff.origin==="ms"?<li className={style.share} onClick={e=>share(staff.workNum)}>分享客户</li>:""
            }
            
            <li><Link to="computed">立即投保</Link></li>
             
        </ul>
    </div>
)
export default Banner