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
                  5.冠状动脉搭桥术<br/>
                  6.终末期肾病<br/>
                  7.多个肢体缺失<br/>
                  8.急性或亚急性重症肝炎<br/>
                  9.良性脑肿瘤<br/>
                  10.慢性肝功能衰竭失代偿期<br/>
                  11.脑炎后遗症或脑膜炎后遗症<br/>
                  12.深度昏迷<br/>
                  13.双耳失聪－三周岁始理赔<br/>
                  14.双目失明－三周岁始理赔<br/>
                  15.瘫痪<br/>
                  16.心脏瓣膜手术<br/>
                  17.严重阿尔茨海默病<br/>
                  18.严重脑损伤<br/>
                  19.严重帕金森病<br/>
                  20.严重III度烧伤<br/>
                  21.严重原发性肺动脉高压<br/>
                  22.严重运动神经元病<br/>
                  23.语言能力丧失－三岁始理赔<br/>
                  24.重型再生障碍性贫血<br/>
                  25.主动脉手术<br/>
                  26.慢性呼吸功能衰竭<br/>
                  27.严重多发性硬化<br/>
                  28.脊髓灰质炎<br/>
                  29.全身性重症肌无力<br/>
                  30.严重冠心病<br/>
                  31.严重心肌病<br/>
                  32.系统性红斑狼疮III型或以上狼疮性肾炎<br/>
                  33.因职业关系导致的人类免疫缺陷病毒HIV感染<br/>
                  34.经输血导致的人类免疫缺陷病毒HIV感染<br/>
                  35.严重克隆病<br/>
                  36.严重溃疡性结肠炎<br/>
                  37.1型糖尿病<br/>
                  38.肺源性心脏病<br/>
                  39.植物人状态<br/>
                  40.严重类风湿性关节炎<br/>
                  41.非阿尔茨海默病所致严重痴呆<br/>
                  42.多处臂丛神经根性撕脱<br/>
                  43.严重哮喘（25周岁前理赔）<br/>
                  44.严重川崎病<br/>
                  45.严重的系统性硬皮病<br/>
                  46.丝虫病所致象皮肿<br/>
                  47.胰腺移植<br/>
                  48.急性坏死胰腺炎开腹手术<br/>
                  49.慢性复发性胰腺炎<br/>
                  50.疯牛病<br/>
                  51.肾髓质囊性病<br/>
                  52.严重的原发性硬化性胆管炎<br/>
                  53.特发性慢性肾上腺皮质功能减退<br/>
                  54.溶血性链球菌引起的坏疽<br/>
                  55.颅脑手术<br/>
                  56.严重肌营养不良症<br/>
                  57.严重心肌炎<br/>
                  58.肝豆状核变性<br/>
                  59.侵蚀性葡萄胎<br/>
                  60.破裂脑动脉瘤夹闭手术<br/>
                  61.需手术切除的嗜铬细胞瘤<br/>
                  62.进行性核上性麻痹<br/>
                  63.严重幼年型类风湿性关节炎<br/>
                  64.严重肠道疾病并发症<br/>
                  65.严重瑞氏综合症<br/>
                  66.严重自身免疫性肝炎<br/>
                  67.严重的III度房室传导阻滞<br/>
                  68.细菌性脑脊髓膜炎<br/>
                  69.严重感染性心内膜炎<br/>
                  70.严重的骨髓增生异常综合征<br/>
                  71.严重癫痫<br/>
                  72.自体造血干细胞移植<br/>
                  73.肺淋巴管肌瘤病<br/>
                  74.肺泡蛋白质沉积症<br/>
                  75.小肠移植<br/>
                  76.疾病或外伤所致智力障碍<br/>
                  77.骨生长不全症<br/>
                  78.严重面部烧伤<br/>
                  79.亚急性硬化性全脑炎<br/>
                  80.脊髓小脑变性症<br/>
                  81.进行性多灶性白质脑病<br/>
                  82.弥漫性血管内凝血<br/>
 
                </div>: <div className={style.left_content}>
                  1.非危及生命的（极早期的）恶性病变<br/>
                  2.冠状动脉介入手术<br/>
                  3.轻微脑中风<br/>
                  4.心脏瓣膜介入手术<br/>
                  5.脑垂体瘤、脑囊肿、脑动脉瘤及脑血管瘤<br/>
                  6.视力严重受损–三周岁始理赔<br/>
                  7.主动脉内介入手术<br/>
                  8.较小面积III度烧伤(10%）<br/>
                  9.慢性肾功能损害–肾功能衰竭期<br/>
                  10.重症头部外伤<br/>
                  11.单个肢体缺失<br/>
                  12.单侧肺脏切除<br/>
                  13.肝脏手术<br/>
                  14.早期运动神经性疾病<br/>
                  15.人工耳蜗植入术<br/>
                  16.胆道重建手术<br/>
                  17.双侧卵巢或睾丸切除术<br/>
                  18.单侧肾脏切除<br/>
                  19.肝叶切除<br/>
                  20.单耳失聪<br/>
                  21.微创冠状动脉搭桥手术<br/>
                  22.Ⅲ度房室传导阻滞 - 已放置心脏起搏器<br/>
                  23.于颈动脉进行血管成形术或内膜切除术<br/>
                  24.心包膜切除术<br/>
                  25.脑炎或脑膜炎<br/>
                  26.硬脑膜下血肿手术<br/>
                  27.严重阻塞性睡眠窒息症<br/>
                  28.因意外毁容而施行的面部整形手术<br/>
                  29.角膜移植<br/>
                  30.单眼失明<br/>
                  31.可逆性再生障碍性贫血<br/>
                  32.慢性肝功能衰竭<br/>
                  33.特定周围动脉疾病的血管介入治疗<br/>
                  34.脑室腹腔分流术<br/>
                  35.轻度面部烧伤<br/>
                  36.植入腔静脉过滤器<br/>
                  37.肾上腺切除术<br/>
                  38.早期象皮病<br/>
                  39.中度严重克雅氏病<br/>
                  40.中度严重脊髓灰质炎<br/>
                  41.中度进行性核上神经麻痹症<br/>
                  42.中度重症肌无力<br/>
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