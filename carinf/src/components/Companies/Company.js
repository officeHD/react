import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';
import style from '../asset/css/Companies.less'; 
import { getCarThreeUrl } from '../APIUtils'
export default class Company extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        getCarThreeUrl();
        let id = this.props.company.id;
        
        localStorage.InsuranceCom=id;
        //太平洋车险要跳转到单独页面
        window.location = '#/introduce'  
        // if (id === 1) {
        //     if (window.minsheng) {
        //         window.minsheng.turnToActivity('太平洋车险', `http://ecoop.idoutec.cn/wechatgateway/basic/auth?channel=H5_DBB_MSDL&state=car&userid=${AppStore.getWorkNum()}`);
        //     } else {
        //         window.location = '#/subFrame'
        //     }
        // } else {
        //     window.location = '#/introduce'      
        // }
    };

    render() {
        let company = this.props.company;
        return (
            <li  onClick={this.handleClick}>
                <img src={require(`../asset/img/pic_${company.spell}.png`)} />
                <section>
                    <p className={style.title}>{company.product}</p>
                    <p className={style.content}>{company.info}</p> 
                    <img src={require(`../asset/img/logo_${company.spell}.png`)} />
                </section>
            </li>
        );
    };
}
