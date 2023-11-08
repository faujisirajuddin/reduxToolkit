import Image from 'next/image'
import styles from './page.module.css'
import Product from "./components/Product/Products"


export default function Home() {
  return (
    <div>
      <h2 className={styles.heading}>Welcome to redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Product />
      </section>
    </div>
  )
}
