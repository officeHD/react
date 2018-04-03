import React, {Component} from 'react'
 
import style from '../asset/css/introduce.less'
export default class Feature extends Component {
    
    render(){ 
     
      return (
        <ul className={style.feature}>
            <li>
                <h2 className={style.feature_1}>01增值快 费用低</h2>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/1_03.jpg')}/>
                     <p className={style.p_right}>
                       仅收取1%初始费用<br/>
                       最低保证利率为3%<br/>
                       零保单管理费
                     </p>
                </div>
            </li>
        	
        	 <li>
              <h2 className={style.feature_2}>02 灵活便捷</h2>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/2_06.jpg')}/>
                      <p className={style.p_left}>
                       可以申请部分领取<br/>
                       五年后领取<br/>无手续费用
                  
                     </p>
                </div>
               
                
                
            </li>
             <li>
              <h2 className={style.feature_3}>03 两全保障 攻守兼备</h2>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/3_08.jpg')}/>
                      <p className={`${style.p_right} `}>
                       每年收取风险保证金<br/>
                       满期后获得等同于<br/>
                       账户价值的保险金
                     </p>
                </div>
            </li>
             <li>
             <h2 className={style.feature_4}>04 持续奖励 受益添彩</h2>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/4_11.jpg')}/>
                      <p className={style.p_left}>
                       第五个保单年度末将<br/>
                       获得1%保单账户<br/>
                       价值的持续奖金
                     </p>
                </div>
                 
                
            </li>
            <li>
             <h2 className={style.feature_5}>05日日复利 月月结息</h2>
                <div  className={style.content_img}>
                     <img src={require('../asset/img/5_14.jpg')}/>
                     <p className={style.p_right}>
                       彰显复利优势<br/>
                       应对通胀压力 
                     </p>
                </div>
                 
                
            </li>


            <h4>
              本产品为万能保险，结算利率超过最低保证率的部分是不确定的
            </h4>
        </ul>  
      )
    }
}