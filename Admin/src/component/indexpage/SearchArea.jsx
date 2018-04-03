import { Form, Row, Col, Input, Button, Icon } from 'antd';
import React ,{Component}from 'react';
import { searchForm,getStaffName } from '../APIUtils';
import '../asset/less/component/search.less';
 
class AdvancedSearchForm extends React.Component {
  handleReset = () => {
    this.props.form.resetFields();
  }
  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }
  render() {
    return (
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
    );
  }
}

export default AdvancedSearchForm = Form.create()(AdvancedSearchForm);
