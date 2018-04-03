
import React from 'react';
import { Table, Icon } from 'antd';

export default class table extends React.Component {
    constructor(props) {
        super(props);       
    }     
    render() { 
     
      return (
        <Table  rowSelection={this.props.rowSelection} dataSource={this.props.dataSource} columns={this.props.columns} />
      )
    }
} 