import React from 'react'
import CartoonCategories from '../../../components/CartoonCategories'
import { getAllCartoonAction} from '@/action/cartoonAction'

const page = async  () => {
  const data = await getAllCartoonAction();
  const dataCartoon = data.payload;
  return (
    <div>
       <CartoonCategories dataCartoon = {dataCartoon}/>
    </div>
  )
}

export default page
