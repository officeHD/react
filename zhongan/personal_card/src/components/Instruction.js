import React from 'react'
import TitleBarInstructionContainer from '../containers/TitleBarInstructionContainer'
import SubTitle from './SubTitle'
import { Link } from 'react-router'
import style from './asset/css/index.less'

const Instruction = ({onGoToStep}) => (
  <div>
    <TitleBarInstructionContainer />
    <img className={style.top_img} src={ctx + '/static/img/zhongan/personal_info/instruction.png'}/>
    <SubTitle title="保险计划" />
    <table className={style.product_plan}>
      <thead>
        <tr>
          <th>保障责任</th>
          <th>保险金额</th>
          <th>保障说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>意外身故残疾</td>
          <td>10万</td>
          <td></td>
        </tr>
        <tr>
          <td>意外医疗费用</td>
          <td>1万</td>
          <td>门急诊+住院<br/>免赔额100元/次<br/>100%赔付</td>
        </tr>
        <tr>
          <td>意外医疗住院津贴</td>
          <td>50/天</td>
          <td>无免赔天数<br/>最多180天</td>
        </tr>
      </tbody>
    </table>
    <SubTitle title="投保条件" />
    <div className={style.blank}>
      1、承保年龄：出生满28日至65周岁身体健康人群；<br/>
      2、职业类别：1-4类；<br/>
      3、限购份数：每人最高购买3份。
    </div>
    <Link to={'/step1'}><button className={style.bottom_btn} onClick={onGoToStep}>购买该产品</button></Link>
  </div>
)

export default Instruction