import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import { Toast } from 'antd-mobile';

export default class Out extends TitleBar {

  // 后退一步
  goBack() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isAndroid && window.minsheng) {
      window.minsheng.clickOnAndroid();
    } else if (isiOS) {
      window.location.href = 'sn://clickOnIOS';
    } else {
      Toast.info('请使用手机的返回键', 2)
    }
  }

}