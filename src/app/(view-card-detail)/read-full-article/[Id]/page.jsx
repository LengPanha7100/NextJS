import { getBookByIdAction } from '@/action/bookAction'
import React from 'react'
import ReadFullBook from '@/components/ReadFullBook';
const page = async ({params}) => {
  const {Id} = await params;
  const bookId = await getBookByIdAction(Id);
  const dataBook = bookId.payload;
  return (
      <div>
         <ReadFullBook dataBook={dataBook} />
      </div>
  )
}

export default page
