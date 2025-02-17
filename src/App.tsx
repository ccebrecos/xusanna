import './App.css';
import Banner from './components/2_banner';
import Confirm from './components/5_confirm';
import Header from './components/1_header';
import Navbar from './components/0_navbar';
import Roureda from './components/3_roureda';
import Schedule from './components/4_schedule';
import Detail from './components/6_detail';
import Footer from './components/7_footer';

import mainImage from './assets/img/header.png';
import Signature from './components/8_Signature';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <img
        src={mainImage}
        alt="anna i xus mirant-se amb amor"
        className="w-full h-auto object-cover min-h-80 "
      />
      <Roureda />
      <Schedule />
      <Confirm />
      <Detail />
      <Footer />
      <Signature />
    </>
  );
}

export default App;
