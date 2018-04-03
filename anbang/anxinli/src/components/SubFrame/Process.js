import React, {Component} from 'react';
import style from '../asset/css/Tab.less'

class Process extends Component {
    

    render() {
        return (
          <div className={style.tab_process}>

            <ul className={style.process}>
              <li>
                <img src={require(`../asset/img/step1.png`)}/>
                <h2>拨打95569</h2> 
                <span>申请理赔</span>
              </li>
              <li>
                 <img src={require(`../asset/img/step2.png`)}/>
                <h2>递交申请</h2> 
                <span> 协助您递交理赔申请</span>
              </li>
              <li>
                 <img src={require(`../asset/img/step3.png`)}/>
                <h2>审核</h2> 
                <span>等待公司做核定</span>
              </li>
              <li>
                 <img src={require(`../asset/img/step4.png`)}/>
                <h2>查收理赔金</h2>  
                <span>保证您快速领取理赔金</span> 
              </li>
            </ul>
            <p>本产品由安邦人寿保险股份有限公司承保</p>
            <p>全国7X24小时客服热线：95569#3</p>
          </div>
        );
    };
}

export default Process