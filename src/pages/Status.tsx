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



          <Tweet content="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dignissimos maxime quae, id tempora et cum unde obcaecati commodi neque distinctio nisi blanditiis assumenda optio nulla ea excepturi, similique nemo."/>


          <Separator/>

          <form className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="http://github.com/rdg-404.png" alt="Rodrigo Paiva" />
              <textarea id="tweet" placeholder="Tweet your answer"/>
            </label>



            <button type='submit'>Answer</button>
          </form>

    

        {Answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })}
   
    </main>
  )
}