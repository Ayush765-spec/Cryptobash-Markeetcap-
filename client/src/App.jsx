<<<<<<< HEAD
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
=======

import {Navbar,Welcome,Footer,Services,Transactions} from './components'


const App=()=>{
  return(
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <div className="py-20">
        <Services />
      </div>
      <div className="py-20">
        <Transactions />
      </div>
      <Footer />
    </div>
  )
}
export default App
>>>>>>> 4c32b1d32a34cb177f494169cdc6f553004a39ff
