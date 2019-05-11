import React from 'react';
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import Plans from './public/Plans'
import RadioSelector from './RadioSelector'

import RelationToBnfs from '../containers/RelationToBnfs'
import style from './asset/css/index.less'
import data from '../reducers/data.json'

let CustomChildren = ({ extra, onClick }) => (
    <span onClick={onClick} style={{ float: 'left', color: '#333' }}>{extra}</span>
);
const BnfsList = ({ item, index, onchangeBnfsName, onchangeBnfsNo, onchangeBnfsPhone,onChangeBnfsBirthday, onChangeBnfsGender, onChangeBnfsEffictive, onchangeBnfsbnfLot, onDelBnfs }) => {

    return (
        <div style={{ marginBottom: "10px" }}>
            <Plans title={`身故受益人${index + 1}`} >
                <span onClick={e => onDelBnfs(index)} style={{ color: "#BA1E17" }}>删除</span>
            </Plans>
            <RelationToBnfs pamars={index} forInsuredPerson={[item.relationToInsured]} />
            <BlankLi item="姓名">
                <InputBox val={item.name} onChangeVal={onchangeBnfsName} params={index} />
            </BlankLi>
            <BlankLi item="手机号">
                <InputBox val={item.phone} onChangeVal={onchangeBnfsPhone} params={index} maxLength={11} />
            </BlankLi>
            {/* <BlankLi item="证件类型">
                <span>身份证</span>
            </BlankLi> */}
            <BlankLi item="身份证号">
                <InputBox className="account" val={item.idNo} onChangeVal={onchangeBnfsNo} maxLength={20} params={index} />
            </BlankLi>
            {/* <DatePicker
                mode="date"
                value={item.birthday ? moment(item.birthday) : null}
                extra={"出生日期"}
                minDate={moment().subtract(55, "years")}
                maxDate={moment().subtract(28, "days")}
                onOk={date => onChangeBnfsBirthday(moment(date).format('YYYY-MM-DD'))}
                disabled={true}
            >
                <BlankLi item="出生日期">
                </BlankLi>
            </DatePicker> */}
            <BlankLi item="受益人性别">
                <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={item.sex} onSelect={onChangeBnfsGender} disabled={0} />
            </BlankLi>
            <BlankLi item="证件有效期">
                <DatePicker
                    mode="date"
                    value={item.idEndDate ? moment(item.idEndDate) : null}
                    extra={"请选择"}
                    minDate={moment()}
                    maxDate={moment().add(20, "years")}
                    onOk={date => onChangeBnfsEffictive(moment(date).format('YYYY-MM-DD'), index)}
                >
                    <CustomChildren> </CustomChildren>
                </DatePicker>
                <label className={style.radio_style} onClick={e => onChangeBnfsEffictive('', index)} style={{ float: 'right', width: 'auto' }}>
                    <img src={require(item.idValiDateType == "1" ?'./asset/img/anxinli/radio_on.png' : './asset/img/anxinli/radio_off.png') }
                        style={{ marginRight: '6px' }}
                    />
                    长期有效
                  </label>
            </BlankLi>
            <BlankLi item="受益比例">
                <InputBox val={item.bnfLot} onChangeVal={onchangeBnfsbnfLot} tip="请输入1~100的整数" params={index} />
            </BlankLi>

        </div>
    )
}

export default BnfsList