import React, {Component} from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div onClick={props.onClick} style={{ backgroundColor: '#fff',height: '4.9rem', width: '8.1rem'}}> 
    <span style={props.extra === '请选择' ? {color: '#999',float:'left'} : {float:'left'}}>{props.extra}</span>
  </div>
);

export default class DatePic extends Component {
    constructor(props) {
        super(props);

        this.state = {
          dpValue: this.props.theDate ? moment(this.props.theDate, 'YYYY-MM-DD') : null,
        }

        this.changeDate = this.changeDate.bind(this)
    };

    changeDate(m) {
      this.setState({
        dpValue: m,
      })
      this.props.onChangeDate(m.format('YYYY-MM-DD'))
    }

    render() {
        return (
          <DatePicker 
            mode="date" 
            title={this.props.title} 
            value={this.state.dpValue}
            extra='请选择'
            minDate={this.props.minDate ? moment(this.props.minDate, 'YYYY-MM-DD') : null}
            maxDate={this.props.maxDate ? moment(this.props.maxDate, 'YYYY-MM-DD') : null}
            onChange={this.changeDate}>
            <CustomChildren />
            
          </DatePicker>
        );
    };
}