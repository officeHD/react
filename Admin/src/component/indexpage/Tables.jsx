import React ,{Component}from 'react';
import { Table, Icon, Button, Popconfirm,message } from 'antd';
import { getStaffName,deleteStaff } from '../APIUtils';
import { list} from '../asset/data/json/staff.json';
import InsuranceStore from '../../stores/InsuranceStore';
import InsuranceActionCreators from '../../stores/InsuranceStore';
 
export default class Head extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            value: this.props.value,
            editable: false,
            dataSource: InsuranceStore.getStaff()
        };
        this.columns=[
          {"title": "分公司","dataIndex": "branchCompanyId","key": "branchCompanyId"},
          {"title": " 督训区","dataIndex": "branchCompanyName","key": "branchCompanyName"},
          {"title": " 姓名","dataIndex": "name","key": "name", sorter: (a, b) => a.name - b.name,},
          {"title": " 职级","dataIndex": "position","key": "position"},
          {"title": " 手机号码 ","dataIndex": "phoneNum","key": "phoneNum"},
          {"title": "岗位号", "dataIndex": "workNum", "key": "workNum"},
          {title: '操作',key: 'action',
            render: (text, record) => (
              <span>
                <a href="#">查看</a>
                <span className="ant-divider" />
                <a href="#">编辑</a>
                <span className="ant-divider" />
                <Popconfirm title="确认删除?" onConfirm={() => this.onDelete(record)}>
                  <a href="#">删除</a>
                </Popconfirm>
              </span> 
            )}
        ];

          this._onChange=this._onChange.bind(this); 
    } 
   getInitialState  () {
    return {
      items: InsuranceStore.getAll()
    };
  }
  componentDidMount () {
    InsuranceStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    InsuranceStore.removeChangeListener(this._onChange);
  }
  _onChange () {
    this.setState({
      dataSource: InsuranceStore.getStaff()
    });
  }

    
    onDelete = (key) => {
      const dataSource = [...this.state.dataSource];
      // 删除操作
      let cb = msg => {
        if (msg.result === 1) {
            message.success(msg.message,2);
            this.setState({ dataSource: dataSource.filter(item => item.workNum !== key.workNum) });
          } else {
            message.success(msg.message,2);
          }
      } 
      deleteStaff(key.workNum,cb) 
    }
    render() { 
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log();
      },
      getCheckboxProps: record => ({
         // Column configuration not to be checked
        // disabled: record.name === 'Disabled User',   
      }),


    }; 
    
    return (
          <Table rowKey={record => record.workNum} rowSelection={rowSelection} columns={this.columns} dataSource={this.state.dataSource}/>   
      )
    }
} 