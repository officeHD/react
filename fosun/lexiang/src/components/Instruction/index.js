import React from 'react'
import TitleBarInstructionContainer from '../../containers/TitleBarInstructionContainer'
import PlanContainer from '../../containers/PlanContainer'
import OccupationContainer from '../../containers/OccupationContainer'
import LoadingContainer from '../../containers/LoadingContainer'

import FooterBar from './FooterBar'
import Footer from '../public/Footer'
import style from '../asset/css/index.less'
import ServiceContainer from '../../containers/ServiceContainer'

const Instruction = ({ edit, staffId, type, varietyCode, prem, onGoToStep, onShare }) => (
  <div className={style.pbottom}>
    <TitleBarInstructionContainer />
    <PlanContainer />
    <FooterBar varietyCode={varietyCode} />
    <Footer />
    <ul className={style.bottom_btns}   >
      <li>保费：￥{prem}</li>
      {type=='ms'||type=='tr' ? <li className={style.normal} onClick={e => onShare(staffId)}>发给客户</li> :
        <li onClick={e => onGoToStep(staffId)} className={staffId ? style.normal : style.default}> {staffId ? "立即投保" : "未登录"}  </li>
      }
    </ul>
    <ServiceContainer />
    <OccupationContainer />
    <LoadingContainer />
  </div>
)

export default Instruction