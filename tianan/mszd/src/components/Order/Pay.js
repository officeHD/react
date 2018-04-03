import React, {Component} from 'react'; 
import style from '../asset/css/Order.less';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';

export default class Pay extends Component {
 constructor(props){
        super(props);
    };
    render() {
        if (!this.props.isShow) {
            return null
        }
        return (
            <div className={style.mask} onClick={(e)=>this.props.onClickHandle(e)}>
                <div className={style.pay_content} >
                    <div className={style.pay} onClick={(e)=> e.stopPropagation()}>
                        <p>请使用卡单支付</p>
                        <ul>
                            <li>
                               <input 
                                type="text"
                                placeholder="请输入卡号"
                                value={this.props.stakeholder.cardNo} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'cardNo') }}
                               />    
                            </li>
                            <li>
                               <input 
                                type="password"
                                placeholder="请输入密码"
                                value={this.props.stakeholder.passWord} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'passWord')}}
                                />     
                            </li>
                        </ul>
                        <div className={style.bottom}>
                            <button  onClick={(e)=>this.props.payOrder(e)}>支付</button>
                        </div> 
                    </div>
             
                </div>

            </div>
        );
    };
}