import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

//var que conterá o novo array
let newTweet = ''

export function Timeline() {

  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Deu certo",
    "Hello world"
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault() //impede o envio do formulario

    setTweets([newTweet, ...tweets])
    
  }


  return (
    <main className="timeline">
        <Header title="Home"/>
          
          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="http://github.com/rdg-404.png" alt="Rodrigo Paiva" />
              <textarea 
                id="tweet" 
                placeholder="What's happening?"
                onChange={(event) => {
                  newTweet = event.target.value ///onchange pega o valor atual digitado pelo user
                }}
                />
            </label>

            <button type='submit'>Tweet</button>
          </form>

        <Separator/>

        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
        })}
   
    </main>
  )
}

