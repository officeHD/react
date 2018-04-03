import React, {Component} from 'react'
import style from '../asset/css/index.less'
import { Icon } from 'antd-mobile';


export default class Out extends Component {
  
    render(){ 
      return (
        <div className={style.definition}>
          <p className={style.all}>
            1、周岁是以法定身份证明文件中记载的出生日期为基础计算的实足年龄。<br />
            2、意外伤害是指以外来的、突发的、非本意的、非疾病的客观事件为直接且单独的原因致使身体受到的伤害。自然死亡、疾病身故、猝死、自杀以及自伤均不属于意外伤害。<br />
            3、《人身保险伤残评定标准》是指中国保险行业协会发布的人身保险伤残程度评定与保险金给付比例标准，详见《关于印发 人身保险伤残评定标准 的通知》（中保协发【2013】88号）。
          </p>
        </div>
      )
    }
}