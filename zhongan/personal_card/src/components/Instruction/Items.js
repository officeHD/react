import React from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/index.less'
import Payment from './Payment'
import Documents from './Documents'
import Definition from './Definition'


const Instruction = () => (
    <div>
      <SubTitle icon="definition" title="核保定义"/>
      <Definition />
      
      <SubTitle icon="payment" title="理赔流程"/>
      <Payment />

      <SubTitle icon="documents" title="保险条款及须知"/>
      <Documents />
    </div>
)

export default Instruction