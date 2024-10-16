import { useState } from "react"

type Marker = {
    xPos: number,
    yPos: number
}

const Coordinates = () => {
    const [xPos, SetxPos] = useState(0)
    const [yPos, SetYpos] = useState(0)

    const [markers, SetMarkers] = useState<Marker[]>([]);
    const pinMarker = () => {
        SetMarkers([...markers, {xPos: xPos, yPos: yPos}]);
        SetxPos(0);
        SetYpos(0);
    }

  return (
    <div>
        <div className="map">
            {markers.map(marker => <div className="marker" style={{left: marker.xPos, bottom: marker.yPos}}></div>)}

            <div className="marker" style={{left: xPos, bottom: yPos}}>

            </div>
        </div>
        <label htmlFor="X">X: </label>
        <input value={xPos} onChange={(e) => SetxPos(Number(e.target.value))} type="range" id="X" max={188}/><br />
        <label htmlFor="Y">Y: </label>
        <input value={yPos} onChange={(e) => SetYpos(Number(e.target.value))} type="range" id="Y" max={189}/><br />
        <button onClick={pinMarker}>Pin Marker</button>
    </div>
  )
}

export default Coordinates