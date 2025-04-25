import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions}) => {
  return (
    <article className='container'>
        <h1>Questions</h1>
        {questions.map((question)=>{
            return <SingleQuestion {...question} key={question.id}/>
        })}
    </article>
  )
}

export default Questions