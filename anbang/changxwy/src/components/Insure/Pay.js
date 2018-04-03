import React, {Component} from 'react';
import { getDataFromUrl } from '../APIUtils';
import style from '../asset/css/Insure.less'

export default class Pay extends Component {
 constructor(props){
        super(props);
        
    };
    render() {
        return (
            <div className={style.mask} onClick={this.props.onClickHandle}>
                <div className={style.pay_content}>
                    <div className={style.pay}>

                        <p>请选择支付方式</p>
                        <ul>
                            <li>
                                <img className={style.content_img} src={require('../asset/img/cicle.png')}/>
                                支付宝支付
                            </li>
                            <li>
                                <img className={style.content_img} src={require('../asset/img/cicle.png')}/>
                                微信支付
                            </li>
                        </ul>
                    </div>
             
                </div>

            </div>
        );
    };
}