import { connect } from 'react-redux'
import * as act from '../actions'
import TitleBar from '../components/TitleBar'

const mapStateToProps = (state) => ({
  title: '车型选择',
  more: false,
  showParameter: false,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: () => {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    
    if (isAndroid && window.minsheng) {
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
