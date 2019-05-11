import React from 'react'
import Accordion from '../../components/Accordion'
import style from './index.less'
const Instruction = ({ insuNotice }) => (
  <div>
    <div className={style.detail}>
      {
        insuNotice.map((item, idnex) => <Accordion key={idnex} title={item.name} tip={item.value} />)
      }
    </div>
  </div>
)
export default Instruction