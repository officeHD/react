import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import HolderContainer from '../containers/HolderContainer'
import SelectorContainer from '../containers/SelectorContainer'
import ProductContainer from '../containers/ProductContainer'
import Navigation from './Navigation'
import SubTitle from './SubTitle'
import { Link } from 'react-router'
import style from './asset/css/index.less'


const Step1 = ({step, onGoToStep}) => (
  <div>
    <TitleBarStepContainer />
    <Navigation step={step}/>

    <ProductContainer />

    <SubTitle title="投保人信息" />

    <HolderContainer />

    <button className={style.next_btn} onClick={onGoToStep}>下一步</button>

    <SelectorContainer />

  </div>
)

export default Step1