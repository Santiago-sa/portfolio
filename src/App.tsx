import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </Layout>
  );
}

export default App;
