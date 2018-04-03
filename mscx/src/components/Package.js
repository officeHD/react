import React from 'react'

const OutPut = ({stages, customer}) => (
    
  <div className="package" >
    <div className="sub_title">{customer} 类月供</div>
    <table>
      <tbody>
        {stages.map( plan =>
          <tr key={plan.month}>
            <td>期数</td>
            <td>{plan.month}期</td>
            <td>每月花费</td>
            <td>￥{plan.price}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default OutPut