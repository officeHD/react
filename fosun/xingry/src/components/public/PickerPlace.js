import React from 'react';
import { Picker } from 'antd-mobile';
import BlankLi from '../BlankLi'
import Plans from './Plans'
const More = ({ title, addressData, placeVal, checkPlace, col = 3, plans = false, parmars }) => {
    if (!addressData||!addressData.length) {
        return null
    }
    return (
        <Picker
            title="选择地区"
            extra="请选择"
            col={col}
            data={addressData}
            value={placeVal}
            onOk={v => checkPlace(v, parmars)}
        >
            {plans ? <Plans title={title}></Plans> : <BlankLi item={title}></BlankLi>}
        </Picker>
    )
}

export default More