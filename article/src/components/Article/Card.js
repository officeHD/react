import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast  } from 'antd-mobile';

export default class Card extends Component {
  constructor(props){
    super(props);
  };
  render() {
        return (
          <div className={style.card}>
            <div className={style.cardimg}>
              <img className={style.user_img} src="http://tx.tianyaui.com/logo/small/134112969"/>
               <div className={style.card_mes}>
                  <span className={style.user_name}>路人甲</span><br/>
                  <span className={style.contact}><img src={require(`../asset/img/tel.png`)}/> 
                  <a href="tel:13315161516">13315621516</a></span> 
                </div>
                </div>
           
            <div className={style.linkto}>
              <span> <a href="">名片 ></a></span>
            </div>

         </div>
        );
    };

}