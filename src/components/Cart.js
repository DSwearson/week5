import {useSelector} from "react-redux";
import {selectCart} from "../features/cart/cartSlice";
import {useNavigate} from "react-router-dom";

export default function Cart(){
    const cart = useSelector(selectCart); //matches value from store
    const navigate = useNavigate()



    return <div>
        <button onClick={()=>navigate("/")}>Home</button>
        <h1>hello</h1>
        {
            cart.map(c=> {
                return <div>{c.title} -  {c.price}</div>
            })
        }
    </div>
}