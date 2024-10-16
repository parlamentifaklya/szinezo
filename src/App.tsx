import ColorGuesser from './components/ColorGuesser'
import Colors from './components/Colors'
import Coordinates from './components/Coordinates'
import Modal from './components/Modal'

const App = () => {
  let li = []
  for (let i = 0; i < 9; i++) {
    li.push(i)
  }

  return (
    <>
    <Coordinates/>
      {/* <ColorGuesser/>
      <Modal />
      <div className='container'>
        {li.map(idx => <Colors key={idx}/>)}
      </div> */}
    </>
  )
}

export default App