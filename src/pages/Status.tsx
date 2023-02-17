import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const Answers = [
  'Concordo...',
  'Olha, faz sentido',
  'Gostei do seu perfil!'
]


export function Status() {
  return (
    <main className="status">
        <Header title="Tweet"/>
          
          <form className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="http://github.com/rdg-404.png" alt="Rodrigo Paiva" />
              <textarea id="tweet" placeholder="Tweet your answer"/>
            </label>

            <button type='submit'>Answer</button>
          </form>

        <Separator/>

        {Answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })}
   
    </main>
  )
}