export type DessertCardProp = {
    image: {
        thumbnail?: string,
        mobile?: string,
        tablet?: string,
        desktop: string
    },
    name: string,
    category: string,
    price: number
}

const DessertCard = (props: DessertCardProp) => {
  return (
    <div>
        <img src={props.image.desktop} />
        <h2>{props.name}</h2>
        <h3>{props.category}</h3>
        <h4>${props.price}</h4>
    </div>
  )
}

export default DessertCard