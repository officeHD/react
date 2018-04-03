import { Select,Form, Row, Col, Input, Cascader, Button, Icon } from 'antd';
import React ,{Component}from 'react';
import SelectArea from './SelectArea';
import { searchForm,getStaffName } from '../APIUtils';
import '../asset/less/component/search.less';
const FormItem = Form.Item;
 

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
  };
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      // secondCity: "请选择",
      // county: "请选择",
    });
    console.log(value)
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('发送数据: ', values);
      getStaffName(values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 9},
      wrapperCol: { span: 15},
    };
    const children = [];
    const inputTitle=['人员姓名','岗位号','身份证号'];
    const inputName=['name','workNum','idCard'];
    for (let i = 0; i < 3; i++) {
      children.push(
        <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem {...formItemLayout} label={inputTitle[i]}>
            {getFieldDecorator(inputName[i])(
              <Input placeholder={"请输入"+inputTitle[i]} />
            )}
          </FormItem>
        </Col>
      );
    }
    return children;
  }
   
  render() {
    return (
      <Form
        className="search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          {this.getFields()}
          
        </Row>
         
        <SelectArea/>
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
      </Form>
    );
  }
}

export default AdvancedSearchForm = Form.create()(AdvancedSearchForm);
