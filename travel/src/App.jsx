import './App.css'
import Destination from './components/Destinations/Destination'
import Footer from './components/Footer/Footer'
import FutureTrip from './components/FutureTrip/FutureTrip'
import Header from './components/Header/Header'
import Hotels from './components/Hotels/Hotels'
import Nav from './components/Nav/Nav'
import Testimoanial from './components/Testimonials/Testimonial'

function App() {
  

  return (
    <>
   <div className="Header_Container">
    <Nav></Nav>
    <Header/>
    </div>
    <Destination></Destination>
    <Hotels></Hotels>
    <Testimoanial></Testimoanial>
    <FutureTrip></FutureTrip>
    <Footer></Footer>
    </>
  )
}

export default App
