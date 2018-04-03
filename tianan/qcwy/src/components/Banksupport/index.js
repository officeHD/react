import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import style from '../asset/css/pay.less';
 
export default class App extends Component {
 
    constructor(props){
        super(props);
           
    }
    render(){
        return (
          <div>
            <TitleBar title="安邦畅行无忧两全保险"/>
            <div className={style.banksupport}>
             <table >
               <thead>
                <tr>
                  <th>
                  银行名称
                  </th>
                  <th>
                  支持卡种
                  </th>
                  <th>
                  代扣金额上限
                  </th>
                  
                </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>中国工商银行</td>
                   <td>借记卡/存折</td>
                   <td>10000000</td>
                 </tr>
                  <tr>
                   <td>中国农业银行</td>
                   <td>借记卡/存折</td>
                   <td>50000000</td>
                 </tr>
                  <tr>
                   <td>中国银行</td>
                   <td>借记卡/存折</td>
                   <td>5000000</td>
                 </tr>
                 <tr>
                   <td>中国建设银行</td>
                   <td>借记卡/存折</td>
                   <td>10000000</td>
                 </tr>
                 <tr>
                   <td>交通银行</td>
                   <td>借记卡/存折</td>
                   <td>5000000</td>
                 </tr>
                 <tr>
                   <td>中信银行</td>
                   <td>借记卡/存折</td>
                   <td>99999999</td>
                 </tr>
                 <tr>
                   <td>光大银行</td>
                   <td>借记卡/存折</td>
                   <td>300000</td>
                 </tr>
                 <tr>
                   <td>中国民生银行</td>
                   <td>借记卡/存折</td>
                   <td>300000</td>
                 </tr>
                 <tr>
                   <td>广东发展银行</td>
                   <td>借记卡/存折</td>
                   <td>300000</td>
                 </tr>
                 <tr>
                   <td>深圳发展银行</td>
                   <td>借记卡/存折</td>
                   <td>5000000</td>
                 </tr>
                 <tr>
                   <td>邮政储汇</td>
                   <td>借记卡/存折</td>
                   <td>50000000</td>
                 </tr>

               </tbody>
             </table>
              </div>
          </div>
        )
    }
}