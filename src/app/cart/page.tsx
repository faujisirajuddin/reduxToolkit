"use client"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../../redux/cartSlice"
import styles from "./cart.module.css"

const cart = () => {

    const product = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()

    const handleremove = (productId: number) => {
        dispatch(remove(productId))
    }

    return (
        <>
            <h1>cart</h1>
            <div className="cart">
                {
                    product.map((product: any) => (
                        <div key={product.id} className={styles.cartCard}>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={()=>handleremove(product.id)} className="btn">Remove</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default cart