import React, {Component} from 'react';
import style from '../asset/css/Insure.less';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import InsuranceStores from '../../stores/InsuranceStore';
 
 
export default class App extends Component {
     constructor(props){
        super(props);
        this.state = {
          stakeholder: InsuranceStores.getStakeholder(),       //相关方数据集合
        }
         
    };
    samePolicy(){
        InsuranceActionCreators.toggleSameAs();
    };
    
    render() {
       
        return (
            <div>
                <div className={style.top_title}>
                    被保人信息填写 
                    <label className={style.top_span} onClick={this.samePolicy} >
                        <span className={`${this.props.stakeholder.sameAs ? style.selected : style.agreed} ${style.ms_red} `} >
                            为本人投保
                        </span>

                    </label>
                </div>
                <div className={style.content}>
                    <ul className={style.content_ul}>
                        <li>
                            <label>姓名</label>
                            <input placeholder="请输入真实姓名"/>
                        </li>
                        <li>
                            <label>身份证号</label>
                            <input placeholder="请输入身份证号"/>
                        </li>
                        <li>
                            <label>手机号</label>
                            <input placeholder="请输入手机号"/>
                        </li>
                        <li>
                            <label>职业</label>
                            <input placeholder="请选择职业大类"/>
                        </li>
                        <li>
                            <label>职业</label>
                            <input placeholder="请选择职业小类"/>
                        </li>
                        <li>
                            <label>职业</label>
                            <input placeholder="请选择职业 "/>
                        </li>
                        <li>
                            <label>身高</label>
                            <input placeholder="请输入身高(cm)"/>
                        </li>
                        <li>
                            <label>体重</label>
                            <input placeholder="请输入体重(kg)"/>
                        </li>
                        {this.props.stakeholder.sameAs ?
                            <div>
                               <li>
                                    <label>联系地址</label>
                                    <input placeholder="请输入"/>
                                </li>
                                <li>
                                    <label>详细地址</label>
                                    <input placeholder="请输入详细地址"/>
                                </li>
                                <li>
                                    <label>投保地区</label>
                                    <span>法定</span>
                                </li>
                            </div>
                           :""}
                        <li>
                            <label>保险期间</label>
                            <span>自2017-10-16日00:00起至终身</span> 

                        </li>
                        {this.props.stakeholder.sameAs ?
                            <div>
                                <li>
                                <label>投保人</label>
                                <span>本人</span> 
                            </li>
                             <li>
                                <label>受益人</label>
                                <span>法定</span> 
                            </li> 
                            </div>
                           :""}
                    </ul>
                </div>
                

                 
            </div>
        )
    };
}