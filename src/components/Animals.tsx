const Animals = () => {
    const allatok = ["kutya", "macska", "dominik", "kacsa", "kecske"];
    return (
        <div>
            <p>Elemek:</p>
            {allatok.map((x, idx) => <span>{x}{idx == allatok.length-1 ? " " : ", "}</span>)}
            <p>Index + elemek:</p>
            {allatok.map((x, idx) => <h3>{idx}, {x}</h3>)}
            <p>Hanyadik elem a listaban:</p>
            {allatok.map((x, idx, array) => <h3>{idx+1} / {array.length} {x}</h3>)}
        </div>
    )
}

export default Animals