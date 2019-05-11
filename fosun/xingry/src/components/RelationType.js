import React from 'react'
import BlankLi from './BlankLi'
import { Picker } from 'antd-mobile';

const OutPut = ({ relation, forInsuredPerson, changeRelation, pamars, relationName }) => (
  <div className="coat_ul" style={{ marginBottom: 0, borderBottom: 0 }}>

    <div className="coat_flex">
      {relation.map((item) => {
        return <span key={item.value} onClick={e => changeRelation(item.value, pamars)} className={`coat_span ${item.value == forInsuredPerson ? "coat_current" : ""}`}>
          {item.value == forInsuredPerson ? <img src={require('./asset/img/check_a.png')} /> : ""}
          {item.label}
        </span>
      })}
    </div>

    {/* <Picker
      title="选择与被保人的关系"
      extra="请选择"
      cols="1"
      data={relation}
      value={forInsuredPerson}
      onOk={v => changeRelation(v,pamars)}
    >
      
    </Picker> */}
  </div>
)
export default OutPut