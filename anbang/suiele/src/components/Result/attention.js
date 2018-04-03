import React, {Component} from 'react';
 
import style from '../asset/css/Insure.less'

export default class Pay extends Component {
    constructor(props){
        super(props);
        
    };
    backIndex(){
    window.location= "#/" ;

    }
    backWeixin(){
        window.location="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI2MzAyMTIzMw==&scene=110#wechat_redirect"
    }
    render() {
        return (
            <div className={style.mask} >
                <div className={style.pay_content}>
                    <div className={style.pay}>
                        <ul>
                            <li>
                                <img className={style.content_img} src={require('../asset/img/home.png') } onClick={this.backIndex}/>
                                返回首页
                            </li>
                            <li>
                                <img className={style.content_img} src={require('../asset/img/wechat.png')} onClick={this.backWeixin}/>
                                关注公众号
                            </li>
                        </ul>
                    </div>
             
                </div>

            </div>
        );
    };
}