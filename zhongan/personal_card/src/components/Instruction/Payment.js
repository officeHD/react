import React, {Component} from 'react'
import SubTitle from './SubTitle'
import style from '../asset/css/index.less'

export default class Out extends Component{
  render() {
    return(
      <div className={style.payment}>
        <ul>
          <li><label className={style.num}>1</label><div><p>报案</p><p className={style.small}>拨打客服电话：<a href="tel:4009999595">400-999-9595</a>或<a href="tel:4008802177">400-880-2177</a>进行报案</p></div></li>
          <li><label className={style.num}>2</label><div><p>准备材料</p><p className={style.small}>远程协助您准备好理赔材料</p></div></li>
          <li><label className={style.num}>3</label><div><p>保险公司审核</p><p className={style.small}>准备好的保险材料寄送给保险公司</p></div></li>
          <li><label className={style.num}>4</label><div><p>领取理赔金</p><p className={style.small}>保险公司会将理赔金给付至指定账户</p></div></li>
        </ul>
        <button type="button"><a href="https://static.zhongan.com/website/health/iybApp/upload/insurance/claimNotice/clauses.html" target="_blank">理赔须知</a></button>
      </div>
    )
  }
}