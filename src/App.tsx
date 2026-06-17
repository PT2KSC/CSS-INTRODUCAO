import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Comece agora.</h1>
          <p>
            Edite<code>src/App.tsx</code>e salve para testar<code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Contagem de clicks {count}
        </button>
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App