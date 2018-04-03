import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Toast  } from 'antd-mobile';

export default class Replys extends Component {

  constructor(props){
        super(props);
         this.state = this.getData();
          this.moreShow = this.moreShow.bind(this);
  };
  getData() {
    return {
      open: false,
    }
  };
  moreShow(){
    this.setState({
      open: !this.state.open,       //相关方数据集合
    });
  }; 
  render() {
      
        return (
          <div className={style.replys}>
            <div className={style.title}>
              <span>精彩评论</span>
            </div>
             <div className={style.replys_content}>
            <ul className={style.list}>
              <img className={style.user_img} src="http://tx.tianyaui.com/logo/small/134112969"/>

              <div className={style.list_content}>
                  <span className={style.reply_name}>小蜜蜂</span>
                  <p>一个亚洲，两种三观！或许我们觉得很变态，但在他们眼中说不定很正常</p>
                  <div className={style.more_reply}>
                    <ul className={this.state.open?style.show:''}>
                      <li>
                        <span className={style.name}>路人甲</span>：但在他们眼中说不定很正常
                      </li>
                      
                      <li>
                        <span className={style.name}>路人甲</span>：但在他们眼中说不定很正常
                      </li>
                    </ul>
                    {this.state.open?<span className={style.name} onClick={this.moreShow}>收起回复</span>:<span className={style.name} onClick={this.moreShow}>共3三条回复 ></span> }
                    
                  </div>
                  <div className={style.reply_bottom}>
                    <time>2017-01-05 10:22</time>
                    <span className={style.reply_opera}>
                      <span>
                        <img src={require(`../asset/img/reply.png`)} /> 
                      </span>
                      <span>
                         <img src={require(`../asset/img/good.png`)} /> 1
                      </span>
                    </span>
                  </div>
                  
              </div>
             
            </ul>
            
             </div>
         </div>
        );
    };

}