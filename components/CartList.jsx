import CartListItem from "./CartListItem";


export default function CartList() {
  return (
    <div className="container-wrapper">
      <ul className="ring-1 ring-gray-200 ring-opacity-20 rounded-lg max-w-3xl mx-auto shadow-xl drop-shadow-sm my-8 overflow-hidden">
        <CartListItem/>
      </ul>
    </div>
  )
}
