import React from 'react'

const Parameters = ({parameter}) => (
  <div className="parameters">
    <table>
      <tbody>
        {parameter.map((par, index) => 
          <tr key={index}>
            <td>{par.key}</td>
            <td>{par.value}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

)

export default Parameters