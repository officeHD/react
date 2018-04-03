import React, {Component} from 'react'
import style from '../asset/css/introduce.less'
export default class Feature extends Component {
    render(){ 
      return (
         <div className={style.feature_content}>
          <div className={style.feature_titles}>
               <span className={style.feature_title}>保障全  赔付高</span> 
            </div>
           
            <ul>
              <li>
                <h2>
                  <span className={style.red}>自驾车</span>意外身故/全残保险金
                </h2>
                <img src={require('../asset/img/banner_01.jpg')}/> 
                 <div className={style.sun_content}>
                  <p>
                    <span className={style.sun}>10倍</span> <span className={style.sun_tex}>给付 <br/>(零时之前)</span>
                  </p>
                  <p>
                    <span className={style.sun}>3倍</span> <span className={style.sun_tex}>给付 <br/>(零时之前)</span>
                  </p>
                </div>
                
              </li>
              <li>
                <h2>
                  <span className={style.red}>网约车</span>意外身故/全残保险金
                </h2>
                <img src={require('../asset/img/banner_02.jpg')}/>
                <div className={style.sun_content}>
                  <p>
                    <span className={style.sun}>10倍</span> <span className={style.sun_tex}>给付 <br/>(零时之前)</span>
                  </p>
                  
                  <p>
                    <span className={style.sun}>3倍</span> <span className={style.sun_tex}>给付 <br/>(零时之前)</span>
                  </p>
                </div>
                
                 
              </li>
              <li>
                <h2>
                  <span className={style.red}>水路公共交通</span>意外身故/全残保险金
                </h2>
                <img src={require('../asset/img/banner_03.jpg')}/>
                <div className={style.sun_content}>
                  <p>
                    <span className={style.sun}>15倍</span> <span className={style.sun_tex}>给付 <br/>(零时之前)</span>
                  </p>
                  
                  <p>
                    <span className={style.sun}>5倍</span> <span className={style.sun_tex}>给付 <br/>(零时之前)</span>
                  </p>
                </div>
                
              </li>
              <li>
                <h2>
                  <span className={style.red}>航空交通</span>意外身故/全残保险金
                </h2>
                <img src={require('../asset/img/banner_04.jpg')}/>
                <div className={style.sun_content}>
                  <p>
                    <span className={style.sun}>20倍</span> <span className={style.sun_tex}>给付</span>
                  </p>

                </div>
                 <p className={style.tips}>被保险人以乘客身份搭乘民航班机期间遭受意外伤害导致
                身故或全残
                </p>
                
                
                <p className={style.tips}>本主险合同生效之日起，至被保险人年满70周岁后的首个保单周年日
                </p>
              </li>
            </ul>
            <div className={style.feature_titles}>
              <span className={style.feature_title}>方案灵活</span>
            </div>
           
            <div className={style.plan}>
              <div className={style.main_pic}>

              <img  src={require('../asset/img/smart.png')}/>
              </div>
              <p>根据自身财务状况指定保险方案，让每个人都能0压力获得保障。保障年限、保额缴费期灵活制定</p>
            </div>
             

             <div className={style.feature_titles}>
              <span className={style.feature_title}>驾乘都保</span>
            </div>
             
             <div className={style.plan}>
             <div className={style.main_pic}>

              <img  src={require('../asset/img/all.png')}/>
              </div>
              <p>无论是驾驶或者乘坐自己车辆，搭乘网约车或者乘坐各种水路车辆，均受本保险合同保障</p>
            </div> 
         </div>
             
      )
    }
}