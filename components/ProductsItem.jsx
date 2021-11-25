import MyButton from "./MyButton";
import ReactStars from "react-rating-stars-component";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


export default function ProductsItem({item, products}) {
  const dispatch = useDispatch();

  const addToCartHandler = (id, value, price) => {
    dispatch(addToCart({id, value, products, price}))
  }

  return (
    <div className="flex flex-col gap-2 items-center py-6 bg-white max-w-xs w-full rounded-md shadow-lg hover:scale-105 transition-all duration-300">
      <div className="h-56 px-4 relative">
        <img className=" object-scale-down	 h-full rounded-md" src={item.img} alt="product-img" />
        <div className="header-icon absolute top-8 right-6">
          <FavoriteIcon />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-primary">{item.name}</h3>
      <ReactStars
        className="order-2"
        count={5}
        value={item.rating}
        size={30}
        activeColor="#ffd700"
      />
      <div className="flex items-center gap-2">
        <p className="text-2xl text-secondary font-semibold">${item.price}</p>
        <div onClick={() => addToCartHandler(item.id, 1, item.price)} >
          <MyButton
            text="Add To Cart"/>
        </div>
      </div>
    </div>
  )
}
