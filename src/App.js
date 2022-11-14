import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <section className='content_list'>
        <Card />
      </section>
      <Footer />
    </div>
  );
}

export default App;