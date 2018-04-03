import React from 'react';
import { changeFileName } from '../asset/js/common/common.js';
import {Select} from 'antd';
// 引入模拟数据
// import '../asset/data/mock.js';

import '../asset/less/component/Topbar.less';
const Option = Select.Option;

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selV: []
        }
    }
    changeAder = (v) => {
        alert(v);
    }
    logout = (v) => {
        changeFileName('login');
    }
    componentDidMount() {
        $.ajax({
            url:'getAderNameList'
        }).done((res) => {
            let resObj = JSON.parse(res);
            this.setState({selV:resObj.list});            
        })
    }
    render() {        
        return (
            <div id="topWrap">
                <div id="aderSel">
                    <Select 
                        size="large" 
                        onChange={this.changeAder} 
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请选择广告主"
                        optionFilterProp="children"
                        notFoundContent="未找到"
                    >
                        {
                            this.state.selV.map((v,i) => {
                                return <Option key={i} value={v}>{v}</Option>                                                    
                            })
                        }                        
                    </Select>
                </div>
                <div id="logoutSel">
                    <Select 
                        defaultValue="超级管理员" 
                        size="large" 
                        onChange={this.logout}
                        style={{ width: 140 }} 
                    >
                        <Option value="超级管理员">超级管理员</Option>
                        <Option value="退出">退出</Option>
                    </Select>
                </div>
            </div>
        );
    }
}

