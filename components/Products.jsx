import MyButton from "./MyButton";
import ProductsItem from "./ProductsItem";

export default function Products({items}) {
  return (
    <div className="container-wrapper">
      <div className="grid grid-cols-4 lg:grid-cols-2 md:flex flex-wrap gap-5 place-items-center justify-center py-10">
        {
          items.map(item => (
            <ProductsItem
              key={item.id}
              item={item}
              products={items} 
            />
          ))
        }
      </div>
    </div>
  )
}
