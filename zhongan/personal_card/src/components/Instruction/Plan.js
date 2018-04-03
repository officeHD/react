import React from 'react'
import SubTitle from './SubTitle'
import Condition from './Condition'
import Plans from './Plans'
import style from '../asset/css/index.less' 


const Instruction = ({onGoToStep}) => (

    <div>
      <SubTitle icon="bao" title="您的保障"/>
        <div className={style.detail_titles}>
          <span>保障责任</span>
          <span>保险金额</span>
        </div>
         <div className={style.detail}>
            <Plans title="意外身故/残疾" tip="10万元" more="在保险期间内，被保险人遭受意外伤害，并自意外伤害发生之日起180日内因为该意外伤害导致其身故或残疾的，保险人依照约定给付保险金，且给付各项保险金之和不超过保险金额。一次或累计给付的保险金达到保险金额时，保险人对被保险人的保险责任终止。"/>
            <Plans title="意外伤害医疗费用" 
                    tip="10000" 
                    more="在保险期间内，被保险人遭受意外伤害事故，并在事故发生之日起180日内在医院进行治疗的，对于被保险人支出的符合当地社会基本医疗保险规定的、必需且合理的医疗费用，保险人进行赔偿。"/>
            <Plans  title="意外事故住院津贴" 
                    tip="100/天，最多180天" 
                    more="在保险期间内，被保险人遭意外伤害（事故，并因该次意外伤害事故在中华人民共和国（不包括香港、澳门、台湾地区）二级及以上医院或保险人认可的医疗机构经医生诊断必须住院治疗的，保险人根据本合同约定的每日住院津贴额，按照被保险人每次的实际住院天数减去免赔天数后给付住院津贴。"/>
        </div>

      <SubTitle icon="condition" title="投保条件"/>
      <Condition />
      
    </div>
)

export default Instruction