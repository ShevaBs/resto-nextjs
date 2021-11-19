import MyButton from "./MyButton";
import ReactStars from "react-rating-stars-component";

export default function ProductsItem({title, img, price, rating}) {
  return (
    <div className="flex flex-col gap-2 items-center p-6 bg-white max-w-xs w-full rounded-md shadow-md hover:scale-105 transition-all duration-300">
      <img src={img} alt="product-img" />
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <ReactStars
        count={5}
        value={rating}
        size={30}
        activeColor="#ffd700"
      />
      <div className="flex items-center gap-2">
        <p className="text-2xl text-secondary font-semibold">${price}</p>
        <MyButton text="Add To Cart"/>
      </div>
    </div>
  )
}
