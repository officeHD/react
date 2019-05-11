import React from 'react'
import style from './asset/css/index.less'

const ClickDiv = ({ changeShow }) => (
    <div className="cover" onClick={changeShow}>
        <div className={style.bankSupport} >
            <table >
                <thead>
                    <tr>
                        <th> 银行名称 </th>
                        <th> 单笔限额  </th>
                        <th> 单日限额 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>中国银行</td>
                        <td>500万</td>
                        <td>500万</td>
                    </tr>
                    {/* <tr>
                        <td>浦发银行</td>
                        <td>2万</td>
                        <td>2万</td>
                    </tr> */}
                    {/* <tr>
                        <td>华夏银行</td>
                        <td>5万</td>
                        <td>50万</td>
                    </tr> */}
                    {/* <tr>
                        <td>广发银行</td>
                        <td>5万/5000</td>
                        <td>5万/不限</td>
                    </tr> */}
                    <tr>
                        <td>农业银行</td>
                        <td>500万</td>
                        <td>500万</td>
                    </tr>
                    {/* 
                    <tr>
                        <td>光大银行</td>
                        <td>4万</td>
                        <td>4万</td>
                    </tr> */}
                    {/* <tr>
                        <td>上海银行</td>
                        <td>20万</td>
                        <td>20万</td>
                    </tr>
                     */}
                    <tr>
                        <td>建设银行</td>
                        <td>500万</td>
                        <td>500万</td>
                    </tr>
                    {/* <tr>
                        <td>招商银行</td>
                        <td>5000</td>
                        <td>5000</td>
                    </tr> */}
                    {/* <tr>
                        <td>兴业银行</td>
                        <td>5万</td>
                        <td>5万</td>
                    </tr> */}
                    <tr>
                        <td>工商银行</td>
                        <td>1000万</td>
                        <td>1000万</td>
                    </tr>
                    <tr>
                        <td>招商银行</td>
                        <td>20万</td>
                        <td>20万</td>
                    </tr>
                    <tr>
                        <td>中信银行</td>
                        <td>无</td>
                        <td>无</td>
                    </tr>
                   
                    <tr>
                        <td>民生银行</td>
                        <td>100万</td>
                        <td>500万</td>
                    </tr>
                    <tr>
                        <td>邮储银行</td>
                        <td>1000万</td>
                        <td>1000万</td>
                    </tr>
                    {/* <tr>
                        <td>平安银行</td>
                        <td>5万</td>
                        <td>5万</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    </div>
)
export default ClickDiv