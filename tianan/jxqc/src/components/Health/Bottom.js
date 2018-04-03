import React, {Component} from 'react';
import style from '../asset/css/Health.less';
 import { Link } from 'react-router'
 import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
 
export default class App extends Component {
     constructor(props){
        super(props);
        this.state = {
          health: true
        }
        this.toggleHealth = this.toggleHealth.bind(this);    
        this.handelClick = this.handelClick.bind(this);    
    }
   toggleHealth(){
        this.setState({
            health: !this.state.health,
      })
          InsuranceActionCreators.userNotHealth();
    }
    handelClick(){
        // 如果健康就去投保 否则去产品
        if(this.state.health){
            window.location="#/Insure";
             InsuranceActionCreators.userHealth();
        }else{
            InsuranceActionCreators.reset();
          window.location="#/"  
        }   
    }
     
 
    render() {
 
        return (
            <div>
                {this.state.health?'':
                    <div>
                        <div className={style.mask}>
                        </div>
                        <div className={style.tip}>
                            <p>很抱歉,被保人告知情况不符合投保要求，需要跟保险顾问咨询后进行投保，请联系客服确认后再进行投保！</p>
                            <span>400-928-987</span>
                        </div>
                    </div>
                }
                
                <div className={style.bottom}>
                    <button   className={style.white} onClick={this.toggleHealth}>{this.state.health?'部分情况有':"选错啦"}</button>
                    <button  onClick={this.handelClick}>{this.state.health?'以上情况全无':"查看其它产品"}</button>
                </div> 
                   
            </div>   
        )
    };
}