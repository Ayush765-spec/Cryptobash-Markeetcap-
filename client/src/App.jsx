
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