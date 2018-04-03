import { connect } from 'react-redux'
import * as act from '../actions'
import TitleBar from '../components/TitleBar'
import { Toast } from 'antd-mobile';

const mapStateToProps = (state) => ({
  title: '驾乘意外伤害险',
  isEdit: state.isEdit,
  staffId: state.staffId,
    type: state.type,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: (toStep, isEdit, staffId) => {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isEdit) {
      window.location.href = `./app_order_list?staffId=${staffId}`
    } else if (isAndroid && window.minsheng) {
      window.minsheng.clickOnAndroid();
    } else if (isiOS){
      window.location.href = 'sn://clickOnIOS';
    } else {
      Toast.info('请使用手机的返回键！', 3);
    }
  }
})
  
const TitleBarIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarIndexContainer
