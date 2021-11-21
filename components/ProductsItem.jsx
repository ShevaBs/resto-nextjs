import MyButton from "./MyButton";
import ReactStars from "react-rating-stars-component";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function ProductsItem({title, img, price, rating}) {
  return (
    <div className="flex flex-col gap-2 items-center py-6 bg-white max-w-xs w-full rounded-md shadow-lg hover:scale-105 transition-all duration-300">
      <div className="h-56 px-4 relative">
        <img className=" object-cover h-full rounded-md" src={img} alt="product-img" />
        <div className="header-icon absolute top-2 right-6">
          <FavoriteIcon />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <ReactStars
        className="order-2"
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
