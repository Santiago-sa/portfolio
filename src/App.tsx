import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";


function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
