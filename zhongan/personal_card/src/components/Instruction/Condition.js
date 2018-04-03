import React, {Component} from 'react'
import style from '../asset/css/index.less'
import { Icon } from 'antd-mobile';


export default class Out extends Component {
  
    render(){ 
      return (
        <div className={style.definition}>
          <p className={style.all}>
          
            1、承保年龄：出生满28日至65周岁身体健康，能正常工作或正常生活的自然人；<br/>
            2、职业类别：1-4类；<br/> 详见众安保险《职业分类表》<br/> 

            3、限购份数：100元/份，每人最高购买3份；
          </p>
        </div>
      )
    }
}