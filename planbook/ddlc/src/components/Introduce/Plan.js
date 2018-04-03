import React, {Component} from 'react';
import style from '../asset/css/Introduce.less';
   
 
export default class Plan extends Component {
    constructor(props){
        super(props); 
    }
    render() {
     
      if (!this.props.insurance) {
            return null
      }
      let insurlist=this.props.insurance.productList;
     
      let Trlist=insurlist.map((insure ,index) => { 
          return <tr key={index}>
                <td>{insure.insuranceName}</td>
                <td>{insure.amnt}</td>
                <td>{insure.subPrem}</td>
                <td>{insure.payendyear}</td>
          </tr>
      })
        return (
          <div className={style.table}>

            <table>
              <thead>
                <tr>
                  <th>险种</th>
                  <th>保额（元）</th>
                  <th>年交保费（元）</th>
                  <th>缴费期间 </th>
                </tr>
              </thead>
              <tbody>

                {Trlist}
                 
              </tbody>
            </table>        
               
          </div>
        )
    };
}