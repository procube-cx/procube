import './App.css';
import Landing1 from './component/hero/Landing1';
import Landing2 from './component/hero/Landing2';
import Landing3 from './component/hero/Landing3';
import Landing4 from './component/hero/Landing4';
import Landing5 from './component/hero/Landing5';
import Lanidng7 from './component/hero/Landing7';
import Landing6 from './component/hero/Landing6';
import Landing8 from './component/hero/Landing8';
import Landing9 from './component/hero/Landing9';
import Footer from './component/hero/Footer';


function App() {
  return (
    <div className='bg-black text-white'>
      <div className='relative bg-black z-50 '>
      <Landing1 />
      {/* <Landing2 /> */}
      <Landing3 />
      <Landing4 />
      <Landing5 />
      <Lanidng7 />
      <Landing6 />
      <Landing8 />
      <Landing9 />
      </div>
      <div className='min-h-screen relative'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
