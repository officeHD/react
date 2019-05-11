import React from 'react'
import style from './asset/css/index.less'

const UploadImg = ({ appntData, insuredsData, imageuploaded }) => (
  <div className={style.idCard}>
    <div className={style.title}>尊敬的客户，您购买本产品累计总保费已超过20万，按照监管要求，需要提供投被保人身份证正反面照片。上传验证过程需要5~7秒，请耐心等待</div>
    <div className={style.idCardContent}>
      <div className={style.idCardImg}>

        <div className={style.uploadBox}>
          {insuredsData.insuIdFrontImg ? <img src={`${imgctx}${insuredsData.insuIdFrontImg}`} /> : <span className={`iconfont icon-jia  ${style.iconPlus}`}></span>}
          <input type="file" accept="image/*" onChange={e => imageuploaded(e, "font", 'insure')} capture="camera" />
        </div>
        <p>
          被保人{insuredsData.insuName}身份证正面照片
        </p>
      </div>
      <div className={style.idCardImg}>

        <div className={style.uploadBox}>
          {insuredsData.insuIdBackImg ?
            <img src={`${imgctx}${insuredsData.insuIdBackImg}`} /> : <span className={`iconfont icon-jia  ${style.iconPlus}`}></span>
          }

       
          <input type="file" accept="image/*" onChange={e => imageuploaded(e, "back", 'insure')} capture="camera" />
        </div>

        <p>
          被保人{insuredsData.insuName}身份证反面照片
            </p>
      </div>
    </div>
    {insuredsData.relationsWithCustomer !== "00" ?
      <div className={style.idCardContent}>
        <div className={style.idCardImg}>

          <div className={style.uploadBox}>
            <input type="file" accept="image/*" onChange={e => imageuploaded(e, "font", '')} capture="camera" />
            {appntData.idFrontImg ?
              <img src={`${imgctx}${appntData.idFrontImg}`} /> : <span className={`iconfont icon-jia ${style.iconPlus}`}></span>}
          </div>

          <p>投保人{appntData.name}身份证正面照片 </p>
        </div>
        <div className={style.idCardImg}>

          <div className={style.uploadBox}>
            <input type="file" accept="image/*" onChange={e => imageuploaded(e, "back", '')} capture="camera" />
            {appntData.idBackImg ?
              <img src={`${imgctx}${appntData.idBackImg}`} /> : <span className={`iconfont icon-jia  ${style.iconPlus}`}></span>}

          </div>
          <p>投保人{appntData.name}身份证反面照片 </p>

        </div>
      </div> : ""
    }
  </div>
)

export default UploadImg
