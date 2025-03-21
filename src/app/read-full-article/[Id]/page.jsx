import { getBookByIdAction } from '@/action/bookServer'
import React from 'react'
import ReadFullBook from '@/components/ReadFullBook';
const page = async ({params}) => {
  const {id} = params;
  const bookId = await getBookByIdAction(id);
  console.log("panha",bookId);
  return (
      <div>
         <ReadFullBook/>
      </div>
  )
}

export default page
