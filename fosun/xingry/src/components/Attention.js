import React, { Component } from 'react'
import style from './asset/css/index.less'
import { Link } from 'react-router'
export default class Attention extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      article:"",
    }
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow(type) {
    let text="中国税收居民是指在中国境内有住所，或者无住所而在境内居住满一年的个人。在中国境内有住所是指因户籍、家庭、经济利益关系而在中国境内习惯性居住。在境内居住满一年，是指在一个纳税年度中在中国境内居住365日。临时离境的，不扣减日数。临时离境，是指在一个纳税年度中一次不超过30日或者多次累计不超过90日的离境。";
    if(type==="1"){
      text="";
    } 
    this.setState({
      show: !this.state.show,
      article:text
    })
  }
  render() {
    let { attendData, extra } = this.props;
    return (
      <div className={style.attention}>
      <div className={style.attlist}>
          <span onClick={this.props.onchangeB} >
            {/* <img className={style.checked} src={require(`./asset/img/${attendData.attenC ? "checked" : "check"}.png`)} /> */}
             温馨提示：保险缴费期内累计应缴保费大于等于20万元，需同时提供投保人和被保险人的身份证正反面
          </span>
           
          
        </div>
        <div className={style.attlist}>
          <span onClick={this.props.onchangeB} >
            <img className={style.checked} src={require(`./asset/img/${attendData.attenB ? "checked" : "check"}.png`)} />本人声明本投保人仅为
          </span>
          <a target="_blank" href="javascript:;" onClick={e=>this.toggleShow("2")}> 中国税收居民</a>
          {this.state.show ?
            <div className={style.mask} style={{ zIndex: "15" }}>
              <p> <span onClick={this.toggleShow}>×</span>{this.state.article}</p>
            </div> : null
          }
        </div>
        <div className={style.attlist}>
          <span onClick={this.props.onchangeA}> <img className={style.checked} src={require(`./asset/img/${attendData.attenA ? "checked" : "check"}.png`)} />
            我已阅读并同意此保险的</span>
          <Link to="/insuAtten">《投保须知》</Link>
          {/* <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tbxz.pdf&title=投保须知`}></a>、  */}
          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_shmsh.pdf&title=产品说明书`}>《产品说明书》</a>、
          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tiaokuan.pdf&title=保险条款`}>《保险条款》</a>、
          {extra ? <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=120015_tiaokuan.pdf&title=附加投保人豁免保险费重大疾病保险条款`}>《附加投保人豁免保险费重大疾病保险条款 》、</a> : ""}


          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tbts.pdf&title=人身保险投保提示书`}>《人身保险投保提示书》</a>和

          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_koukuan.pdf&title=扣款知情同意书`}>《扣款知情同意书》</a>
        </div>
      </div>
    )
  };
}