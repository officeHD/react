export const insureData = [{
    inputAmnt: true,
    productName: "复兴联合大保倍医疗保险",
    varietyCode: "110039",
    company: "复兴联合",
    insureAge: "30天-50周岁",
    holderAge: "18-70周岁",
    baseMoney: "10000",
    payment: "趸交",
    socialSecFlag: "Y",
    insuYear: "70",
    insuYearArry: [
        { name: "至70周岁", value: "70" },
        { name: "至80周岁", value: "80" },
        { name: "终身", value: "1000" }
    ],
    paymentArry: [
        { name: "趸交", value: "趸交" },
        { name: "5年", value: "5" },
        { name: "10年", value: "10" },
        { name: "15年", value: "15" },
        { name: "20年", value: "20" },
        { name: "30年", value: "30" }
    ],
    socialSecFlagArry: [
        { name: "有社保", value: "Y" },
        { name: "无社保", value: "N" },
    ],
    benefitArry: [
        { name: "法定", value: "1" },
        { name: "指定", value: "0" },
    ],
    relationArry: [
        { "value": "04", "name": "本人" },
        { "value": "00", "name": "配偶" },
        { "value": "01", "name": "父母" },
        { "value": "02", "name": "子女" }
    ],
    relationBenefitArry: [
        { "value": "00", "name": "配偶" },
        { "value": "01", "name": "父母" },
        { "value": "02", "name": "子女" }
    ],
    payBankArry: [
        { "value": "00", "name": "兴业银行", "label": "兴业银行" },
        { "value": "01", "name": "农业银行", "label": "农业银行" },
        { "value": "02", "name": "工商银行", "label": "工商银行" }
    ],
    payTypeArray: [
        { "value": "00", "name": "微信"},
        { "value": "01", "name": "银行卡"  }
    ],
    imparts:[],
    planData: [{
        name: "保障责任",
        value: "110039",
        id: 0,
        insureAge: "30天-50周岁",
        planName: "复兴联合大保倍医疗保险",
        defaultfee: 28.97,
        lists: [{
            title: "重大疾病医疗费用补偿金",
            name: "基本保额",
            content: "被保险人在保险期间内因意外或本合同生效（若曾复效，则自本合同最后复效）之日起 180 天后因非意外的原因在本公司指定或认可的医疗机构由专科医生 确诊初次发生本合同所列的一种或多种重大疾病 ，并在本公司指定或认可的 医疗网络本公司指定或认可的 医疗网络接受由具有相应资质的医护人员提供的医学必需的治疗，对于被保险人自该重大疾病确诊之日起以及确诊之日前 30 天内（含确诊当日）因治疗该疾病所支出的必须且合理的实际医疗费用，我们将根据第 2.4 条补偿原则向被保 险人给付重大疾病医疗费用补偿金，同时，本合同现金价值降低为零，轻症疾病医疗费用补偿金责任终止。"
        },
        {
            title: "轻症疾病医疗费用补偿金",
            name: "基本保额的20%",
            content: "被保险人因意外，或在本合同生效（若曾复效，则自本合同最后复效）之日起 180 天后因非意外的原因在本公司指定或认可的医疗机构由专科医生确诊初次发生本合同列明的一种或多种 轻症疾病，并在本公司指定或认可的医院网络接受由具有相应资质的医护人员提供的医学必需的治疗，对于被保险人自该轻症疾病确诊之日起以及确诊之日前 30 天内（含确诊当日）因治疗该疾病所支出的必须且合理的实际医疗费用，我们将根据第 2.4 条补偿原则向被保险人给付轻症疾病医疗费用补偿金。"
        },
        {
            title: "轻症疾病、重大疾病豁免保险费",
            name: "豁免保险费",
            content: "被保险人在保险期间内因意外，或在本合同生效（若曾复效，则自本合同最后复 效）之日起 180 天后因非意外的原因在本公司指定或认可的医疗机构由专科医生确诊初次发生本合同列明的一种或多种轻症疾病或重大疾病，则自确诊日后首个本合同的保险费约定交纳日开始，直至本合同最后一次保险费约定交纳日止，本公司豁免前述期间内本合同应交纳的保险费。"
        }
        ]
    }],
    insuNotice: [
        { name: "投保年龄", value: "30天-50周岁" },
        { name: "保障期限", value: " 至70周岁/80周岁/终身" },
        { name: "限制职业", value: "1-4类" },
        { name: "交费年限", value: "趸交/5年/10年/15年/20年/30年" }
    ],
    problem: [{
        question: 'Q : 本产品是否有呼待期? ',
        answer: 'A : 本产品意外身故/伤残和意外意外医疗没有等待期，被保险人首次投保或者非连续投保时，疾病住院保障等待期为30天。扁桃服、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天。'
    },
    {
        question: 'Q : 如果需要住院治疗，就诊医院是否有要求?',
        answer: 'A : 中户人民共和国境内(港、奥、台地区除外)合法经营的二级及二级以上公立医院，北京市平谷区、密云县、怀柔区所有医院除外，且不包括特需医疗、外宾/干部/联合病房、国际医疗中心、VIP部、联合医院。'
    },
    {
        question: 'Q : 本产品是否有呼待期oo? ',
        answer: 'A : 本产品意外身故/伤残和意外意外医疗没有等待期，被保险人首次投保或者非连续投保时，疾病住院保障等待期为30天。扁桃服、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天。'
    },
    {
        question: 'Q : 本产品是否有呼待期oo? ',
        answer: 'A : 本产品意外身故/伤残和意外意外医疗没有等待期，被保险人首次投保或者非连续投保时，疾病住院保障等待期为30天。扁桃服、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天。'
    },
    {
        question: 'Q : 本产品是否有呼待期oo? ',
        answer: 'A : 本产品意外身故/伤残和意外意外医疗没有等待期，被保险人首次投保或者非连续投保时，疾病住院保障等待期为30天。扁桃服、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天。'
    }],
    healthHtml:`<p> 
    请提供“是”或“否”的答案，若被保险人为未成年人，则请被保险人的父母代为回答; 如申请投保人豁免保费附加险，须对投保人健康状况进行告知 投保人应在对所有被保险人健康和职业状况充分了解的基础上履行如实告知义务。如被保险人健康和职业状况与下述告知内容不符：
     （1）本公司有权不同意承保或解除合同 <br> 
     （2）如发生保险事故，本公司不承担赔偿或给付保险金的责任，对于故意不如实告知的，不退还保险费 </p>`

}];

