"use client"
import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { add } from "../../../redux/cartSlice"
import styles from "./product.module.css"
import "../../globals.css"

const Product = () => {

    const dispatch = useDispatch()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            console.log(data)
            setProduct(data)
        }
        fetchProducts()
    }, [])

    const handleAdd = (product: any) => {
        dispatch(add(product))
    }

    return (
        <div className={styles.productsWrapper}>
            {
                product.map((product: any) => (
                    <div className={styles.card} key={product.id}>
                        <img src={product.image} alt="Prouct Image" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
                    </div>
                ))
            }

        </div>
    )
}
export default Product