import React, {Component} from 'react';
import { Progress } from 'antd-mobile';
import AppActionCreators from '../../actions/AppActionCreators';

export default class DatePic extends Component {
    constructor(props) {
        super(props);

        this.state = {
          percent: 0,
        }

        this.add = this.add.bind(this)
    };

    add() {
      let p = this.state.percent + 1;
      if (this.state.percent >= 100) {
        p = 100;
      } else if (this.props.isFinished) {
        p = 100
        this.setState({ percent: p });
        AppActionCreators.closeAlertProgress();
      } else if (!this.props.message) {
        setTimeout(this.add, 300);
      }
      this.setState({ percent: p });

    }

    componentDidMount() {      
      setTimeout(this.add, 300);
    };

    render() {

      let tip = null
      if (this.props.isFinished) {
        tip = <p></p>
      } else if (this.props.message) {
        tip = <p>{this.props.message}</p>
      } else {
        tip =  <p>已完成 {this.state.percent}% ，请耐心等待</p>
      }
      
      return (
        <div>
          <Progress percent={this.state.percent} position="normal" />
          {tip}
        </div>

      );
    };
}