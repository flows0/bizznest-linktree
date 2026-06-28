import { useState } from 'react'
import Header from './components/layouts/Header'
import CardList from './modules/analytics/components/CardList'
import Footer from './components/layouts/Footer'

function App() {
  const [showStats, setShowStats] = useState(false)

  return (
    <>
      <meta
        name="description"
        content="A modern Linktree with a little JS personality."
      />
      <Header
        showStats={showStats}
        onToggle={() => setShowStats((state) => !state)}
      />
      <main>
        <CardList showStats={showStats} />
      </main>
      <Footer />
    </>
  )
}

export default App
