import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import InsurantContainer from '../containers/InsurantContainer'
import NumContainer from '../containers/NumContainer'
import SelectorContainer from '../containers/SelectorContainer'
import OccupationContainer from '../containers/OccupationContainer'
import LoadingContainer from '../containers/LoadingContainer'
import Navigation from './Navigation'
import SubTitle from './SubTitle'
import InsureItemCard from './InsureItemCard'
import { Link } from 'react-router'
import style from './asset/css/index.less'


const OutPut = ({step, onGoToStep}) => (
  <div>
    <TitleBarStepContainer />
    <Navigation step={step}/>

    <SubTitle title="被保人信息" />

    <RelationTypeContainer />

    <InsurantContainer />

    <SubTitle title="保障责任信息" />

    <NumContainer />

    <InsureItemCard title="意外伤害险" rate="100" responsibility="人身意外身故残疾" sum="100,000" deductible="" d_sum=""/>

    <InsureItemCard title="意外伤害医疗费用保险" rate="100" responsibility="意外医疗费用" sum="10,000" deductible="额（元）" d_sum="100"/>

    <InsureItemCard title="团体住院津贴保险" rate="100" responsibility="意外住院津贴" sum="50" deductible="天数（天）" d_sum="无（最多180天）"/>

    <button className={style.next_btn} onClick={onGoToStep}>下一步</button>

    <SelectorContainer />

    <OccupationContainer />

    <LoadingContainer />

  </div>
)

export default OutPut