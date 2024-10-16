import { useState } from "react"

const ColorGuesser = () => {
    const [red, SetRed] = useState(0);
    const [green, SetGreen] = useState(0);
    const [blue, SetBlue] = useState(0);

    const [puzzleRed] = useState(Math.floor(Math.random() * 256));
    const [puzzleGreen] = useState(Math.floor(Math.random() * 256));
    const [puzzleBlue] = useState(Math.floor(Math.random() * 256));

    const [showPuzzle, SetShowPuzzle] = useState(false);
  return (
    <div>
        <div id="colorContainer">
            <div style={{
                width: '100px',
                aspectRatio: 1,
                background: `rgb(${red}, ${green}, ${blue})`
            }}>
            </div>

            <div style={{
                width: '100px',
                aspectRatio: 1,
                background: `rgb(${puzzleRed}, ${puzzleGreen}, ${puzzleBlue})`
            }}>
            </div>
        </div>


        <label htmlFor="red">R - {red}</label><br />
        <input value={red} onChange={(e) => SetRed(Number(e.target.value))} type="range" id="red" min={0} max={255} step={1}/>
        <br />
        <label htmlFor="green">G - {green}</label><br />
        <input value={green} onChange={(e) => SetGreen(Number(e.target.value))} type="range" id="green" min={0} max={255} step={1}/>
        <br />
        <label htmlFor="blue">B - {blue}</label><br />
        <input value={blue} onChange={(e) => SetBlue(Number(e.target.value))} type="range" id="blue" min={0} max={255} step={1}/><br />

        <button onClick={showPuzzle ? () => SetShowPuzzle(false) : () => SetShowPuzzle(true)}>Guess</button>
        {showPuzzle ? <h2>rgb( {puzzleRed}, {puzzleGreen}, {puzzleBlue} )</h2>: <h2>rgb( ?, ?, ? )</h2>}
    </div>
  )
}

export default ColorGuesser