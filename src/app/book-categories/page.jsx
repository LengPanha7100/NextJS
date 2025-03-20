import React from 'react'
import BookCategories from '../../components/BookCategories'
import { getAllBook } from '@/service/book.service'

const page = () => {
  const bookData = getAllBook();
  console.log(bookData);
  return (
    <div>
      <BookCategories/>
    </div>
  )
}

export default page
