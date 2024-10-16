import { useState } from 'react'

const Colors = () => {
    const colors = ['grey', 'red', 'black', 'green', 'orange']
    const [idx, Setidx] = useState(0)

    const Toggle = () => {
        if (idx < colors.length - 1) {
            Setidx(idx + 1)
        } else {
            Setidx(0)
        }
    }
  return (
    <div>
        <button type="button" onClick={Toggle} style={{background: colors[idx]}} className='colorbtn'></button>
    </div>
  )
}

export default Colors