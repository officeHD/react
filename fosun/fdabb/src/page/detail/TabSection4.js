import React from 'react'

import style from './index.less'
const TabSection4 = ({ problem }) => (
    <div>
        <ul className={style.questionUl}>
            {problem.map((item, index) => <li key={index}>
                <p className={style.question}>{item.question}</p>
                <p className={style.answer}> {item.answer}</p>
            </li>)}
        </ul>
    </div>
)
export default TabSection4