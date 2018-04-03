import { Tabs } from 'antd';
import React from 'react';
const TabPane = Tabs.TabPane;
export default class TabPanes extends React.Component {
  
  render(){
    return(
        <TabPane tab={this.props.tab} key={this.props.key}>
          <p>111</p>
        </TabPane>
    )
  }
}


