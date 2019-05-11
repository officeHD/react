import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import HolderContainer from '../containers/HolderContainer'
import InsuPlanContainer from '../containers/InsuPlanContainer'
import InsurantContainer from '../containers/InsurantContainer'
import BeneficiaryContainer from '../containers/BeneficiaryContainer'
import AttentionContainer from '../containers/AttentionContainer'
import SelectorContainer from '../containers/SelectorContainer'
import OccupationContainer from '../containers/OccupationContainer'
import LoadingContainer from '../containers/LoadingContainer'
import style from './asset/css/index.less'
import Footer from './public/Footer'

const Step1 = ({ fee, onGoToStep }) => (
  <div className={style.pbottom}>
    <TitleBarStepContainer />
    <InsurantContainer /> 
    <HolderContainer />
    <InsuPlanContainer />
    <BeneficiaryContainer />
    <AttentionContainer />
    <Footer /> 
    <ul className={style.bottom_btns} >
      <li> {fee} 元</li>
      <li onClick={onGoToStep} className={style.normal}> 下一步 </li>
    </ul>
    <SelectorContainer />
    <OccupationContainer />
    <LoadingContainer />
  </div>
)
export default Step1