import React,{Component} from 'react'
import Tab from './Tab'
import TitleBar from '../public/TitleBar'
import style from '../asset/css/index.less'
export default class Orderlist extends Component {
    constructor(props) {
        super(props);

    };
    render() {
        return (
            <div>
                <TitleBar title="我的订单" />
                <Tab />
            </div>
        )
    };
}