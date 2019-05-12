
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../../components/NavBar';
import style from './index.less';
import { Modal } from 'antd-mobile';

const alert = Modal.alert
@inject('store')
@observer

export default class AddTodo extends Component {
    render() {
        const { store: { insurance } } = this.props;
        return (
            <div className="pd150">
                <NavBar title={insurance.productName} />
                <div className={style.inHtml} dangerouslySetInnerHTML={{ __html: insurance.healthHtml }}>
                </div>
                <ul className={style.fixedBottom} onClick={e => insurance.computer}>
                    <li className={style.danger} onClick={e => alert('健康提示', '您不符合投保条件请稍后再试',
                        [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确定', onPress: () => console.log('ok') }
                        ])}
                    > 部分情况有 </li>
                    <li onClick={e=>window.location.replace("#/insured")}>  以上全无 </li>
                </ul>
            </div>
        )
    }
}