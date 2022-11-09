// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
  const item = props.item;
  const updateCart = props.updateCart;
  const cart = props.cart;

  const handleClick = () => {
    updateCart([...cart, item]);
  }

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.image}/>
      <p>{item.description}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}
