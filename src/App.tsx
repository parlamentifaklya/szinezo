// import ColorGuesser from './components/ColorGuesser'
// import Colors from './components/Colors'
// import Coordinates from './components/Coordinates'
// import Modal from './components/Modal'
// import Animals from "./components/Animals"
import { useEffect, useState } from "react"
import DessertCard from "./components/DessertCard"
import { DessertCardProp } from "./components/DessertCard"


const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([])
  useEffect(() => {
    fetch("data.json").then(res => res.json()).then(fetchDessert => setDesserts(fetchDessert))
  }, [])

  return (
    <>
      <section className="desserts">
        {desserts.map(dessert => <DessertCard {...dessert}/>)}
      </section>
    </>
  )
}

export default App