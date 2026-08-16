import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/sections/Hero'
import { About } from './sections/About'

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <About />
      </main>
    </Layout>
  )
}

export default App