import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

const Tweets = [
  "Meu primeiro tweet",
  "Deu certo",
  "Hello world"
]


export function Timeline() {
  return (
    <main className="timeline">
        <Header title="Home"/>
          
          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="http://github.com/rdg-404.png" alt="Rodrigo Paiva" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type='submit'>Tweet</button>
          </form>

        <Separator/>

        {Tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
        })}
   
    </main>
  )
}

