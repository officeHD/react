import { Select,Form, Row, Col, Input, Cascader, Button, Icon } from 'antd';
import React ,{Component}from 'react';
import SelectArea from './SelectArea';
import { searchForm,getStaffName } from '../APIUtils';
import '../asset/less/component/search.less';
const FormItem = Form.Item;
 
 const inputTitle=['所在省份','所在市','所在县区'];
    const inputName=['province','city','county'];
    const provinceData = ['Zhejiang', 'Jiangsu'];
    const cityData = {
      Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
      Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
    };
    // console.log(Province.province)
    const countyData={
      Hangzhou:['w','f','n'],
      Ningbo:['m','v','sanqu'],
      Wenzhou:['x','erqu','z'],
      Nanjing:['yiqu','erqu','sanqu'],
      Suzhou:['z','erqu','z'],
      Zhenjiang:['b','erqu','g']
    }
class AdvancedSearchForm extends React.Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  }
 
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
      county: countyData[cityData[value][0]][0],
    });
  }
  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
    });
  }
  getSelect() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 9},
      wrapperCol: { span: 15},
    };
    const children = [];
   
    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
    
  
    return [
        <Col span={6} key={1}  >
          <FormItem {...formItemLayout} label="所在省份">
            {getFieldDecorator("所在省份")(
              <Select defaultValue={provinceData[0]}   onChange={this.handleProvinceChange}>
                {provinceOptions}
              </Select>
            )}
          </FormItem>
        </Col>,
        <Col span={6} key={2}  >
          <FormItem {...formItemLayout} label="所在省份">
            {getFieldDecorator("所在市")(
              <Select defaultValue={provinceData[0]}   onChange={this.handleProvinceChange}>
                {provinceOptions}
              </Select>
            )}
          </FormItem>
        </Col>,
        <Col span={6} key={3}  >
          <FormItem {...formItemLayout} label="所在省份">
            {getFieldDecorator("所在县区")(
              <Select defaultValue={provinceData[0]}   onChange={this.handleProvinceChange}>
                {provinceOptions}
              </Select>
            )}
          </FormItem>
        </Col>
      ];
   
    
  }
  
  render() {
    return (
        <Row gutter={40}>
          {this.getSelect()}
        </Row>
    );
  }
}
export default AdvancedSearchForm = Form.create()(AdvancedSearchForm);
