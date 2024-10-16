import { useState } from 'react'

const Modal = () => {
    const [isOpen, SetIsOpen] = useState(false)
    let Switch = () => {
        SetIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? <div className='modal'><button onClick={Switch}>Bezár</button></div> : <button onClick={Switch}>Kinyit</button>}
    </>
  )
}

export default Modal