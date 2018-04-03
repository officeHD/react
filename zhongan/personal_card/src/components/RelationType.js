import React from 'react'
import BlankLi from './BlankLi'
import ClickDiv from './ClickDiv'
import data from '../reducers/data.json'


const OutPut = ({insuredRelaToHolder, justRead, occupationCategoryName, onShowInsuredRelaToHolderBox, onChangeOccupationShow}) => (
  <ul className="coat_ul">
    <BlankLi item="是投保的">
      {justRead ? data.InsuredRelaToHolder[insuredRelaToHolder] :
      <ClickDiv val={data.InsuredRelaToHolder[insuredRelaToHolder]} onClickHandler={e => onShowInsuredRelaToHolderBox(insuredRelaToHolder)}/>
      }
    </BlankLi>
    <BlankLi item="职业类别">
      {justRead ? occupationCategoryName :
      <ClickDiv val={occupationCategoryName} onClickHandler={onChangeOccupationShow}/>
      }
    </BlankLi>
  </ul>
)

export default OutPut