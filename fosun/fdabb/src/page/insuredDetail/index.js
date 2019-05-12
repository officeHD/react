
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../../components/NavBar';
import style from './index.less';


@inject('store')
@observer

export default class AddTodo extends Component {
    render() {
        const { store: { insurance, insurant, holder } } = this.props; 
        return (
            <div className="pd150">
                <NavBar title={insurance.productName} />

                <ul className={style.fixedBottom} onClick={e => insurance.computer}>
                    <li onClick={e=>insurance.underwriting()}> 下一步 </li>
                </ul>
            </div>
        )
    }
}