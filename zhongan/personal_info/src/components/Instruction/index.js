import React from 'react'
import TitleBarInstructionContainer from '../../containers/TitleBarInstructionContainer'
import Tab from './Tab'
import Footer from './Footer'
import { Link } from 'react-router'
import style from '../asset/css/index.less'


const Instruction = ({onShare,onGoToStep,staffId,type}) => (
  <div>
    <TitleBarInstructionContainer />
    <img className={style.top_img} src={require('../asset/img/instruction.png')}/>
    <div className={style.words}><p>个人综合意外险</p><span>意外风险全保障 最高保额超过百万</span></div>
    <Tab />
    <Footer />
    <ul className={type?style.bottom_b:style.bottom_btns } >
      <li>价格：￥100</li>
      {type? <li className={staffId?style.share:style.default} onClick={onShare}>发给客户</li>:''}
     
      <li onClick={onGoToStep} className={staffId?style.normal:style.default}> {staffId?"立即投保":"备案中"}  </li>
    </ul>
  </div>
)

export default Instruction