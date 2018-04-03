import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import InsurantContainer from '../containers/InsurantContainer'
import HolderContainer from '../containers/HolderContainer'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import ProductContainer from '../containers/ProductContainer'
import LoadingContainer from '../containers/LoadingContainer'
import Navigation from './Navigation'
import SubTitle from './SubTitle'
import style from './asset/css/index.less'

const OutPut = ({step, onGoToStep}) => (
  <div>
    <TitleBarStepContainer />
    <Navigation step={step}/>

    <SubTitle title="投保产品信息" />
    <ProductContainer />

    <SubTitle title="投保人信息" />
    <HolderContainer />
    
    <SubTitle title="被保对象信息" />
    
    <RelationTypeContainer />

    <InsurantContainer />
    
    <button className={style.next_btn} onClick={onGoToStep}>下一步</button>

    <LoadingContainer />


  </div>
)

export default OutPut