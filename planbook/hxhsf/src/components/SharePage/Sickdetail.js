import React, {Component} from 'react';
import Sickdetail from './Sickdetail';
import style from '../asset/css/share.less';
import { Link } from 'react-router';
export default class Payment extends Component {
    constructor(props){
        super(props); 
        this.state={
          show:false,
          left:true
           
        }
        this.handelclick=this.handelclick.bind(this); 
        this.setLeft=this.setLeft.bind(this); 
        this.setRight=this.setRight.bind(this); 
    }
    handelclick(){
      this.setState({
          show:true,
      })
    }
    setLeft(){
      this.setState({
          left:true,
          
      })
    }
     setRight(){
      this.setState({
          left:false,
           
      })
    }
    render() {
      if (!this.props.isShow) {
            return null
        }
       return (
        <div className={style.sickdetail}>
          <div className={style.cell}>

            <div className={style.sick_content}>
              <div className={style.title}>病种详情</div>
              <div className={style.operation}>
                <label onClick={this.setLeft}>
                  <span className={this.state.left?style.active:''}>重疾</span>
                  
                </label>
                <label onClick={this.setRight}>
                   <span className={this.state.left?'':style.active}>轻症</span>
                </label>
              </div>
              <div className={style.layer_content}>
                {this.state.left?<div className={style.left_content}>
                  1.恶性肿瘤<br/>
                  2.急性心肌梗塞<br/>
                  3.脑中风后遗症<br/>
                  4.重大器官移植术或造血干细胞移植术<br/>
                  5.冠状动脉搭桥术（或称冠状动脉旁路移植术）<br/>
                  6.终末期肾病（或称慢性肾功能衰竭尿毒症期）<br/>
                  7.多个肢体缺失<br/>
                  8.急性或亚急性重症肝炎<br/>
                  9.良性脑肿瘤<br/>
                  10.慢性肝功能衰竭失代偿期<br/>
                  11.脑炎后遗症或脑膜炎后遗症<br/>
                  12.深度昏迷<br/>
                  13.双耳失聪<br/>
                  14.双目失明<br/>
                  15.瘫痪<br/>
                  16.心脏瓣膜手术<br/>
                  17.严重阿尔茨海默病<br/>
                  18.严重脑损伤<br/>
                  19.严重帕金森病<br/>
                  20.严重Ⅲ度烧伤<br/>
                  21.严重原发性肺动脉高压<br/>
                  22.严重运动神经元病<br/>
                  23.语言能力丧失<br/>
                  24.重型再生障碍性贫血<br/>
                  25.主动脉手术<br/>
                  26.严重多发性硬化<br/>
                  27.终末期肺病<br/>
                  28.颅脑手术<br/>
                  29.严重Ｉ型糖尿病<br/>
                  30.严重类风湿性关节炎<br/>
                  31.急性出血坏死性胰腺炎开腹手术<br/>
                  32.侵蚀性葡萄胎（或称恶性葡萄胎）<br/>
                  33.经输血导致的感染艾滋病病毒或者患艾滋病<br/>
                  34.系统性红斑狼疮并发重度的肾功能损害<br/>
                  35.重症肌无力<br/>
                  36.持续植物人状态<br/>
                  37.严重心肌病<br/>
                  38.严重溃疡性结肠炎<br/>
                  39.溶血性链球菌引起的坏疽<br/>
                  40.坏死性筋膜炎<br/>
                  41.系统性硬皮病<br/>
                  42.严重克隆病<br/>
                  43.进行性核上性麻痹<br/>
                  44.非阿尔茨海默病所致严重痴呆<br/>
                  45.肺泡蛋白质沉积症<br/>
                  46.严重慢性复发性胰腺炎<br/>
                  47.严重面部烧伤<br/>
                  48.因职业关系导致的感染艾滋病病毒或者患艾滋病<br/>
                  49.原发性硬化性胆管炎<br/>
                  50.肺淋巴管肌瘤病<br/>
                  51.象皮病<br/>
                  52.胰腺移植<br/>
                  53.严重川崎病<br/>
                  54.肾髓质囊性病<br/>
                  55.克雅氏病<br/>
                  56.埃博拉病毒感染<br/>
                  57.失去一肢及一眼<br/>
                  58.特发性慢性肾上腺皮质功能减退<br/>
                  59.严重感染性心内膜炎<br/>
                  60.嗜铬细胞瘤<br/>
                  61.严重自身免疫性肝炎<br/>
                  62.疾病或外伤所致智力障碍<br/>
                  63.自体造血干细胞移植术<br/>
                  64.严重瑞氏综合征<br/>
                  65.严重肠道疾病并发症<br/>
                  66.重症骨髓增生异常综合征<br/>
                  67.严重慢性缩窄型心包炎<br/>
                  68.重症手足口病<br/>
                  69.严重幼年型类风湿性关节炎<br/>
                  70.破裂脑动脉瘤夹闭手术<br/>
                </div>: <div className={style.left_content}>
                  1.极早期恶性肿瘤或者恶性病变<br/>
                  2.脑垂体瘤、脑囊肿及脑血管瘤<br/>
                  3.急性心肌梗塞（轻症）<br/>
                  4.Ⅲ度房室传导阻滞<br/>
                  5.冠状动脉介入手术（非开胸手术）<br/>
                  6.心脏瓣膜介入手术（非开胸手术）<br/>
                  7.主动脉内手术（非开胸手术）<br/>
                  8.特定周围动脉疾病的血管介入治疗<br/>
                  9.原发性肺动脉高压<br/>
                  10.视力严重受损<br/>
                  11.单眼视力丧失<br/>
                  12.单耳失聪<br/>
                  13.运动神经元病<br/>
                  14.脑中风后遗症（轻症）<br/>
                  15.颅脑手术（轻症）<br/>
                  16.脑损伤<br/>
                  17.双侧睾丸切除手术<br/>
                  18.肾脏切除<br/>
                  19.单个肢体缺失<br/>
                  20.瘫痪（轻症）<br/>
                  21.胆道重建手术<br/>
                  22.肝叶切除<br/>
                  23.肺切除<br/>
                  24.Ⅲ度烧伤<br/>
                  25.面部烧伤<br/>
                  26.面部重建手术<br/>
                  27.颈动脉血管成形术或内膜切除术<br/>
                  28.心包膜切除术<br/>
                  29.腔静脉过滤器植入术<br/>
                  30.再生障碍性贫血<br/>
                </div>}
              </div>
              <div className={style.content_wrap}>
                <label><Link to="/term">查看完整版</Link></label>
                <label onClick={this.props.close}>关闭</label>
              </div>
          </div>
	          
        </div>
   		</div>

        )
    };
}