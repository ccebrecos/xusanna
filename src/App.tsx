import './App.css'
import Banner from './components/2_banner'
import Confirm from './components/5_confirm'
import Header from './components/1_header'
import Navbar from './components/0_navbar'
import Roureda from './components/3_roureda'
import Schedule from './components/4_schedule'
import Detail from './components/6_detail'
import Footer from './components/7_footer'

function App() {

  return (
      <>
        <Navbar />
        <Header />
        <Banner />
        <div> FOTO GRAN</div>
        <Roureda />
        <Schedule />
        <Confirm />
        <Detail />
        <Footer />
      </>
  )
}

export default App
