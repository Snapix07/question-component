import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const SingleQuestion = ({id,title,info}) => {
    const [showInfo,setShowInfo]=useState(false)
  return (
    <article className="questions">
      <header>
        <h4>{title}</h4>

        <button
          type="button"
          className="question-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  )
}

export default SingleQuestion