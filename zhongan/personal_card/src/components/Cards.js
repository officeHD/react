import React from 'react'
import Card from './Card'
import data from '../reducers/data.json'
import style from './asset/css/index.less'

const OutPut = ({ applyNum, balance, personPremium, cards, onChangePersonPremium, onChangInput, onSubmitCards}) => {
  let showList = cards.map((card, index) => { 
    if (index < applyNum - personPremium / 100) { 
      return (<Card key={index} index={index} card={card} onChangInput={onChangInput}/>)
    }
  })
  
  return (
    <li className={style.wallet_li}>
      
      
      <div className={style.ankangs}>
        <p>请输入对应密码</p>
        <div className={style.ankangs_div}>
          {showList}
        </div>
        <button type="button" className={style.next_btn} onClick={onSubmitCards}>下一步</button>
      </div>
    </li>
  )

}

export default OutPut