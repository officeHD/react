import React, { Component } from 'react'
import style from './asset/css/index.less'
import { Link} from 'react-router'
export default class Attention extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    let { attendData } = this.props;
    return (
      <div className={style.attention}>

        <div className={style.attlist}>
          <span onClick={this.props.onchangeB} ><img className={style.checked} src={require(`./asset/img/${attendData.attenB ? "checked" : "check"}.png`)} />本人声明本投保人仅为 </span>
          <a target="_blank" href="javascript:;" onClick={this.toggleShow}> 中国税收居民</a>
          {this.state.show ? <div className={style.mask} style={{ zIndex: "15" }}>
            <p> <span onClick={this.toggleShow}>×</span>中国税收居民是指在中国境内有住所，或者无住所而在境内居住满一年的个人。
            <br/>
            在中国境内有住所是指因户籍、家庭、经济利益关系而在中国境内习惯性居住。
            <br/> 
            在境内居住满一年是指在一个纳税年度中在中国境内居住365日。临时离境的，不扣减日数。
            <br/>
            临时离境是指在一个纳税年度中一次不超过30日或者多次累计不超过90日的离境。</p>
          </div> : null}
        </div>
        <div className={style.attlist}>
          <span onClick={this.props.onchangeA}> <img className={style.checked} src={require(`./asset/img/${attendData.attenA ? "checked" : "check"}.png`)} />
            我已阅读并同意此保险的</span>
          <Link to="/insuAtten">《投保须知》</Link>
          {/* <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tbxz.pdf&title=投保须知`}></a>、  */}
          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110029_shmsh.pdf&title=产品说明书`}>《产品说明书》</a>、 
          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110029_tiaokuan.pdf&title=保险条款`}>《保险条款》</a>、
          
          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tbts.pdf&title=人身保险投保提示书`}>《人身保险投保提示书》</a>和
         
          <a target="_blank" href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_koukuan.pdf&title=扣款知情同意书`}>《扣款知情同意书》</a>
        </div>
      </div>
    )
  };
}