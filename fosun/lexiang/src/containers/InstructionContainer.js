import {
  connect
} from 'react-redux'
import {
  checkRate
} from '../actions'
import Instruction from '../components/Instruction'
import {
  Toast
} from 'antd-mobile';
const mapDispatchTo = (state) => ({
  staffId: state.staffmes.workNum,
  type: state.staffmes.inApp,
  edit: state.edit,
  varietyCode: sessionStorage.varietyCode,
  prem: state.varietyData.fee
})

const mapDispatchToProps = (dispatch) => ({

  onGoToStep: (staffId) => {

    if (staffId) {
      // dispatch(checkRate());
      window.location.href = "#/step1";
    } else {
      if (window.minsheng) {
        window.minsheng.login()
      } else {
        window.location.href = `sn://login`;
      }
    }
    // location.href = '#/sure'
  },
  onShare: (staffId) => {
    // console.log(staffId)
    if (staffId) {
      if (window.WebViewJavascriptBridge) {
        var data = {
          url: `http://tps.mschn.cn/mstps//app/common/product/visit_fuxin_lexiang?type=pc&workNum=${staffId}`,
          image: "http://tps.mschn.cn/mstps/static/img/lifeInsurance/xinruyi_03.png",
          title: "复星联合乐享一生医疗险",
          content: "乐享一生，百万医疗",
          type: "friends"
        };
        window.WebViewJavascriptBridge.callHandler(
          'toShare', data,
          function (responseData) {
            console.log('来自Java的回传数据： ' + responseData);
          }
        );
      } else {
        if (window.minsheng) {
          window.minsheng.share()
        } else {
          try {
            window.location.href = `sn://share`;
          } catch (err) {
            Toast.info("登录失效，请登录")
          }
        }
      }
    } else {
      if (window.WebViewJavascriptBridge) {
        var data = {
          url: `http://tps.mschn.cn/mstps//app/common/product/visit_fuxin_lexiang?type=pc&workNum=${staffId}`,
          image: "http://tps.mschn.cn/mstps/static/img/lifeInsurance/xinruyi_03.png",
          title: "复星联合乐享一生医疗险",
          content: "乐享一生，百万医疗",
          type: "friends"
        };
        window.WebViewJavascriptBridge.callHandler(
          'toShare', data,
          function (responseData) {
            console.log('来自Java的回传数据： ' + responseData);
          }
        );
      } else {
        if (window.minsheng) {
          window.minsheng.login()
        } else {
          try {
            window.location.href = `sn://login`;
          } catch (err) {
            Toast.info("登录失效，请登录")
          }
        }
      }
    }

  }

})


const InstructionContainer = connect(
  mapDispatchTo,
  mapDispatchToProps
)(Instruction)

export default InstructionContainer