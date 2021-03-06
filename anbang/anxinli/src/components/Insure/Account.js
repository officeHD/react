import React, {Component} from 'react';
import style from '../asset/css/Insure.less';
export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className={style.top_title}>
                     <span>
                    <img src={require(`../asset/img/other.png`)}/>
                    其他信息   
                    </span>
                </div>
                <div className={style.content}>
                    <ul className={style.content_ul}>
                        <li className={style.list}>
                            <label>受益人</label>
                            <span>法定</span>
                        </li>
                        <li className={style.list}>
                            <label>保单类型</label>
                            <input  type="text" 
                                    placeholder="电子保单"    
                                    readOnly="readonly"       
                            /> 
                        </li> 
                    </ul>
                </div>
            </div>
        )
    };
}