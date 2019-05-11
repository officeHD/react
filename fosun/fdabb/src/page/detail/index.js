import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../../components/NavBar';
import Banner from './Banner';
import InsuPlan from './InsuPlan';
import TabDetail from './TabDetail';
import BottomBar from './BottomBar';


@inject('store')
@observer

export default class AddTodo extends Component {

    share(workNum) {
        if (workNum) {
            if (window.minsheng) {
                window.minsheng.share()
            } else {
                window.location.href = `sn://share`;
            }
        } else {
            if (window.minsheng) {
                window.minsheng.login()
            } else {
                window.location.href = `sn://login`;
            }
        }
    }
    render() {
        const { store } = this.props;
        let insurance = store.insurance;
        return (
            <div>
                <NavBar title={insurance.productName} ismain={true} />
                <Banner code={insurance.varietyCode} />
                <InsuPlan planData={insurance.planData} />
                asd
                <TabDetail   />
                <BottomBar staff={store.staff} />
            </div>
        )
    }
}