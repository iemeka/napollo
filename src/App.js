import About from './about/About';
import './App.css';
import Head from './head/Head'
import Intro from './intro/Intro';
import Hot from './hot/Hot';
import Expansion from './expansion/Expansion';
import Listen from './listen/Listen';
import Plan from './plan/Plan';
import Testimonial from './testimonials/Testimonial';
import Download from './download/Download';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="container">
      <Head />
      <Intro />
      <About />
      <Hot />
      <Expansion />
      <Listen />
      <Plan />
      <Testimonial />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
