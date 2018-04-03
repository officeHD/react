import React, {Component} from 'react';
import { Modal } from 'antd-mobile';
import ProgressBar from './ProgressBar';
import AppActionCreators from '../../actions/AppActionCreators';
import AppStore from '../../stores/AppStore';

export default class Out extends Component {
  constructor(props) {
      super(props);
      this.state = this.getData();

      this.onAppChange = this.onAppChange.bind(this);
  };

  onClose() {
    AppActionCreators.closeAlertProgress()
  }

  getData() {
      return {
          isShow: AppStore.getIsAlertProgress(),
          isFinished: AppStore.getIsFinished(),
          msg: AppStore.getMsg(),
      }
  };

  onAppChange() {
      this.setState(this.getData());
    };

  componentDidMount() {      
      AppStore.addChangeListener(this.onAppChange);
  };

  componentWillUnmount() {
      AppStore.removeChangeListener(this.onAppChange);
  };

  render() {
    if (!this.state.isShow) {
      return null
    }

    let title = '数据正在请求中...'
    let btns = []
    if (this.state.isFinished) {
      title = '请求完成'
    } else if (this.state.msg) {
      title = '请求失败！'
      btns = [{ text: '确定', onPress: this.onClose }]
    }

    return (
      <Modal
          title={title}
          transparent
          maskClosable={false}
          visible={true}
          onClose={this.onClose}
          footer={btns}
          platform="android"
        >
        <ProgressBar message={this.state.msg} isFinished={this.state.isFinished}/>
      </Modal>
    );
  }
}
