import { connect } from 'react-redux'
import * as act from '../actions'
import TitleBar from '../components/public/TitleBar'
import { Toast } from 'antd-mobile';

const mapStateToProps = (state) => ({
  title: state.varietyData.title,
  isEdit: state.isEdit,
  staffId: state.staffmes.staffId,
   type: state.staffmes.inApp,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: (toStep, isEdit, staffId) => {

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isEdit) {
      window.location.href = `../app_order_list?staffId=${staffId}`
    } else if (window.WebViewJavascriptBridge) {
      window.WebViewJavascriptBridge.callHandler('goBack', {}, function (response) {
        log('JS got response', response)
      })
    }else {
      Toast.info('请使用手机的返回键！', 3);
    }
  },
 

} )
 
const TitleBarIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarIndexContainer
