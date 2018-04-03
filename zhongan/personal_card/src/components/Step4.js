import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import OrderContainer from '../containers/OrderContainer'
import CardsContainer from '../containers/CardsContainer'
import Navigation from './Navigation'
import ZACashier from './ZACashier'
import BlankLi from './BlankLi'
import ClickDiv from './ClickDiv'
import LoadingContainer from '../containers/LoadingContainer'
import { Link } from 'react-router'
import style from './asset/css/index.less'

const OutPut = ({step, applyNum, insuredId, sumPremium, url, isZACashier, isOtherWay, balance, onGoToZACashier, onChangeIsOtherWay, onGoToStep}) => (

  <div>
    <TitleBarStepContainer />
    <Navigation step={step}/>

    <div className={style.total}>
      应付金额：<span>{sumPremium}</span>({applyNum}份)
    </div>

    <ul className={style.coat_ul}>
     
      <BlankLi item="支付方式">
        <ClickDiv val={'(卡单)'} isOpen={isOtherWay} onClickHandler={e => (onChangeIsOtherWay())}/>
      </BlankLi>
      {isOtherWay ? <CardsContainer /> : null}
    </ul>
    
    <LoadingContainer />
  </div>

)

export default OutPut