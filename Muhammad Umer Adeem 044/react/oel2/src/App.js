import './App.css';
import Component from './components/components';
import CoverPic from './components/coverpic';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
  return (
    
    <div className="App">
      <Navigation />
      <CoverPic />
      <br/><br/>
      <div className='App-header'>
        <Component />
      </div>
      
      <Footer />
      
    </div>
  );
}

export default App;
