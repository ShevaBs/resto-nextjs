import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

export default function CartListItem() {
  return (
    <li className="flex items-center p-5 border-b border-gray-300 border-opacity-30 gap-3">
      <div className="ring-1 ring-gray-300 ring-opacity-30 shadow-md drop-shadow-md rounded-full p-2 text-gray-400 hover:bg-gray-200 hover:text-red-500 hover:scale-105 transition-all">
        <CloseIcon fontSize="medium"/>
      </div>
      <div className="max-w-[200px] min-w-[100px] rounded-lg overflow-hidden ">
        <img className="object-contain" src="./images/menu-1.jpg" alt="" />
      </div>
      <p className="text-3xl font-bold text-primary flex-1 text-left">Pizza</p>
      <div className="flex gap-2 items-center">
        <div className="counter-btn">
          <AddIcon />
        </div>
        <span className="text-2xl text-bold">0</span>
        <div className="counter-btn">
          <RemoveIcon />
        </div>
        <div className="text-secondary font-semibold text-xl drop-shadow-md ml-5">
        $19.66
      </div>
      </div>
      
    </li>
  )
}
