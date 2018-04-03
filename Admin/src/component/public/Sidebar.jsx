import React from 'react';
import '../asset/less/component/Sidebar.less';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            current:this.props.cKey
        }      
    }
    changeFileName = (newName) => {
        let pro = window.location.protocol;
        let host = window.location.host;
        let pathname = window.location.pathname;
        let n = pathname.lastIndexOf('/');
        let path = pathname.substring(0,n+1);
        window.location.href = pro + '//' + host + path + newName +'.html';
    }    
    handleClick = (item) => {   
        this.changeFileName(item.key);
    }

    render() {
        return (
            <div id="leftMenu"> 
                <h1 id="logo">Auto BYY</h1>
                <Menu theme="light"
                    style={{ width: 146 }}                 
                    mode="vertical"
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                >
                    <Menu.Item key="index">                    
                        <span><Icon type="home" /><span>首页</span></span>
                    </Menu.Item>  
                    <SubMenu key="report" title={<span><Icon type="line-chart" /><span>数据报告</span></span>}>
                      <Menu.Item key="chart">数据概览</Menu.Item>
                      <Menu.Item key="ad">广告报告</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="finance">                    
                        <span><Icon type="pay-circle-o" /><span>财务管理</span></span>
                    </Menu.Item>                    
                    <Menu.Item key="log">                    
                        <span><Icon type="edit" /><span>开发后记</span></span>
                    </Menu.Item>
                </Menu>
                <div id="copyright">Copyright © </div>                    
            </div>                
        )
    }
}