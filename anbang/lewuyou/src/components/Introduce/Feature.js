import React, {Component} from 'react'
import FeatureTitle from './FeatureTitle'
import style from '../asset/css/introduce.less'
export default class Feature extends Component {
    
    render(){ 
     
      return (
        <ul className={style.feature}>
            <li>
                <div className={style.feature_title}>
                    <h2>
                     1.安心
                    </h2>
                    <h4>
                      定期保障，生命无忧
                    </h4>
                    <p>
                       保障与积累并重<br/>
                       有效维护家庭经济的安全
                    </p> 
                </div> 
                <div  className={style.content_img}>
                     <img src={require('../asset/img/anxin.png')}/>
                </div>
            </li>
            
             <li>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/manfan.png')}/>
                </div>
               
                <div className={style.feature_title}>
                    <h2>
                     2.满返
                    </h2>
                    <h4>
                      满期保障
                    </h4>
                    <p>
                       满期按所交保险费的105%给付满期保险金
                    </p> 
                </div> 
                
            </li>
             <li>
                <div className={style.feature_title}>
                    <h2>
                     3.省心
                    </h2>
                    <h4>
                      一次购买，长期保障
                    </h4>
                    <p>
                       从保险合同生效日零时起至被保险人<br/>年满25周岁后的首个保单周年日零时止
                    </p> 
                </div> 
                <div  className={style.content_img}>
                     <img src={require('../asset/img/shenxin.png')}/>
                </div>
            </li>
             <li>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/shihui.png')}/>
                </div>
                <div className={style.feature_title}>
                    <h2>
                     4.实惠
                    </h2>
                    <h4>
                      少量保费，高额保障
                    </h4>
                    <p>
                       每份最低仅725元，年均约31元，每月才约2块6，每天不到1毛钱，即可拥有：身故或全残保险金1万+25种少儿重大疾病保险金2万+满期保险金105%所交保费
                    </p> 
                </div> 
            </li>
        </ul>  
      )
    }
}