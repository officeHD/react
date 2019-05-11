

import React from 'react';
import More from './public/More'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import style from './asset/css/index.less'

const SureHealth = ({ imparts, healthy, handelClick, goNext }) => {
    let showList = imparts.map((item, index) => {
        return (<li key={index}>{item.name} <More more={item.items} /></li>)
    })
    return (
        <div>
            <TitleBarStepContainer />
            <div className={style.article}>
            <p  className={style.articleT}>
            请提供“是”或“否”的答案，若被保险人为未成年人，则请被保险人的父母代为回答; 
            如申请投保人豁免保费附加险，须对投保人健康状况进行告知
            投保人应在对所有被保险人健康和职业状况充分了解的基础上履行如实告知义务。如被保险人健康和职业状况与下述告知内容不符：
            <br/>
            （1）本公司有权不同意承保或解除合同<br/>
            （2）如发生保险事故，本公司不承担赔偿或给付保险金的责任，对于故意不如实告知的，不退还保险费
            </p>
            
                <ol className={style.artitle}>

                    {showList}
                </ol> 
            </div>
            {healthy === "3" ?
                <div className={style.healthy}>
                    <div className={style.mask}>
                    </div>
                    <div className={style.tip}>
                        <p>根据您的健康状况，将进入人工核保流程，是否继续？</p>
                       
                    </div>
                    <ul className={style.bottom_btns}>
                        <li className={style.white} onClick={e => handelClick("2")}>取消</li>
                        <li className={style.normal} onClick={e => handelClick("1")}>确定</li>
                    </ul>
                </div> :
                <ul className={style.bottom_btns}>
                    <li className={style.white} onClick={e => handelClick("3")}>部分情况有</li>
                    <li className={style.normal} onClick={goNext}>以上全无</li>
                </ul>
            }
              {/* <ul className={style.bottom_btns}>
                    <li className={style.white} onClick={e => handelClick("1")}>部分情况有</li>
                    <li className={style.normal} onClick={goNext}>以上全无</li>
                </ul> */}
        </div>
    )
}

export default SureHealth
