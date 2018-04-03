import React from 'react'
import data from '../reducers/data.json'
import industryCategory from '../reducers/industryCategory.json'
import style from './asset/css/index.less'
const OutPut = ({ isShow, forPerson, step, title, btn, ind, onClickBtn, onClickInd, onClickJob }) => {
  if (!isShow) {
    return null
  } 

  let listShows = null;
  if (step === 0) {
    let list = [industryCategory[0].industory];
    const len = industryCategory.length;
    for (let i = 1; i < len; i++) {
      if (industryCategory[i].industory !== industryCategory[i - 1].industory) {
          list.push(industryCategory[i].industory)
        }
    }
    listShows = list.map((ind, index) => {
      return (<li key={index} onClick={e => onClickInd(ind)}>{ind}</li>)
    })

  } else {
    let list = [];
    industryCategory.map((job, index) => {
      if (job.industory === ind) {
        list.push(job);
      }
    })

    listShows = list.map((job, index) => {
      if (job.life !== '拒保') {
        return (
          <li key={index} onClick={e => onClickJob(job.work, job.life, job.accident, job.hospital, forPerson)}>
            <span>{job.work}</span>
          </li>
        )
      }
    })
  }
  
  return (
    <div className={style.occupation}>
      <div className={style.o_head}>
        <h2>请选择{title}</h2>
        <span dangerouslySetInnerHTML={{__html: btn}} onClick={e => onClickBtn(step)}></span>
      </div>
      <div className={style.o_body}>
        <ol>
          {listShows}
        </ol>
      </div>

    </div>
  )
}

export default OutPut