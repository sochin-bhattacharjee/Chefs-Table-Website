import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'

function App() {

  return (
    <>
      {/* Header section */}
      <Header></Header>
      {/* Banner section */}
      <Banner></Banner>
      {/* Our Recipe section */}
      <OurRecipe></OurRecipe>
    </>
  )
}

export default App
