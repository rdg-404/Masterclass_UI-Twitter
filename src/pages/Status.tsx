import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'


export function Status() {

  const [newAnswer, setNewAnswer] = useState('') //para limpar a textarea
  const [answers, setAnswers] = useState([
    'Nice Job!!!',
    'LOL',
    "You're sure"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault() //impede o envio do formulario

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
    
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (

    <main className="status">
        <Header title="Tweet"/>
          <Tweet content="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dignissimos maxime quae, id tempora et cum unde obcaecati commodi neque distinctio nisi blanditiis assumenda optio nulla ea excepturi, similique nemo."/>

          <Separator/>

          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="http://github.com/rdg-404.png" alt="Rodrigo Paiva" />
              <textarea 
                id="tweet"
                placeholder="Tweet your answer"
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                 setNewAnswer(event.target.value)
                }}
                />
            </label>



            <button type='submit'> <PaperPlaneRight/> <span> Answer </span></button>
          </form>

    

        {answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })}
   
    </main>
  )
}