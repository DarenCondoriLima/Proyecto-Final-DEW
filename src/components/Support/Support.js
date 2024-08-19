import React from 'react'
import './support.css'
import { QuestionsAnswersSupport } from './QuestionsAnswersSupport'
import { FormSupport } from './FormSupport'

export const Support = () => {
  return (
    <main>
        <QuestionsAnswersSupport/>
        <hr id="lineMid"></hr>
        <FormSupport/>
    </main>
  )
}
