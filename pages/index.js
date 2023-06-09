import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Left from './Components/Left'
import Center from './Components/Center'
import Right from './Components/Right'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [cartProducts,setCartProducts] = useState([])
  const [items,setItems] = useState([])
  const [filter,setFilter] = useState(items)
  
  return (
    <>
      <Head>
        <title>Material Cartz | Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <div className={styles.main}>
      <Left setItems = {setItems} items={items} setFilter={setFilter}/>
      <Center setCartProducts={setCartProducts} cartProducts={cartProducts} items={items} filter={filter}/>
      <Right cartProducts={cartProducts} setCartProducts={setCartProducts}/>
      </div>
    </>
  )
}
