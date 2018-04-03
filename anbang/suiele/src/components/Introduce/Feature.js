import React, {Component} from 'react'
import FeatureTitle from './FeatureTitle'
import style from '../asset/css/introduce.less'
export default class Feature extends Component {
    
    render(){ 
     
      return (
        <ul className={style.feature}>
            <li>
                <FeatureTitle id="01" name="费用低廉 高度透明" article="零保单管理费，收取1%初始费用和一定比例的风险保险费，产品最低保证率为3%"/>
                <div  className={style.content_img}>
                    <div>
                     <img src={require('../asset/img/money.png')}/>
                    </div>
                    
                </div>
            </li>
        	
        	 <li>
                <div  className={style.content_img}>
                   <div>
                       <img src={require('../asset/img/quick.png')}/>
                  </div>
                </div>
               
                <FeatureTitle id="02" name="部分领取 安全便捷" article="在保险合同有效期内，犹豫期过后可申请部分领取保单账户价值，并且满两年后领取无手续费用，满足资金不时之需"/>
                
            </li>
             <li>
                <FeatureTitle id="03" name="两全保障 攻守兼备" article="在保险合同有效期内，可获得不低于100%保单账户价值的身故保障（具体比例依据身故当时保单年度初年龄确定，最高可达160%保单账户价值）；满期还可获得等同于账户价值的满期保险金"/>
                <div  className={style.content_img}>
                 <div>
                     <img src={require('../asset/img/double.png')}/>
                </div>
                </div>
            </li>
             <li>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/continue.png')}/>
                </div>
                <FeatureTitle id="04" name="持续" article="本产品采用日复利计息，复利优势明显。若长期持有，第五个保单年度末，您还将获得1%保单账户价值的持续奖金"/>
                
            </li>
             <li className={style.tips}>
              <span>风险提示：</span>
              <p>
                结算利率超过最低保证利率的部分是不确定的。本资料仅供客户理解产品条款所用，有关产品的说明、解释、承诺或保证，如与产品条款不一致，均以产品条款为准。
              </p>
            </li>
            
        </ul>  
      )
    }
}