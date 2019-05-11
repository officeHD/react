import {
    CHANGE_MAX_AGE, CHANGE_INSURE_YEAR, SET_INSURE_YEAR_ARRY, SET_PAY_MENT_ARRY,
    CHANGE_EFFECTIVE_DATE, CHANGE_VARIETY_CODE, CHANFE_FEE, SET_AMENT_ARRY,
    CHANGE_AMNT, INIT_EDIT_DATA, CHANGE_PAYMENT, CHANGE_INSURE_YEAR_FLAGE, RESET,
    CHANGE_EXTRA, CHANGE_REVEN_CODE, CHANGE_ACCOUNT, CHANGE_EXTRA_FEE, CLOSE_EXTRA,
    CHANGE_FOR_INSURED
} from '../actions'
import { dateToString } from '../api'
import {validNum  } from '../actions/check'
import data from './data.json'


let defaultData = {
    "code": "110045",
    "title": "复星联合星如意重大疾病保险",
    "imgp": "利率保底 财富增值",
    "imgs": "弹性支取 灵活方便",
    "tbAge": "30天-50周岁",
    "minAge": '',
    "minAgeD": 30,
    "maxAge": 50,
    "fee": 67,
    "extra": false,
    "extraFee": 0,
    "insuYear": ["105"],
    "insuYearArry": [],
    "insuYearFlag": "A",
    "payMent": ["趸交"],
    "payMentArry": [
        { "value": "趸交", "label": "趸交" }, { "value": "5", "label": "5年" }, { "value": "10", "label": "10年" },
        { "value": "15", "label": "15年" }, { "value": "20", "label": "20年" }, { "value": "30", "label": "30年" }
    ],
    "amnt": 10,
    "amntArry": [],
    "insuImparts": [
        {
            "informContext": "1.被保险人是否患有或曾经患有或已经被告知有下列疾病：恶性肿瘤、肺结节疾病、脑血管疾病、脑外伤严重后遗症、心脏疾病（心功能不全Ⅱ级以上）、高血压（Ⅱ级及以上）、糖尿病、冠心病、心肌梗塞、呼吸衰竭、肺心病、严重肝病（如肝硬化、慢性活动性肝炎）、慢性肾脏疾病、肾功能不全、再生障碍性贫血、癫痫、系统性红斑狼疮、性传播疾病、白血病、慢性酒精中毒、神经精神疾病、智力障碍、阿尔兹海默氏病（老年痴呆或早老年痴呆症）、帕金森氏病、重症肌无力、多发性硬化症、失明、瘫痪、先天性疾病、遗传性疾病、接受器官移植；身体畸形或残疾；艾滋病患者或艾滋病毒携带者，曾经或正在吸毒？",
            "informId": "", "informReply": "N", "sort": 1
        },
        {
            "informContext": "2.（妇女适用）被保险人现在是否怀孕28周以上或产后两月内？",
            "informId": "", "informReply": "N", "sort": 2
        },
        {
            "informContext": "3.既往事项被保险人过去两年内投保人身保险或健康保险时，是否被保险公司拒保、延期、加费或者附加相关条件承保？ 被保险人正在申请或已生效的寿险累计保额是否大于等于300万? 被保险人每日吸烟量是否达40支及以上？",
            "informId": "", "informReply": "N", "sort": 3
        },
        {
            "informContext": "4.被保险人是否有危险嗜好或从事危险活动，如赛车、赛马、滑雪、攀岩、蹦极、潜水、跳水、拳击、武术、摔跤、探险或特技活动及其他高风险活动？",
            "informId": "", "informReply": "N", "sort": 4
        }
    ],
    "imparts": [
        {
            "name": "1.您最近2年内是否因健康异常发生过住院或手术，或由体检医师或医生给您提出住院或手术的建议？此处所述住院治疗或手术不包含咽喉炎、鼻炎、扁桃体炎、肺炎、上呼吸道感染、阑尾炎、脂肪瘤、骨折、颈椎疾病、急性胃炎或非萎缩性胃炎、顺产手术、胆囊炎、剖腹产。"
        },
        {
            "name": "2.您是否抽烟大于400支年（支年=每日吸烟支数*烟龄）？"
        },
        {
            "name": "3.过去2年中，您是否在3个月内因不明原因导致的体重增加或减少超过5公斤？"
        },
        {
            "name": "4.您是否在投保或复效时被拒保、延期、加费或除外责任承保？ 或最近1年累计投保重疾险产品保额超过100万？"
        },
        {
            "name": "5.您是否参与任何危险的运动或赛事（如赛车、海拔3000米以上登山、攀岩、滑雪、潜水、跳伞、蹦极、驾驶航空机具以及其它危险运动或赛事）？"
        },
        {
            "name": "6.您是否曾经或正在使用镇静安眠药、迷幻剂、毒品或其他违禁药物，是否有麻醉剂成瘾、酒精或药物滥用成瘾？"
        },
        {
            "name": "7.您是否患有或曾患有下列疾病或症状，或因下列疾病而接受检查或治疗？ ",
            "items": [
                "（1）先天性疾病、癫痫、身体或智力残疾、双耳失聪、双眼失明或高度近视1000度以上；",
                "（2）心脑血管疾病（高血压、冠心病、主动脉狭窄、肺动脉高压、脑血管瘤或畸形、脑中风、心肌梗塞）；  ",
                "（3）呼吸系统疾病（慢性支气管炎、肺结节疾病、胸膜粘连、哮喘、肺结核、肺栓塞、肺纤维化、慢性阻塞性肺病、终末期肺病、呼吸功能衰竭）；",
                "（4）内分泌或免疫系统疾病（糖尿病、甲状腺功能亢进症、甲状腺功能减退症、原发性醛固酮增多症、嗜铬细胞瘤、系统性红斑狼疮、肌营养不良、强直性脊柱炎、风湿或类风湿关节炎）；",
                "（5）消化系统疾病（肝炎病毒感染或携带、肝硬化、重症肝炎、胰腺炎、萎缩性胃炎、胃或十二指肠溃疡、溃疡性结肠炎、克隆氏病）；",
                "（6）泌尿系统疾病（急性肾炎、慢性肾炎、肾病综合症、肾功能不全、肾功能衰竭、肾动脉狭窄、多囊肾）；  ",
                "（7）血液系统或淋巴系统疾病（贫血、再生障碍性贫血、白血病、血友病、骨髓增生异常综合症、何杰金氏病、非何杰金氏淋巴瘤）； ",
                "（8）精神或神经系统疾病（抑郁症、焦虑症、精神分裂症、酒精或药物滥用、癫痫、帕金森氏症、阿尔兹海默病、重症肌无力、多发性硬化）；",
                "（9）癌症或任何肿瘤、HIV病毒携带或感染、艾滋病；未明确为良性的息肉、囊肿、结节（如甲状腺结节）、肿块、赘生物。"
            ]
        },
        {
            "name": "8.您是否 ",
            "items": [
                "（1）从事如下涉及或接触危险物职业：矿工、航海、海上救护、潜水、水下作业人员、爆破工、采掘工、隧道坑道或井下作业机械加工业搬运工、电讯电台及电力部门天线设施的制造、安装、维修人员、硫酸盐酸或硝酸等有毒化工品制造人员、森林砍伐人员、火药爆竹制造及加工、液化气体制造、高压电工程作业人员、高空作业人员、战地记者、高空杂技、特技、武打演员、动物园驯兽师；",
                "（2）现役军、警人员：防暴警察及负有特殊任务者、地面部队人员、水兵、空军飞行员、前线军人、特种兵（伞兵、海军陆战队、化学兵、布雷爆破任务兵）；",
                "（3）曲棍球、橄榄球球员、滑雪教练、滑雪运动员。"
            ]
        },
        {
            "name": "9.您的父母是否有人患过以下疾病？ 卵巢癌或乳腺癌（仅对女性被保险人）、大肠癌、心肌梗塞、冠心病、脑中风、糖尿病、多发性硬化症、帕金森氏病、多囊肾性疾病。"
        },
        {
            "name": "10.15周岁以上女性告知 ：",
            "items": [
                "（1）您是否为高龄孕妇（35周岁以上）或怀孕28周以上或存在妊娠并发症？",
                "（2）您是否曾/正患有以下症状或疾病？乳房肿块、阴道不规则流血、子宫肌瘤、子宫内膜异位症、卵巢囊肿、TCT或HPV阳性、重度宫颈炎？"
            ]
        },
        {
            "name": "11.婴幼儿告知（2周岁及以下告知）",
            "items": [
                "（1）被保险人出生时体重是否小于2.5公斤？",
                "（2）是否有早产、抽搐、窒息、缺氧、畸形、发育迟缓、脑瘫、智能障碍、听力障碍、其他残障、反复气喘、遗传或先天性疾病？"
            ]
        }
    ]
}
// 产品配置信息
export const varietyData = (state = defaultData, action) => {
    switch (action.type) {
        case RESET:
            return {
                ...state, fee: 67, payMentArry: [
                    { "value": "趸交", "label": "趸交" }, { "value": "5", "label": "5年" }, { "value": "10", "label": "10年" },
                    { "value": "15", "label": "15年" }, { "value": "20", "label": "20年" }, { "value": "30", "label": "30年" }
                ], "extra": false,
                "extraFee": 0,
            }
        case CHANGE_MAX_AGE:
            return { ...state, maxAge: action.val }
        case CHANGE_VARIETY_CODE:
            return { ...state, code: action.val }
        case CHANGE_INSURE_YEAR:
            return { ...state, insuYear: action.val }
        case SET_INSURE_YEAR_ARRY:
            return { ...state, insuYearArry: action.val }
        case CHANGE_PAYMENT:
            return { ...state, payMent: action.val }
        case SET_PAY_MENT_ARRY:
            return { ...state, payMentArry: action.val }
        case SET_AMENT_ARRY:
            return { ...state, amntArry: action.val }
        case CHANGE_INSURE_YEAR_FLAGE:
            return { ...state, insuYearFlag: action.val }
        case CHANGE_EXTRA_FEE:
            return { ...state, extraFee: action.val }
        case CHANGE_AMNT:
            return { ...state, amnt: action.val }
        case CHANGE_EXTRA:
            return { ...state, extra: !state.extra }
        case CLOSE_EXTRA:
            return { ...state, extra: false }
        case CHANGE_FOR_INSURED:
            if (action.val == "04") {
                return { ...state, extra: false }
            } else {
                return state
            }
        case INIT_EDIT_DATA:
            return { ...state, amnt: [`${action.entity.planLines[0].amnt / 10000}`], fee: action.entity.planLines[0].prem }

        case CHANFE_FEE:
            return { ...state, fee: action.val }
        default:
            return state
    }
}

//保费
export const fee = (state = 0, action) => {
    switch (action.type) {
        case CHANFE_FEE:
            return action.val
        case INIT_EDIT_DATA:
            return action.entity.plan.planLines[0].prem
        default:
            return state
    }
}

//缴费期间
export const payMent = (state = [10], action) => {
    switch (action.type) {
        case CHANGE_PAYMENT:
            return action.val
        case INIT_EDIT_DATA:
            let payMent = action.entity.plan.insurances[0].insuranceDuration;
            if (action.entity.plan.insurances[0].insuranceDuration === "1000") {
                payMent = "趸交"
            }
            return [payMent]
        default:
            return state
    }
}

//起保日期
let dd = new Date();
dd.setDate(dd.getDate() + 1); //获取AddDayCount天后的日期 
let tomorrow = dateToString(dd);
export const effectiveDate = (state = tomorrow, action) => {
    switch (action.type) {
        case CHANGE_EFFECTIVE_DATE:
            return action.val
        default:
            return state
    }
}
let defaulrenew = {
    "payMode": "4",
    "bankCode": "",
    "account": "",
    "accountName": ""
}
export const renewInfo = (state = defaulrenew, action) => {
    switch (action.type) {
        case RESET:
            return defaulrenew
        case CHANGE_REVEN_CODE:
            let bankS = data.payBank.filter((item) => action.val[0] == item.value);
            console.log(bankS);
            return { ...state, bankCode: bankS[0].value, accountName: bankS[0].label }
        case CHANGE_ACCOUNT:
            return { ...state, account: validNum(action.val,[4,4,4,4,4]," ")  }
        default:
            return state
    }
}


let defaultRisks = {
    amnt: 2000000,
    insuYear: "105",
    drawAge: "",
    insuYearFlag: "A",
    mult: 1,
    prem: 67,
    riskCode: "120015",
    payIntv: "12",
    payperiod: "10",
    payPeriodFlag: "Y",
    socialSecFlag: "N"
};
//附加险
export const risksData = (state = [defaultRisks], action) => {
    switch (action.type) {
        case RESET:
            return [defaultRisks]

        case CHANGE_PAYMENT:
            return { ...state, payMent: action.val }
        default:
            return state
    }
}




