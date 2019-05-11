import React, { Component } from 'react'
import Plans from '../public/Plans'
import moment from 'moment';
import { DatePicker, Picker } from 'antd-mobile';
import RadioSelector from '../RadioSelector'
import Detail34010 from './Detail34010'
import InputBox from '../InputBox'
import data from '../../reducers/data.json'
import PickerPlaceContainer from '../../containers/PickerPlaceContainer'
import style from './astyle.less'
import LazyLoad from 'react-lazyload';

export default class OutPut extends Component {
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
    let { varietyData, insuredsData, onChangeInsurantNo, showTrial, onChangeOccupationShow, occupation, onChangeInsuSocialSecFla, onChangeInsurantAddress, onChangeInsurantBirthday, onChangePayMent, onChangeInsurantGender, onChangeAmnt, onChangeInsuYear, onChangeSocialInsuAddress } = this.props;
    let maxAge = varietyData.maxAge;
    let minAge = varietyData.minAge;
    let maxDate;
    if (minAge) {
      maxDate = moment().subtract(minAge, "years")
    } else {
      maxDate = moment().subtract(30, "days")
    }
    return (
      <div>
        <LazyLoad >
          <img className={style.top_img} src={require(`../asset/img/banner/${varietyData.code}.jpg`)} />
        </LazyLoad >
        <div className={style.words}><p>* 本产品由复星联合健康保险股份有限公司承保</p></div>
        <div >
          <div className={style.plan_list}>
            <div className={style.plan_title}>
              <div>{varietyData.title}</div>
            </div>
          </div>
          <Plans title="投保年龄">

            {varietyData.tbAge}
          </Plans>
          <Plans title="保险期限" >终身</Plans>
          {/* <Plans title="社保" >
          <RadioSelector a="有" b="无" selected={insuredsData.insuSocialSecFlag === "N"} onSelect={onChangeInsuSocialSecFla} />
        </Plans>
        <PickerPlaceContainer title="居住城市"
          plans={true}
          placeVal={[insuredsData.insuProvince, insuredsData.insuCity, insuredsData.insuCounty]}
          checkPlace={onChangeInsurantAddress}
        />

        {
          insuredsData.insuSocialSecFlag === "Y" ? <PickerPlaceContainer title="社保所在地"
            plans={true}
            cols={2}
            placeVal={[insuredsData.socialInsuProvince, insuredsData.socialInsuCity]}
            checkPlace={onChangeSocialInsuAddress}
            parmars={insuredsData.insuCity}
          /> : null
        } */}
          {/* 
         */}
          {/* <Plans title="被保人身份证" >
          <InputBox val={insuredsData.insuIdNum} onChangeVal={onChangeInsurantNo} maxLength="18" />
        </Plans> */}
          {/* <Plans title="职业类别" >

          <div onClick={onChangeOccupationShow}>
            {occupation.occupationCategoryName == null || occupation.occupationCategoryName == "" ? <span>请选择</span> : occupation.occupationCategoryName}
          </div>
        </Plans> */}

          {/* <Picker
          extra="请选择"
          cols="1"
          data={varietyData.insuYearArry}
          value={varietyData.insuYear}
          onOk={v => onChangeInsuYear(v, insuredsData.insuCity)}
        >
          <Plans title="保险期限" ></Plans>
        </Picker> */}
          {/* <Picker
          extra="请选择交费年期"
          cols="1"
          data={varietyData.payMentArry}
          value={varietyData.payMent}
          onOk={v => onChangePayMent(v)}
        >
          <Plans title="交费年期" ></Plans>
        </Picker>
       

        <Plans title="保险金额" >
          <InputBox val={varietyData.amnt} onChangeVal={onChangeAmnt} maxLength="3" />万
        </Plans> */}
          {/* <Picker
          extra="请选择保险金额"
          cols="1"
          data={varietyData.amntArry}
          value={varietyData.amnt}
          onOk={v => onChangeAmnt(v)}
        > 
        </Picker> */}
        </div>
        <div className={style.trial}>
          <div><span className={style.trFee}>￥{varietyData.fee}/<span className={style.yearN}>年</span></span> 起</div>
          <div className={style.trial_click} onClick={this.toggleShow}>试算保费</div>
        </div>
        <Detail34010 />
        {this.state.show ? <div className={style.tralModel} style={{ zIndex: "1" }} onClick={this.toggleShow}>
          <div className={style.tralContent} onClick={e=>e.stopPropagation()}>
            <DatePicker
              mode="date"
              value={insuredsData.insuBirthDate ? moment(insuredsData.insuBirthDate) : ''}
              extra={"请选择"}
              minDate={moment().subtract(maxAge + 1, "years").add(1, 'days')}
              maxDate={maxDate}
              onOk={date => onChangeInsurantBirthday(moment(date).format('YYYY-MM-DD'))}
            >
              <Plans title="出生日期"> </Plans>
            </DatePicker>
            <Plans title="性别" >
              <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={insuredsData.insuSex} onSelect={onChangeInsurantGender} />
            </Plans>
            <Plans title="保险金额" >
              <InputBox val={varietyData.amnt} onChangeVal={onChangeAmnt} maxLength="3" />万
          </Plans>
            <Picker
              extra="请选择交费年期"
              cols="1"
              data={varietyData.payMentArry}
              value={varietyData.payMent}
              onOk={v => onChangePayMent(v)}
            >
              <Plans title="交费年期" ></Plans>
            </Picker>
            <div className={style.trial}>
              <div><span className={style.trFee}>￥{varietyData.fee}/<span className={style.yearN}>年</span></span> </div>
              <div className={style.trial_sure} onClick={this.toggleShow}>确定</div>
            </div>
          </div>
        </div> : null}
      </div>
    )
  }
}



