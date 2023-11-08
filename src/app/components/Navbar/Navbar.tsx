"use client"
import Link from "next/link"
import style from "./navbar.module.css"
import { useSelector } from "react-redux"

const Navbar = () => {

    const item = useSelector((state: any) => state.cart)

    return (
        <div className={style.navbar}>
            <span className="logo"> REDUX STORE</span>
            <div>
                <Link className={style.navLink} href="/">Home</Link>
                <Link className={style.navLink} href="/cart">Cart</Link>
                <span className={style.cartCount}>Cart item : {item.length} </span>
            </div>
        </div>
    )
}

export default Navbar