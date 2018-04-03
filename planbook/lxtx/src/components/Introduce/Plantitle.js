import React, {Component} from 'react';
import style from '../asset/css/Introduce.less';

export default class Plantitle extends Component {
    constructor(props){
        super(props);
    }
    render() {
      
      
        return (
            <div className={style.plan_tile}>
                <div className={style.plan_left}>
                    <label>主</label>
                    <span>{this.props.title} <br/>
                     {this.props.stakeholder.infoshow? 
                      <span className={style.price}>首年保费：{this.props.insurance.prem}元</span>:<span>{this.props.edit}</span>}
                    </span>
                    
                </div>
                {this.props.stakeholder.infoshow? 
                    <div className={style.plan_left}>
                        <button onClick={this.props.handeledit}>修改</button>
                        <button onClick={this.props.handeldelete}>删除</button>
                    </div>:
                    <div className={style.plan_left}>
                        <button onClick={this.props.handeladd}>添加</button>
                    </div>
                }
               
                
            </div>
        )
    };
}