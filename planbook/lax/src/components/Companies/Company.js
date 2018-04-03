import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import style from '../asset/css/Companies.less';
import { getCarThreeUrl } from '../APIUtils'
export default class Company extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick() {
        InsuranceActionCreators.updateInsuranceCom(id); 
        window.location = '#/introduce'  
    };

    render() {
        let company = this.props.company;
        return (
            <li onClick={this.handleClick}>
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
