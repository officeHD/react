import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import style from '../asset/css/Health.less';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import Bottom from './Bottom';
import {  Toast } from 'antd-mobile';
export default class App extends Component {
     constructor(props){
        super(props);
        this.nHasUn = this.nHasUn.bind(this);
        this.hasUn = this.hasUn.bind(this);
    }
     
hasUn(){
     if(this.props.stakeholder.height&&this.props.stakeholder.weight){
    InsuranceActionCreators.userNotHealth();
    }else{
        Toast.info('请填写被保人身高和体重')
    }
}
nHasUn(){
    if(this.props.stakeholder.height&&this.props.stakeholder.weight){
        InsuranceActionCreators.userHealth();
    }else{
        Toast.info('请填写被保人身高和体重')
    }
    
   
}
    render() {
 
        return (
            <div className={style.page}>
                
                <div className={style.article}>
                <p className={style.article_title}> <strong>健康告知</strong> </p>
                 
                <p>
                    请提供“是”或“否”的答案，若被保险人为未成年人，则请被保险人的父母代为回答;
                </p>
                <p>
                    如申请投保人豁免保费附加险，请务必对投保人健康状况进行告知
                </p>
                <p>
                    1、被保险人目前身高
                    <input  type="number" 
                    className={style.health_input}
                        onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'height')}}
                        value={this.props.stakeholder.height}
                    />厘米，目前体重
                    <input  type="number" 
                    className={style.health_input}
                            onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'weight')}}
                            value={this.props.stakeholder.weight}
                    />公斤。
                </p>
                <p>
                    2、您是否每天吸烟超过20支，且累计吸烟超过10年？
                </p>
                <p>
                    3、您是否每天饮白酒超过半斤？
                </p>
                <p>
                    4、您是否参与任何危险的运动或赛事（职业潜水、跳伞、滑翔、高峰攀岩、探险、武术比赛、摔跤比赛、特技表演、赛马、赛车、驾驶或乘坐非民航客机的私人飞行活动）
                </p>
                <p>
                    5、您是否准备前往或曾经居住在具有战乱风险的国家或地区？ 
                </p>
                <p>
                    6、您是否有被保险公司拒绝承保，或加费承保，或延期承保，或附加特别约定承保的经历？
                </p>
                <p>
                    7、您是否以被保险人的身份在其他保险公司投保人身保险，且保额超过50万？
                </p>
                <p>
                    8、您的父母、兄弟、姐妹是否患有恶性肿瘤、癌症、白血病、、肉瘤、恶性淋巴瘤、冠心病、心肌病、糖尿病、中风（脑出血、脑梗塞）、任何遗传性疾病
                </p>
                
                <p>
                    9、您是否有高血压、冠心病、心肌病、中风 (脑出血、脑梗塞)、动脉瘤、糖尿病、胰腺炎、慢性支气管炎、哮喘？ 
                </p>
                
                <p>
                    10、您是否有甲状腺结节、甲状腺功能亢进或减退、肝炎、肝硬化、肾炎、肾病综合征、肾功能不全、帕金森病、系统性红斑狼疮、艾滋病？
                </p>
                <p>
                    11、您是否有任何肿瘤或癌症、原位癌、结肠息肉、白血病、任何身体或智力残疾、精神障碍？
                </p>
                <p>
                    12、在过去的5年内，您是否因上述告知情况以外的疾病住院治疗，或被医生建议住院治疗，或因疾病连续服药超过1个月？
                </p>
                <p>
                    13、 您是否有或曾经患有与乳房或子宫、宫颈、卵巢、输卵管等女性生殖器官有关的疾病？
                </p>
                <p>
                    14、您是否已怀孕，且怀孕超过28周？
                </p>
                <p>
                    15、被保险人出生时是否有产伤、窒息、缺氧，或其他异常情况？
                </p>
                <p>
                    15、被保险人出生时体重是否低于2公斤（4斤）？
                </p>
                <p>
                    15、被保险人在我司及其他保险公司投保的人身险保险金额总额是否超过监管规定（不满10周岁20万、10周岁以上50万）？

                </p>
                
                
               
                <p>
                    <br/>
                </p>
            </div>   
                   <div className={style.bottom}>
                    <button   className={style.white} onClick={this.hasUn}>  部分情况有 </button>
                    <button  onClick={this.nHasUn }> 以上情况全无</button>
                </div> 
            </div>
        )
    };
}