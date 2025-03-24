import React from 'react'
import CartoonCategories from '../../../components/CartoonCategories'
import { getAllCartoonAction} from '@/action/cartoonAction'

const page = async  () => {
  const dataCartoon = await getAllCartoonAction();
  return (
    <div>
       <CartoonCategories dataCartoon = {dataCartoon}/>
    </div>
  )
}

export default page
