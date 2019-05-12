
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../../components/NavBar';
import Insurant from './Insurant';
import style from './index.less';
import InsuPlan from './InsuPlan';
import Beneficiary from './Beneficiary';
// import Attention from './Attention';
// import BottomBar from './BottomBar';


@inject('store')
@observer

export default class AddTodo extends Component {
    render() {
        const { store } = this.props;
        let insurance = store.insurance;
        let insurant = store.insurant;
        let holder = store.holder;


        return (
            <div className="pd150">
                <NavBar title={insurance.productName} />


                <Insurant insurant={insurant} userType="被保人" />
                {
                    insurant.relationsWithCustomer == "04" ? null : <Insurant insurant={holder} userType="投保人" />
                }
                <InsuPlan />
                {/* <Insurant insurant={holder} userType="受益人 " /> */}
                <Beneficiary />
                {/*  
                <Attention />
                <Footer />  */}
                {/* <BottomBar staff={store.staff} /> */}
                <ul className={style.fixedBottom} onClick={e => insurance.insertOrder()}>
                    <li> 下一步 </li>
                </ul>
            </div>
        )
    }
}