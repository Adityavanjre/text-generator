import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h2>Get some text Generated</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph: </label>
        <input
          type="number"
          max={8}
          min={1}
          name="amount"
          id="amount"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((items) => {
          return <p key={nanoid()}>{items}</p>
        })}
      </article>
    </section>
  )
}
export default App
