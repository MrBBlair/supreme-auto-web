import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { ServiceArea } from './components/sections/ServiceArea';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light selection:bg-brand-red selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceArea />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
