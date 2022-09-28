
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncExp } from './components/IncExp'
import { History } from './components/History'
import { NewTransaction } from './components/NewTransaction'
import { GlobalProvider } from './context/GlobalState'


function App() {

  return (
     <div>
      <GlobalProvider >

        <Header />

        <div className='container'>

        <Balance />
           
        <IncExp />

       <History />
       
       <NewTransaction />
       </div>
       
      </GlobalProvider>

        

    </div>
  )
}

export default App
