import React from 'react'
import style from './asset/css/index.less'

const UploadImg = ({ fontimg, backimg, imageuploaded }) => (
  <div className={style.idCard}>
    <label>证件影像</label>
    <div className={style.idCardContent}>
      <div className={style.idCardImg}>
        <img src={fontimg} />
        <input type="file" accept="image/*" onChange={e => imageuploaded(e, "font")} capture="camera" />
      </div>
      <div className={style.idCardImg}>
        <img src={backimg} />
        <input type="file" accept="image/*" onChange={e => imageuploaded(e, "back")} capture="camera" />
      </div>
    </div>
  </div>
)

export default UploadImg
